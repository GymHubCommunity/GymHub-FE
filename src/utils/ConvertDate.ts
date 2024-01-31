function ConvertDate(date: Date) {
  const offset = date.getTimezoneOffset() * 60000;
  const localTime = date.getTime() - offset;
  const localDate = new Date(localTime);
  const formattedDate = localDate.toISOString();

  return formattedDate;
}

export default ConvertDate;
