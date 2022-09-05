import styled from "styled-components";
export const StyleHeader = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  height: 7.2rem;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.div`
  color: ${({ theme }) => theme.color.fontPrimary};
  font-size: 2rem;
  font-weight: 600;
`;
export const Userimg = styled.div`
  img {
    width: 3.8rem;
    height: 3.8rem;
  }
`;
