
export function timerFuncWrapper(){


    let timer = document.getElementById('timer');
    timer.innerText ="timer hookedup"
    let currentTime = 1000  



//timer
function updateTimer(){
    currentTime --;
    currentTime >= 1? timer.innerText = convertToSeconds(currentTime):timer.innerText ="finished"
}
    setInterval(updateTimer,1000)



    //convert to minutes

    function convertToSeconds(seconds){

 
        var mins = Math.floor(seconds/60);


        if(mins <10){

            mins= '0' + mins
        }
        var secs = seconds % 60;
        if( secs <10 ){

            secs = '0' + secs
        }
        return mins + ':' + secs;
    }
}

