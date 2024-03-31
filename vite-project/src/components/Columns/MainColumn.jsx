import Card from "../Card/Card.jsx";

export default function Column({ status, cards }) {
  return (
    <div class="main__column">
      <div class="column__title">
        <p>{status}</p>
      </div>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}
