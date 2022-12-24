import ShuffledCards from "Components/ShuffledCards";

const CardContainer = () => {
  return (
    <div className="h-full w-full grid grid-cols-5 gap-2">
        <ShuffledCards></ShuffledCards>
    </div>
  );
};

export default CardContainer;
