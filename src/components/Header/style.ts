import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 139px;
  background-color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 100px;
  }
`;