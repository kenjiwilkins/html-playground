import { useState } from "react";
import { Container, Card } from "../../components";
import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum();
const ArticleBody = lorem.generateParagraphs(1);
const words = ArticleBody.split(" ");
const explanation = `Bring attention supposed to use to bring attention to a specific word.
          Don't use it for styling.`;

function BringAttention() {
  const [selectedWordIndex, setSelectedWordIndex] = useState(-1);
  const handleWordSelect = (event) => {
    setSelectedWordIndex(event.target.selectedIndex);
  };
  return (
    <Container title="Bring attention tag">
      <Card>
        <h2>Bring Attention</h2>
        <div id="word-select">
          <label htmlFor="word">Select a word:</label>
          <select
            id="word"
            value={selectedWordIndex}
            onChange={handleWordSelect}
          >
            <option value="-1">None</option>
            {words.map((word, index) => (
              <option key={index} value={index}>
                {word}
              </option>
            ))}
          </select>
        </div>
        <p>
          {words.map((word, index) => {
            if (index === selectedWordIndex - 1) {
              return <b key={index}>{word} </b>;
            }
            return <span key={index}>{word} </span>;
          })}
        </p>
        <div>
          <p>{explanation}</p>
        </div>
      </Card>
    </Container>
  );
}

export default BringAttention;
