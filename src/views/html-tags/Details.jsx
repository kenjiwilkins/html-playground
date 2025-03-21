import { useEffect, useRef, useState } from "react";
import { Button, Container, Card } from "../../components";
import { faker } from "@faker-js/faker";

function generateSummary() {
  return faker.lorem.sentence();
}

function generateDetails() {
  return faker.lorem.paragraph();
}

const summary = generateSummary();
const details = generateDetails();

function DetailsPage() {
  const [detailToggleEvent, setDetailToggleEvent] = useState({
    oldValue: "",
    newValue: "",
  });
  const detailsRef = useRef(null);
  function handleToggle(e) {
    setDetailToggleEvent({
      oldState: e.oldState,
      newState: e.newState,
    });
  }
  useEffect(() => {
    const currentRef = detailsRef.current;
    if (currentRef) {
      currentRef.addEventListener("toggle", handleToggle);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("toggle", handleToggle);
      }
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const openAttribute = useRef(null);
  function handleOpen(newVal) {
    setIsOpen(newVal);
  }
  function handleOpenAttributeToggle(e) {
    setIsOpen(e.newState === "open");
  }
  useEffect(() => {
    const currentRef = openAttribute.current;
    if (currentRef) {
      currentRef.addEventListener("toggle", handleOpenAttributeToggle);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("toggle", handleOpenAttributeToggle);
      }
    };
  }, []);
  return (
    <Container title={"<details> Tag"} full>
      <Card>
        <h2 className="text-xl">Default Details tag</h2>
        <details>
          <summary>{summary}</summary>
          <p>{details}</p>
        </details>
      </Card>
      <Card>
        <h2 className="text-xl">toggle events</h2>
        <details ref={detailsRef}>
          <summary>{summary}</summary>
          <p>{details}</p>
        </details>
        {Object.keys(detailToggleEvent).map((key) => (
          <p key={key}>
            {key}: {detailToggleEvent[key]}
          </p>
        ))}
      </Card>
      <Card>
        <h2 className="text-xl">open attribute</h2>
        <details open={isOpen} ref={openAttribute}>
          <summary>{summary}</summary>
          <p>{details}</p>
        </details>
        <Button onClick={() => handleOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </Button>
      </Card>
      <Card>
        <h2 className="text-xl">css styling</h2>
        <details
          className="open:bg-white dark:open:bg-slate-900 open:ring-1 text-slate-900 open:text-white open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
          open
        >
          <summary className="text-sm leading-6 font-semibold select-none">
            {summary}
          </summary>
          <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>{details}</p>
          </div>
        </details>
      </Card>
    </Container>
  );
}

export default DetailsPage;
