export function dmFuncWrapper(){
    let deviceMotion = document.getElementById("deviceMotion");
    let dmstatus = document.getElementById("dmstatus");
    let dmdata = document.getElementById("dmdata");
    let dmdataX = document.getElementById("dmdataX");
    let dmdataY = document.getElementById("dmdataY");
    let dmdataZ = document.getElementById("dmdataZ");
    deviceMotion.addEventListener("click", deviceMotionFunction);

    function deviceMotionFunction() {
      // feature detect

      console.log("clicked");
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission()
          .then((permissionState) => {
            if (permissionState === "granted") {
              window.addEventListener("devicemotion", (event) => {
                handleMotionEvent(event);
                dmstatus.innerText = "devicemotion status: WORKING ✔️";
              });
            }
          })
          .catch(console.error);
      } else {
        // handle regular non iOS 13+ devices
      }
    }

    function handleMotionEvent(event) {
      console.log("called");
      var x = event.accelerationIncludingGravity.x;
      var y = event.accelerationIncludingGravity.y;
      var z = event.accelerationIncludingGravity.z;

      dmdataX.innerText = `motionData x: ${x.toFixed(2)} `;
      dmdataY.innerText = `motionData y: ${y.toFixed(2)} `;
      dmdataZ.innerText = `motionData z: ${z.toFixed(2)} `;

      // Do something awesome.
    }

    window.addEventListener("devicemotion", handleMotionEvent, true);


}