const Square = (props) => {
  const winStyle =
    "square" + " " + (props.highlight ? "highlight" : " ") + " " + "flex";
  return (
    <div className={winStyle} onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Square;
