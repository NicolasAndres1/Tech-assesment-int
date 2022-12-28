/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 *
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
 */
const dates = [
  ["01.01.2000", "01.01.2016"],
  ["01.01.2016", "01.08.2016"],
  ["01.11.2015", "01.02.2017"],
  ["17.12.2016", "16.01.2017"],
  ["01.01.2016", "01.01.2016"],
  ["28.02.2015", "13.04.2018"],
  ["28.01.2015", "28.02.2015"],
  ["17.03.2022", "17.03.2023"],
  ["17.02.2024", "17.02.2025"],
];

// Receive string of dates one after each other
function outputDate(dates) {
  // Function to split the date string and return a Date object
  const getSplittedDate = (date) => {
    const splittedDate = date.split(".");
    return new Date(`${splittedDate[1]}/${splittedDate[0]}/${splittedDate[2]}`);
  };

  const dateStart = getSplittedDate(dates[0]);
  const dateEnd = getSplittedDate(dates[1]);
  let difference = Math.floor(dateEnd.getTime() - dateStart.getTime()); // Get the difference between end date and start date

  const lengthOfDayInSeconds = 1000 * 60 * 60 * 24; // Static values of the length of a day, month and years in seconds
  const lengthOfMonthInSeconds = lengthOfDayInSeconds * 30.417;
  const lengthOfYearInSeconds = lengthOfDayInSeconds * 365;

  const yearsDifference = Math.floor(difference / lengthOfYearInSeconds); // Calculations
  difference -= yearsDifference * lengthOfYearInSeconds;

  const monthsDifference = Math.floor(difference / lengthOfMonthInSeconds);
  difference -= monthsDifference * lengthOfMonthInSeconds;

  const daysDifference = Math.floor(dateEnd - dateStart) / lengthOfDayInSeconds;

  // Returning a template literal with the different possibilities
  return `${
    yearsDifference
      ? `${yearsDifference} ${yearsDifference > 1 ? "years, " : "year, "}`
      : ""
  }${
    monthsDifference
      ? `${monthsDifference} ${monthsDifference > 1 ? "months, " : "month, "}`
      : ""
  }total ${daysDifference} days`;
}
