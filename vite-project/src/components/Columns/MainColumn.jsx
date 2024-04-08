import Card from "../Card/Card.jsx";
import * as m from "./MainColumn.styled";

export default function Column({ status, cards }) {
  return (
    <m.MainColumn>
      <m.ColumnTitle>
        <p>{status}</p>
      </m.ColumnTitle>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </m.MainColumn>
  );
}
