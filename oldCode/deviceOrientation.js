export function doFuncWrapper(){


    let deviceOrientation = document.getElementById("deviceOrientation");
    let dostatus = document.getElementById("dostatus");
    let dodatAlpha = document.getElementById("dodatAlpha");
    let dodataBeta = document.getElementById("dodataBeta");
    let dodataGamma = document.getElementById("dodataGamma");
    let dodatAbsolute = document.getElementById("dodatAbsolute");

    let doWhichOne = document.getElementById("doWhichOne");
    deviceOrientation.addEventListener("click", deviceOrientationFunction);
    function deviceOrientationFunction() {
      console.log("clicked");
      // feature detect
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission()
          .then((permissionState) => {
            if (permissionState === "granted") {
              console.log("yo");
              window.addEventListener("deviceorientation", (event) => {
                dostatus.innerText = "devicOrientation status: WORKING ✔️";
                handleOrientationEvent(event);
                console.log("listener added");
              });
            }
          })
          .catch(console.error);
      } else {
        // handle regular non iOS 13+ devices
        dostatus.innerText = "deviceOrientation status:NOT WORKING XXXXX";
        if (window.DeviceOrientationEvent) {
          dostatus.innerText = "DeviceOrientationEvent exists";

          window.addEventListener("deviceorientation", (event) => {
            doWhichOne.innerText = "listener added";
            console.log("listener added");
            handleOrientationEvent(event);
          });
        }
      }
    }

    function handleOrientationEvent(event) {
        // doWhichOne.innerText = ` alpha: ${event.alpha} beta: ${event.beta} gamma: ${event.gamma} absolute:${event.absolute}`;
  
        // dostatus.innerText = "  handleOrientationEvent triggered   ";
  
        doGamma.innerText = `alpha: ${event.gamma.toFixed(2)}`;
        doAlpha.innerText = `alpha: ${event.alpha.toFixed(2)}`;
        doBeta.innerText = `gamma: ${event.beta.toFixed(2)}`;
  
        // Do something awesome.
      }

}