import { useEffect, useRef } from "react";
import { Container, Card } from "../../components";

function CanvasPage() {
  const simpleCanvasRef = useRef(null);
  useEffect(() => {
    if (!simpleCanvasRef.current) return;
    const canvas = simpleCanvasRef.current;
    const ctx = canvas.getContext("2d");
    // Draw a more complex shape
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fillStyle = "red";
    ctx.fill();

    // Add some text
    ctx.font = "14px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Canvas Example", 10, 90);
  }, [simpleCanvasRef]);

  return (
    <Container title={"<canvas> Tag"} full>
      <Card>
        <h2 className="text-xl">Basic Canvas</h2>
        <canvas
          ref={simpleCanvasRef}
          width="200"
          height="100"
          aria-label="Canvas with red rectangle"
          role="img"
        ></canvas>
        <figcaption>Canvas with red rectangle</figcaption>
      </Card>
    </Container>
  );
}

export default CanvasPage;
