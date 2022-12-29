import Card from "Components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import uniqid from "uniqid";

/**
 * Icons that are displayed on cards.
 */
const icons = [
  <FontAwesomeIcon icon={solid("house")} />,
  <FontAwesomeIcon icon={solid("poo")} />,
  <FontAwesomeIcon icon={solid("mug-hot")} />,
  <FontAwesomeIcon icon={solid("car")} />,
  <FontAwesomeIcon icon={solid("umbrella")} />,
  <FontAwesomeIcon icon={solid("trash")} />,
  <FontAwesomeIcon icon={solid("gear")} />,
  <FontAwesomeIcon icon={solid("plane")} />,
  <FontAwesomeIcon icon={solid("code")} />,
  <FontAwesomeIcon icon={solid("brush")} />,
];

/**
 * A function for generating a random order of numbers from 0 to 10.
 * The output is used to generate the order of displayed cards.
 */
const getRandomOrder: () => number[] = () => {
  let options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const order: number[] = [];
  for (let i = 0; i < 10; i += 1) {
    const optionLength = options.length;
    const optionIndex = Math.floor(Math.random() * optionLength);
    const iconIndex = options[optionIndex];

    order.push(iconIndex);

    options = options
      .slice(0, optionIndex)
      .concat(options.slice(optionIndex + 1));
  }

  return order;
};

const CardContainer = ({ cardClicked }) => {
  const randomOrder = getRandomOrder();

  return (
    <div className="h-full w-full grid grid-cols-2 sm:grid-cols-5 gap-2">
      {randomOrder.map((index) => (
        <div
          key={uniqid()}
          className="rounded-xl bg-neutral-content cursor-pointer"
          onClick={() => cardClicked(index)}
        >
          <Card icon={icons[index]}></Card>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
