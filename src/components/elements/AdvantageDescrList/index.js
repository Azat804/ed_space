import Styled from "./index.module.css";
import AdvantageDescrItem from "../AdvantageDescrItem";
function AdvantageDescrList() {
  const advantageDescrList = [
    {
      title: "Любых онлайн-школ",
      description:
        "Быстрый запуск, легкое управление, все инструменты в одной платформе.",
      classTitle: "advantage-title__school",
      classDescription: "advantage-description__school",
    },
    {
      title: "Образовательных курсов",
      description:
        "Статистика по всем образовательным процессам позволяет постоянно улучшать ваш продукт.",
      classTitle: "advantage-title__course",
      classDescription: "advantage-description__course",
    },
    {
      title: "Корпоративных учебных порталов",
      description:
        "Надежная защита, бесперебойная работа и высокая производительность системы позволит наслаждаться процессом обучения.",
      classTitle: "advantage-title__portal",
      classDescription: "advantage-description__portal",
    },
  ];
  return (
    <div className={Styled["advantage-description-list"]}>
      {advantageDescrList.map((item) => (
        <AdvantageDescrItem
          item={item}
          classDescription={item.classDescription}
          classTitle={item.classTitle}
          key={item.title}
        />
      ))}
    </div>
  );
}

export default AdvantageDescrList;
