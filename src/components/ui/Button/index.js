import Styled from "./index.module.css";

function Button({ name, marginBottom = "0px" }) {
  return (
    <button className={Styled["button"]} style={{ marginBottom: marginBottom }}>
      {name}
    </button>
  );
}

export default Button;
