import { useState } from "react";
import { Container, Card } from "../../components";

export default function DisabledPage() {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isSelectDisabled, setIsSelectDisabled] = useState(false);
  const [isTextareaDisabled, setIsTextareaDisabled] = useState(false);
  const [isCheckboxDisabled, setIsCheckboxDisabled] = useState(false);
  const [isRadioDisabled, setIsRadioDisabled] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [isFieldsetDisabled, setIsFieldsetDisabled] = useState(false);
  const [isOptgroupDisabled, setIsOptgroupDisabled] = useState(false);
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  return (
    <Container title=":disabled">
      <Card>
        <p className="flex flex-col gap-2">
          <span>
          {`:disabled is a CSS pseudo-class that is used to style elements that are disabled
          The pseudo-class can be used
          to change the appearance of
          disabled elements, such as changing the color or background color of the element.`}
          </span>
        </p>
      </Card>
      <Card>
        <h2>Disable Controller</h2>
        <div className="grid grid-cols-2 gap-2">
          <label>
            <input
              type="checkbox"
              checked={isInputDisabled}
              onChange={() => setIsInputDisabled(!isInputDisabled)}
            />
            Input
          </label>
          <label>
            <input
              type="checkbox"
              checked={isButtonDisabled}
              onChange={() => setIsButtonDisabled(!isButtonDisabled)}
            />
            Button
          </label>
          <label>
            <input
              type="checkbox"
              checked={isSelectDisabled}
              onChange={() => setIsSelectDisabled(!isSelectDisabled)}
            />
            Select
          </label>
          <label>
            <input
              type="checkbox"
              checked={isTextareaDisabled}
              onChange={() => setIsTextareaDisabled(!isTextareaDisabled)}
            />
            Textarea
          </label>
          <label>
            <input
              type="checkbox"
              checked={isCheckboxDisabled}
              onChange={() => setIsCheckboxDisabled(!isCheckboxDisabled)}
            />
            Checkbox
          </label>
          <label>
            <input
              type="checkbox"
              checked={isRadioDisabled}
              onChange={() => setIsRadioDisabled(!isRadioDisabled)}
            />
            Radio
          </label>
          <label>
            <input
              type="checkbox"
              checked={isSubmitDisabled}
              onChange={() => setIsSubmitDisabled(!isSubmitDisabled)}
            />
            Submit
          </label>
          <label>
            <input
              type="checkbox"
              checked={isFieldsetDisabled}
              onChange={() => setIsFieldsetDisabled(!isFieldsetDisabled)}
            />
            Fieldset
          </label>
          <label>
            <input
              type="checkbox"
              checked={isOptgroupDisabled}
              onChange={() => setIsOptgroupDisabled(!isOptgroupDisabled)}
            />
            Optgroup
          </label>
          <label>
            <input
              type="checkbox"
              checked={isOptionDisabled}
              onChange={() => setIsOptionDisabled(!isOptionDisabled)}
            />
            Option
          </label>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset disabled={isFieldsetDisabled} className="flex flex-col gap-2 w-fit rounded p-4">
            <legend className="font-bold">Form</legend>
            <input className="p-2 text-black disabled:text-gray-400" placeholder="text" type="text" disabled={isInputDisabled} />
            <button className="p-2 rounded-md bg-blue-600 text-white disabled:bg-gray-300 disabled:text-gray-700" type="button" disabled={isButtonDisabled}>
              Button
            </button>
            <select className="rounded p-2" disabled={isSelectDisabled}>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <textarea className="p-2 rounded" disabled={isTextareaDisabled} />
            <label>
              <input type="checkbox" disabled={isCheckboxDisabled} />
              Checkbox
            </label>
            <label>
              <input type="radio" disabled={isRadioDisabled} />
              Radio
            </label>
            <input type="submit" value="Submit" className="rounded p-2 border-none bg-green-600 text-white disabled:bg-gray-300 disabled:text-gray-700"  disabled={isSubmitDisabled} />
            <select>
              <option disabled={isOptionDisabled}>Option 1</option>
              <optgroup label="Group" disabled={isOptgroupDisabled}>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </optgroup>
            </select>
          </fieldset>
        </form>
      </Card>
    </Container>
  )
}