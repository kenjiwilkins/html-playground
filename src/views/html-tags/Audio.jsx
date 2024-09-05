import { useEffect, useMemo, useRef, useState } from "react";
import { Container, Card } from "../../components";
import dance from "../../assets/audio/dance.mp3";

function AudioPage() {
  const audioRef = useRef(null);
  const customAudioRef = useRef(null);
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
  }, [audioRef]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const currentTime = useMemo(() => {
    // format time to minutes and seconds
    const minutes = (time/60).toFixed(0).toString().padStart(2, '0');
    const seconds = (time % 60).toFixed(0).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  },[time])
  const totalDuration = useMemo(() => {
    // format time to minutes and seconds
    const minutes = (duration / 60).toFixed(0).toString().padStart(2, '0');
    const seconds = (duration % 60).toFixed(0).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  },[duration])
  function play() {
    const audio = customAudioRef.current;
    setIsPlaying(true);
    audio.play();
  }
  function pause() {
    const audio = customAudioRef.current;
    setIsPlaying(false);
    audio.pause();
  }
  useEffect(() => {
    const audio = customAudioRef.current;
    audio.addEventListener("timeupdate", () => {
      setTime(audio.currentTime);
      setDuration(audio.duration);
    });
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
    });
    return () => {
      audio.removeEventListener("timeupdate", () => {
        setTime(audio.currentTime);
        setDuration(audio.duration);
      });
    };
  }, [customAudioRef]);

  return (
    <Container title="Audio">
      <Card>
        <h2>Simple Audio</h2>
        <figure>
          <audio controls src={dance} ref={audioRef} />
          <figcaption>音楽素材提供:Music-Note.jp</figcaption>
        </figure>
        <p>Please see console to chase events</p>
      </Card>
      <Card>
        <h2>Loop</h2>
        <figure>
          <audio controls loop src={dance} />
          <figcaption>音楽素材提供:Music-Note.jp</figcaption>
        </figure>
      </Card>
      <Card>
        <h2>AutoPlay</h2>
        <figure>
          <audio controls autoPlay src={dance} muted />
          <figcaption>音楽素材提供:Music-Note.jp</figcaption>
        </figure>
        <p>AutoPlay only works when muted</p>
      </Card>
      <Card>
        <h2>Preload none</h2>
        <figure>
          <audio controls preload="none" src={dance} />
          <figcaption>音楽素材提供:Music-Note.jp</figcaption>
        </figure>
        <p>
          Preload="none" will not load the audio file until the user clicks play
        </p>
      </Card>
      <Card>
        <h2>Custom Player Controller</h2>
          <div className="flex justify-between items-center px-8 rounded-full w-96 h-10 bg-slate-900 text-gray-50">
            {isPlaying ? (
              <button className="rounded" onClick={pause}>Pause</button>
            ) : (
              <button className="rounded" onClick={play}>Play</button>
            )}
            <div className="flex justify-start">
              <span>{currentTime}</span>
              <span className="px-2">{"/"}</span>
              <span>{totalDuration}</span>
            </div>
          </div>
          <audio ref={customAudioRef} src={dance}></audio>
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
