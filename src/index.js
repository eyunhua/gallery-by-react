import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
    // APP为组件，name为传递给组件的值，组件中通过props.name来取值
    <App name="eyunhua" />, // 组件（元素）
    document.getElementById('root') // 挂载dom元素
);
