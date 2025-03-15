import { Container, Card } from "../../components";

export default function FieldsetPage() {
  
  return (
    <Container title={"<fieldset> Tag"} full>
      <Card>
        <h2 className="text-xl">Fieldset
        </h2>
        <p>
          The <code>&lt;fieldset&gt;</code> tag is used to group related elements in a form.
        </p>
        <p>
          The advantage of using the <code>&lt;fieldset&gt;</code> tag is that it makes the form more readable and accessible.
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Fieldset - default
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <legend>Personal Information</legend>
            <label htmlFor="name">Name:
              <input type="text" id="name" name="name" />
            </label>
            <br />
            <label htmlFor="email">Email:
              <input type="email" id="email" name="email" />
            </label>
          </fieldset>
        </form>
      </Card>
      <Card>
        <h2 className="text-xl">Fieldset - disabled
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset disabled>
            <legend>
              Personal Information
            </legend>
            <label htmlFor="name-disabled">Name:
              <input type="text" id="name-disabled" name="name-disabled" />
            </label>
            <br />
            <label htmlFor="email-disabled">Email:
              <input type="email" id="email-disabled" name="email-disabled" />
            </label>
          </fieldset>
        </form>
      </Card>
      <Card>
        <h2 className="text-xl">Fieldset - fieldset outside form
        </h2>
        <form id="fieldset-outside" className="bg-red-100" onSubmit={(e) => e.preventDefault()}>
          <legend>background colored area is form</legend>
          <button type="submit">Submit</button>
        </form>
        <fieldset>
          <legend>Personal Information</legend>
          <label htmlFor="name-outside">Name:
            <input type="text" id="name-outside" name="name-outside" />
          </label>
          <br />
          <label htmlFor="email-outside">Email:
            <input type="email" id="email-outside" name="email-outside" />
          </label>
        </fieldset>
      </Card>
      <Card>
        <h2 className="text-xl">Fieldset - styling border
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset className="rounded border-2 border-red-500 p-4">
            <legend style={{ color: "red" }}>Personal Information</legend>
            <label htmlFor="name-styled-border">Name:
              <input type="text" id="name-styled-border" name="name-styled-border" />
            </label>
            <br />
            <label htmlFor="email-styled-border">Email:
              <input type="email" id="email-styled-border" name="email-styled-border" />
            </label>
          </fieldset>
        </form>
      </Card>
      <Card>
        <h2 className="text-xl">Fieldset - styling display contents
        </h2>
        <p>
          fieldset border and legend on the line disappear by setting display to contents.
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset className="contents">
            <div className="rounded border-2 bg-gray-200 p-4 flex flex-col gap-2">
            <legend>Personal Information</legend>
            <label htmlFor="name-styled" className="flex gap-2">Name:
              <input type="text" id="name-styled-display" name="name-styled-display" />
            </label>
            <label htmlFor="email-styled" className="flex gap-2">Email:
              <input type="email" id="email-styled-display" name="email-styled-display" />
            </label>
            </div>
          </fieldset>
        </form>
      </Card>
    </Container>
  )
}