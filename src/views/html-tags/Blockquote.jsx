import { Container, Card } from "../../components";

const quote = `"Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.`;
const citeUrl = `https://developer.mozilla.org/en-US/docs/Web/HTML`;

function Blockquote() {
  return (
    <Container title="Blockquote tag">
      <Card>
        <h2>Basic Blockquote - No CSS</h2>
        <p>What is HTML?</p>
        <blockquote cite={citeUrl}>{quote}</blockquote>
      </Card>
      <Card>
        <h2>Blockquote with CSS</h2>
        <p>What is HTML?</p>
        <blockquote
          cite={citeUrl}
          className="border-0 border-l-4 border-solid border-blue-500 pl-4 text-gray-500"
        >
          {quote}
        </blockquote>
      </Card>
    </Container>
  );
}

export default Blockquote;
