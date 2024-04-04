export const getOnlyDate = (date) => {
  return date.split('T')[0];
};

export const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
};

export const formatDate = (dateString, locale) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long' };
  const formatter = new Intl.DateTimeFormat(locale, options);
  const formattedDate = formatter.format(date);

  // Split the formatted date into parts
  const parts = formattedDate.split(' ');

  // Capitalize only the first letter of the month
  parts[0] = parts[0][0].toUpperCase() + parts[0].slice(1);

  // Join the parts back together
  return parts.join(' ');
};
