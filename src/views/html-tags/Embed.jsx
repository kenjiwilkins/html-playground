import { useEffect, useRef, useState } from "react";
import { Container, Card } from "../../components";
import pdf from "../../assets/pdf/dummy.pdf"

function EmbedPage() {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(375);
  const embedParentEl = useRef(null);
  function calculateWidth() {
    if (!embedParentEl.current) return;
    const parentWidth = embedParentEl.current.clientWidth;
    setWidth(parentWidth);
    const windowHeight = window.innerHeight;
    setHeight(windowHeight);
  }
  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => {
      window.removeEventListener("resize", calculateWidth);
    }
  }, []);

  return (
    <Container title={"<embed> Tag"} full>
      <Card>
        <h2 className="text-xl">Embed</h2>
        <div className="mb-4 flex flex-col gep-2 justify-between" ref={embedParentEl}>
          <div className="">
            <p>
              Embed is used to embed multimedia content like audio, video, and PDF files in a web page.
            </p>
            <p>
              However, the <code>&lt;iframe&gt;</code> tag is more commonly used to embed multimedia content.
            </p>
          </div>
          <embed 
          className="grow"
            src={pdf}
            type="application/pdf"
            width={width}
            height={height}
          />
        </div>
      </Card>
    </Container>
  )
}

export default EmbedPage;