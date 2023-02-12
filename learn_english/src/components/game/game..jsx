import Header from "../header/header";
import Footer from "../footer/footer";
import words from "../utils/words";
import Card from "../card/card";
import "../game/game.css";

function Game() {
  return (
    <div className="App__container">
      <Header />
      <main className="container__main">
        <div className="cards_conteiner">
      {
        words.map((word, i) => 
        <Card key={i} english={word.english} transcription={word.transcription}
        russian={word.russian} isSelected={word.isSelected}/>)
      }</div>
      </main>
      <Footer />
    </div>
  );
}

export default Game;