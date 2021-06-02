import {writable} from 'svelte/store';

const currentYearShifts = writable([]);

const customCurrentYearShiftsStore = {
  subscribe: currentYearShifts.subscribe,
  setCurrentYearShifts: (shiftArray) => {
    currentYearShifts.set(shiftArray);
  }
}

export default customCurrentYearShiftsStore;