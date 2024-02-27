function DateFormat(date: Date) {
  const formatDate = new Date(date);
  const year = String(formatDate.getFullYear());
  const month = String(formatDate.getMonth() + 1).padStart(2, '0');
  const day = String(formatDate.getDate()).padStart(2, '0');

  const fullDate = `${year}-${month}-${day}`;

  return { year, month, day, fullDate };
}

export default DateFormat;
