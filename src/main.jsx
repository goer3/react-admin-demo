import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import 'misans/lib/misans-400-regular.min.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
);
