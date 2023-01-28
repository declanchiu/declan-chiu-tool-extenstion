import { render } from 'solid-js/web';
import ZhihuDarkBtn from './components/DarkBtn';

const root = document.createElement("div");
root.id = "extension-content-zhihu-btn";
document.body.append(root);

render(ZhihuDarkBtn, root);