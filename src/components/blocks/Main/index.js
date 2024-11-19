import Styled from "./index.module.css";
import Button from "../../ui/Button";
import mainImage from "../../../assets/images/ed_space_main.png";
import mainCircle from "../../../assets/images/main_circle.png";
function Main({ openModal }) {
  return (
    <main className={Styled["main"]}>
      <div className={"container " + Styled["main__wrapper"]}>
        <div className={Styled["main-inner"]}>
          <h1 className={Styled["main-inner__title"]}>
            Ed Space Ваши знания и экспертность обретут здесь форму
          </h1>
          <p className={Styled["main-inner__description"]}>
            Мощный инструмент для организации обучения. Ваши ученики будут в
            восторге!
          </p>
          <Button name="Попробовать бесплатно" onClick={openModal} />
        </div>
        <img src={mainImage} className={Styled["main__image"]} alt="" />
        <img src={mainCircle} className={Styled["main__circle"]} alt="" />
      </div>
    </main>
  );
}

export default Main;
