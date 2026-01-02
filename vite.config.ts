import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";

const useCloudflare = process.env.USE_CLOUDFLARE === "1";

export default defineConfig({
  plugins: [
    ...mochaPlugins(process.env as any),
    react(),
    ...(useCloudflare ? [cloudflare()] : []),
  ],
  server: { allowedHosts: true },
  build: { chunkSizeWarningLimit: 5000 },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
