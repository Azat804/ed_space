import Styled from "./index.module.css";
import advantageItemImage from "../../../assets/images/advantageItemImage.png";
function AdvantageItem({ name }) {
  return (
    <div className={Styled["advantage-list__item"]}>
      <span className={Styled["advantage-list__text"]}>{name}</span>
      <img
        src={advantageItemImage}
        className={Styled["advantage-list__image"]}
        alt="advantageItemImage"
      />
    </div>
  );
}

export default AdvantageItem;
