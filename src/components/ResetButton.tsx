const ResetButton = ({ reset }) => {
  return (
    <button className="btn btn-primary" onClick={() => reset()}>
      Reset
    </button>
  );
};

export default ResetButton;
