import React from "react";
import Icon1 from "../../images/svg-data.svg";
import Icon2 from "../../images/svg-agreement.svg";
import Icon3 from '../../images/svg-collaboration.svg'
import {
  EducationContainer,
  EducationH1,
  EducationWrapper,
  EducationCard,
  EducationIcon,
  EducationP,
} from "./EducationElements";

const Education = () => {
  return (
    <EducationContainer id="education">
      <EducationH1>How we work?</EducationH1>
      <EducationWrapper>
        <EducationCard>
          <EducationIcon src={Icon1} />
          <EducationP>We are Efficient and Transparent</EducationP>
        </EducationCard>
        <EducationCard>
          <EducationIcon src={Icon2} />
          <EducationP>We work with transport contract and insurance </EducationP>
        </EducationCard>
        <EducationCard>
          <EducationIcon src={Icon3} />
          <EducationP>We respond to every request within 30 minutes (Monday-Friday 08.00-18.00) </EducationP>
        </EducationCard>
      </EducationWrapper>
    </EducationContainer>
  );
};

export default Education;
