import { useState } from 'react';
import {  Form, Button, Modal } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import Socials from './Socials';
import Page from './Page';

const MESSAGE_TOO_SHORT = "This message is too short! Please give me more information.";
const MESSAGE_COOLDOWN = "Please don't try to send messages so frequently!";
const MESSAGE_SENT = "Message has been sent! Thank you for reaching out :)";
const MESSAGE_FAIL = "⚠️ Failed to send. Please try again.";

export default function ContactMe() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isCooldown, setIsCooldown] = useState(false);

  const [data, setData] = useState({ name: "", email: "", message: ""});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(old => ({ ...old, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.message.length < 6) {
      setModalMessage(MESSAGE_TOO_SHORT);
    } else if (isCooldown) {
      setModalMessage(MESSAGE_COOLDOWN);
    } else {
      try {
        await emailjs.send( 
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          { name: data.name, email: data.email, message: data.message },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setModalMessage(MESSAGE_SENT);
        setData({ name: "", email: "", message: ""});
        setIsCooldown(true); // Cooldown before you can send another message
        setTimeout(() => { setIsCooldown(false); }, 30000);

      } catch {
        setModalMessage(MESSAGE_FAIL);
      }
    }
    setShowModal(true);
  }

  return (
    <Page bg="#d6dcd9">
      <section className="m-auto" id="contact" style={{ maxWidth: '600px', width: '100%' }}>
        <h1 className="text-center"><strong>Contact Me</strong></h1>
        <p className="text-center small m-0">Discuss a project or are just interested in reaching out? My inbox is open to everyone!</p>
        <div className="p-3">
          <Form onSubmit={handleSubmit}>
            {/* NAME */}
            <Form.Group controlId="formName" className="mb-2">
              <Form.Label>Your Name *</Form.Label>
              <Form.Control type="text" name="name" value={data.name} onChange={handleChange} required/>
            </Form.Group>

            {/* EMAIL */}
            <Form.Group controlId="formEmail" className="mb-2">
              <Form.Label>Email Address (For reply) *</Form.Label>
              <Form.Control type="email" name="email" placeholder="xxx@xxx" value={data.email} onChange={handleChange} required/>
            </Form.Group>

            {/* MESSAGE */}
            <Form.Group controlId="formMessage" className="mb-2">
              <Form.Label>Message *</Form.Label>
              <Form.Control as="textarea" name="message" placeholder="Type your message here" value={data.message} onChange={handleChange} required/>
            </Form.Group>
            
            <Button type="submit" variant="outline-success" disabled={isCooldown}>{isCooldown ? "On Cooldown 💤" : "Send"}</Button>
          </Form>
          <Socials/>
        </div>

        {/* MODAL CONFIRMATION */}
        <Modal show={showModal} onHide={() => setShowModal(false)} aria-labelledby="contact-modal-title">
          <Modal.Header closeButton>
            <Modal.Title>
              <strong>{modalMessage === MESSAGE_SENT ? "✅ Success" : "⚠️ Error" }</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </section>
    </Page>
  );
}