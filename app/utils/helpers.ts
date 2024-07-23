import { protronicsStates } from '@/app/utils/protronics-states';

export const findState = (location: string) => {
	let currentState = 'knightdale';
	for (let state in protronicsStates) {
		if (state.includes(location.toLowerCase())) {
			currentState = state;
		}
	}
	return currentState;
};
