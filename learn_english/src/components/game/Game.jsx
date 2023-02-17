import words from "../utils/words";
import Card from "../Card/Card";
import "./Game.css";

function Game() {
  return (
    <div className="App__container">
      <main className="container__main">
        <div className="cards_conteiner">
      {
        words.map((word, i) => 
        <Card key={i} english={word.english} transcription={word.transcription} tags={word.tags} russian={word.russian}/>)
      }</div>
      </main>
    </div>
  );
}

export default Game;