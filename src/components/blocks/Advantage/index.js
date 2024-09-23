import Styled from "./index.module.css";
import Button from "../../ui/Button";
import AdvantageItem from "../../elements/AdvantageItem";
import advantageImage from "../../../assets/images/advantage__image.png";
import AdvantageDescrList from "../../elements/AdvantageDescrList";
function Advantage() {
  const advantages = [
    {
      name: "Неограниченное колличество учеников",
    },
    {
      name: "Трансляции",
    },
    {
      name: "Точная статистика",
    },
    {
      name: "Производительную видеосвязь с учениками",
    },
    {
      name: "Продукт с ежемесячной подпиской",
    },
    {
      name: "Лучшая конфиденциальность и защита",
    },
    {
      name: "Готовый шаблон для организации обучения",
    },
    {
      name: "Сообщества",
    },
    {
      name: "Любое количество уроков и учебных программ",
    },
  ];
  return (
    <section className={Styled["section-advantage"]}>
      <div className={"container advantage__wrapper"}>
        <div className={Styled["advantage__inner"]}>
          <div className={Styled["advantage__inner-list"]}>
            {advantages.map((item) => (
              <AdvantageItem name={item.name} key={item.name} />
            ))}
          </div>
          <p className={Styled["advantage__inner-school"]}>
            Запустите свою онлайн-школу
          </p>
          <p className={Styled["advantage__inner-educational-portal"]}>
            Или разверните корпоративный учебный портал уже сегодня.
          </p>
          <p className={Styled["advantage__inner-price"]}>
            Цена 250 рублей за 1 ученика в месяц
          </p>
          <p className={Styled["advantage__inner-demo"]}>
            Все готово для запуска. Попробуйте 7-дневный демо-доступ.
          </p>
          <Button name="Попробовать бесплатно" marginBottom="89px" />
          <div
            className={
              Styled["advantage__inner-description"] + " advantage-description"
            }
          >
            <div className={Styled["advantage-description__text"]}>
              <h3 className={Styled["advantage-description__title"]}>
                Точно подойдет для:
              </h3>
              <AdvantageDescrList />
            </div>
            <img
              src={advantageImage}
              className={Styled["advantage-description__image"]}
              alt="advantage-description__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
