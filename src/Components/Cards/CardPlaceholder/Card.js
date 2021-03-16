import { useState } from "react";
import { ContentPlaceholder } from "./ContentPlaceholder";
import { Title } from "./Title";

export const Card = ({
  isSelected,
  id,
  title,
  duration,
  price,
  content,
  background,
}) => {
  const [openCard, setOpenCard] = useState(false);

  return (
    <div
      className={`center-opened-card ${openCard ? "open" : "close"}`}
      onClick={() => setOpenCard(!openCard)}
      style={{ cursor: "pointer" }}
    >
      <li
        className={`card-wrapper ${openCard && "open"}`}
        style={{
          backgroundColor: `${background}`,
          background: `url('${process.env.PUBLIC_URL}/images/${id}.jpg')`,
        }}
      >
        <Title
          title={title}
          duration={duration}
          price={price}
          isSelected={isSelected}
        />
      </li>
      {openCard && <ContentPlaceholder content={content} />}
      <div className={`card-overlay ${openCard && "open"}`} />
    </div>
  );
};
