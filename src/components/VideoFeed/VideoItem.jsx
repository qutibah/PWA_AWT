import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, CardImg, Button} from 'reactstrap';
import { string, object } from 'prop-types';
import thumbnail from '../../assets/pictures/icon@256.png';

export const VideoItem = ({ title, description, id, history,resolution }) => (
    <tr>
      <Row className="mb-4">
      <td className="mt-3 pl-5">
        <CardImg style={{width:"40%",marginLeft:"50%"}} onClick={() => history.push(`/${id}`)} src={thumbnail} alt="Card image cap" />
      </td>
      <td className="mt-5 pl-5">
        <span className="text-color">{title}</span>
      </td>
      <td className="mt-5 pl-5">
        <span className="text-color">{description}</span>
      </td>
      <td className="mt-5 pl-5">
           <Button onClick={() => history.push(`/${id}`)}> View </Button>
        </td>
        </Row>
    </tr>
 
);

VideoItem.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  history: object.isRequired
};

export default withRouter(VideoItem);
