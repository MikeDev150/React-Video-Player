import React from "react"

export default class PlayPauseToggle extends React.Component{
    render(){
        return(
            <>
                {/* Play/Pause Btn */}
                <div className="actions">
                    <button onClick={this.props.togglePlay}>
                    {!this.props.isPlaying ? (
                        <svg className="playIcon" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                        </svg>
                    ) : (
                        <svg className="pauseIcon" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                        </svg>
                    )}
                    </button>
                </div>
            </>
        );
    }
}