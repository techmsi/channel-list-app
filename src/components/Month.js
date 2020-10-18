import dayjs from 'dayjs';
import { makeAutoObservable } from 'mobx';

export class Month {
  weekdaysMin = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  actualDates = [];
  constructor(date) {
    this.date = dayjs(date);
    makeAutoObservable(this);
  }

  get actualDate() {
    return dayjs(this.date).get('date');
  }

  get monthName() {
    return dayjs(this.date).format('MMMM');
  }
  get totalDays() {
    return Number(dayjs(this.date).daysInMonth());
  }
  get firstDayOfMonth() {
    return Number(dayjs(this.date).startOf('month').format('d'));
  }

  get monthDays() {
    return Array(this.totalDays)
      .fill(1)
      .map((_, day) => ++day);
  }

  get emptyCalendarDays() {
    return Array(this.firstDayOfMonth)
      .fill(1)
      .map((_, emptyDay) => emptyDay++);
  }
}
