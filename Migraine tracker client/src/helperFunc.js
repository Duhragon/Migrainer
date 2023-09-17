export function createDate(item) {
  const dateString = item.createdAt;
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
