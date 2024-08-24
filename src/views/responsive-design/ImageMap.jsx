import { useCallback, useState, useEffect, useRef } from "react";
import { Container, Card } from "../../components";
import textImage from "../../assets/googleYahoo.png";

function ImageMap() {
  const initialCoords = {
    google: [23, 32, 237, 98],
    yahoo: [259, 32, 448, 83],
  };
  const [coords, setCoords] = useState({
    google: initialCoords.google,
    yahoo: initialCoords.yahoo,
  });
  const imgRef = useRef(null);
  const updateCoordinates = useCallback(() => {
    if (!imgRef.current) return;
    const img = imgRef.current;
    const widthRatio = img.clientWidth / img.naturalWidth;
    const heightRatio = img.clientHeight / img.naturalHeight;
    const calculateCoords = (coords) => {
      return coords.map((coord, index) =>
        index % 2 === 0 ? coord * widthRatio : coord * heightRatio
      );
    };
    setCoords({
      google: calculateCoords(initialCoords.google),
      yahoo: calculateCoords(initialCoords.yahoo),
    });
  }, [initialCoords.google, initialCoords.yahoo]);
  useEffect(() => {
    window.addEventListener("resize", updateCoordinates);
    const handleLoad = () => {
      updateCoordinates();
    };
    const img = imgRef.current;
    if (img) {
      img.addEventListener("load", handleLoad);
    }
    // Initial calculation on component mount
    updateCoordinates();

    return () => {
      window.removeEventListener("resize", updateCoordinates);
      if (img) {
        img.removeEventListener("load", handleLoad);
      }
    };
  }, [updateCoordinates]);
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
