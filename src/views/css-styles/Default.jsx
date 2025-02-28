import { Container, Card } from "../../components";
import "./default.css"

function Default() {
  return (
    <div>
      <Container title=":default selector">
        <Card>
          <p className="flex flex-col gap-2">
            <span>
            {":default is a pseudo-class that represents an default element in a group of elements in the same context."}
            {"However, the most of modern browsers uses !important for Default styles so you may find some style properties are not working."}
            {"In this demo the background color of the default element is blue and the selected text color is red."}
            </span>
          </p>
        </Card>
        <Card>
          <h2>:default check box</h2>
          <form onSubmit={(e) => e.preventDefault()}>
              <label>
                <input type="checkbox" name="my-check" class="peer" checked/>
                <span class="h-4 w-4 bg-gray-200 peer-default:bg-blue-200 peer-checked:text-red-500">
                  choice 1
                </span>
              </label>
              <label>
                <input type="checkbox" name="my-check" class="peer"/>
                <span class="h-4 w-4 bg-gray-200  peer-checked:text-red-500">
                  choice 2
                </span>
              </label>
          </form>  
        </Card>
        <Card>
          <h2>:default radio button</h2>
          <form onSubmit={(e) => e.preventDefault()}>
              <label>
                <input type="radio" name="my-input" class="peer" checked/>
                <span class="h-4 w-4 bg-gray-200 peer-default:bg-blue-200 peer-checked:text-red-500">
                  Yes
                </span>
              </label>
              <label>
                <input type="radio" name="my-input" class="peer"/>
                <span class="h-4 w-4 bg-gray-200 peer-default:text-blue-500 peer-checked:text-red-500">
                  No
                </span>
              </label>
          </form>
        </Card>
        <Card>
          <h2>:default button</h2>
          <form onSubmit={(e) => e.preventDefault()}>
          <button type="submit" value="button" class="p-2 border-none rounded bg-gray-200 default:bg-blue-200 default:text-red-500">
            submit
          </button>
          </form>
        </Card>
      </Container>
    </div>
  )
}

export default Default;