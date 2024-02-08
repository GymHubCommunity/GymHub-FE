function DateFormat(date: Date) {
  const formatDate = new Date(date);
  const year = formatDate.getFullYear();
  const month = String(formatDate.getMonth() + 1).padStart(2, '0');
  const day = String(formatDate.getDate()).padStart(2, '0');

  return { year, month, day };
}

export default DateFormat;
