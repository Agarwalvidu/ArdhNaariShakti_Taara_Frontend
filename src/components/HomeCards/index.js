import React from "react";
// import {Button} from '../ButtonElements'
// import Collaborate from'../../../images/Community_Initiatives.png'
// import Educate from'../../../images/MantleExplorer.png'
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import shelter from "../../assets/images/shelter.png.png";
import bot from "../../assets/images/bot.png";
import blog from "../../assets/images/blog.png";
import jobs from "../../assets/images/jobs.png";
import law from "../../assets/images/law.png";
import {
  AboutContainer,
  AboutWrapper,
  AboutCard,
  AboutIcon,
  AboutH2,
  AboutP,
} from "./InfoElements";

import music from "../../assets/images/music.png";
export const About = () => {
  return (
    <>
      <AboutContainer>
        {/* <AboutH1>What We Do</AboutH1> */}
        <AboutWrapper>
          <Link to="https://console.dialogflow.com/api-client/demo/embedded/9ceb4ad7-b3a7-49eb-b8e1-9b72a12e79cb">
            <AboutCard>
              <AboutIcon src={bot}></AboutIcon>
              <AboutH2>Taara Bot</AboutH2>
              <AboutP>Your guide and friend </AboutP>
            </AboutCard>
          </Link>
          <Link to="/blogs">
            <AboutCard>
              <AboutIcon src={blog}></AboutIcon>
              <AboutH2>BLOGS</AboutH2>
              <AboutP>Let's get motivated </AboutP>
            </AboutCard>
          </Link>
          <Link to="/shelter">
            <AboutCard>
              <AboutIcon src={shelter}></AboutIcon>
              <AboutH2>SHELTER</AboutH2>
              <AboutP>A safe place</AboutP>
            </AboutCard>
          </Link>
          <Link to="/jobs">
            <AboutCard>
              <AboutIcon src={jobs}></AboutIcon>
              <AboutH2>JOBS</AboutH2>
              <AboutP>Be self independent</AboutP>
            </AboutCard>
          </Link>
          <Link to="/legal">
            <AboutCard>
              <AboutIcon src={law}></AboutIcon>
              <AboutH2>Legal Rights</AboutH2>
              <AboutP>Know your legal rights and protections</AboutP>
            </AboutCard>
          </Link>

          {/* 🆕 Calming Corner Card */}
          <Link to="/music">
            <AboutCard>
              <AboutIcon src={music}></AboutIcon>
              <AboutH2 className="size-h3">Music</AboutH2>
              <AboutP>Find your peace</AboutP>
            </AboutCard>
          </Link>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};
