import { Component } from "react";

class DigitalClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: this.getTimeString(new Date()),
    };

    setInterval(() => {
      this.setState({
        time: this.getTimeString(new Date()),
      });
    }, 1000);
  }

  getTimeString(time) {
    return `
            ${time.getHours() < 10 ? "0" + time.getHours() : time.getHours()}:
            ${
              time.getMinutes() < 10
                ? "0" + time.getMinutes()
                : time.getMinutes()
            }:
            ${
              time.getSeconds() < 10
                ? "0" + time.getSeconds()
                : time.getSeconds()
            }
        `;
  }

  render() {
    return <div className="clock">{this.state.time}</div>;
  }
}

export default DigitalClock;
