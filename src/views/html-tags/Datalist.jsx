import { useState } from "react";
import { Container, Card } from "../../components";

const browsers = [
  "Chrome",
  "Firefox",
  "Safari",
  "Edge",
  "Opera",
  "Internet Explorer",
];

function DatalistPage() {
  const [selectedBrowser, setSelectedBrowser] = useState("");
  const handleSelectBrowser = (e) => {
    setSelectedBrowser(e.target.value);
  };
  const note = "datalist tag is not fully supported in all browsers.";
  return (
    <Container title={"<datalist> Tag"} full>
      <Card>
        <h2 className="text-xl">Datalist Tag</h2>
        <label htmlFor="browsers" className="block mb-2">
          Choose a browser:
        </label>
        <input
          list="browsers"
          value={selectedBrowser}
          onChange={handleSelectBrowser}
          placeholder="Choose a browser"
          className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        />
        <datalist id="browsers">
          {browsers.map((browser, index) => (
            <option key={index} value={browser} />
          ))}
        </datalist>
        <p className="text-sm text-gray-500">{note}</p>
      </Card>
    </Container>
  );
}

export default DatalistPage;
