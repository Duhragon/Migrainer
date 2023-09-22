import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // Set the port to match your backend server's port
    // port: 8800, // Set the port to match your backend server's port
  },
  plugins: [react()],
});