import { useEffect, useState } from "react";
import defaultIcon from "../assets/default.svg";
import successIcon from "../assets/success.svg";
import failIcon from "../assets/fail.svg";
import defaultRedIcon from "../assets/default-red.svg";
import Button from "@/components/Button";
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
      <div className="flex flex-col gap-2">
        <h1>Dynamic Favicon</h1>
        <div className="flex gap-2">
          <Button
            disabled={isSetmodeSame("default")}
            onClick={() => setMode("default")}
          >
            default
          </Button>
          <Button
            disabled={isSetmodeSame("success")}
            onClick={() => setMode("success")}
          >
            success
          </Button>
          <Button
            disabled={isSetmodeSame("fail")}
            onClick={() => setMode("fail")}
          >
            fail
          </Button>
          <Button onClick={updateFaviconRed}>interval</Button>
        </div>
      </div>
    </>
  );
}

export default DynamicFavicon;
