import { Container, Card } from "../../components";

function Abbr({ title, children }) {
  return (
    <abbr title={title} className="font-mono font-bold">
      {children}
    </abbr>
  );
}

function AbbrPage() {
  return (
    <Container title="Abbr Tag">
      <Card>
        <div className="flex flex-col gap-1">
          <h2>Basic Abbr</h2>
          <Abbr title="World Health Organization">WHO</Abbr>
          <p>
            The <Abbr title="World Health Organization">WHO</Abbr> was
            established in 1948.
          </p>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col gap-1">
          <h2>Abbr with Dfn</h2>
          <p>
            <dfn id="html">HyperText Markup Language</dfn>{" "}
            <Abbr title="HyperText Markup Language" aria-describedby="html">
              HTML
            </Abbr>
          </p>
        </div>
      </Card>
    </Container>
  );
}

export default AbbrPage;
