import { useContext, useRef } from "react";
import { Button, Container, Card } from "../../components";
import { ModalContext } from "../../providers";

function DialogPage() {
  const dialogRef = useRef(null);
  function isClickOutside(e) {
    const rect = dialogRef.current.getBoundingClientRect();
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.bottom &&
      rect.left <= e.clientX &&
      e.clientX <= rect.right;
    if (!isInDialog) {
      handleOpen(false);
    }
  }
  function handleOpen(open) {
    const dialog = dialogRef.current;
    if (open) {
      dialog.showModal();
      dialog.addEventListener("click", isClickOutside);
    } else {
      dialog.close();
    }
  }
  const formDialogRef = useRef(null);
  function handleFormDialogOpen(open) {
    const dialog = formDialogRef.current;
    if (open) {
      dialog.showModal();
      const select = dialog.querySelector("select");
      const confirmButton = dialog.querySelector("button[type=submit]");
      confirmButton.addEventListener("click", () => {
        alert(`You selected: ${select.value}`);
        dialog.close(select.value);
        console.log(dialog.returnValue);
      });
    } else {
      dialog.close();
    }
  }
  const setCurrentModal = useContext(ModalContext);
  function handleModalOpen() {
    setCurrentModal({
      title: "Alert",
      message: "This is an alert modal",
      confirmButtonText: "Understood",
      onClose: () => setCurrentModal(null),
    });
  }
  return (
    <Container title={"<dialog> Tag"} full>
      <Card>
        <h2 className="text-xl">Default Dialog</h2>
        <dialog ref={dialogRef}>
          <p>Dialog Content</p>
          <button
            autoFocus
            className="focus:outline-blue-400"
            onClick={() => handleOpen(false)}
          >
            Close
          </button>
        </dialog>
        <Button onClick={() => handleOpen(true)}>Open Dialog</Button>
      </Card>
      <Card>
        <h2 className="text-xl">Form Dialog</h2>
        <dialog id="myDialog" ref={formDialogRef}>
          <form method="dialog">
            <label>
              Favorite animal:
              <select name="favAnimal" required autoFocus>
                <option></option>
                <option>Brine shrimp</option>
                <option>Red panda</option>
                <option>Spider monkey</option>
              </select>
            </label>
            <menu className="flex gap-2">
              <button type="">cancel</button>
              <button id="submit" type="submit">
                submit
              </button>
            </menu>
          </form>
        </dialog>
        <Button onClick={() => handleFormDialogOpen(true)}>Open</Button>
      </Card>
      <Card>
        <h2 className="text-xl">Modal Context - from React Portal</h2>
        <Button onClick={handleModalOpen}>Open Alert Modal</Button>
      </Card>
    </Container>
  );
}

export default DialogPage;
