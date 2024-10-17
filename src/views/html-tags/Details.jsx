import { Container, Card } from "../../components";
import { faker } from "@faker-js/faker";

function generateSummary() {
  return faker.lorem.sentence();
}

function generateDetails() {
  return faker.lorem.paragraph();
}

function DetailsPage() {
  return (
    <Container title={"<details> Tag"} full>
      <Card>
        <h2 className="text-xl">Default Details tag</h2>
        <details>
          <summary>{generateSummary()}</summary>
          <p>{generateDetails()}</p>
        </details>
      </Card>
    </Container>
  );
}

export default DetailsPage;
