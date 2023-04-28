import React from "react";

function msConverter(ms){

    let seconds = (ms / 1000).toFixed(2);
    let minutes = (ms / (1000 * 60)).toFixed(2);
    let hours = (ms / (1000 * 60 * 60)).toFixed(2);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(2);

    if (seconds < 60){
        return seconds + " seconds";
    }
    else if (minutes < 60){
        return minutes + " minutes";
    } 
    else if (hours < 24){
        return hours + " hours";
    }
    else {
        return days + " days"
    }

}

class Clock extends React.Component {
	constructor(props){
		super(props);
		this.state = { 
            time: new Date(),
            timeInMS: null,
            timeOutMS: null,
        };
	}

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick()
        },1000);
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    clockIn = () => {
        this.setState({
            timeIn: this.state.time.toLocaleTimeString(),
            timeInMS: new Date(this.state.time).getTime()
        });
    }

    clockOut = () => {
        this.setState({
            timeOut: this.state.time.toLocaleTimeString(),
            timeOutMS: new Date(this.state.time).getTime(),
        });
    }

	render() {
        const { timeIn, timeOut, timeOutMS, timeInMS } = this.state;
        return(
            <div className="clockContainer">
                <div className="clockTitle">
                    <h1>{this.state.time.toLocaleTimeString()}</h1>
                    <h2>{this.state.time.toDateString()}</h2>
                </div>
                    
                <div>
                    <div className="timeContainer">
                        <p className="timeText"><strong>Time In:</strong> {timeIn}</p>
                        <p className="timeText"><strong>Time Out:</strong> {timeOut}</p>
                        <p className="timeText"><strong>Time Rendered:</strong> {' '}
                            {timeOutMS && timeInMS && (
                                <>{msConverter(timeOutMS - timeInMS)}</>
                            )} 
                        </p>
                    </div>

                    <div className="btnContainer">
                        <div>
                            <button
                                className="btnTime"
                                onClick = {this.clockIn}>
                                    Time In
                            </button>
                        </div>
                        <div>

                        <button
                            className="btnTime"
                            onClick = {this.clockOut}>
                                Time Out
                        </button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
export default Clock;