import { useState } from "react";
import classNames from "classnames";
import { Container, Card } from "../../components";
import { faker } from "@faker-js/faker";

function generateAddress() {
  return {
    name: faker.person.fullName(),
    company: faker.company.buzzNoun().toUpperCase(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zip: faker.location.zipCode(),
    tel: faker.phone.number(),
  };
}

function useAddress() {
  const [address] = useState(generateAddress());
  return { address };
}

function BreakPage() {
  const { address } = useAddress();
  return (
    <Container title={"<br> Tag"} full>
      <Card>
        <h2 className={classNames("text-xl")}>Description</h2>
        <p className={classNames("text-lg")}>
          The <code>&lt;br&gt;</code> tag is used to insert a line break in the
          text.
          <br />
          This tag to break the line of the text implicitly such as in the
          address, poem, or song lyrics.
          <br />
          Use CSS for the break line for visual purposes.
        </p>
      </Card>
      <Card>
        <address>
          <p>
            <strong>{address.name}</strong>
            <br />
            <strong>{address.company}</strong>
            <br />
            {address.address}
            <br />
            {address.city}, {address.state} {address.zip}
            <br />
            <abbr title="Phone">P:</abbr> {address.tel}
          </p>
        </address>
      </Card>
    </Container>
  );
}

export default BreakPage;
