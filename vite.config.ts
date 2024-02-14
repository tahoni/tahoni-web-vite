import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@forward "bootstrap/scss/bootstrap.scss";@forward "bootstrap/scss/bootstrap.scss";',
            },
        },
    },
})
