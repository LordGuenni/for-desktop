import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  define: {
    __BUILD_SERVER_URL__: JSON.stringify(
      process.env.BUILD_SERVER_URL || "https://beta.revolt.chat"
    ),
  },
});
