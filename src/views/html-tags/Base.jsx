import { useEffect, useMemo, useState } from "react";
import { Container, Card } from "../../components";
import baseHtml from "./base.html";

function BasePage() {
  const [html, setHtml] = useState("");
  // memo to strip script tags
  const strippedHtml = useMemo(() => {
    return html.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      ""
    );
  }, [html]);

  useEffect(() => {
    fetch(baseHtml)
      .then((response) => response.text())
      .then((html) => setHtml(html));
  }, []);
  return (
    <Container title="Base Tag">
      <Card>
        <h2>Base Tag</h2>
        <iframe src={baseHtml} title="Base Tag" />
      </Card>
      <Card>
        <h2>HTML</h2>
        <pre>{strippedHtml}</pre>
        <p>Be aware that the base tag does not affect Open Graph meta tags.</p>
        <p>The OG meta tag must be in the absolute URL format.</p>
      </Card>
    </Container>
  );
}

export default BasePage;
