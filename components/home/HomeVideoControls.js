import { useState } from "react";

const HomeVideoControls = ({ onPlay, onPause, isPaused, toggleMute }) => {

    const [isMuted, setIsMuted] = useState(true);

    const onMute = () => {
        toggleMute();
        setIsMuted(!isMuted)
    }
    return (
        <div className="home-video-control-buttons">
            <svg className="defs">
                <defs>
                    <path id="pause-button-shape" d="M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z M21,33.064c0,2.201-1.688,4-3.75,4
	s-3.75-1.799-3.75-4V14.934c0-2.199,1.688-4,3.75-4s3.75,1.801,3.75,4V33.064z M34.5,33.064c0,2.201-1.688,4-3.75,4
	s-3.75-1.799-3.75-4V14.934c0-2.199,1.688-4,3.75-4s3.75,1.801,3.75,4V33.064z" />
                    <path id="play-button-shape" d="M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z M31.672,26.828l-9.344,9.344
	C20.771,37.729,19.5,37.2,19.5,35V13c0-2.2,1.271-2.729,2.828-1.172l9.344,9.344C33.229,22.729,33.229,25.271,31.672,26.828z" />



                </defs>
            </svg>

            <div className="buttons">
                {isPaused ? (
                    <svg className="button" id="play-button" onClick={(e) => onPlay(e)}>
                        <use xlinkHref="#play-button-shape" />
                    </svg>
                ) : (
                    <svg className="button" id="pause-button" onClick={(e) => onPause(e)}>
                        <use xlinkHref="#pause-button-shape" />
                    </svg>
                )}
                <button className="mute" onClick={onMute}>
                    <svg className="button" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" id="_24x24_On_Light_Sound-Off" data-name="24x24/On Light/Sound-Off">
                        <rect id="view-box" width="24" height="24" fill="none" />
                        <path id="Shape" d="M5.12,15.573a7.786,7.786,0,0,1-1.507-1.59H2.751A2.754,2.754,0,0,1,0,11.232V6.269a2.754,2.754,0,0,1,2.751-2.75H3.6A7.288,7.288,0,0,1,5.053,1.931,8.67,8.67,0,0,1,10.75,0,.751.751,0,0,1,11.5.75v16a.751.751,0,0,1-.751.75A8.681,8.681,0,0,1,5.12,15.573ZM1.5,6.269v4.964a1.252,1.252,0,0,0,1.251,1.25H4.028a.752.752,0,0,1,.658.389A4,4,0,0,0,5,13.322a6.74,6.74,0,0,0,1.069,1.087A7.09,7.09,0,0,0,10,15.969V1.529A7,7,0,0,0,6.009,3.086,6.166,6.166,0,0,0,4.985,4.163,3.6,3.6,0,0,0,4.7,4.6a.748.748,0,0,1-.67.413H2.751A1.253,1.253,0,0,0,1.5,6.269ZM15,17.059A.751.751,0,0,1,15,16,10.249,10.249,0,0,0,15,1.5.75.75,0,1,1,16.059.442a11.749,11.749,0,0,1,0,16.617.751.751,0,0,1-1.061,0ZM13.17,14.23a.749.749,0,0,1,0-1.06,6.25,6.25,0,0,0,0-8.839A.75.75,0,1,1,14.23,3.27a7.75,7.75,0,0,1,0,10.96.749.749,0,0,1-1.06,0Z" transform="translate(2.25 3.25)" fill="#abadb7" />
                        <path className={`${!isMuted ? 'hiddenSvg' : ''}`} id="Shape-2" data-name="Shape" d="M2.626.657.006,21.551a.75.75,0,0,0,1.488.187L4.115.843A.75.75,0,0,0,2.626.657Z" transform="translate(2.458 5.527) rotate(-45)" fill="#141124" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default HomeVideoControls;