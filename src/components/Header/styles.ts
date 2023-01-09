import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem;
  justify-content: space-around;
`
export const ActionsContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`
export const LocationContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  width: 9rem;
  height: 2.5rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme['purple-light']};

  svg {
    color: ${(props) => props.theme.puple};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const CartContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme['yellow-light']};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
