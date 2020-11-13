import React, { FC } from 'react';
import { Button } from '../styles';

const NewGameButton: FC = () => {
	return <Button onClick={() => alert('New Game')}>New Game</Button>;
};

export default NewGameButton;
