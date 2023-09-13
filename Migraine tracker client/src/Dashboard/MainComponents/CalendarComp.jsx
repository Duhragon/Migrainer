import { useState } from "react";
import Calendar from "react-calendar";
import "./Calender.css";

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

function CalendarComp() {
  const [value, onChange] = useState(new Date());

  return (
    // The width of this container should be 25vw when the screen width is 1280-1500
    <div className="  flex-container flex mx-3 mt-5 md:mt-7 ">
      <Calendar
        onChange={onChange}
        value={value}
        className="border-none rounded-lg flex flex-col items-stretch justify-around bg-bg-third w-full p-2 "
      />
    </div>
  );
}

export default CalendarComp;
