import Styled from "./index.module.css";

function CardEducation({
  title,
  description,
  classTitle,
  classDescription,
  children,
}) {
  return (
    <div className={Styled["card"]}>
      {children}
      <div className={Styled["card__text"]}>
        <div className={Styled[classTitle]}>{title}</div>
        <div className={Styled[classDescription]}>{description}</div>
      </div>
    </div>
  );
}

export default CardEducation;
