import React from "react";
import { DayPicker } from "react-day-picker";
import "../../CustomCss/ReactDay.css";
import { format } from "date-fns";

function CalendarComp() {
  const [selected, setSelected] = React.useState();

  const disabledDays = [new Date(2023, 9, 10), new Date(2023, 9, 12), new Date(2023, 9, 20)];

  return (
    <section className="border-none rounded-lg sm:ml-0 mx-3 md:mx-4 flex flex-col items-center justify-around sm:mt-3 bg-bg-third ">
      <p className="py-2 font-semibold text-text-primary border-b border-bg-secondary w-full text-center sm:pt-1">
        Pick a day
      </p>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        className="DayPicker"
        disabled={disabledDays}
        showOutsideDays
        // modifiersStyles={{
        //   disabled: { fontSize: "10%" },
        // }}
      />
    </section>
  );
}

export default CalendarComp;
