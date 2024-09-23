import Styled from "./index.module.css";
import logo from "../../../assets/images/logo_EdSpase.png";
import Navigation from "../../ui/Navigation";
import Language from "../../ui/Language";
function Header() {
  const navigation = [
    { name: "Возможности" },
    { name: "Стоимость" },
    { name: "Контакты" },
  ];
  return (
    <header className={Styled["header"]}>
      <div className={"container " + Styled["header__wrapper"]}>
        <img className="logo" src={logo} alt="" />
        <div className={Styled["header__navigation"]}>
          {navigation.map((item) => (
            <Navigation name={item.name} key={item.name} />
          ))}
        </div>
        <Language />
      </div>
    </header>
  );
}

export default Header;
