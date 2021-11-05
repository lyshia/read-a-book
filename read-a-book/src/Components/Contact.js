import React  from "react";
import './styles/contact.css'
import { Form, Button } from "react-bootstrap";
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {

   

    const onChange = (value) => {
        return (
            console.log(value)
        )
    }

    return (
			<div className='contact'>
				<h1> Contact Me!</h1>
				<Form>
					<Form.Group className='mb-3' controlId='formBasicName'>
						<Form.Label>Name</Form.Label>
						<Form.Control type='text' placeholder='Name' />
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control type='email' placeholder='Enter email' />
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicMessage'>
						<Form.Label>Message</Form.Label>
						<Form.Control as='textarea' rows={3} />
					</Form.Group>
					<ReCAPTCHA
						sitekey='6Le7ysgcAAAAAKpq12V59pHnyropBseN2dJ-md5G'
						onChange={onChange}
					/>

					<Button
						style={{ background: '#145368', color: '#FDE9C9', width: '100%' }}
						variant='primary'
						type='submit'
						className='btn-block mt-4'>
						Submit
					</Button>
				</Form>
			</div>
		);
}

export default Contact;