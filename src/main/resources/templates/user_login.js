import { createRoot } from 'react-dom/client';

// 清除现有的 HTML 内容
document.body.innerHTML = '<div id="react-component"></div>';

// 渲染的 React 组件

'use strict';

    let Work = ()=> {
        return (<div id='react-component'></div>);
    }

const domContainer = document.getElementById('root');
ReactDOM.render(Work, domContainer);