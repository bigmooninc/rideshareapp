import {writable} from 'svelte/store';

const currentWeekShifts = writable([]);

const customCurrentWeekShiftsStore = {
  subscribe: currentWeekShifts.subscribe,
  setCurrentWeekShifts: (shiftArray) => {
    currentWeekShifts.set(shiftArray);
  },
  addCurrentWeekShift: (shiftData) => {
    const newShift = {
      ...shiftData
    };
    currentWeekShifts.update(items => {
      return [...items, newShift];
    })
  }
}

export default customCurrentWeekShiftsStore;