import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Card, Content, Title } from './components';
import { unregister } from './core';
import { GlobalStyles, theme } from './styles';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Content>
			<Title>Sudoku</Title> <Card>This is a work in progress</Card>
		</Content>
	</ThemeProvider>,
	document.getElementById('root')
);

unregister();
