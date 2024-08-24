import PropTypes from "prop-types";
import { Container, Card } from "../../components";
import { LoremIpsum } from "lorem-ipsum";

export function ArticleAside({ children }) {
  return (
    <aside className="flex flex-col gap-1 text-gray-500 pl-4 border-0 border-l border-solid">
      {children}
    </aside>
  );
}
ArticleAside.propTypes = {
  children: PropTypes.node.isRequired,
};

function Article({ children }) {
  return <article className="flex gap-4">{children}</article>;
}
Article.propTypes = {
  children: PropTypes.node.isRequired,
};

function ArticleWithAside({ ArticleBody, AsideArticle }) {
  return (
    <Article>
      {ArticleBody}
      <ArticleAside>
        <p>{AsideArticle}</p>
      </ArticleAside>
    </Article>
  );
}
ArticleWithAside.propTypes = {
  ArticleBody: PropTypes.node.isRequired,
  AsideArticle: PropTypes.node.isRequired,
};

function AsidePage() {
  const lorem = new LoremIpsum();
  const ArticleBody = lorem.generateParagraphs(3);
  const AsideArticle = lorem.generateParagraphs(1);
  return (
    <Container title="Aside">
      <Card>
        <h2>Article with Aside</h2>
        <ArticleWithAside
          ArticleBody={ArticleBody}
          AsideArticle={AsideArticle}
        />
      </Card>
      <Card>
        <h2>Aside as sidebar</h2>
        <div className="flex gap-4">
          <aside className="w-48 border-0 border-r border-solid">
            <h6>Table of contents</h6>
            <ul>
              <li>Section 1</li>
              <li>Section 2</li>
              <li>
                Section 3
                <ul>
                  <li>Subsection 1</li>
                  <li>Subsection 2</li>
                  <li>Subsection 3</li>
                </ul>
              </li>
            </ul>
          </aside>
          <div className="flex-1">
            <h2>Article</h2>
            <p>{lorem.generateParagraphs(3)}</p>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default AsidePage;
