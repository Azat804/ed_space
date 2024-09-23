import Styled from "./index.module.css";
import vkIcon from "../../../assets/images/vk.png";
import telegramIcon from "../../../assets/images/telegram.png";
function Footer() {
  return (
    <footer className={Styled["footer"]}>
      <div className={"container " + Styled["footer__wrapper"]}>
        <span className={Styled["footer__text"]}>
          2022 Ed Space. Все права защищены
        </span>
        <div className={Styled["footer__images"]}>
          <img src={vkIcon} className={Styled["footer__image"]} alt="vkIcon" />
          <img
            src={telegramIcon}
            className={Styled["footer__image"]}
            alt="telegramIcon"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
