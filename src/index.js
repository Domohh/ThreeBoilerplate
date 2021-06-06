import Main from "./app/main";
import "../style.css";

const init = () => {
  (() =>
    new Main({
      dom: document.getElementById("container"),
    }))();
};

init();
