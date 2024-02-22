function timeAgo(date: string) {
  const milliSeconds = new Date().getTime() - new Date(date).getTime();

  const seconds = milliSeconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = days / 30;
  const years = days / 365;

  if (seconds < 60) return `방금 전 게시`;
  if (minutes < 60) return `${Math.floor(minutes)}분 전 게시`;
  if (hours < 24) return `${Math.floor(hours)}시간 전 게시`;
  if (days < 7) return `${Math.floor(days)}일 전 게시`;
  if (weeks < 5) return `${Math.floor(weeks)}주 전 게시`;
  if (months < 12) return `${Math.floor(months)}개월 전 게시`;
  return `${Math.floor(years)}년 전`;
}

export default { timeAgo };
