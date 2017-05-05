import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// 定义user对象
const user = {
  firstName: 'e',
  lastName: 'yunhua',
  img: 'image/1.png'
};
// 格式化姓名
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
// 问候
// 可以在if和for循环中使用jsx
function greeting(user) {
    if (user) {
        return <h1>hello,{formatName(user)}!</h1>;
    } else {
        return <h1>hello, world!</h1>;
    }
}
// 使用jsx指定属性的两种方式，双引号（用于字符串值）或花括号（用于表达式值）
// const nameStr = <span data-id="123">name:</span>;
// const img = <img src={user.img} />;
// React.createElement()会创建一个react-dom元素，但是内容不能使用表达式，会被看为字符串进行解析
const newDate = React.createElement(
    'h3',
    {className: 'red'},
    '今天是星期四'
);
// 可在jsx中使用{}进行一些js运算
const newDate1 = (
    <h3 className="red">
        {/* 在花括号中使用js运算，注释需要写在花括号中 */}
        今年是{ new Date().getFullYear() }
    </h3>
);
// React DOM将元素及其子元素与上一个元素进行比较，并且仅应用DOM将更新所需的DOM更新到所需状态
function tick() {
    const element = (
        <div>
            <h1>Hello, time!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('time-wrap')
    );
}
setInterval(tick, 1000);

// 组件
function Test(prop) {
  return <button>{prop.title}</button>;
}

class App extends Component {
  render() {
    return ( // 将html元素用()包起来，是为了防止内部换行自动插入分号的问题
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {greeting(user)}
          <h2>Welcome to React {this.props.name}</h2>
          {newDate1}{newDate}
        </div>
        <Test title="我是第一条"></Test>
        <Test title="我是第二条"></Test>
        <Test title="我是第三条"></Test>
        <div id="time-wrap"></div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
