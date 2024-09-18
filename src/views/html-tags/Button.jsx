import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Container, Card } from "../../components";

function HeaderText({ children }) {
  return <h2 className="text-xl">{children}</h2>;
}

function ButtonPage() {
  const buttonClass = classNames("bg-blue-500 text-white px-4 py-2 rounded");
  const disabledButtonClass = classNames(
    "bg-gray-300 text-gray-500 px-4 py-2 rounded"
  );
  const autoFocusButtonRef = useRef();
  useEffect(() => {
    if (autoFocusButtonRef.current) {
      autoFocusButtonRef.current.focus();
    }
  }, [autoFocusButtonRef]);
  const autoFocusMessage =
    "Autofocus is a boolean attribute that specifies that a button should automatically get focus when the page loads.\nThis attribute should not be used on more than one element in a document.";
  const disabledMessage =
    "The disabled attribute is a boolean attribute.\nWhen present,the button is not focusable and not clickable.";
  const formActionMessage =
    "The formaction attribute specifies where to send the form-data when a form is submitted.\nThis attribute overrides the form's action attribute.";
  const [debug, setDebug] = useState(false);

  const [showPopover, setShowPopover] = useState(false);
  return (
    <Container title={"<button> Tag"} full>
      <Card>
        <HeaderText>Autofocus</HeaderText>
        <form id="autofocus">
          <p className="whitespace-pre-line">{autoFocusMessage}</p>
          <button
            className={buttonClass}
            autoFocus
            ref={autoFocusButtonRef}
            tabIndex={0}
            form="autofocus"
          >
            Autofocus
          </button>
        </form>
      </Card>
      <Card>
        <HeaderText>Disabled</HeaderText>
        <p className="whitespace-pre-line">{disabledMessage}</p>
        <button className={disabledButtonClass} disabled>
          Disabled
        </button>
      </Card>
      <Card>
        <HeaderText>Form Action</HeaderText>
        <form action="https://www.yahoo.co.jp/">
          <p className="whitespace-pre-line">{formActionMessage}</p>
          <button className={buttonClass} formAction="https://google.com">
            Go to Google
          </button>
        </form>
      </Card>
      <Card>
        <HeaderText>Form EncType</HeaderText>
        <form
          action="/html-tags/button"
          encType="application/x-www-form-urlencoded"
          className="flex flex-col gap-4"
        >
          <p>
            The formenctype attribute specifies how form-data should be encoded
            before sending it to a server.
          </p>
          <input
            className="bg-gray-100 border border-gray-300 text-gray-400 text-sm rounded-lg block p-2.5 cursor-not-allowed"
            readOnly
            type="text"
            value="test value"
          />
          <div>
            <input
              type="checkbox"
              name="checkbox"
              value={debug ? "checked" : "unchecked"}
              onChange={() => setDebug(!debug)}
            />
            <label htmlFor="checkbox">Debug</label>
          </div>

          <button
            className={buttonClass}
            formEncType={
              debug ? "text/plain" : "application/x-www-form-urlencoded"
            }
            type="submit"
          >
            {debug ? "Text" : "Urlencoded"}
          </button>
        </form>
      </Card>
      <Card>
        <HeaderText>Popover</HeaderText>
        <button
          className={buttonClass}
          popovertarget="popover"
          popovertargetaction="toggle"
        >
          Toggle Popover
        </button>
        <div id="popover" popover="true">
          Popover Content
        </div>
      </Card>
    </Container>
  );
}

export default ButtonPage;
