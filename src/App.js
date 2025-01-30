import React from 'react';
import './App.css';
import {
  applyPolyfills,
  defineCustomElements,
} from "@microblink/blinkid-in-browser-sdk/ui/loader";

function App() {
  const el = React.useRef(null);
  React.useEffect(() => {
    applyPolyfills().then(() => {
      defineCustomElements().then(() => {
        el.current.licenseKey = "sRwCABJuZm9zY2FuLnZlcmNlbC5hcHAGbGV5SkRjbVZoZEdWa1QyNGlPakUzTXpneU5qUXlNelEwTkRJc0lrTnlaV0YwWldSR2IzSWlPaUk1WldRMU56VmpOQzFoTnpNeUxUUTBaVEV0WWpsbFpTMW1ZMkk1TURZd09HTmhaRGNpZlE9PYpQpPco/g+uTCr68cMeqKjcFtpLOrg1EXMDYN0QByjVoCS7qOCxqMMLHNzcmyHFKMTB7/XuLUVlpGXq53uCqhjYUd9ari3YH4ACBBdMxVp8RD+zxGhZw37b27rJ3pYvPp68fJxUtfUNjYL3yVzGrVGA1GM=";
        el.current.recognizers = ["BlinkIdSingleSideRecognizer"];

        // Engine location depends on the actual location of WebAssembly resources
        el.current.engineLocation = window.location.origin + "/resources/";
        // el.current.engineLocation =
        //   window.location.origin + `/resources/blinkid.worker.min.js`;

        el.current.addEventListener("ready", (ev) => {
          console.log("ready", ev.details);
        });

        el.current.addEventListener("scanSuccess", (ev) => {
          console.log("scanSuccess", ev.details);
        });

        el.current.addEventListener("scanError", (ev) => {
          console.log("scanError", ev.details);
        });

        el.current.addEventListener("fatalError", (ev) => {
          console.log("fatalError", ev.details);
        });
      });
    });
  }, []);

  return (
    <>
    <blinkid-in-browser ref={el}></blinkid-in-browser>
    {/* <button>Open id scanner</button> */}
    </>
  );
}

export default App;
