import { useEffect, useRef } from "react";
import { Container, Card } from "../../components";
import dance from "../../assets/audio/dance.mp3";

function AudioPage() {
  const audioRef = useRef(null);
  function logger(eventName, event) {
    console.log(eventName, event);
  }
  useEffect(() => {
    // add event listener to the audio element
    const audio = audioRef.current;
    audio.addEventListener("play", (event) => {
      console.log("play", event);
    });
    audio.addEventListener("pause", (event) => {
      console.log("pause", event);
    });
    audio.addEventListener("ended", (event) => {
      console.log("ended", event);
    });
    audio.addEventListener("canplay", (event) => {
      console.log("canplay", event);
    });
    audio.addEventListener("canplaythrough", (event) => {
      console.log("canplaythrough", event);
    });
    audio.addEventListener("timeupdate", (event) => {
      console.log("timeupdate", event);
    });
    audio.addEventListener("volumechange", (event) => {
      console.log("volumechange", event);
    });
    audio.addEventListener("seeked", (event) => {
      console.log("seeked", event);
    });
    audio.addEventListener("seeking", (event) => {
      console.log("seeking", event);
    });
    return () => {};
  }, [
    // add the ref to the dependency array
    audioRef,
  ]);
  return (
    <Container title="Audio">
      <Card>
        <h2>Simple Audio</h2>
        <figure>
          <audio controls src={dance} ref={audioRef} />
          <figcaption>音楽素材提供:Music-Note.jp</figcaption>
        </figure>
      </Card>
      <Card>
        <h2>Loop</h2>
        <figure>
          <audio controls loop src={dance} />
          <figcaption>音楽素材提供:Music-Note.jp</figcaption>
        </figure>
      </Card>
      <p role="complementary">
        音楽素材提供:Music-Note.jp
        <br />
        URL:http://www.music-note.jp/ <br />
        運営：株式会社ピクセル <br />
        URL:http://pixel-co.com/
      </p>
    </Container>
  );
}

export default AudioPage;
