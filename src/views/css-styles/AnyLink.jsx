import { Container, Card } from "../../components";
import "./anylink.css"

function AnyLink() {
  return (
    <div id="anylink">
      <Container title=":any-link selector">
        <Card>
          <p className="flex flex-col gap-2">
            <span>
            {":any-link is a CSS pseudo-class that represents any link that is unvisited or visited."}
            </span>
            <span>
              {"styles for active to be applied in the order LVHA (link, visited, hover, active)"}
            </span>
          </p>
        </Card>
        <Card>
          <h2>anchor</h2>
          <div className="flex gap-2">
          <a href="#" className="underline text-blue-400">with href</a>
          <a role="button" className="underline text-blue-400">with role</a>
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default AnyLink;