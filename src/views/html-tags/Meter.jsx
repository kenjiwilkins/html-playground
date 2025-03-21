import { useMemo, useState } from "react";
import { Button, Container, Card } from "../../components";
import { faker } from "@faker-js/faker";
import "./meter.css";

export default function MeterPage() {
  const [value, setValue] = useState(50);
  function adjustValue(add) {
    if (add) {
      setValue(prevValue => prevValue + 10);
    } else {
      setValue(prevValue => prevValue - 10);
    }
  }
  const [password, setPassword] = useState("");
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  const passwordStrength = useMemo(() => {
    let strength = 0;
    if (password.length > 8) {
      strength += 20;
    }
    if (password.match(/[a-z]/)) {
      strength += 20;
    }
    if (password.match(/[A-Z]/)) {
      strength += 20;
    }
    if (password.match(/[0-9]/)) {
      strength += 20;
    }
    if (password.match(/[^a-zA-Z0-9]/)) {
      strength += 20;
    }
    return strength;
  }
  , [password]);
  return (
    <Container title={"<meter> Tag"} full>
      <Card>
        <h2 className="text-xl">Meter</h2>
        <p>
          The <code>&lt;meter&gt;</code> tag is used to measure data within a given range.
        </p>
        <p>
          The <code>&lt;meter&gt;</code> tag is used to create a gauge or meter that represents the measurement within the range.
        </p>
        <p>
          The <code>&lt;meter&gt;</code> tag is supported in all major browsers, except Android WebView
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Meter - default</h2>
        <meter value={value} min="0" max="100"></meter>
      </Card>
      <Card>
        <h2 className="text-xl">Meter - optimum 10, min 0, max 100, low 40, high 60</h2>
        <meter className="meter" value={value} min="0" max="100" high="60" low="40" optimum={10}></meter>
        <div className="flex gap-4">
          <Button onClick={() => adjustValue(false)}>Dec</Button>
          <Button onClick={() => adjustValue(true)}>Add</Button>
        </div>
      </Card>
      <Card>
        <h2 className="text-xl">Meter - with form</h2>
        <form onSubmit={(e) => e.preventDefault()} name="password-strength" className="flex flex-col gap-4 max-w-fit">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange}/>
          <meter form="password-strength"  min="0" max="100" value={passwordStrength} low="40" high="80" optimum="90"></meter>
        </form>
      </Card>
    </Container>
  )
}