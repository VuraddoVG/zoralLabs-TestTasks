/**
 * DateDiff extension to class Date to get number of days between two dates.
 */
class DateDiff extends Date {
  ms = 1000 * 60 * 60 * 24;

  /**
   * Calculates number of days between dates
   * @param {Date} d2 date to compare to
   * @returns number of days
   */
  daysTo(d2) {
    if (d2 instanceof Date && !isNaN(d2)) {
      d2.setHours(0, 0, 0, 0);
      this.setHours(0, 0, 0, 0);
      let diff = d2.getTime() - this.getTime();
      return diff / this.ms;
    } else {
      return "Not a date";
    }
  }
}

const d1 = new DateDiff("2022-4-1");
const d2 = new Date();
let a = 10;

console.log(d1.daysTo(a));
console.log(d1.daysTo(d2));
