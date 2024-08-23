import { useState, useEffect, useRef } from "react";
import { Container, Card } from "../../components";
import textImage from "../../assets/googleYahoo.png";

function ImageMap() {
  const [coords, setCoords] = useState({
    google: [23, 32, 237, 98],
    yahoo: [259, 32, 448, 83],
  });
  const imgRef = useRef(null);
  const updateCoordinates = () => {
    if (imgRef.current) {
      const img = imgRef.current;
      const widthRatio = img.clientWidth / img.naturalWidth;
      const heightRatio = img.clientHeight / img.naturalHeight;

      setCoords({
        google: coords.google.map((coord, index) =>
          index % 2 === 0 ? coord * widthRatio : coord * heightRatio
        ),
        yahoo: coords.yahoo.map((coord, index) =>
          index % 2 === 0 ? coord * widthRatio : coord * heightRatio
        ),
      });
    }
  };
  useEffect(() => {
    window.addEventListener("resize", updateCoordinates);

    // Initial calculation on component mount
    updateCoordinates();

    return () => {
      window.removeEventListener("resize", updateCoordinates);
    };
  }, []);
  return (
    <Container title="Responsive Image Map" full>
      <Card>
        <h2>Responsive Image map area</h2>
        <p>
          The coordinates updates on window resize to keep the areas in the
          correct position.
        </p>
        <map name="googleYahoo">
          <area
            shape="rect"
            coords={coords.google.join(",")}
            href="https://www.google.com"
            target="_blank"
            alt="Google"
          ></area>
          <area
            shape="rect"
            coords={coords.yahoo.join(",")}
            href="https://www.yahoo.com"
            target="_blank"
            alt="Yahoo"
          ></area>
        </map>
        <img
          src={textImage}
          ref={imgRef}
          alt="Google Yahoo"
          useMap="#googleYahoo"
          style={{ width: "100%", height: "auto" }}
        />
      </Card>
    </Container>
  );
}

export default ImageMap;
