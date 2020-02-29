import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import ViewLayout from '../components/ViewLayout';
import OfflineVideoFeed from '../components/OfflineVideoFeed';
import { MainHeadline } from '../components/Headline';

const HeadlineWrapper = styled.div`
  text-align: center;
`;

const DownloadView = () => (
  <ViewLayout>
    <Container>
      <HeadlineWrapper>
        <MainHeadline>My Downloaded Videos</MainHeadline>
      </HeadlineWrapper>
      <OfflineVideoFeed />
    </Container>
  </ViewLayout>
);

export default DownloadView;
