import logo from "../../assets/tool-logo.png";

import "./options.css";

const Options = () => {
  return (
    <div class="app">
      <header class="header"></header>
      <img src={logo} class="logo" alt="logo" />
      <p class="font-bold">
          这里是 options 页面
      </p>
    </div>
  );
};

export default Options;
