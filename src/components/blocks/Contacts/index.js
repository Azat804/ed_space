import Styled from "./index.module.css";
import logo from "../../../assets/images/logo_EdSpase.png";
import ContactsList from "../../elements/ContactsList";

function Contacts() {
  return (
    <section className={Styled["section-contacts"]}>
      <div className={"container " + Styled["contacts__wrapper"]}>
        <div className={Styled["contacts__inner"]}>
          <img src={logo} alt="" className={Styled["contacts__inner-image"]} />
          <ContactsList />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
