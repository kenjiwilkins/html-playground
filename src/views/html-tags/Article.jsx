import { LoremIpsum } from "lorem-ipsum";
import { faker } from "@faker-js/faker";
import { Container, Card } from "../../components";

function Article() {
  const lorem = new LoremIpsum();
  const title = lorem.generateWords(5);
  const article = lorem.generateParagraphs(2);
  const comments = lorem.generateParagraphs(1);
  const date = faker.date.recent();
  const dateToString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const author = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    tel: faker.phone.number(),
    image: faker.image.avatar(),
  };
  console.log(author);
  return (
    <Container title="Article">
      <Card>
        <h2>Article</h2>
        <article className="p-4 border border-solid border-gray-300 rounded">
          <h3>{title}</h3>
          <time dateTime={dateToString}>{dateToString}</time>
          <p>{article}</p>
          <p>{article}</p>
          <p>{article}</p>
          <section className="p-4 border border-solid border-gray-300 rounded">
            <h4>comments</h4>
            <article className="p-2 border-y border-solid border-x-0 border-gray-300">
              <p>{comments}</p>
              <time dateTime={dateToString}>{dateToString}</time>
            </article>
          </section>
          <address className="flex flex-col py-4">
            <img
              src={author.image}
              alt={author.name}
              className="w-6 h-6 rounded-full"
            />
            <span>{author.name}</span>
            <a href={`mailto:${author.email}`}>{author.email}</a>
            <a href={`tel:${author.tel}`}>{author.tel}</a>
          </address>
        </article>
      </Card>
    </Container>
  );
}

export default Article;
