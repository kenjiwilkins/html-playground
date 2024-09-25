import { useEffect, useRef } from "react";
import { Container, Card } from "../../components";

function CanvasPage() {
  const simpleCanvasRef = useRef(null);
  useEffect(() => {
    if (!simpleCanvasRef.current) return;
    const canvas = simpleCanvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 150, 80);
  }, [simpleCanvasRef]);

  return (
    <Container title={"<canvas> Tag"} full>
      <Card>
        <h2 className="text-xl">Basic Canvas</h2>
        <canvas
          ref={simpleCanvasRef}
          width="200"
          height="100"
          style={{ border: "1px solid #000000" }}
        ></canvas>
        <figcaption>Canvas with red rectangle</figcaption>
      </Card>
    </Container>
  );
}

export default CanvasPage;
