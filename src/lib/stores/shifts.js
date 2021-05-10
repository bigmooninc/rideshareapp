import {writable} from 'svelte/store';

const shifts = writable([]);

const customShiftsStore = {
	subscribe: shifts.subscribe,
	setShifts: (shiftArray) => {
		shifts.set(shiftArray);
	},
	addShift: (shiftData) => {
		const newShift = {
			...shiftData
		};
		shifts.update(items => {
			return [...items, newShift]
		})
	}
}

export default customShiftsStore;