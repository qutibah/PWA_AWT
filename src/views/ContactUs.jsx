import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import ViewLayout from '../components/ViewLayout';
import { MainHeadline } from '../components/Headline';
import EmailIcon from '../assets/email_icon.png';
import LocationIcon from '../assets/location_icon.png';
import PhoneIcon from '../assets/phone_icon.png';

const HeadlineWrapper = styled.div`
  text-align: center;
`;

const Icon = styled.img`
    width: 50px;
    height: 50px;
`;

const Title = styled.p`
    color: var(--red);
`;


const InfoContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
`;

const IconContainer = styled.div`
    margin-right: 30px;
`;

const InfoParagraph = styled.p`
    color: var(--light);
`;

const Subtitle = styled.p`
    color: var(--secondary);
`;

const ContactUs = () => {
    return (
        <ViewLayout>
            <Container>
            <HeadlineWrapper>
                <MainHeadline>Contact Us</MainHeadline>
                <Subtitle>Please use the following information to contact us:</Subtitle>
            </HeadlineWrapper>
            <section>
                <InfoContainer>
                    <IconContainer>
                        <Icon src={EmailIcon} />
                    </IconContainer>
                    <div>
                        <Title>Email</Title>
                        <InfoParagraph>qutibahhussein@yahoo.com</InfoParagraph>
                            <InfoParagraph>azmi.my@gmail.com</InfoParagraph>
                    </div>
                </InfoContainer>
                <InfoContainer>
                    <IconContainer>
                        <Icon src={PhoneIcon} />
                    </IconContainer>
                    <div>
                        <Title>Phone</Title>
                        <InfoParagraph>+49 174 424 2137</InfoParagraph>
                        <InfoParagraph>+49 176 758 64111</InfoParagraph>
                    </div>
                </InfoContainer>
                <InfoContainer>
                    <IconContainer>
                        <Icon src={LocationIcon} />
                    </IconContainer>
                    <div>
                        <Title>Location</Title>
                        <InfoParagraph>Warschauer Str. 35, 10245 Berlin</InfoParagraph>
                    </div>
                </InfoContainer>
            </section>
            </Container>
      </ViewLayout>
    );
}

export default ContactUs;