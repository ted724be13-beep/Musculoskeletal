import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    // 這段代碼負責把 Vercel 後台的環境變數傳遞給前端代碼
    __firebase_config: JSON.stringify(process.env.__firebase_config || '{}'),
    __app_id: JSON.stringify(process.env.__app_id || '"default-app"')
  }
})
