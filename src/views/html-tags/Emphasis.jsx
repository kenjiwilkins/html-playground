import { Container, Card } from "../../components";

function EmphasisPage() {
  return (
    <Container title={"<em> Tag"} full>
      <Card>
        <h2 className="text-xl">Emphasis</h2>
        <p>
          The <code>&lt;em&gt;</code> tag is used to emphasize text. The content inside the tag is usually displayed in italic.
        </p>
        <p>
          The <code>&lt;em&gt;</code> tag can be nested inside other inline elements like <code>&lt;strong&gt;</code> or <code>&lt;span&gt;</code>.
        </p>
        <p>
          The <code>&lt;em&gt;</code> tag is a phrase tag. Phrase tags are used to define different parts of the document content.
        </p>
        <p>
          The <code>&lt;em&gt;</code> tag is supported in all major browsers.
        </p>
        <p>
          Please be careful mixing <code>&lt;em&gt;</code> with <code>&lt;i&gt;</code> tags. The <code>&lt;em&gt;</code> tag should be used to emphasize text, while the <code>&lt;i&gt;</code> tag should be used to indicate a different voice or mood.
        </p>
        <h3 className="text-lg">Example</h3>
        <p>
          <em>This text is emphasized.</em>
        </p>
        <p>
          <em>
            This text is emphasized. <strong>This text is emphasized and strong.</strong>
          </em>
        </p>
        <p>
          <span>
            We <em>love</em> coding.
          </span>
        </p>
      </Card>
    </Container>
  )
}

export default EmphasisPage;