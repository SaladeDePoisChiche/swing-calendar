import dayjs from "dayjs";
import Table from "react-bootstrap/Table";
import CalendarDay from "./CalendarDay";

const Calendar = (props) => {
  console.log(props);
  const firstDay = props.month.monthInfo.firstDay;
  const events = props.month.events;
  return (
    <div>
      <h1>{dayjs(props.month.monthInfo.firstDay).format("MMMM")}</h1>
      <Table striped bordered>
        <thead>
          <tr className="text-center">
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Thursday</th>
            <th>Wednesday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_e, j) => (
            <tr key={"row_" + j}>
              {[...Array(7)].map((_e, i) => (
                <td key={"day_" + i}>
                  {
                    <CalendarDay
                      key={"calendarday_" + i + "_" + j}
                      // TODO: WILL NOT WORK IF SUNDAY, IT WILL GET TO MONDAY 2
                      date={dayjs(firstDay).add(
                        j * 7 + i - (dayjs(firstDay).day() - 1),
                        "d"
                      )}
                      events={events}
                    />
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Calendar;
