import React from "react";
import Icon1 from "../../images/prezentare.png";
import Icon2 from "../../images/contract.png";
import Icon3 from '../../images/raspundem.png'
import {
  EducationContainer,
  EducationH1,
  EducationWrapper,
  EducationCard,
  EducationIcon,
  EducationH2,
  EducationP,
} from "./EducationElements";

const Education = () => {
  return (
    <EducationContainer id="education">
      <EducationH1>Cum Lucram</EducationH1>
      <EducationWrapper>
        <EducationCard>
          <EducationIcon src={Icon1} />
          <EducationP>Suntem Eficienti si Transparenti</EducationP>
        </EducationCard>
        <EducationCard>
          <EducationIcon src={Icon2} />
          <EducationP>LUCRAM CU CONTRACT DE TRANSPORT SI ASIGURARE CMR. </EducationP>
        </EducationCard>
        <EducationCard>
          <EducationIcon src={Icon3} />
          <EducationP>RASPUNDEM LA FIECARE CERERE IN CEL MULT 30 DE MINUTE (LUNI- VINERI 08.00-18.00).</EducationP>
        </EducationCard>
      </EducationWrapper>
    </EducationContainer>
  );
};

export default Education;
