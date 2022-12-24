import Card from "Components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const icons = [
    <FontAwesomeIcon icon={solid("house")}/>,
    <FontAwesomeIcon icon={solid("poo")}/>,
    <FontAwesomeIcon icon={solid("mug-hot")}/>,
    <FontAwesomeIcon icon={solid("car")}/>,
    <FontAwesomeIcon icon={solid("umbrella")}/>,
    <FontAwesomeIcon icon={solid("trash")}/>,
    <FontAwesomeIcon icon={solid("gear")}/>,
    <FontAwesomeIcon icon={solid("plane")}/>,
    <FontAwesomeIcon icon={solid("code")}/>,
    <FontAwesomeIcon icon={solid("brush")}/>,
];

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

const ShuffledComponents = () => {
  const randomOrder = getRandomOrder();

  return <>{randomOrder.map((index => <Card icon={icons[index]}></Card>))}</>
};

export default ShuffledComponents;

