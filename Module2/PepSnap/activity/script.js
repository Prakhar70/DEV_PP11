let videoElement=document.querySelector("video");
let recordbutton=document.querySelector("#record");
let recordingState=false;
let mediaRecorder;
// let finalvideo;

(async function(){
let constraint={video:true};
let mediaStream=await navigator.mediaDevices.getUserMedia(constraint);
videoElement.srcObject=mediaStream;
mediaRecorder=new MediaRecorder(mediaStream);
mediaRecorder.onstart =function(){
    // console.log(e);
    console.log("inside on start");
    //blob is fileobj(raw data)

};
mediaRecorder.ondataavailable=function(e){
    console.log("inside on data available");
    console.log(e.data);
    let videoObject=new Blob([e.data],{type:"video/mp4"});
    // console.log(videoObject);
   let videoURL=URL.createObjectURL(videoObject);
   let aTag=document.createElement("a");
   aTag.download=`video${Date.now()}.mp4`;
   aTag.href=videoURL;
   aTag.click();
   

};
mediaRecorder.onstop=function(){
    console.log("inside on stop");

}
recordbutton.addEventListener("click",function(){
    if(recordingState){
        mediaRecorder.stop();
        recordbutton.innerHTML="record Video"
        recordingState=false;

    }
    else{
        mediaRecorder.start();
        recordbutton.innerHTML="recording.."
        recordingState=true;
    }

})
})();


