export function deviceOrientationFuncWrapper(){


    let deviceOrientation = document.getElementById("deviceOrientation");

    let alphaBetaGamma = document.getElementById('alphaBetaGamma')
    // let dodatAbsolute = document.getElementById("dodatAbsolute");


    deviceOrientation.addEventListener("click", deviceOrientationFunction);
    function deviceOrientationFunction() {

      // feature detect
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission()
          .then((permissionState) => {
            if (permissionState === "granted") {
            
      handleOrientationEvent()
            }
          })
          .catch(console.error);
      } else {
        // handle regular non iOS 13+ devices
  
        if (window.DeviceOrientationEvent) {

          handleOrientationEvent()
        
        }
      }
    }

    function handleOrientationEvent(event) {


      window.addEventListener("deviceorientation", (event) => {
     
        alphaBetaGamma.innerText = `alpha: ${event.gamma.toFixed(2)},Beta: ${event.alpha.toFixed(2)},gamma: ${event.beta.toFixed(2)}`;
  
    
      });
    
      }

}