import Styled from "./index.module.css";
import CardEducation from "../../elements/CardEducation";
import Button from "../../ui/Button";
import onlineCourse from "../../../assets/images/online_course.png";
import corporateTraining from "../../../assets/images/corporate_training.png";

function Education() {
  const cardEducation = [
    {
      title: "Организации онлайн-курсов",
      description:
        "Cоздайте свою программу обучения с нуля, самостоятельно управляйте учебным процессом в несколько кликов, круглосуточная поддержка.",
      classTitle: "education__left-card__title",
      classDescription: "education__left-card__description",
      img: onlineCourse,
    },
    {
      title: "Создания корпоративного обучения",
      description:
        "Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка.",
      classTitle: "education__right-card__title",
      classDescription: "education__right-card__description",
      img: corporateTraining,
    },
  ];
  return (
    <section className={Styled["section-education"]}>
      <div className={"container" + " " + Styled["education__wrapper"]}>
        <h2 className={Styled["education__title"]}>Точно подойдет для:</h2>
        <div className={Styled["education__description"]}>
          {cardEducation.map((item) => (
            <CardEducation
              title={item.title}
              description={item.description}
              classTitle={item.classTitle}
              classDescription={item.classDescription}
              key={item.title}
            >
              <img src={item.img} alt="" />
            </CardEducation>
          ))}
        </div>
        <div className={Styled["education__footer"]}>
          <Button name="Попробовать бесплатно" />
        </div>
      </div>
    </section>
  );
}

export default Education;
