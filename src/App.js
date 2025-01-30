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
        el.current.licenseKey = "sRwCAAlsb2NhbGhvc3QGbGV5SkRjbVZoZEdWa1QyNGlPakUzTXpZeU5EUTBNemsxTlRJc0lrTnlaV0YwWldSR2IzSWlPaUpqTTJaaE4yUXhZUzB5WVdFd0xUUXpNamN0WWpWa015MDJNelUzT0dFd01UZ3laamNpZlE9PR6roEjYNQj+4yLGt4u0s3zz5JMJpemUoBmV2m9smhxdxVOqBYkZy9VJ7jlvCSwVRgKHnyKHI7B6JTv2KiRgnrPMLr9O9mmWV3cMzv0b7Rw5Rp2XbZM0P3wAvwW0UNSuGS0BLOf/euDvyjtwGiMy1D7qgfk=";
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
