import { useState } from "react";
import YouTube from "react-youtube";
import HomeVideoControls from './HomeVideoControls';

const HomeVideo = () => {

    const [isPaused, setIsPaused] = useState(false);
    const [player, setPlayer] = useState();


    const youTubeProps = {
        videoId: "YXyFZdws65Q",
        opts: {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                mute: 1,
                rel: 0,
                Origin: 'http://localhost:8100'
            }
        }
    }


    const onReady = (event) => {
        event.target.playVideo();
        setPlayer(event);
    }

    const onPlay = () => {
        player && player.target && player.target.playVideo();
        setIsPaused(false)
    }

    const toggleMute = () => {

        !!player.target.isMuted() ? player.target.unMute() : player.target.mute();
    }

    const onPause = () => {
        player.target.pauseVideo();
        setIsPaused(true)
    }

    const onStateChange = (event) => {
        /*console.log(event.target.playerState)*/
    }

    return (
        <>
            <div className="video-background">
                {/* <div class="video-foreground"> */}
                {/* <iframe className="background-video" src="https://www.youtube.com/embed/YXyFZdws65Q?controls=0&start=220&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=YXyFZdws65Q&playsinline=6" frameborder="0" autoplay="1" allowfullscreen></iframe> */}
                <YouTube
                    id="background-yt-video"
                    videoId={youTubeProps.videoId}
                    className="background-video"
                    containerClassName="video-foreground"
                    opts={youTubeProps.opts}
                    onReady={onReady}
                    // onPlay={onPlay}
                    // onPause={onPause}
                    onStateChange={onStateChange}
                // videoId={string}                  // defaults -> null
                // id={string}                       // defaults -> null
                // className={string}                // defaults -> null
                // containerClassName={string}       // defaults -> ''
                // opts={obj}                        // defaults -> {}
                // onReady={func}                    // defaults -> noop
                // onPlay={func}                     // defaults -> noop
                // onPause={func}                    // defaults -> noop
                // onEnd={func}                      // defaults -> noop
                // onError={func}                    // defaults -> noop
                // onStateChange={func}              // defaults -> noop
                // onPlaybackRateChange={func}       // defaults -> noop
                // onPlaybackQualityChange={func}    // defaults -> noop
                />
                {/* </div> */}

            </div>
            <HomeVideoControls onPlay={onPlay} onPause={onPause} isPaused={isPaused} toggleMute={toggleMute} />
        </>
    );
}

export default HomeVideo;