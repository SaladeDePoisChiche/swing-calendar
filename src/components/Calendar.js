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
          <tr>
            <th> </th>
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
                      date={dayjs(firstDay)
                        .add(j * 7 + i, "d")
                        .toDate()}
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
