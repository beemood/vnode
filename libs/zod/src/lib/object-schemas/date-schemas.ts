import { errorMessage } from '@vnode/utils';
import z from 'zod';

export const DateSchemas = {
  date: () => z.iso.date(),
  datetime: () => z.iso.datetime(),
  time: () => z.iso.time(),
  futureDate: () =>
    z.iso.date().refine(
      (value) => {
        return new Date(value) > new Date();
      },
      {
        error: errorMessage(
          `NotFutureDateError: The date must be future date.`
        ),
      }
    ),
  pastDate: () =>
    z.iso.date().refine(
      (value) => {
        return new Date(value) < new Date();
      },
      { error: errorMessage(`NotPastDateError: The date must be past date.`) }
    ),

  weekday: () =>
    z.iso.date().refine(
      (value) => {
        const day = new Date(value).getDay();
        return day > 0 && day < 6;
      },
      { error: `WeekdayError: The date must be a weekday.` }
    ),

  weekend: () =>
    z.iso.date().refine(
      (value) => {
        const day = new Date(value).getDay();
        return day == 0 || day == 6;
      },
      { error: `WeekendError: The date must be a weekend.` }
    ),

  morning: () =>
    z.iso.datetime().refine((value) => {
      const morning = new Date();
      morning.setHours(11, 59, 59, 99);

      const night = new Date();
      night.setHours(23, 59, 59, 99);

      return (
        morning.getHours() > new Date(value).getHours() &&
        morning.getHours() < new Date(value).getHours()
      );
    }),
};
