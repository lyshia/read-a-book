import React  from "react";
import './styles/contact.css'
import { Form, Button } from "react-bootstrap";
import ReCAPTCHA from 'react-google-recaptcha';
const Contact = () => {

    const key = ''

    const onChange = (value) => {
        return (
            console.log(value)
        )
    }

    return (
        <div className="contact">
            <h1> Contact Me!</h1>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Name</Form.Label>
					<Form.Control type='text' placeholder='Name' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
					<Form.Label>Message</Form.Label>
					<Form.Control as='textarea' rows={3} />
				</Form.Group>
				<ReCAPTCHA sitekey='6Le7ysgcAAAAAKpq12V59pHnyropBseN2dJ-md5G' onChange={onChange} />

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
            </div>
		);
}

export default Contact;