import React from "react";
import { ImgWrap } from "./InfoElements";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import {
  DescriptionLine,
  DescriptionWrap,
  InfoWrapper,
  InfoContainer,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  BtnWrap,
  Img,
  BtnLink,
} from "./InfoElements";
import { SocialIcons } from "../Footer/FooterElements";

const Contact = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  pics,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <DescriptionWrap>
                  <DescriptionLine>
                    <AiFillPhone size={26}/>
                    0771.542.171
                  </DescriptionLine>
                  <DescriptionLine>
                    <AiFillMail size={26}/> office@crystalservices.ro
                  </DescriptionLine>
                  <DescriptionLine>
                    <AiFillHome size={40} />
                    Bd. Ion Mihalache nr. 150, bl. 7, sc. A, et. 6, ap. 26,
                    Sector 1, Bucuresti
                  </DescriptionLine>
                </DescriptionWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}></Img>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Contact;
