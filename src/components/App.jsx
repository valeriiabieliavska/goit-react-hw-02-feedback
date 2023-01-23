import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Section from './Section/Section';
// import Statistics from './Statistics/Statistics';
// import Notification from './Notification/Notification';



export class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  
  onLeaveFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  }
  
  
  
  render() {
    return (
      <>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>

      </>
    )
  }
};
