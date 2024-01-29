import { Calendar, DateObject } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<Value>([]);

  value?.forEach((item: Value) => {
    console.log(item.format("DD/MM/YYYY"));
  });

  //console.log(value[0].format("DD/MM/YYYY"));
  
  return (
    <>
      <div className="calender-container">
        <Calendar
          multiple
          fullYear
          format="MMMM DD YYYY"
          weekStartDayIndex={1}
          className="custom-calender"
          value={value}
          onChange={setValue}
        ></Calendar>
      </div>
    </>
  );
}

export default App;
