import styled from 'styled-components';
import {Link} from 'react-router-dom'; 

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    padding: 80px 15px;
  }

  @media screen and (max-width: 480px) {
    padding: 60px 10px;
  }
`;



export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  column-gap: 24px;
  row-gap: 32px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    grid-template-areas: 
      ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1' 'col2'`)};
  }
`;


export const Column1 = styled.div`
  grid-area: col1;
  padding: 0 15px;
  margin-bottom: 15px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    padding-bottom: 40px;
  }

  @media screen and (max-width: 480px) {
    padding-bottom: 30px;
  }
`;


export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  z-index: 3;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 1.2px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
  z-index: 3;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    letter-spacing: -0.2px;
  }
`;

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  z-index: 3;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 24px;
  }
`;



export const AboutWrapper = styled.div`
  width: 100%;
  max-width: 1300px; /* Adjust as needed for layout */
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 cards in a row */
  align-items: stretch;
  gap: 30px;
  padding: 40px 24px;
  z-index: 3;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row on tablet */
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr; /* Stack on small screens */
  }
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width: 250px;
  height: 260px;

  padding: 20px;
  border-radius: 12px;
  border: 1px solid pink;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 2px 6px rgba(128, 128, 128, 0.3);

  z-index: 3;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(128, 128, 128, 0.4);
  }

  @media screen and (max-width: 480px) {
    height: auto;
    max-width: 90%;
    padding: 24px;
  }
`;

export const AboutIcon = styled.img`
  height: 150px;
  width: 170px;
  object-fit: contain;
  margin-bottom: 0px;
  z-index: 3;

  @media screen and (max-width: 480px) {
    width: 100%;
    max-width: 160px;
    height: auto;
  }
`;

export const AboutH1 = styled.h1`
  z-index: 3;
  margin-bottom: 64px;
  font-size: 50px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const AboutH2 = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  z-index: 3;
  color: purple;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const AboutP = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  z-index: 3;
  text-align: center;
  color: darkblue;
  margin: 0 8px; /* adds horizontal breathing room on mobile */

  @media screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 21px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 20px;
  }
`;


export const Linked = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 3;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  margin: 0 0 10px 0;
  padding-right: 0;
  z-index: 3;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;
