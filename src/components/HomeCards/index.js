import React from 'react'
import { Link } from 'react-router-dom';
import shelter from "../../assets/images/shelter.png.png" 
import bot from "../../assets/images/bot.png" 
import blog from "../../assets/images/blog.png" 
import jobs from "../../assets/images/jobs.png" 
import { 
  AboutContainer, 
  AboutWrapper, 
  AboutCard, 
  AboutIcon, 
  AboutH2, 
  AboutP,
  AboutH1,
  CardContent,
  CardBadge
} from './InfoElements'
import { 
  HiChatBubbleLeftRight, 
  HiNewspaper, 
  HiHome, 
  HiBriefcase,
  HiSparkles 
} from "react-icons/hi2"

export const About = () => {
  const services = [
    {
      id: 1,
      title: "Taara Bot",
      description: "Your AI guide and friend for support",
      icon: bot,
      link: "https://console.dialogflow.com/api-client/demo/embedded/9ceb4ad7-b3a7-49eb-b8e1-9b72a12e79cb",
      external: true,
      badge: "AI Assistant"
    },
    {
      id: 2,
      title: "Blogs",
      description: "Get motivated with inspiring stories",
      icon: blog,
      link: "/blogs",
      external: false,
      badge: "Stories"
    },
    {
      id: 3,
      title: "Shelter",
      description: "Find safe and inclusive accommodations",
      icon: shelter,
      link: "/shelter",
      external: false,
      badge: "Safety"
    },
    {
      id: 4,
      title: "Jobs",
      description: "Be self-independent with opportunities",
      icon: jobs,
      link: "/jobs",
      external: false,
      badge: "Careers"
    }
  ]

  return (
    <AboutContainer>
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
        <AboutH1>
          <HiSparkles style={{ marginRight: '8px', display: 'inline' }} />
          Our Services
        </AboutH1>
        <p style={{ 
          fontSize: 'var(--text-lg)', 
          color: 'var(--text-secondary)', 
          maxWidth: '600px', 
          margin: '0 auto',
          lineHeight: 'var(--leading-relaxed)'
        }}>
          Discover comprehensive support services designed to empower and uplift the transgender community
        </p>
      </div>
      
      <AboutWrapper>
        {services.map((service) => (
          <AboutCard key={service.id}>
            {service.badge && (
              <CardBadge>{service.badge}</CardBadge>
            )}
            
            <CardContent>
              <AboutIcon src={service.icon} alt={service.title} />
              <AboutH2>{service.title}</AboutH2>
              <AboutP>{service.description}</AboutP>
            </CardContent>
            
            {service.external ? (
              <a 
                href={service.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  bottom: 0,
                  zIndex: 3
                }}
              />
            ) : (
              <Link 
                to={service.link}
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  bottom: 0,
                  zIndex: 3
                }}
              />
            )}
          </AboutCard>
        ))}
      </AboutWrapper>
    </AboutContainer>
  )
}
