import Styled from "./index.module.css";
function AdvantageDescrItem({ item, classDescription, classTitle }) {
  return (
    <div
      className={
        Styled["advantage-description-list__item"] +
        " advantage-description-item"
      }
    >
      <h4 className={Styled[classTitle]}>{item.title}</h4>
      <p className={Styled[classDescription]}>{item.description}</p>
    </div>
  );
}

export default AdvantageDescrItem;
