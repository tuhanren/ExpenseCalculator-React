import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //

  return <div className={classes}>{props.children}</div>; // props.children is the content of the card, which is the children of the Card component
}

export default Card;
