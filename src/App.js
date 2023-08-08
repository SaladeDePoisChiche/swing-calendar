import { Component } from "react";
import "./App.css";
import Calendar from "./components/Calendar";

class App extends Component {
  render() {
    const month = {
      monthInfo: {
        firstDay: new Date("07/01/2023"),
      },
      events: [
        {
          key: 1,
          date: new Date("07/01/2023"),
          eventName: "event 1",
        },
        {
          key: 2,
          date: new Date("07/13/2023"),
          eventName: "event 2",
        },
        {
          key: 3,
          date: new Date("07/22/2023"),
          eventName: "event 3",
        },
      ],
    };
    return (
      <div className="App">
        <Calendar month={month} />
      </div>
    );
  }
}

export default App;
