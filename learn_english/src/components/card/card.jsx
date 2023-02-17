import React,{useState}  from "react";
import "./Card.css";

export default function Card(props) {
  const [pressed, setPressed] = useState(false);
  const {english, transcription, russian, tags } = props;
  const handleTransleiteBtn = () => {
  setPressed(!pressed);
  };

  let classBtnTransleite; 
  if(pressed) classBtnTransleite = "selected";
return (
<div className="card__container">
  <div className="card">
    <h2 className="english">{english}</h2>
    <p className="transcription">{transcription}</p>
    <p className="tags">{tags}</p>
    <button onClick={handleTransleiteBtn} className={`check_btn ${classBtnTransleite}`}>{pressed ? (
      <p className="russian">{russian}</p>
      ) : (
      "ПРОВЕРИТЬ"
      )}</button>
  </div>
</div>
);
}