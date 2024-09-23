import Styled from "./index.module.css";
import ContactsItem from "../ContactsItem";
function ContactsList() {
  const contactsList = [
    {
      title: "Меню:",
      items: ["Возможности", "Стоимость", "Выбор Ed Space"],
    },
    {
      title: "Документы:",
      items: ["Пользовательское соглашение", "Публичная оферта"],
    },
    {
      title: "Контакты:",
      items: ["admin@site.com", "+7 (900) 123-45-67", "+7 (999) 876-54-32"],
    },
  ];
  return (
    <div className={Styled["contacts-list"]}>
      {contactsList.map((item) => (
        <ContactsItem title={item.title} items={item.items} key={item.title} />
      ))}
    </div>
  );
}

export default ContactsList;
