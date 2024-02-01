import { defineConfig } from 'vite'
import React from 'react';
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [React(), VitePWA()],})
