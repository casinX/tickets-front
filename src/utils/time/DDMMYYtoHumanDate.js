const MONTH_NAMES = {
  0: 'янв',
  1: 'фев',
  2: 'мар',
  3: 'апр',
  4: 'май',
  5: 'июн',
  6: 'июл',
  7: 'авг',
  8: 'сен',
  9: 'окт',
  10: 'ноя',
  11: 'дек',
};


const DAY_NAMES = {
  0: 'Вс',
  1: 'Пн',
  2: 'Вт',
  3: 'Ср',
  4: 'Чт',
  5: 'Пт',
  6: 'Сб',
};


export default (dateStr) => {
  const [date, month, year] = dateStr.split('.');

  const dateObj = new Date(
    Number(year) + 2000,
    Number(month) - 1,
    Number(date)
  );

  return `${dateObj.getDate()} ${MONTH_NAMES[dateObj.getMonth()]} ${dateObj.getFullYear()}, ${DAY_NAMES[dateObj.getDay()]}`
};