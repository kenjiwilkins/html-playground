import { useState } from "react";
import { Container, Card } from "../../components";
import { faker } from "@faker-js/faker";

function GenerateItem() {
  return {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  };
}

function GenerateReview() {
  return {
    author: faker.person.fullName(),
    title: `${faker.word.noun()} of ${faker.word.noun()}`,
    rate: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
  };
}

function DataPage() {
  const [item] = useState(GenerateItem());
  const [review] = useState(GenerateReview());
  return (
    <Container title={"<data> Tag"} full>
      <Card>
        <div
          itemScope
          itemType="http://schema.org/Product"
          className="flex flex-col"
        >
          <span itemProp="name" className="text-2xl font-bold">
            {item.name}
          </span>
          <p className="text-lg">
            Price: <data value={item.price}>${item.price}</data>
          </p>
          <meta itemProp="priceCurrency" content="USD" />
        </div>
      </Card>
      <Card>
        <h2 className="text-xl">Review</h2>
        <div
          itemScope
          itemType="http://schema.org/Review"
          className="flex flex-col"
        >
          <span itemProp="author" className="text-lg font-bold">
            {review.author}
          </span>
          <span itemProp="name" className="text-lg">
            {review.title}
          </span>
          <p>
            Rate: <data value={review.rate}>{review.rate}</data>
          </p>
        </div>
      </Card>
    </Container>
  );
}

export default DataPage;
