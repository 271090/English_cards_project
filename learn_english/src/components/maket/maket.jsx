import Header from "../header/header";
import Footer from "../footer/footer";
import words from "../utils/words";
import Card from "../card/card";

function Maket() {
  return (
    <div className="App__container">
      <Header />
      <main className="container__main">
        <div className="cards_conteiner">
      {
        words.map((word) => 
        <Card english={word.english} transcription={word.transcription}
        russian={word.russian} tags={word.tags} isSelected={word.isSelected}/>)
      }</div>
      </main>
      <Footer />
    </div>
  );
}

export default Maket;