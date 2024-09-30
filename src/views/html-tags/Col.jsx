import { Container, Card } from "../../components";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";

function TD({ children }) {
  return (
    <td className="px-6 py-4 border border-solid border-gray-500">
      {children}
    </td>
  );
}
TD.propTypes = {
  children: PropTypes.node.isRequired,
};

function TH({ children }) {
  return (
    <th className="px-6 py-3 text-center border border-solid border-gray-500">
      {children}
    </th>
  );
}
TH.propTypes = {
  children: PropTypes.node.isRequired,
};

function ColPage() {
  function generateTableHeader() {
    return faker.word.noun();
  }
  function generateCaption() {
    return faker.lorem.sentence(2);
  }
  return (
    <Container title={"<col> Tag"} full>
      <Card>
        <h2 className="text-xl">Single Col Span</h2>
        <table className="border-collapse border border-solid">
          <caption className="caption-bottom p-2">{generateCaption()}</caption>
          <colgroup>
            <col className="bg-gray-400" />
            <col className="bg-red-300" />
            <col className="bg-blue-400" />
            <col className="bg-green-300" />
            <col className="bg-yellow-300" />
          </colgroup>
          <tr>
            <td></td>
            {Array.from({ length: 4 }, (_, i) => (
              <TH key={i}>{generateTableHeader()}</TH>
            ))}
          </tr>
          <tr>
            <th scope="row">Skill</th>
            {Array.from({ length: 4 }, (_, i) => (
              <TD key={i}>{generateTableHeader()}</TD>
            ))}
          </tr>
        </table>
      </Card>
      <Card>
        <h2 className="text-xl">Multiple Col Span</h2>
        <table className="border-collapse border border-solid">
          <caption className="caption-bottom p-2">{generateCaption()}</caption>
          <colgroup>
            <col className="bg-gray-400" />
            <col className="bg-red-300" span={2} />
            <col className="bg-blue-400" span={3} />
          </colgroup>
          <tr>
            <td></td>
            {Array.from({ length: 5 }, (_, i) => (
              <TH key={i}>{generateTableHeader()}</TH>
            ))}
          </tr>
          <tr>
            <th scope="row">Skill</th>
            {Array.from({ length: 5 }, (_, i) => (
              <TD key={i}>{generateTableHeader()}</TD>
            ))}
          </tr>
        </table>
      </Card>
    </Container>
  );
}

export default ColPage;
