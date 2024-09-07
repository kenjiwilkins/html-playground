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
  const arabicParagraph = fakerAR.lorem.paragraphs(1);
  const englishParagraph = fakerEN.lorem.paragraphs(1);
  return (
    <Container title="Bidirectional">
      <Card>
        <h2>Bidirectional: Left to Right</h2>
        <p>
          The bidirectional algorithm is used to display text in right-to-left
          languages like Arabic and Hebrew. The algorithm is used to determine
          the direction of the text and display it correctly.
        </p>
        <h3>Arabic</h3>
        <p className="flex gap-2 items-end">
          This is the sample Arabic text:
          <bdo dir="ltr">{arabicParagraph}</bdo>
          <span>{formattedDate}</span>
        </p>
        <h3>English</h3>
        <p className="flex gap-2 items-end">
          This is the sample English text:
          <bdo dir="ltr">{englishParagraph}</bdo>
          <span>{formattedDate}</span>
        </p>
      </Card>
      <Card>
        <h2>Bidirectional: Right to Left</h2>
        <h3>Arabic</h3>
        <p className="flex gap-2 items-end">
          This is the sample Arabic text:
          <bdo dir="rtl">{arabicParagraph}</bdo>
          <span>{formattedDate}</span>
        </p>
        <h3>English</h3>
        <p className="flex gap-2 items-end">
          This is the sample English text:
          <bdo dir="rtl">{englishParagraph}</bdo>
          <span>{formattedDate}</span>
        </p>
      </Card>
    </Container>
  );
}

export default Bidirectional;
