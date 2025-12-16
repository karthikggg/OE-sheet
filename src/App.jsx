
import { data } from "./data";
import "./App.css";
import { useState } from "react";

function App() {
  const [marketInput, setmarketInput] = useState();
  const [finalArr, setFinalArr] = useState([]);

  const getMarketTime = (timezone) => {
    // Get current date/time
    const now = new Date();

    // Map timezone abbreviations to IANA timezone identifiers
    const timezoneMap = {
      CST: "America/Chicago",
      EST: "America/New_York",
      MST: "America/Denver",
      PST: "America/Los_Angeles",
    };

    // Validate input
    const tz = timezone.toUpperCase();
    if (!timezoneMap[tz]) {
      throw new Error("Invalid timezone. Use CST, EST, MST, or PST");
    }

    // Format time in the specified timezone
    const options = {
      timeZone: timezoneMap[tz],
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };

    const formatted = new Intl.DateTimeFormat("en-US", options).format(now);

    return formatted
  };

 const getIndianTime =()=> {
  // Get current date/time
  const now = new Date();
  
  // Format time in Indian Standard Time (IST)
  const options = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  };
  
  const formatted = new Intl.DateTimeFormat('en-IN', options).format(now);
  
  return formatted
}


  const deadlineMGDateZone = (str) => {};

  const NonDeadlineMGdateZone = () => {};

  const deadlineMGDateDISH = (str) => {};

  const nonDeadlineMGdateDISH = (str) => {};



  const onSubmit = () => {
    let filter = data.filter(
      (a) => a.Markets.toLocaleLowerCase() === marketInput.toLocaleLowerCase()
    );
    setFinalArr([...finalArr, ...filter]);
  };
 

  return (
    <div className="App">
      <div className="inp">
        <label htmlFor="market-input">Market</label>
        <input
          type="text"
          name="market-input"
          value={marketInput}
          id=""
          onChange={(e) => setmarketInput(e.target.value)}
        />

        <button onClick={onSubmit}>submit</button>
      </div>
      <div>
        <table>
          <tr>
            <th>Markets</th>
            <th>Region</th>
            <th>Time Zone of order</th>
            <th>Deadline Market Time</th>
            <th>Cut off Time</th>
            <th>Market Time Now</th>
            <th>IST Time Now</th>
          </tr>
          {finalArr.map((f, i) => {
            console.log(f["Markets"] + "]]]]]]]]]]]]]]");

            return (
              <tr key={i}>
                <td>{f["Markets"]}</td>
                <td>{f["Region"]}</td>
                <td>{f["Time Zone of order"]}</td>
                <td>{f["Deadline Market Time"]}</td>
                <td>{f["Cut off Time"]}</td>
                <td>{getMarketTime(f["Time Zone of order"])}</td>
                <td>{getIndianTime()}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
