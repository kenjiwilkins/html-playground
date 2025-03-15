import { useEffect, useRef, useState } from "react";
import { Container, Card } from "../../components";
import childHtml from "./iframe-child.html";

export default function IframePage() {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(375);
  const [button1ClickCount, setButton1ClickCount] = useState(0);
  const [button2ClickCount, setButton2ClickCount] = useState(0);
  const [button3ClickCount, setButton3ClickCount] = useState(0);
  const iframeParentEl = useRef(null);
  function calculateWidth() {
    if (!iframeParentEl.current) return;
    const parentWidth = iframeParentEl.current.clientWidth;
    setWidth(parentWidth);
    const windowHeight = window.innerHeight *0.5;
    setHeight(windowHeight);
  }
  function receivePostMessage(event) {
    if(!event.isTrusted) return;
    switch (event.data.buttonNumber) {
      case 1:
        console.log("Button 1 clicked");
        setButton1ClickCount(prevCount => prevCount + 1);
        break;
      case 2:
        setButton2ClickCount(prevCount => prevCount + 1);
        break;
      case 3:
        setButton3ClickCount(prevCount => prevCount + 1);
        break;
      default:
        break;
    }
  }
  function onClickButton(buttonCharacter) {
    const iframe = document.querySelector("iframe");
    iframe.contentWindow.postMessage({
      buttonCharacter
    }, "*");
  }
  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    window.addEventListener("message", receivePostMessage);
    return () => {
      window.removeEventListener("resize", calculateWidth);
      window.removeEventListener("message", receivePostMessage);
    }
  }, []);

  return (
    <Container title={"<iframe> Tag"} full>
      <Card>
        <h2 className="text-xl">Iframe</h2>
        <div className="mb-4 flex flex-col gap-2 justify-between" ref={iframeParentEl}>
          <div className="">
            <p>
              Iframe is used to embed another HTML document within the current HTML document.
            </p>
            <p>
              The <code>&lt;iframe&gt;</code> tag is used to embed multimedia content like audio, video, and PDF files in a web page.
            </p>
            <p>
              The <code>&lt;iframe&gt;</code> tag is also used to embed maps, calendars, and other web content.
            </p>
            <p>
              In the example below, the parent document is sending a message to the child document to update the button click count.
            </p>
          </div>
          <div className="flex justify-center">
            <p>
              Button 1 Clicks:
              <span className="mx-2"> {button1ClickCount}</span>
            </p>
            <p>
              Button 2 Clicks:
              <span className="mx-2">{button2ClickCount}</span>
            </p>
            <p>
              Button 3 Clicks:
              <span className="mx-2">{button3ClickCount}</span>
            </p>
          </div>
          <div className="flex justify-center gap-2">
            <button className="p-2 rounded bg-blue-700 text-white" onClick={() => onClickButton("A")}>Button A</button>
            <button className="p-2 rounded bg-gray-600 text-white" onClick={() => onClickButton("B")}>Button B</button>
            <button className="p-2 rounded bg-green-900 text-white" onClick={() => onClickButton("C")}>Button C</button>
          </div>
          <iframe
            allow="fullscreen"
            title="iframe post message example"
            className="grow"
            src={childHtml}
            width={width}
            height={height}
          />
        </div>
      </Card>
    </Container>
  )
}