import React from "react"

export default class MuteButton extends React.Component{
    render(){
        return(
            <select
                className="velocity"
                value={this.props.speed}
                onChange={(e) => this.props.handleVideoSpeed(e)}
            >
                <option value="0.50">0.50x</option>
                <option value="1">1x</option>
                <option value="1.25">1.25x</option>
                <option value="2">2x</option>
            </select>
        )
    }
}
