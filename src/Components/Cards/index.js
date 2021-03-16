import { Card } from "./CardPlaceholder/Card";
import { CardInput } from "./CardInput";
import "./cards.css";

const List = () => {
  return (
    <ul className="card-list">
      {CardInput.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </ul>
  );
};

const Cards = () => <List />;

export default {
  routeProps: {
    path: "/cards",
    component: Cards,
  },
  name: "Cards",
};
