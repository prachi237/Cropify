import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="heroSection">
        <div className="left">
          <h4>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            perspiciatis, ad alias sunt excepturi nemo aliquid quibusdam maxime
            incidunt vel voluptate illum quod corporis atque id. Quia magni
            aliquam dolore incidunt qui nulla, perspiciatis ipsam voluptas!
            Ipsam libero earum quae.
          </h4>
          <button className="button">Analyze</button>
        </div>
        <img
          src="https://img.freepik.com/free-photo/smart-agriculture-iot-with-hand-planting-tree-background_53876-124626.jpg?size=626&ext=jpg"
          alt="farming"
        />
      </div>
    </div>
  );
};

export default HeroSection;

/**<ProjectHead>
                <ProjectText>
                    <ProjectHeading>
                        Collaborate on various projects
                    </ProjectHeading>
                    <SubHeading>
                        Search your tech stacks find your suitable project and
                        collaborate with developers.
                    </SubHeading>
                </ProjectText>
                <ProjectImage src={projectImg} />
            </ProjectHead> 
            
            
            
            
            
            const ProjectHead = styled.div`
    
`;

const ProjectText = styled.div`
    width: 60%;
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const ProjectHeading = styled(Heading)`
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    text-align: right;
`;

const ProjectImage = styled.img`
    height: 500px;
`;
*/
