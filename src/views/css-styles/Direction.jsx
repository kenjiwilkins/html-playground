import { useState } from "react";
import { Container, Card } from "../../components";
import { fakerAR, fakerEN } from "@faker-js/faker";
import "./direction.css";

export default function DirectionPage() {
  const englishSentence = fakerEN.lorem.paragraphs(1);
  const arabicSentence = fakerAR.lorem.paragraphs(1);
  const [language, setLanguage] = useState("en");

  return (
    <Container title="Direction">
      <Card>
        <p className="flex flex-col gap-2">
          <span>
          {"dir() is a CSS pseudo-class function that is used to style elements based on the direction of the text. The function takes a single argument, which is a string that represents the direction of the text. The function can be used to style elements based on the direction of the text, such as changing the color or background color of the text based on the direction."}
          </span>
        </p>
      </Card>
      <Card>
        <h2>Text direction</h2>
        <p>
          Background color of the text changes based on the direction of the text.
        </p>
        <select
          className="p-2"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
        <p className="flex gap-2 items-end dir" dir="auto">
          <span className="text-2xl">
            {language === "en" ? englishSentence : arabicSentence}
          </span>
        </p>
      </Card>
    </Container>
  )
}