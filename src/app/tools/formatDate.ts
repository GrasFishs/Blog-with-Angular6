const formatNumber = (num) => num >= 10 ? num : '0' + num;

export const formatDate = (date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  let second = newDate.getSeconds();
  day = formatNumber(day);
  hour = formatNumber(hour);
  minute = formatNumber(minute);
  second = formatNumber(second);

  return [year, month, day].join('/') + ' ' + [hour, minute, second].join(':');
};
