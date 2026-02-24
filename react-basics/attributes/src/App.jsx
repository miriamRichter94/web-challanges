import "./styles.css";

export default function App() {
  return <AttributArticle />;
}

function AttributArticle() {
  return (
    <article className="article">
      <h2 className="article__title">Dobrou noc</h2>
      <lable htmlFor="testInput"> Ein Input Lable</lable>
      <input id="testInput" />
      <a className="article__link" href="https://www.death-clock.org/">
        Link to death
      </a>
    </article>
  );
}
