import React from "react";
import { ImgWrap } from "./InfoElements";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai"
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
          Sediu Social: Calea Floreasca
60, Etaj 2, Birou 1, Sector 1, Bucuresti, Romania
          <br></br>
          VAT: RO43944517
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
                    <br></br> 0784.253.238
                  </DescriptionLine>
                  <DescriptionLine>
                    <AiFillMail size={26}/> office@crystalservices.ro
                    <br></br>transport@crystalservices.ro
                  </DescriptionLine>
                  <DescriptionLine>
                    <AiFillHome size={40} />
                    Home:
                    <br></br> Calea Floreasca
60, Etaj 2, Birou 1, Sector 1, Bucuresti, Romania
                  </DescriptionLine>
                  <DescriptionLine>
                    <AiFillFacebook fontSize="24px"></AiFillFacebook>
                    <a href="https://web.facebook.com/crystallogisticsservices" style={{color:"white"}}>Click Here</a>
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
