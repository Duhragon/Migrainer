export function createDate(item) {
  console.log(item);
  const dateString = item.date;
  const date = new Date(dateString);
  const { duration, severity } = item;

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = monthNames[monthIndex];

  const formattedDate = `${day}th of ${monthName}, ${year}`;
  return formattedDate;
}
