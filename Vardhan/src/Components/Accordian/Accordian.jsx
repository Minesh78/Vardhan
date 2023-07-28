import { useState } from "react";
import img1 from './stgimg1.webp'
import img2 from './stgimg2.webp'
import img3 from './stgimg3.webp'
import img4 from './stgimg4.webp'
import "./styles.css";

const cards = [
  {
    header: "Canada",
    image: img1,
    text: `Image description here`,
  },
  {
    header: "Bali",
    image: img2,
    text: `Image description here`,
  },
  {
    header: "Spain",
    image: img3,
    text: `Image description here`,
  },
  {
    header: "Indonesia",
    image: img4,
    text: `Image description here`,
  },
 
];

export const Accordion = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <>
    <div className="container">
    <section>
      {cards.map((card, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <article
            key={card.image}
            className={isActive}
            onClick={() => handleToggle(index)}
          >
            <img src={card.image} />
            <div className="content">
              <div>
                <h2>{card.header}</h2>
                <p>{card.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
    </div>
    </>
  );
};
