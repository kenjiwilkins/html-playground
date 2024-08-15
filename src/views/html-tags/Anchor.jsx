import { useState, useMemo } from "react";
import { Card } from "../../components/Card";
import sampleImage from "../../assets/sample.jpeg";
import anchorHtml from "./anchor.html";

const basicLink = "https://example.com";
const emailLink = "mailto:m.bluth@example.com";
const telLink = "tel:+123456789";

function Anchor() {
  const [egOne, setEgOne] = useState(0);
  function handleEgOneChange(e) {
    setEgOne(Number(e.target.value));
  }
  const href = useMemo(() => {
    switch (egOne) {
      case 0:
        return basicLink;
      case 1:
        return emailLink;
      case 2:
        return telLink;
      default:
        return basicLink;
    }
  }, [egOne]);

  return (
    <section className="flex flex-col gap-4">
      <h1>Anchor Tag</h1>
      <Card>
        <div className="flex flex-col gap-1">
          <h2>Basic Anchor</h2>
          <a href={href}>{href}</a>
          <p>
            Go to the href link When anhor tag is clicked, or when the element
            is focused and the Enter key is pressed.
          </p>
          <div className="flex flex-col gap-1">
            <label>
              <input
                type="radio"
                value={0}
                name="basic"
                checked={egOne === 0}
                onChange={handleEgOneChange}
              />
              basic link
            </label>
            <label>
              <input
                type="radio"
                value={1}
                name="basic"
                checked={egOne === 1}
                onChange={handleEgOneChange}
              />
              email link
            </label>
            <label>
              <input
                type="radio"
                value={2}
                name="basic"
                checked={egOne === 2}
                onChange={handleEgOneChange}
              />
              tel link
            </label>
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col gap-1">
          <h2>Download Anchor</h2>
          <a href={sampleImage} download="sample.jpeg">
            Download
          </a>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col gap-1">
          <h2>Target Anchor</h2>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in _blank
          </a>
          <p>
            <code>
              rel=&quot;noopener noreferrer&quot; is not necessary for newer
              browsers.
            </code>
          </p>

          <div className="flex flex-col gap-1">
            <iframe src={anchorHtml}></iframe>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default Anchor;
