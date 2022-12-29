const Card = (props: any) => {
  const { icon } = props;

  return (
    <div className="text-5xl text-black h-full w-full flex justify-center items-center">
      {icon}
    </div>
  );
};

export default Card;
