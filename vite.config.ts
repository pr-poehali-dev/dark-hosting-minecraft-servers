
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    // Дополнительные настройки для корректной работы WebSocket в средах с проксированием
    hmr: {
      // Отключаем overlay ошибок, чтобы они не мешали работе
      overlay: false,
      // Настройка для корректной работы через проксированное соединение
      clientPort: 443,
      // Используем защищенное соединение
      protocol: 'wss'
    },
    // Разрешаем подключения со всех хостов
    allowedHosts: true
  },
});
