import "../card/card.css";

  function Card(props) {
    return (
      <div className="card__container">
                    <div className="card">
                        <h2 className="english">{props.english}</h2>
                        <p className="transcription">{props.transcription}</p>
                        <p className="russian">{props.russian}</p>
                    </div>
                    </div>
    );
  }
  
  export default Card;