import { Container, Card } from "../../components";

function Checked() {
  return (
    <div>
      <Container title=":checked selector">
        <Card>
          <p className="flex flex-col gap-2">
            <span>
            {":checked is a pseudo-class that represents radio and checkbox elements that are in the selected state."}
            {"It can be used to style elements based on their checked state."}
            </span>
          </p>
        </Card>
        <Card>
          <h2>Radio button</h2>
          <div className="flex flex-col gap-2">
            <div>
              <input type="radio" name="my-input" id="yes" className="radio-yes peer"/>
              <label htmlFor="yes" className="peer-[.radio-yes]:peer-checked:text-red-500">Yes</label>
            </div>
            <div>
              <input type="radio" name="my-input" id="no" className="radio-no peer"/>
              <label htmlFor="no" className="peer-[.radio-no]:peer-checked:text-red-500">No</label>
            </div>
          </div>
        </Card>
        <Card>
          <h2>Checkbox</h2>
          <div className="flex flex-col gap-2">
            <div>
              <input type="checkbox" id="check" className="checkbox-1 peer"/>
              <label htmlFor="check" className="peer-[.checkbox-1]:peer-checked:text-red-500">Check 1</label>
            </div>
            <div>
              <input type="checkbox" id="check2" className="checkbox-2 peer"/>
              <label htmlFor="check2" className="peer-[.checkbox-2]:peer-checked:text-red-500">Check 2</label>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default Checked;