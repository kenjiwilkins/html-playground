import { useEffect, useMemo, useRef, useState } from "react";
import "./progress.css";
import Button from "@/components/Button";

function Progress() {
  const [progress, setProgress] = useState(60);
  function handleProgressChange(number) {
    setProgress(Math.min(Math.max(number, 0), 100));
  }
  const [loadState, setLoadState] = useState(0);
  const intervalRef = useRef(null);
  function updateProgress() {
    setLoadState(0);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setLoadState((prevState) => {
        if (prevState < 100) {
          return prevState + 10;
        } else {
          clearInterval(intervalRef.current);
          return prevState;
        }
      });
    }, 1000);
  }
  const isLoadStateComplete = useMemo(
    () => loadState === 0 || loadState === 100,
    [loadState]
  );

  // draggable progress bar
  const [dragProgress, setDragProgress] = useState(0);
  const progressBarElement = useRef(null);
  function handleDrag(e) {
    const rect = progressBarElement.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const progress = (offsetX / rect.width) * 100;
    setDragProgress(progress);
  }
  function handleDragEnd(e) {
    document.removeEventListener("pointermove", handleDrag);
    document.removeEventListener("pointerup", handleDragEnd);
  }
  useEffect(() => {
    if (!progressBarElement.current) return;
    function handleDragStart(e) {
      const rect = progressBarElement.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const progress = (offsetX / rect.width) * 100;
      setDragProgress(progress);
      document.addEventListener("pointermove", handleDrag);
      document.addEventListener("pointerup", handleDragEnd);
    }
    progressBarElement.current.addEventListener("pointerdown", handleDragStart);
    return () => {
      progressBarElement.current.removeEventListener(
        "pointerdown",
        handleDragStart
      );
    };
  }, []);

  return (
    <div className="flex flex-col items-center align-center">
      <h2>Progress with Label Element</h2>
      <label htmlFor="progress-1" className="max-w-fit">
        {progress}%
      </label>
      <div className="flex items-center gap-2">
        <Button
          className="p-2 bg-gray-900 text-white rounded"
          onClick={() => handleProgressChange(progress - 10)}
        >
          -10
        </Button>
        <progress id="progress-1" value={progress} max="100"></progress>
        <Button
          className="p-2 bg-gray-900 text-white rounded"
          onClick={() => handleProgressChange(progress + 10)}
        >
          +10
        </Button>
      </div>
      <div className="flex flex-col items-center align-center">
        <h2>Progress without value</h2>
        <div
          className="flex items-center gap-2"
          style={{ width: "20vw" }}
          aria-describedby="progress-2"
          aria-busy={!isLoadStateComplete}
        >
          <Button
            className="p-2 bg-gray-900 disabled:bg-gray-300  text-white rounded"
            disabled={!isLoadStateComplete}
            onClick={() => updateProgress()}
          >
            Start
          </Button>
          {!isLoadStateComplete && (
            <progress
              aria-label="file load progress"
              id="progress-2"
            ></progress>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center align-center">
        <h2>Custom CSS</h2>
        <div className="flex items-center gap-2">
          <progress className="progress" value="60" max="100"></progress>
        </div>
      </div>
      <div className="flex flex-col items-center align-center">
        <h2>Draggable</h2>
        <div className="flex items-center gap-2">
          <progress
            ref={progressBarElement}
            className="progress progress-bar"
            value={dragProgress}
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
}

export default Progress;
