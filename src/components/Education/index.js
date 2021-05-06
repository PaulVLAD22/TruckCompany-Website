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
      <EducationH1>Cum Lucrăm?</EducationH1>
      <EducationWrapper>
        <EducationCard>
          <EducationIcon src={Icon1} />
          <EducationP>Suntem Eficienti si Transparenti.</EducationP>
        </EducationCard>
        <EducationCard>
          <EducationIcon src={Icon2} />
          <EducationP>Lucram cu contract de transport si asigurare CMR. </EducationP>
        </EducationCard>
        <EducationCard>
          <EducationIcon src={Icon3} />
          <EducationP>Raspundem la fiecare cerere in cel mult 30 de minute (luni- vineri 08. 00-18. 00). </EducationP>
        </EducationCard>
      </EducationWrapper>
    </EducationContainer>
  );
};

export default Education;
