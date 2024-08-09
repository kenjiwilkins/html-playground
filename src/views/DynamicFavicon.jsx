import { useEffect, useState } from "react";
import defaultIcon from "../assets/default.svg";
import successIcon from "../assets/success.svg";
import failIcon from "../assets/fail.svg";
import defaultRedIcon from "../assets/default-red.svg";
import { useRef } from "react";

function DynamicFavicon() {
  const [mode, setMode] = useState("default");
  const isSetmodeSame = (givenMode) => {
    return mode === givenMode;
  };
  const intervalRef = useRef(null);
  function updateFavicon() {
    clearInterval(intervalRef.current);
    let link = document.querySelector("link[rel*='icon']");
    if (link) {
      switch (mode) {
        case "default":
          link.href = defaultIcon;
          break;
        case "success":
          link.href = successIcon;
          break;
        case "fail":
          link.href = failIcon;
          break;
        default:
          link.href = defaultIcon;
      }
    }
  }
  function updateFaviconRed() {
    let link = document.querySelector("link[rel*='icon']");
    if (link) {
      let toggle = false;
      intervalRef.current = setInterval(() => {
        link.href = toggle ? defaultIcon : defaultRedIcon;
        toggle = !toggle;
      }, 1000);
    }
  }

  useEffect(() => {
    updateFavicon();
  }, [mode]);
  return (
    <>
      <div className="flex gap-2">
        <button
          disabled={isSetmodeSame("default")}
          onClick={() => setMode("default")}
        >
          default
        </button>
        <button
          disabled={isSetmodeSame("success")}
          onClick={() => setMode("success")}
        >
          success
        </button>
        <button
          disabled={isSetmodeSame("fail")}
          onClick={() => setMode("fail")}
        >
          fail
        </button>
        <button onClick={updateFaviconRed}>interval</button>
      </div>
    </>
  );
}

export default DynamicFavicon;
