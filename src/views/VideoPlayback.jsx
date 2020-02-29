import React, { Component } from 'react';
import styled from 'styled-components';
import { fetchMpd } from 'dash-mpd-parser';
import { object } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import videoSources from '../videoSources';
import ShakaPlayer from '../components/ShakaPlayer';
import ViewLayout from '../components/ViewLayout';
import {
  extractSubtiltes,
  extractLanuges,
  extractVideoResolutions,
} from '../utils/mpdParser';

const HeadlineWrapper = styled.div`
  text-align: center;

`;

const MainHeadline = styled.h1`
  padding: 20px;
  color: white;
`;


export class VideoPlaybackView extends Component {
  constructor(props) {
    super(props);
    this.mediaQuery = {};
    this.state = {
      loading: true,
      video: null,
      selectedVideoQuality: '',
      selectedSoundQuality: '',
      selectedLanguage: '',
      selectedSubtitles: '',
    };
  }

  async componentWillMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const video = videoSources[id - 1];
    fetchMpd(video.manifestUri, mpd => {
      // Here's our parsed MPD!
      const {
        Period: { AdaptationSet },
      } = mpd;
      video.languages = extractLanuges(AdaptationSet);
      video.subtitles = extractSubtiltes(AdaptationSet);
      video.resolutions = extractVideoResolutions(AdaptationSet);
    });
    this.setState({
      ...this.state,
      video,
    });
  }

  render() {
    const { video } = this.state;
    if(video) {
      return (
        <ViewLayout>
          {<HeadlineWrapper>
            <MainHeadline variant="headline">
              {this.state.video.title}
            </MainHeadline>
          </HeadlineWrapper>}
          <Container>
            <Row>
              <ShakaPlayer {...video} />
            </Row>
          </Container>
        </ViewLayout>
      );
    }
    return (
      <p>Video is not yet loaded</p>
    );
  }
}

VideoPlaybackView.propTypes = {
  match: object.isRequired,
};

export default withRouter(VideoPlaybackView);
