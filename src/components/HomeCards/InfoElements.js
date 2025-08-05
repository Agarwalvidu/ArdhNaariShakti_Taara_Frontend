import styled from 'styled-components';
import {Link} from 'react-router-dom'; 

export const AboutContainer = styled.div`
  padding: var(--space-3xl) 0;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border-light), transparent);
  }

  @media screen and (max-width: 768px) {
    padding: var(--space-2xl) 0;
  }
  
  @media screen and (max-width: 480px) {
    padding: var(--space-xl) 0;
  }
`

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  z-index: 3;
  
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart})=> (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  z-index: 3;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  z-index: 3;
`

export const TopLine = styled.p`
  color: var(--primary-color);
  font-size: var(--text-sm);
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  z-index: 3;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: var(--text-5xl);
  line-height: 1.1;
  font-weight: 700;
  z-index: 3;
  color: ${({lightText})=> (lightText ? '#f7f8fa' : 'var(--text-primary)')};
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media screen and (max-width: 480px) {
    font-size: var(--text-3xl);
  }
`

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  z-index: 3;
  color: ${({darkText})=> (darkText ? 'var(--text-primary)' : '#fff')}; 
`

export const AboutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: stretch;
  gap: var(--space-xl);
  padding: 0 var(--space-lg);
  z-index: 3;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-lg);
    padding: 0 var(--space-md);
  }
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
`;

export const AboutCard = styled.div`
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 300px;
  z-index: 3;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    opacity: 0;
    transition: opacity var(--transition-normal);
    z-index: 1;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-color);
  }

  &:hover::before {
    opacity: 0.05;
  }

  &:hover ${props => props.icon} {
    transform: scale(1.1) rotate(5deg);
  }

  &:hover ${props => props.title} {
    color: var(--primary-color);
  }

  @media screen and (max-width: 480px) {
    min-height: 250px;
    padding: var(--space-lg);
  }
`

export const AboutIcon = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: var(--space-lg);
  z-index: 3;
  transition: all var(--transition-normal);
  border-radius: var(--radius-lg);
  object-fit: cover;
  box-shadow: var(--shadow-sm);

  @media screen and (max-width: 480px) {
    height: 100px;
    width: 100px;
  }
`

export const AboutH1 = styled.h1`
  z-index: 3;
  margin-bottom: var(--space-2xl);
  font-size: var(--text-4xl);
  line-height: 1.1;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-primary);
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: var(--text-2xl);
  }
`

export const AboutH2 = styled.h2`
  font-weight: 600;
  font-size: var(--text-xl);
  line-height: var(--leading-tight);
  z-index: 3;
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
  transition: color var(--transition-fast);
  
  @media screen and (max-width: 480px) {
    font-size: var(--text-lg);
  }
`

export const AboutP = styled.p`
  font-family: var(--font-family-primary);
  font-weight: 500;
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  z-index: 3;
  text-align: center;
  color: var(--text-secondary);
  margin: 0;
  
  @media screen and (max-width: 480px) {
    font-size: var(--text-sm);
  }
`;

export const Linked = styled(Link)`
  text-decoration: none; 
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 3;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  z-index: 3;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  z-index: 3;
`

// Additional styled components for enhanced design
export const CardBadge = styled.span`
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  background: var(--primary-color);
  color: var(--white);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: 600;
  z-index: 3;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 3;
`

export const CardIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-lg);
  transition: all var(--transition-normal);
  z-index: 3;

  svg {
    font-size: var(--text-2xl);
    color: var(--white);
  }

  &:hover {
    transform: scale(1.1);
  }
`