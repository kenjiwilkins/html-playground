import { Container, Card } from "../../components";
import classNames from "classnames";
import PropTypes from "prop-types";

const code = `<code>`;

const message =
  "is used to define a piece of computer code. By default, it is displayed in the browser's default monospace font.";

function CodeTag({ isCustomStyle }) {
  return (
    <code
      className={
        isCustomStyle ? classNames("bg-gray-200 text-gray-800 p-1 rounded") : ""
      }
    >
      {code}
    </code>
  );
}

CodeTag.propTypes = {
  isCustomStyle: PropTypes.bool,
};

function CodePage() {
  return (
    <Container title={"<code> Tag"} full>
      <Card>
        <h2 className="text-xl">Basic Code tag</h2>
        <p>
          <CodeTag>{code}</CodeTag> <span>{message}</span>
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Custom Styles</h2>
        <p>
          <CodeTag isCustomStyle>{code}</CodeTag> <span>{message}</span>
        </p>
      </Card>
    </Container>
  );
}

export default CodePage;
