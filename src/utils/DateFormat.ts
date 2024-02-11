function DateFormat(date: Date) {
  const formatDate = new Date(date);
  const year = String(formatDate.getFullYear());
  const month = String(formatDate.getMonth() + 1);
  const day = String(formatDate.getDate());

  return { year, month, day };
}

export default DateFormat;
