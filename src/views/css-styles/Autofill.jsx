import { Container, Card } from "../../components";

function Autofill() {
  return (
    <div>
      <Container title=":autofill selector">
        <Card>
          <p className="flex flex-col gap-2">
            <span>
            {":autofill is a pseudo-class that represents an element that is being autofilled by the browser."}
            {"However, the most of modern browsers uses !important for autofill styles so you may find some style properties are not working."}
            </span>
          </p>
        </Card>
        <Card>
          <h2>with :autofill selector</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className="flex flex-col gap-1">
              email
            </label>
            <input id="email" type="email" className="p-2 border-none rounded bg-gray-200 autofill:bg-green-200 autofill:font-mono" />
            <label htmlFor="password" className="flex flex-col gap-1">
              password
            </label>
            <input id="password" type="password" className="p-2 border-none rounded bg-gray-200 autofill:bg-green-200 autofill:font-mono" />
            <button type="submit" className="p-2 border-none rounded bg-blue-400 active:bg-blue-500">submit</button>
          </form>  
        </Card>
        <Card>
          <h2>without :autofill selector</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email2" className="flex flex-col gap-1">
              email
            </label>
            <input id="email2" type="email" className="p-2 border-none rounded bg-gray-200" />
            <label htmlFor="password2" className="flex flex-col gap-1">
              password
            </label>
            <input id="password2" type="password" className="p-2 border-none rounded bg-gray-200" />
            <button type="submit" className="p-2 border-none rounded bg-blue-400 active:bg-blue-500">submit</button>
          </form>  
        </Card>
      </Container>
    </div>
  )
}

export default Autofill;