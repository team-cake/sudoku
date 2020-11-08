import styled, { css } from 'styled-components';

export const Card = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.white};
		border-radius: 20px;
		display: flex;
		flex: 1;
		flex-direction: column;
		height: max-content;
		padding: 15px;
	`}
`;
