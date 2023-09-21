import React from "react";
import { Link } from "react-router-dom";

function CalendarComp() {
  return (
    <section className=" border-none rounded-lg gap-4 mx-3 sm:ml-0 md:mx-4 flex flex-col items-center sm:justify-around sm:mt-3 bg-bg-third p-5">
      <h3 className="text-text-primary">Add a new episode</h3>
      <Link to="/episode/new">
        <img src="plus.png" className="w-36 sm:w-80" />
      </Link>
    </section>
  );
}

export default CalendarComp;
