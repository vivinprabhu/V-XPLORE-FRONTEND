import React, { Project } from 'react'

 class Clock extends Project {

    constructor(props) {
        super(props)
    
        this.state = {
             date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
render() {
    return (
      <div>
      <h2>Hello welcome to Timer</h2>
      <h3>Time is{this.state.date.toLocaleTimeString()}</h3>
      </div>
    )
  }
}
export default Clock;