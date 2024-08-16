import { Container, Card } from "../../components";
import textImage from "../../assets/googleYahoo.png";
import areaExample from "../../assets/areaExample.png";

function Area() {
  return (
    <Container title="Area tag">
      <Card>
        <h2>Basic Area</h2>
        <map name="googleYahoo">
          <area
            shape="rect"
            coords="23,32,237,98"
            href="https://www.google.com"
            target="_blank"
            alt="Google"
          ></area>
          <area
            shape="rect"
            coords="259,32,448,83"
            href="https://www.yahoo.com"
            target="_blank"
            alt="Yahoo"
          ></area>
        </map>
        <img src={textImage} alt="Google Yahoo" useMap="#googleYahoo" />
      </Card>
      <Card>
        <h2>with default area</h2>
        <p>
          The default area takes the rest of the coordinates that are not
          defined in the other areas.
        </p>
        <p>
          If there is duplicate coordinates, the last area will be the one that
          is used. However, this hehavior is not consistent across browsers.
        </p>
        <map name="areaExample">
          <area
            shape="rect"
            coords="68,65,157,155"
            href="https://www.google.com"
            target="_blank"
            alt="Google"
          ></area>
          <area
            shape="rect"
            coords="236,164,323, 253"
            href="https://www.yahoo.com"
            target="_blank"
            alt="Yahoo"
          ></area>
          <area
            shape="default"
            coords="68,164,157,65,236,164"
            href="https://www.bing.com"
            target="_blank"
            alt="Bing"
          ></area>
        </map>
        <img
          id="areaExample"
          src={areaExample}
          alt="Area Example"
          useMap="#areaExample"
        />
      </Card>
    </Container>
  );
}

export default Area;
