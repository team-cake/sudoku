import styled, { css } from 'styled-components';

export const Card = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.white};
		border-radius: 15px;
		display: flex;
		flex: 0 1 auto;
		flex-direction: column;
		max-height: max-content;
		padding: 15px;
	`}
`;
