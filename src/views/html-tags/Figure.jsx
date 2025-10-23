import { faker } from "@faker-js/faker";
import { Container, Card } from "../../components";

export default function FigurePage() {
  const users = Array.from({ length: 5 }, () => ({
    name: faker.person.fullName(),
    age: faker.number.int({ min: 18, max: 60 }),
    country: faker.location.country()
  }));
  const code = `
function greet() {
  return "Hello, World!"; 
} `
// a function to devide the code into each word such as {name: "function", type: "keyword"}
  function splitCode(code) {
    const words = code.split(" ");
    return words.map(word => {
      if (word.includes("function")) {
        return { name: word, type: "keyword" };
      }
      if (word.includes("{") || word.includes("}")) {
        return { name: word, type: "bracket" };
      }
      if (word.includes("greet")) {
        return { name: word, type: "function" };
      }
      return { name: word, type: "text" };
    });
  }
  function handleTextColor(type) {
    switch (type) {
      case "keyword":
        return "text-blue-500";
      case "function":
        return "text-yellow-500";
      case "bracket":
        return "text-gray-500";
      default:
        return "text-white";
    }
  }

  return (
    <Container title={"<figure> Tag"} full>
      <Card>
        <h2 className="text-xl">Figure</h2>
        <p>
          The <code>&lt;figure&gt;</code> tag is used to group related content like images and captions.
        </p>
        <p>
          The <code>&lt;figure&gt;</code> tag is used in conjunction with the <code>&lt;figcaption&gt;</code> tag.
        </p>
        <p>
          The <code>&lt;figcaption&gt;</code> tag is used to add a caption to the content inside the <code>&lt;figure&gt;</code> tag.
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Figure - img</h2>
        <figure className="rounded-lg shadow-lg p-4 w-fit">
          <img src={faker.image.url()} alt="Placeholder" className="h-80 w-80" />
          <figcaption className="text-center font-sans">Placeholder Image</figcaption>
        </figure>
      </Card>
      <Card>
        <h2 className="text-xl">Figure - video</h2>
        <figure className="rounded-lg shadow-lg p-4 w-fit">
          <video preload="metadata" controls width={600}>
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <figcaption className="text-center font-sans">By blender foundation</figcaption>
        </figure>
      </Card>
      <Card>
        <h2 className="text-xl">Figure - audio</h2>
        <figure className="rounded-lg shadow-lg p-4 w-fit">
          <audio controls>
            <source src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3" type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
          <figcaption className="text-center font-sans">by rafaelreis-hotmart </figcaption>
        </figure>
      </Card>
      <Card>
        <h2 className="text-xl">Figure - table</h2>
        <figure className="rounded-lg shadow-lg p-4 w-fit">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Age</th>
                <th className="p-2">Country</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="p-2 font-medium text-gray-900 whitespace-nowrap">{user.name}</td>
                  <td className="p-2">{user.age}</td>
                  <td className="p-2">{user.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <figcaption className="text-center font-sans">Table Caption</figcaption>
        </figure>
      </Card>
      <Card>
        <h2 className="text-xl">Figure - code</h2>
        <figure className="relative  rounded-lg shadow-lg p-4 w-fit bg-gray-900 text-white overflow-hidden">
           <figcaption className="absolute top-0 left-0 p-2 bg-gray-700 rounded-br text-left text-sm font-sans">hello.js</figcaption>
          <pre className="bg-gray-900 text-white p-2 rounded">
            <code className="language-js">
              {splitCode(code).map((word, index) => (
                <span key={index} className={handleTextColor(word.type)}>{word.name} </span>
              ))}
            </code>
          </pre>
          
        </figure>
      </Card>
      <Card>
        <h2 className="text-xl">Figure - blockquote</h2>
        <figure className="rounded-lg shadow-lg p-4 w-fit">
          <blockquote className="text-gray-500 italic">
            &ldquo;If you only read the books that everyone else is reading, you can only think what everyone else is thinking.&rdquo;
          </blockquote>
          <figcaption className="text-center font-sans">Haruki Murakami</figcaption>
        </figure>
      </Card>
    </Container>
  )
}