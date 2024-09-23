import Styled from "./index.module.css";
import arrow from "../../../assets/images/arrow.png";
function Language({ name }) {
  return (
    <div className={Styled["language"]}>
      <a href="./#" className={Styled["language__text"]}>
        RU
      </a>
      <img src={arrow} alt="arrow" />
    </div>
  );
}

export default Language;
