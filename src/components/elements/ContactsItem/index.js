import Styled from "./index.module.css";
function ContactsItem({ title, items }) {
  return (
    <div className={Styled["contacts-list__item"] + " contacts-item"}>
      <h4 className={Styled["contacts-item__title"]}>{title}</h4>
      <div className={Styled["contacts-item__points"]}>
        {items.map((item) => (
          <p className={Styled["contacts-item__point"]} key={item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ContactsItem;
