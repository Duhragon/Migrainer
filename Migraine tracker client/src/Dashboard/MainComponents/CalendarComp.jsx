import { useState } from "react";
import Calendar from "react-calendar";

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

function CalendarComp() {
  const [value, onChange] = useState(new Date());

  return (
    <div className=" flex mx-3 md:mt-5">
      <Calendar
        onChange={onChange}
        value={value}
        className="border-none flex flex-col items-stretch justify-around bg-bg-secondary rounded w-full"
      />
    </div>
  );
}

export default CalendarComp;
