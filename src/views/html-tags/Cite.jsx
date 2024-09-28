import { Container, Card } from "../../components";

const quote = "The summer grasses.\nAll that remains\nOf warriors' dreams.";
const cite = "Matsuo Basho";
const message = "Cite tag text is itallic by default in most browsers.";

function CitePage() {
  return (
    <Container title={"<cite> Tag"} full>
      <Card>
        <h2 className="text-xl">Cite Tag</h2>
        <figure>
          <blockquote>
            <p className="whitespace-pre-line">{quote}</p>
          </blockquote>
          <figcaption>
            A haiku by <cite>{cite}</cite>
          </figcaption>
        </figure>
        <p>
          <strong>Note:</strong> {message}
        </p>
      </Card>
    </Container>
  );
}

export default CitePage;
