import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import fa_IR from 'antd/locale/fa_IR';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider
      locale={fa_IR}
      direction="rtl"
      theme={{
        token: {
          colorPrimary: '#14b8a6',
          colorPrimaryHover: '#0d9488',
          colorPrimaryActive: '#0f766e',
          borderRadius: 12,
          fontFamily: "'Vazirmatn', 'Tahoma', Arial, sans-serif",
        },
        components: {
          Button: {
            borderRadius: 24,
          },
          Card: {
            borderRadius: 16,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);