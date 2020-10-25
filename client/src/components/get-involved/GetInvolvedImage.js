
import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import image from '../../assets/getInvolvedImage.jpg'

function GetInvolvedImage() {
    return (
      <div>
        <Card>
          <Card.Img className="darker" height={580} src={image}  />
          <Card.ImgOverlay style={{ padding: '7rem' }}>
            <Card.Text className='mt-5 carousel-center carousel-text'>
            “I recently presented with Pam Boyd at our annual Suicide Prevention & RX Drug Awareness Summit and believe she is doing important and innovative work that cannot be ignored. Pam is passionate about preventing the unnecessary loss of life and is using her creativity to launch a new approach to suicide prevention.”       
            <p className="carousel-text d-flex justify-content-end">
            -M’liss Jenkins, Washington County Wellness Initiative (CHIO) 
            </p>             
          </Card.Text>
          </Card.ImgOverlay>
        </Card>

      </div>
  
    )
  }
  
  export default GetInvolvedImage;