import React from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_3v8s4zn', e.target, 'user_yomr6EhHGuD4HFwjIEobr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    
    <Card border="primary" style={{ width: '40rem', margin: '10px auto' }}>
        <Card.Header>Contact Us</Card.Header>
        <Card.Body>
            <Form className="contact-form" onSubmit={sendEmail}>

                <Form.Group controlId="formBasicEmail">
                    <Form.Text className="text-muted">
                    Please fill in all inputs with the required information.
                    </Form.Text>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full name" name="name" required/>
                    
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" required/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="subject" required/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write your message</Form.Label>
                    <Form.Control as="textarea" rows="3" name="message" required/>
                </Form.Group>

                <Button variant="primary" type="submit" 
                onClick={() => {
                    alert("You've successfully sent us your information!")
                  }}>
                    Send Message
                </Button>
        </Form>

            <Card.Text>
                Once message is sent, input fields will reset.
            </Card.Text>
        </Card.Body>
    </Card>

  );
}
