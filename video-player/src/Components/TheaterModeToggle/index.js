import React from "react"

export default class MuteButton extends React.Component{
    render(){
        return(
            <button className={`theater ${this.props.isTheaterMode ? "theaterMode" : ""} ${this.props.isFullScreen ? "noDisplay" : ""}`}
                onClick={this.props.toggleTheaterMode}
            >
                {this.props.isTheaterMode && !this.props.isFullScreen && (
                <svg class="tall" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"/>
                </svg>
                )
                }
                {!this.props.isTheaterMode && !this.props.isFullScreen && (
                <svg class="wide" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"/>
                </svg>
                )
                }
            </button>
        )
    }
}