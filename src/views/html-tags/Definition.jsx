import { Container, Card, TransitionButton } from "../../components";

function DefinitionPage() {
  return (
    <Container title={"<dfn> Tag"} full>
      <Card>
        <h2 className="text-xl">Definition</h2>
        <p>
          The{" "}
          <strong>
            HTML Definition element <dfn>&lt;dfn&gt;</dfn>
          </strong>{" "}
          is used to indicate the term being defined within the context of a
          definition phrase or sentence.
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Link to definition</h2>
        <p>
          The
          <strong>
            HTML Definition element (<dfn id="definition-dfn">&lt;dfn&gt;</dfn>)
          </strong>
          is used to indicate the term being defined within the context of a
          definition phrase or sentence.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Graece donan,
          Latine voluptatem vocant. Confecta res esset. Duo Reges: constructio
          interrete. Scrupulum, inquam, abeunti;
        </p>

        <p>
          Because of all of that, we decided to use the
          <code>
            <a href="#definition-dfn">&lt;dfn&gt;</a>
          </code>{" "}
          element for this project.
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">
          Definition with <code>title</code> attribute
        </h2>
        <p>
          The
          <strong>
            HTML Definition element (
            <dfn title="Definition Element">&lt;dfn&gt;</dfn>)
          </strong>
          is used to indicate the term being defined within the context of a
          definition phrase or sentence.
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">
          Definition with <code>abbr</code> tag
        </h2>
        <p>
          When dfn does not have a title attribute, and abbr is the only child,
          the dfn element represents the term being defined. see{" "}
          <TransitionButton to="/html-tags/abbr" ariaLabel={"Transition to abbr tag page"}>{"<abbr> Tag"}</TransitionButton>
        </p>
      </Card>
    </Container>
  );
}

export default DefinitionPage;
