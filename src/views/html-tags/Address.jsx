import { Container, Card } from "../../components";

function Address() {
  return (
    <Container title="Address Tag">
      <Card>
        <div className="flex flex-col gap-1">
          <h6>Basic Address</h6>
          <address className="flex flex-col gap-2 w-60">
            <a href="mailto:jim@example.com">jim@example.com</a>
            <a href="tel:+14155550132">+1 (415) 555‑0132</a>
          </address>
          <p>Address can be</p>
        </div>
      </Card>
    </Container>
  );
}

export default Address;
