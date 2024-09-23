import Styled from "./index.module.css";

function CardPossibility({
  title,
  description,
  classCard,
  classCardTitle,
  classCardDescription,
  children,
}) {
  return (
    <div className={Styled[classCard]}>
      {children}
      <div className={Styled[classCardTitle]}>{title}</div>
      <div className={Styled[classCardDescription]}>{description}</div>
    </div>
  );
}

export default CardPossibility;
