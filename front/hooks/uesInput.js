import { useState, useCallback } from 'react';

export const useInput = (initialValue = null) => {
	const [value, setValue] = useState(initialValue);
	const handler = useCallback((e) => {
		setValue(e.target.value);
	}, []);
	return [value, handler];
};

export const usePasswordCheck = (initialValue = null, password = null) => {
	const [value, setValue] = useState(initialValue);
	const [error, setError] = useState(false);
	const handler = useCallback(
		(e) => {
			const { value: inputValue } = e.target;
			setValue(inputValue);
			setError(inputValue !== password);
		},
		[value],
	);

	return [value, error, handler, setError];
};

export const useTermCheck = (initialValue = null) => {
	const [value, setValue] = useState(initialValue);
	const [error, setError] = useState(false);
	const handler = useCallback((e) => {
		setValue(e.target.checked);
		setError(false);
	}, []);

	return [value, error, handler, setError];
};
