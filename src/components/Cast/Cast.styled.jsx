import styled from 'styled-components';

export const CastsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  padding: 50px 80px 90px;
`;

export const Item = styled.li`
  padding: 10px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover {
    transform: scale(1.05);
  }
`;

export const Photo = styled.img``;

export const ActorName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #585858;
`;

export const NoInformationText = styled.p`
  display: flex;
  justify-content: center;
  padding: 20px;
  font-weight: 500;
`;
