
function VideoHero({src, overlaycontent}) {
  return (

    <div class="video-background" >
        <video autoPlay loop muted playsinline>
            <source src={src} type="video/mp4"/> 
            Your browser does not support the video tag.
        </video>
        <div class="overlay-content" >
            <>
                {overlaycontent}
            
            </>
        </div>
    </div>


  );
}



export default VideoHero;
