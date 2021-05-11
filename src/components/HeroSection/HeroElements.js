import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 44.2vh;
  position: relative;
  z-index: 1;
  :before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0% rgba (0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content:center;

  text-shadow: 3px 0px 7px #EAEA3B,
    -3px 0px 7px rgba(81, 67, 21, 0.8), 0px 4px 7px #EAEA3B;
  font-family: "Courier New", Courier, monospace;
  color: black;
  font-size: 3rem;
  font-style: italic;
  text-align: center;
  font-weight:bold;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  text-shadow: 3px 0px 7px rgba(81, 67, 21, 0.8),
    -3px 0px 7px rgba(81, 67, 21, 0.8), 0px 4px 7px rgba(81, 67, 21, 0.8);
  font-family: "Courier New", Courier, monospace;
  font-style: italic;
  margin-top: 24px;
  color: white;
  font-size: 24px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
