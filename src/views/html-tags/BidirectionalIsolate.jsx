import { Container, Card } from "../../components";
import { fakerAR, fakerEN } from "@faker-js/faker";

function Bidirectional() {
  const today = new Date();
  const fiveYearsAgo = new Date(
    today.getFullYear() - 5,
    today.getMonth(),
    today.getDate()
  );
  const formattedDate = new Intl.DateTimeFormat("en-US").format(fiveYearsAgo);
  return (
    <Container title="Bidirectional">
      <Card>
        <h2>Bidirectional</h2>
        <p>
          The bidirectional algorithm is used to display text in right-to-left
          languages like Arabic and Hebrew. The algorithm is used to determine
          the direction of the text and display it correctly.
        </p>
        <h3>Arabic</h3>
        <p className="flex gap-2 items-end">
          <bdi>{fakerAR.lorem.paragraphs(1)}</bdi>
          <span>{formattedDate}</span>
        </p>
        <h3>English</h3>
        <p className="flex gap-2 items-end">
          <bdi>{fakerEN.lorem.paragraphs(1)}</bdi>
          <span>{formattedDate}</span>
        </p>
      </Card>
    </Container>
  );
}

export default Bidirectional;
