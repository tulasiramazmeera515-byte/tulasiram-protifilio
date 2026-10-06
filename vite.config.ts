import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function imageUploadPlugin(): Plugin {
  return {
    name: 'image-upload-handler',
    configureServer(server) {
      server.middlewares.use('/api/upload-photo', (req, res) => {
        if (req.method === 'POST') {
          const chunks: Buffer[] = [];
          req.on('data', (chunk) => chunks.push(chunk));
          req.on('end', () => {
            try {
              const body = Buffer.concat(chunks);
              // Handle base64 JSON payload or raw image
              let imageBuffer: Buffer;
              const bodyStr = body.toString('utf8');
              if (bodyStr.startsWith('{')) {
                const json = JSON.parse(bodyStr);
                const base64Data = json.image.replace(/^data:image\/\w+;base64,/, '');
                imageBuffer = Buffer.from(base64Data, 'base64');
              } else {
                imageBuffer = body;
              }

              const targets = [
                path.resolve(__dirname, 'public/about-profile.jpg'),
                path.resolve(__dirname, 'public/profile.jpg'),
                path.resolve(__dirname, 'public/protiflio.jpeg'),
                path.resolve(__dirname, 'src/assets/about-profile.jpg'),
                path.resolve(__dirname, 'src/assets/profile.jpg'),
              ];

              for (const target of targets) {
                const dir = path.dirname(target);
                if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
                fs.writeFileSync(target, imageBuffer);
              }

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: 'Photo saved successfully' }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), imageUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
