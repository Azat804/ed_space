import Styled from "./index.module.css";

function Navigation({ name }) {
  return (
    <a href="./#" className={Styled["header__navigation-link"]}>
      {name}
    </a>
  );
}

export default Navigation;
