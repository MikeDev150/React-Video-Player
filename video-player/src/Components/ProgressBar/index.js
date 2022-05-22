import React from "react"

export default class ProgressBar extends React.Component{
    render(){
        return(
            <>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={this.props.progress}
                    onChange={(e) => this.props.onChange(e)}
                />
            </>
        );
    }
}