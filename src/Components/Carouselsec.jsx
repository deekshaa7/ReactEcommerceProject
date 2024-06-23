import React from 'react';
import { Carousel } from 'react-bootstrap';


const Carouselsec=()=>{
    return(
        <>
        <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <div className="video-container">
          <video className="d-block w-100" autoPlay loop muted>
            <source src="https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Carousel.Caption>
          <h3>Video Title</h3>
          <p>Video description or caption goes here.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}
export default Carouselsec