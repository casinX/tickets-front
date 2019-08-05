const CACHE = {};


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

  if(dateStr in CACHE){
    return CACHE[dateStr];
  }

  const [rawDate, rawMonth, rawYear] = dateStr.split('.').map(Number);

  const dateObj = new Date(
    rawYear + 2000,
    rawMonth - 1,
    rawDate,
  );

  const date = dateObj.getDate();
  const month = MONTH_NAMES[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const day = DAY_NAMES[dateObj.getDay()];

  const result = `${date} ${month} ${year}, ${day}`;

  CACHE[dateStr] = result;

  return result;
};