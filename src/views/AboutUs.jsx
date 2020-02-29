import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import ViewLayout from '../components/ViewLayout';
import { MainHeadline } from '../components/Headline';
import QHPhoto from '../assets/qh_photo.png'
import AZPhoto from '../assets/Az_Photo.jpeg'


const HeadlineWrapper = styled.div`
  text-align: center;
`;

const TeamImage = styled.img`
    border-radius: 50%
    width: 150px;
    height: 150px;
`;

const TeamImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const GridContainer = styled.section`
    display: flex;
    justify-content: space-between;
`;

const SectionContainer = styled.div`
    margin-right: 10px;
    margin-left: 10px;
`;

const TeamWrapper = styled.div`
    border-top: 1px solid grey;
    margin-top: 15px;
`;

const FeatureTitle = styled.h2`
    color: var(--red);
`;

const TeamMemberTitle = styled.h2`
    color: var(--red);
`;

const TeamMemberPosition = styled.h4`
    color: var(--light);
`;

const RegularText = styled.p`
    color: var(--secondary);
`;

const AboutUs = () => {
    return (
        <ViewLayout>
            <Container>
            <HeadlineWrapper>
                <MainHeadline>Features</MainHeadline>
            </HeadlineWrapper>
            <GridContainer>
                <SectionContainer>
                    <FeatureTitle>PWA for Media Playback</FeatureTitle>
                        <RegularText> Progressive Web Applications
                         (PWAs) has become disruptive web application framework
                            which aim to refactor the legacy web and mobile app
                            paradigm by bridging the intuitive web experience
                             with native app functionality.</RegularText>
                </SectionContainer>
                <SectionContainer>
                    <FeatureTitle>Who We Are ?</FeatureTitle>
                        <RegularText> Qutbah Hussein, Azmi Amiruddin. Master Students at TU Berlin,We have presnted a study and project case to success factors PWAs development for media streaming. Our work includes an in-depth assessment of PWAs development frameworks with movie industry anchored research goals.  </RegularText>
                </SectionContainer>
                <SectionContainer>
                        <FeatureTitle>Acknwledgment</FeatureTitle>
                        <RegularText>We would like to acknowledge our project supervisors Stefan Fam and Alexander Futasz . During project execution stage we have been provided with ample feedback that helped us to provide applied, relevant research and in general to build a professional PWA project delivery and the paper. </RegularText>
                </SectionContainer>
            </GridContainer>
            <TeamWrapper>
                <HeadlineWrapper>
                    <MainHeadline>Our Team</MainHeadline>
                </HeadlineWrapper>
                    <GridContainer>
                        <section>
                            <TeamImageContainer>
                                <TeamImage src={QHPhoto} />
                            </TeamImageContainer>
                            <TeamMemberTitle>Qutibah Hussein</TeamMemberTitle>
                            <TeamMemberPosition>Software Developer</TeamMemberPosition>
                        </section>
                        <section>
                            <TeamImageContainer>
                                <TeamImage src={AZPhoto} />
                            </TeamImageContainer>
                            <TeamMemberTitle>Azmi Amiruddin</TeamMemberTitle>
                            <TeamMemberPosition>Assistant Developer</TeamMemberPosition>
                        </section>
                    </GridContainer>
            </TeamWrapper>
            </Container>
      </ViewLayout>
    );
}

export default AboutUs;