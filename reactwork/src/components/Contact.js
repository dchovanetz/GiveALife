import React, {useState} from 'react';
import NavComp from './NavComp';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './Contact.css'

function Contact(){
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        email: "",
        message: "",
        successMessage: ""
    })

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    function handleReset(event){
        setFormData({
            fName: "",
            lName: "",
            email: "",
            message: "",
            successMessage: ""
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        const data = {
            fName: formData.fName,
            lName: formData.lName,
            email: formData.email,
            message: formData.message
        }
        fetch('/mail', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'accepts':"application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {return response.json()})
        .then(message => {
            handleReset();
            setFormData({successMessage: message})
            console.log('Message: ', message)
        })
        .catch(err => console.log('Error:', err))
        console.log(data)  // TODO: delete later
        
    }


    return (
        <div>
            <NavComp />
            <h1>I am the Contact Page!!!</h1>
            <Form >
                <Row>
                    <Col>
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control name="fName" 
                                        type="text" 
                                        value={formData.fName} 
                                        onChange={handleChange}
                                       />
                    </Col>
                    <Col>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control name="lName" 
                                        type="text" 
                                        value={formData.lName} 
                                        onChange={handleChange}
                                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" 
                                        type="email" 
                                        value={formData.email} 
                                        onChange={handleChange}
                                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Please enter message here:</Form.Label>
                        <Form.Control as="textarea" rows="3" name="message" 
                                        value={formData.message} 
                                        onChange={handleChange}
                                        />
                    </Col>
                </Row>
                <Button size='lg' 
                        variant="primary" 
                        type="submit" 
                        name="submit" 
                        onClick={handleSubmit}>
                    Submit
                </Button>
                <Button size='lg' 
                        variant="danger" 
                        type="reset"   
                        name="reset" 
                        value="Reset"
                        onClick={handleReset}>
                    Reset
                </Button>
                <p>{formData.successMessage}</p>
            </Form> 
        </div>
        
    )
}

export default Contact;