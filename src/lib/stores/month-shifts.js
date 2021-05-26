import {writable} from 'svelte/store';

const currentMonthShifts = writable([]);

const customCurrentMonthShiftsStore = {
  subscribe: currentMonthShifts.subscribe,
  setCurrentMonthShifts: (shiftArray) => {
    currentMonthShifts.set(shiftArray)
  },
}

export default customCurrentMonthShiftsStore;