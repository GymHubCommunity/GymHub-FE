function WorkOutDays(date: Date) {
  const today = new Date();
  const myDate = new Date(date);

  const diff = Math.abs(today.getTime() - myDate.getTime());

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default WorkOutDays;
