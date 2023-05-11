import { createRoot } from 'react-dom/client';

// 清除现有的 HTML 内容
document.body.innerHTML = '<div id="register"></div>';

// 渲染的 React 组件
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);

'use strict';

let Work = ()=> {
    return (<div id='register'></div>)
}

const domContainer = document.getElementById('root2');
ReactDOM.render(Work, domContainer);