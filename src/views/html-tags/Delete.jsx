import { Container, Card } from "../../components";
import { faker } from "@faker-js/faker";
import propTypes from "prop-types";
import classNames from "classnames";

function GenerateSentence() {
  return faker.lorem.sentence();
}

function GenerateCite() {
  return faker.internet.url();
}

function GenerateDate() {
  return faker.date.recent().toISOString();
}

function delClass(isCustom) {
  return classNames(
    "before:content-['start_delete'] after:content-['end_delete']",
    isCustom && "line-through bg-red-300 text-gray-700"
  );
}
function insClass(isCustom) {
  return classNames(
    "before:content-['start_insert'] after:content-['end_insert']",
    isCustom && "no-underline bg-green-300"
  );
}

function Sentence({ isDel, isCustom }) {
  return (
    <span>
      {isDel ? (
        <del
          className={delClass(isCustom)}
          cite={GenerateCite()}
          dateTime={GenerateDate()}
        >
          {GenerateSentence()}
        </del>
      ) : (
        <ins
          className={insClass(isCustom)}
          cite={GenerateCite()}
          dateTime={GenerateDate()}
        >
          {GenerateSentence()}
        </ins>
      )}
    </span>
  );
}
Sentence.propTypes = {
  isDel: propTypes.bool,
  isCustom: propTypes.bool,
};

function DeletePage() {
  return (
    <Container title={"<del> Tag"} full>
      <Card>
        <h2 className="text-xl">Default Delete tag</h2>
        <p>
          The <code>&lt;del&gt;</code> tag defines text that has been deleted
          from a document. Browsers will usually strike a line through deleted
          text.
        </p>
        <p>
          The <code>&lt;del&gt;</code> tag is often used to show content that is
          no longer relevant or no longer accurate.
        </p>
        <p>
          <Sentence isDel />
          <Sentence isDel={false} />
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Custom Delete tag</h2>
        <p>
          The <code>&lt;del&gt;</code> tag can be styled with CSS to provide a
          custom look for deleted text.
        </p>
        <p>
          <Sentence isDel isCustom />
          <Sentence isCustom />
        </p>
      </Card>
    </Container>
  );
}

export default DeletePage;
