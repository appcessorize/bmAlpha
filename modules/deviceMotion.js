export function deviceMotionFuncWrapper(){
    let deviceMotion = document.getElementById("deviceMotion");

    let xyz = document.getElementById('xyz')


    deviceMotion.addEventListener("click", deviceMotionFunction);

    function deviceMotionFunction() {
      // feature detect
      console.log("clicked");
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission()
          .then((permissionState) => {
            if (permissionState === "granted") {
          handleMotionEvent()
            }
          })
          .catch(console.error);
      } else {
        // handle regular non iOS 13+ devices
        handleMotionEvent()
      }
    }

    function handleMotionEvent() {
      window.addEventListener("devicemotion", (event) => {
        var x = event.accelerationIncludingGravity.x;
        var y = event.accelerationIncludingGravity.y;
        var z = event.accelerationIncludingGravity.z;
    xyz.innerText=`x: ${x.toFixed(2)} y: ${y.toFixed(2)} z: ${z.toFixed(2)}`

      });

    

      // Do something awesome.
    }

    window.addEventListener("devicemotion", handleMotionEvent, true);


}