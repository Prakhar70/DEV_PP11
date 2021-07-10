let videoelement=document.querySelector("video");
let recordButton=document.querySelector("#inner-record");
let capturePhoto=document.querySelector("#inner-capture");
let recordingState=false;
let mediaRecorder
(async function(){
    let constraint={video:true};
    let mediaStream =await navigator.mediaDevices.getUserMedia(constraint);
    videoelement.srcObject=mediaStream;
    mediaRecorder=new MediaRecorder(mediaStream);
    mediaRecorder.onstart=function(){
        console.log("Inside on start");
    };
    mediaRecorder.ondataavailable=function(e){
        console.log("inside on data available");
        console.log(e.data);
        let videoObject=new Blob([e.data],[type="video/mp4"]);
        console.log(videoObject);
        let videoURL=URL.createObjectURL(videoObject);
        let atag=document.createElement("a");
        atag.download=`video${Date.now()}.mp4`;
        atag.href=videoURL;
        atag.click()

    };
    mediaRecorder.onstop=function(){
        console.log("inside on stop");
    };
    recordButton.addEventListener("click",function(){
        if(recordingState){
            mediaRecorder.stop();
            recordButton.classList.remove("animate-record");
            
            recordingState=false;
        }
        else{
            mediaRecorder.start();
           recordButton.classList.add("animate-record");
            recordingState=true;
        }
    });
    capturePhoto.addEventListener("click",function(){
        capturePhoto.classList.add("animate-capture");
        setInterval(function(){
            capturePhoto.classList.remove("animate-capture");
        },1000);
        let canvas=document.createElement("canvas");
        canvas.width=640;
        canvas.height=480;

        let ctx=canvas.getContext("2d");
        ctx.drawImage(videoelement,0,0);
        let atag=document.createElement("a");
        atag.download=`Image${Date.now()}.jpg`;
        atag.href=canvas.toDataURL("image/jpg");
        atag.click();
        // capturePhoto.classList.remove("animate-capture");
        })
})();