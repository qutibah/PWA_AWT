import React from 'react';
import styled from 'styled-components';
import {Container, CardGroup} from 'reactstrap';
import { MainHeadline } from '../components/Headline/MainHeadline';
import { SecondaryHeadline } from '../components/Headline/SecondaryHeadline';
import videoSources from '../videoSources';
import VideoItem from '../components/VideoFeed/VideoItem';
import ViewLayout from '../components/ViewLayout';
import { Offline, Online } from 'react-detect-offline';

const HeadlineWrapper = styled.div`
  text-align: center;
  color: #ffffff;
`;

const HomeView = () => (
  <ViewLayout>

  

    <Online polling={{ enabled: true, interval: 500 }}>
      <Container>
        <HeadlineWrapper>
          <MainHeadline>
            My Playlist
          </MainHeadline>
          {/* <SecondaryHeadline>It’s quick, simple and eﬃcient.</SecondaryHeadline> */}
        </HeadlineWrapper>
        
       <CardGroup>
         <table bordered style={{marginLeft:"12%"}}>
           <tbody>
            {videoSources.map((video, i) => <VideoItem {...video} key={i} />)}
            </tbody>
          </table>
      </CardGroup>
      </Container>
    </Online>
    <Offline polling={{ enabled: true, interval: 500 }}>
      <Container>
        <MainHeadline>The application is currently used offline.</MainHeadline>
        <SecondaryHeadline>
          You can only watch your downloaded videos under{' '}
          <a className="button-link" href="/downloads">
            MY DOWNLOADS
          </a>.
        </SecondaryHeadline>
      </Container>
    </Offline>
  </ViewLayout>
);

export default HomeView;
