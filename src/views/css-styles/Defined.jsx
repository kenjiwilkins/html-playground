import { useEffect } from "react";
import { Container, Card } from "../../components";

customElements.define(
  "custom-example",
  class extends HTMLElement {
    constructor() {
      super();
      let divElm = document.createElement("div");
      divElm.textContent = this.textContent;
      let shadowRoot = this.attachShadow({ mode: "open" })
      shadowRoot.appendChild(divElm);
    }
    connectedCallback() {
      this.render();
    }
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :defined {
            font-style: italic;
            background-color: blue;
            color: white;
          }
        </style>
        <div>
          <slot></slot>
        </div>
      `;
    }
  }
)

customElements.define(
  "playground-card",
  class extends HTMLElement {
    constructor() {
      super();
      let divElm = document.createElement("div");
      divElm.textContent = this.textContent;
      let shadowRoot = this.attachShadow({ mode: "open" })
      shadowRoot.appendChild(divElm);
    }
    connectedCallback() {
      this.render();
    }
    render() {
      this.shadowRoot.innerHTML = `
        <div>
          <slot></slot>
        </div>
      `;
    }
  }
)

function Defined() {
  useEffect(() => {
    
  }, []);
  return (
    <div>
      <style>
          {`playground-card:not(:defined) {
            display: none;
          }
          playground-card:defined {
            display: block;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 0.5rem;
            font-weight: bold;
            font-size: 1.25rem;
          }`}
      </style>
      <Container title=":defined selector">
        <Card>
          <p className="flex flex-col gap-2">
            <span>
            {":defined is a pseudo-class selector that applies styles to custom elements once they are defined."}
            </span>
          </p>
        </Card>
        <Card>
          <h2>style change on :defined</h2>
          <custom-example text="This is a custom element">
            Once the custom element is defined, the styles will be applied.
          </custom-example>
        </Card>
        <Card>
          <h2>disable until :defined</h2>
          <playground-card text="This is a card element">
            Is hidden until the card element is defined.
          </playground-card>
        </Card>
      </Container>
    </div>
  )
}

export default Defined;