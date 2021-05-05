import styled from "styled-components";

export const EducationContainer = styled.div`
  padding-top:50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding-bottom: 150px;
`;

export const EducationWrapper = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 100px;
  padding: 0 50px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const EducationCard = styled.div`
  background: white;
  display: grid;
  grid-template-rows: 2.5fr 1fr;
  grid-gap:20px;
  place-items:center;
  align-items: center;
  border-radius: 10px;
  height: 240px;
  max-width:340px;
  padding: 3rem;
  box-shadow: 0 1px 25px rgba(0, 0, 0, 0.4);
`;

export const EducationIcon = styled.img`
  max-width:50%;
`;

export const EducationH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const EducationP = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
`;
