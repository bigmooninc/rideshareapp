import {writable } from 'svelte/store';

const shiftData = writable({
  miles: '',
  milesPerGallon: '',
  shiftLength: '',
  timeOfDay: '',
  grossEarned: '',
  gasPrice: ''
});

shiftData.subscribe((value) => {
  console.log('Store Value: ', value)
});

export default shiftData;