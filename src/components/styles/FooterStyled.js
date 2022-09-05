import styled from "styled-components";

export const FooterStyled = styled.div`
  background: ${({ theme }) => theme.color.secondary};
  height: 7.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.fontPrimary};
  flex-direction: column;
`;
