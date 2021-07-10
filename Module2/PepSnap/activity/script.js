let videoelement=document.querySelector("video");
let recordButton=document.querySelector("#record");
let capturePhoto=document.querySelector("#capture");
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
            recordButton.innerHTML="Record Video";
            recordingState=false;
        }
        else{
            mediaRecorder.start();
            recordButton.innerHTML="Recording...";
            recordingState=true;
        }
    });
    capturePhoto.addEventListener("click",function(){
        let canvas=document.createElement("canvas");
        canvas.width=640;
        canvas.height=480;

        let ctx=canvas.getContext("2d");
        ctx.drawImage(videoelement,0,0);
        let atag=document.createElement("a");
        atag.download=`Image${Date.now()}.jpg`;
        atag.href=canvas.toDataURL("image/jpg");
        atag.click();
        })
})();