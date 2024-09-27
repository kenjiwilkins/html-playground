import { faker } from "@faker-js/faker";
import { Container, Card } from "../../components";

function generateCaption() {
  return faker.lorem.sentence(2);
}

function generateTableContent() {
  return faker.word.words(1);
}

function TableHeaderCell() {
  return (
    <th scope="col" className="px-6 py-3">
      {generateTableContent()}
    </th>
  );
}
function TableBodyHeaderCell() {
  return (
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
    >
      {generateTableContent()}
    </th>
  );
}
function TableBodyCell() {
  return (
    <td className="px-6 py-4 whitespace-nowrap">{generateTableContent()}</td>
  );
}

const captionMessage =
  "Caption tag must be the first child of the table element. \nCaption tag is not included in the table background color.";

function CaptionPage() {
  return (
    <Container title={"<caption> Tag"} full>
      <Card>
        <h2 className="text-xl">Caption</h2>
        <table className="w-full text-sm text-left text-gray-500 bg-slate-100">
          <caption className="caption-bottom">
            Caption: {generateCaption()}
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <td className="px-6 py-3"></td>
              <TableHeaderCell />
              <TableHeaderCell />
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <TableBodyHeaderCell />
              <TableBodyCell />
              <TableBodyCell />
            </tr>
            <tr className="bg-white border-b">
              <TableBodyHeaderCell />
              <TableBodyCell />
              <TableBodyCell />
            </tr>
          </tbody>
        </table>
        <p>{captionMessage}</p>
      </Card>
    </Container>
  );
}

export default CaptionPage;
