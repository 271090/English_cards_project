import React from "react";
import "../card/card.css";

class Card extends React.Component {
render() {
const {
english,
transcription,
russian,
tags,
isSelected,
} = this.props;

let classButtons;
if (isSelected) classButtons = "selected";
return (
<div className={`card__container ${classButtons}`}>
  <div className="card">
    <h2 className="english">{english}</h2>
    <p className="transcription">{transcription}</p>
    <p className="russian">{russian}</p>
    <p className="tags">{tags}</p>

      { isSelected && <div className="card-buttons"><button className="cardSaveButton">S</button>, <button
          className="cardEditButton">E</button>, <button className="cardDeliteButton">D</button></div>}
      { !isSelected && <div className="card-buttons"><button className="cardEditButton">E</button>,<button
          className="cardDeliteButton">D</button></div>}
    </div>
  </div>
);
}
}

export default Card;