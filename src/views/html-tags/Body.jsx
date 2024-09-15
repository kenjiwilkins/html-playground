import { useEffect, useState } from "react";
import classNames from "classnames";
import { Container, Card } from "../../components";

function useEventLists() {
  const eventList = [
    { name: "beforeprint", triggered: false },
    { name: "afterprint", triggered: false },
    { name: "beforeunload", triggered: false },
    { name: "blur", triggered: false },
    { name: "focus", triggered: false },
    { name: "error", triggered: false },
    { name: "hashchange", triggered: false },
    { name: "load", triggered: false },
    { name: "languagechange", triggered: false },
    { name: "message", triggered: false },
    { name: "offline", triggered: false },
    { name: "online", triggered: false },
    { name: "popstate", triggered: false },
    { name: "redo", triggered: false },
    { name: "resize", triggered: false },
    { name: "storage", triggered: false },
    { name: "undo", triggered: false },
    { name: "unload", triggered: false },
  ];
  const [events, setEvents] = useState(eventList);
  function alertEvent(eventName, event) {
    console.log(eventName, event);
    const index = events.findIndex((e) => e.name === eventName);
    if (events[index].triggered) return;
    setEvents((prev) => {
      const copy = [...prev];
      copy[index].triggered = true;
      return copy;
    });
  }
  useEffect(() => {
    window.addEventListener("beforeprint", (event) => {
      alertEvent("beforeprint", event);
    });
    window.addEventListener("afterprint", (event) => {
      alertEvent("afterprint", event);
    });
    window.addEventListener("beforeunload", (event) => {
      alertEvent("beforeunload", event);
    });
    window.addEventListener("blur", (event) => {
      alertEvent("blur", event);
    });
    window.addEventListener("focus", (event) => {
      alertEvent("focus", event);
    });
    window.addEventListener("error", (event) => {
      alertEvent("error", event);
    });
    window.addEventListener("hashchange", (event) => {
      alertEvent("hashchange", event);
    });
    window.addEventListener("load", (event) => {
      alertEvent("load", event);
    });
    window.addEventListener("languagechange", (event) => {
      alertEvent("languagechange", event);
    });
    window.addEventListener("message", (event) => {
      alertEvent("message", event);
    });
    window.addEventListener("offline", (event) => {
      alertEvent("offline", event);
    });
    window.addEventListener("online", (event) => {
      alertEvent("online", event);
    });
    window.addEventListener("popstate", (event) => {
      alertEvent("popstate", event);
    });
    window.addEventListener("redo", (event) => {
      alertEvent("redo", event);
    });
    window.addEventListener("resize", (event) => {
      alertEvent("resize", event);
    });
    window.addEventListener("storage", (event) => {
      alertEvent("storage", event);
    });
    window.addEventListener("undo", (event) => {
      alertEvent("undo", event);
    });
    window.addEventListener("unload", (event) => {
      alertEvent("unload", event);
    });
  }, []);
  return events;
}

function Body() {
  const events = useEventLists();

  return (
    <Container title="Body tag" full>
      <Card>
        <h2>Body Events</h2>
        <ul>
          {events.map((e, index) => (
            <li key={index}>
              <p
                className={classNames(
                  e.triggered ? "text-green-500" : "text-red-500"
                )}
              >
                <code>{e.name}</code>
              </p>
            </li>
          ))}
        </ul>
        <div>
          <a href="#hash">Go to hash</a>
          <h1 id="hash">Hash</h1>
        </div>
      </Card>
    </Container>
  );
}

export default Body;
