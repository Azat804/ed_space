import Styled from "./index.module.css";
import CardPossibility from "../../elements/CardPossibility";
import Button from "../../ui/Button";
import imgPossibility1 from "../../../assets/images/img_possibility1.png";
import imgPossibility2 from "../../../assets/images/img_possibility2.png";
import imgPossibility3 from "../../../assets/images/img_possibility3.png";
import imgPossibility4 from "../../../assets/images/img_possibility4.png";
import imgPossibility5 from "../../../assets/images/img_possibility5.png";
import imgPossibility6 from "../../../assets/images/img_possibility6.png";
import possibilityGreenCircle from "../../../assets/images/possibility_green_circle.png";
import possibilityPurpleCircle from "../../../assets/images/possibility_purple_circle.png";

function Possibility() {
  const cards = [
    {
      img: imgPossibility1,
      title: "Организация учебного процесса",
      description:
        "Управляйте процессом обучения. Наблюдайте за будущими, текущими и завершенными курсами в одном окне.",
      classCard: "possibility__inner-card-organization",
      classCardTitle: "card-organization__title",
      classCardDescription: "card-organization__description",
      classCardImage: "card-organization__image",
    },
    {
      img: imgPossibility2,
      title: "Управление расписанием занятий",
      description:
        "Спланируйте расписание курсов самым удобным образом. Больше никаких накладок и переносов.",
      classCard: "possibility__inner-card-control",
      classCardTitle: "card-control__title",
      classCardDescription: "card-control__description",
      classCardImage: "card-control__image",
    },
    {
      img: imgPossibility3,
      title: "Администрирование домашних заданий",
      description:
        "Отслеживайте прогресс обучения индивидуально по каждому ученику.",
      classCard: "possibility__inner-card-administration",
      classCardTitle: "card-administration__title",
      classCardDescription: "card-administration__description",
      classCardImage: "card-administration__image",
    },
    {
      img: imgPossibility4,
      title: "Задания для учеников",
      description:
        "Каждый ученик может видеть домашние задания от преподавателя, отслеживать статус их проверки и собственный уровень прогресса в обучении.",
      classCard: "possibility__inner-card-task",
      classCardTitle: "card-task__title",
      classCardDescription: "card-task__description",
      classCardImage: "card-task__image",
    },
    {
      img: imgPossibility5,
      title: "Мониторинг посещения занятий",
      description:
        "Просматривайте посещаемость каждого ученика на курсе. Отстающих больше не будет.",
      classCard: "possibility__inner-card-monitoring",
      classCardTitle: "card-monitoring__title",
      classCardDescription: "card-monitoring__description",
      classCardImage: "card-monitoring__image",
    },
    {
      img: imgPossibility6,
      title: "Записи хранятся на платформе",
      description:
        "Спланируйте расписание курсов самым удобным образом. Больше никаких накладок и переносов.",
      classCard: "possibility__inner-card-record",
      classCardTitle: "card-record__title",
      classCardDescription: "card-record__description",
      classCardImage: "card-record__image",
    },
  ];
  return (
    <section className={Styled["section-possibility"]}>
      <div className={"container " + Styled["possibility__wrapper"]}>
        <h2 className={Styled["possibility__title"]}>Возможности Ed Space</h2>
        <h3 className={Styled["possibility__subtitle"]}>
          Поможем перенести корпоративную академию, базу знаний, учебные курсы,
          настроим систему мотивации обучения, круглосуточная поддержка.
        </h3>
        <div className={Styled["possibility__inner"]}>
          {cards.map((item) => (
            <CardPossibility
              title={item.title}
              description={item.description}
              classCard={item.classCard}
              classCardTitle={item.classCardTitle}
              classCardDescription={item.classCardDescription}
              key={item.title}
            >
              <img
                src={item.img}
                alt="cardImage"
                className={Styled[item.classCardImage]}
              />
            </CardPossibility>
          ))}
        </div>
        <div className={Styled["possibility__footer"]}>
          <Button name="Попробовать бесплатно" />
        </div>
        <img
          src={possibilityGreenCircle}
          alt="green-circle"
          className={Styled["possibility__green-circle"]}
        />
        <img
          src={possibilityPurpleCircle}
          alt="purple-circle"
          className={Styled["possibility__purple-circle"]}
        />
      </div>
    </section>
  );
}

export default Possibility;
