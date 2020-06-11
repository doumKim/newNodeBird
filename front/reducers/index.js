import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import user from './user';
import post from './post';

// (이전 상태, 액션) => return 다음 상태
const rootReducer = combineReducers({
	index: (state = {}, action) => {
		switch (action.type) {
			case HYDRATE:
				return {
					...state,
					...action.payload,
				};

			default:
				return state;
		}
	},
	user,
	post,
});

export default rootReducer;
