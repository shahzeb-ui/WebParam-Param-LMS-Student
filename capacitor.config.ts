import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'next-capacitor',
  bundledWebRuntime: false,
  webDir: 'out',
  server: {
    url: 'http://192.168.1.70:3000',
    cleartext: true
  }
  
};

export default config;
