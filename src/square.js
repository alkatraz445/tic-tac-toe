const Square = (props) => {
  const winStyle =
    /* eslint-disable */
    "square" + " " + (props.highlight ? "highlight" : " ") + " " + "flex";
  /* eslint-enable */
  return (
    <div className={winStyle} onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Square;
