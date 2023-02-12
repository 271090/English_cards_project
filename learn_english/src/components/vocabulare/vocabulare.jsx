import Header from "../header/header";
import Footer from "../footer/footer";
import words from "../utils/words";
import Table from "../table/table";

function Vocabulare() {
return (
<div className="App__container">
  <Header />
  <main className="container__main">
      <h2>WORDLIST</h2>
      <div className="table_conteiner">
      {
      words.map((word, i) =>
      <Table 
      key={i} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags}
        isSelected={word.isSelected} />)
      }</div>
  </main>
  <Footer />
</div>
);
}

export default Vocabulare;