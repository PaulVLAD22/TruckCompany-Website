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
  Details
} from "./InfoElements";

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
        <Details>
          Crystal Logistics Services S.R.L.
          <br></br>
          Sediu Social: Bucuresti Sectorul 6, Strada Brasov, Nr. 11, Bloc E13, Scara 1, Etaj 10, Ap. 52
          <br></br>
          CUI: RO43944517
          <br></br>
          Nr. de ordine în registrul comerțului: J40/4964/19.03.2021
        </Details>
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
                    Adresă de corespondență:
                    <br></br> Bd. Ion Mihalache nr. 150, bl. 7, sc. A, et. 6, ap. 26,
                    Sector 1, București
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
