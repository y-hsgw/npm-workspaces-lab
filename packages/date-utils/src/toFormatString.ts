import dayjs from 'dayjs';

export const toFormatString = (date: Date, template = 'YYYY/MM/DD') => {
  return dayjs(date).format(template);
};
