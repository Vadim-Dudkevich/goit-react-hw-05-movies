import styled from 'styled-components';

export const Item = styled.li`
  padding: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const Image = styled.img`
  width: 300px;
  height: 440px;
  margin-bottom: 10px;
  object-fit: cover;
`;
export const Title = styled.h2`
  font-size: 12px;
  font-weight: 700;
  color: #585858;
`;
export const Vote = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #e73c37;
`;
