import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { Button } from '../../components';
import { createGrid } from '../../store';
import { Container } from './styles/index';

const NewGameButton: FC = () => {
	const dispatch = useDispatch<Dispatch<Action>>();

	const createNewGrid = useCallback(() => {
		if (window.confirm('Are you sure you want to start a new game?'))
			dispatch(createGrid());
	}, [dispatch]);

	return (
		<Container>
			<Button onClick={createNewGrid}>New Game</Button>
		</Container>
	);
};

export default NewGameButton;
