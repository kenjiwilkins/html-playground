import { Container, Card } from "../../components";

const characters = [
  {
    name: "Othello",
    description:
      "A protagonist of the play. He is a Moor, a Christian, and a general of the Venetian army in Italy.",
  },
  {
    name: "Desdemona",
    description:
      "A daughter of the Venetian senator Brabantio. She is Othello's wife.",
  },
  {
    name: "Iago",
    description:
      "A villain in the play. He is Othello's ensign and the husband of Emilia.",
  },
];

function DescriptionDetailsPage() {
  return (
    <Container title={"<dd> Tag"} full>
      <Card>
        <h2 className="text-xl">One Description to One Term</h2>
        <p className="text-lg">
          <strong>Characters in the play Othello by William Shakespeare</strong>
        </p>
        <dl>
          {characters.map((character, index) => (
            <div key={`${index}-${character.name}`}>
              <dt>{character.name}</dt>
              <dd>{character.description}</dd>
            </div>
          ))}
        </dl>
      </Card>
      <Card>
        <h2 className="text-xl">One Description to Multiple Terms</h2>
        <p className="text-lg">
          <strong>
            Chemical elements with their symbol, atomic number, and name
          </strong>
        </p>
        <dl>
          <dt>Gold</dt>
          <dt>Au</dt>
          <dt>Aurum</dt>
          <dd>A chemical element with the symbol Au and atomic number 79.</dd>
        </dl>
      </Card>
    </Container>
  );
}

export default DescriptionDetailsPage;
