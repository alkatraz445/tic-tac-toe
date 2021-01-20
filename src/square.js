const Square = (props) => {
  return (
    <div className="square flex" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Square;
