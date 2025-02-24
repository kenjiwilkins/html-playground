import { Container, Card } from "../../components";

function Active() {
  return (
    <Container title=":active selector">
      <Card>
        <p className="flex flex-col gap-2">
          <span>
          {":active is a CSS pseudo-class that represents an element that is being activated by the user."}
          </span>
          <span>
            {"styles for active to be applied in the order LVHA (link, visited, hover, active)"}
          </span>
        </p>
      </Card>
      <Card>
        <h2>button</h2>
        <div className="flex gap-2">
        <button className="p-2 border-none rounded bg-red-400 active:bg-red-500" onClick={() => console.log(':active')}>:active</button>
        </div>
      </Card>
      <Card>
        <h2>anchor</h2>
        <div className="flex gap-2">
        <a href="#" className="underline text-blue-400 active:text-blue-500 hover:text-blue-300">:active</a>
        </div>
      </Card>
      <Card>
        <h2>input label</h2>
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="checkbox" className="active:text-red-500 flex items-center">
            <input id="checkbox" type="checkbox" className="p-2 border-none rounded bg-gray-200" />
            :active
          </label>
        </form> 
      </Card>
    </Container>
  )
}

export default Active;