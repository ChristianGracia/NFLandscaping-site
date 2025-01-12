import React from 'react';
import ContactForm from '../../components/contact-form/contact-form.component';
import './contact-page.styles.scss';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { Card, ListGroup } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <div className='contact-page-container' style={{}}>
      <Fade left>
        <p className='contact-header'>Contact Us</p>
      </Fade>
      <div style={{ padding: 10 }}></div>

      <p>
        <a
          href='tel:401-447-5446'
          data-rel='external'
          style={{ color: 'black' }}
        >
          <i className='fas fa-phone'></i> 401-447-5446
        </a>
      </p>
      <p>
        <span style={{ marginRight: 3, fontWeight: 'bold' }}>
          <i className='far fa-envelope'></i>
        </span>
        naturesfrontierlandscaping@gmail.com
      </p>
      <p style={{ fontWeight: 'bold' }}> Available 24/7</p>

      <div
        style={{
          backgroundColor: '#2D77A9',
          width: '95vw',
          maxWidth: 1000,
          margin: '0 auto',
          borderRadius: 19,
        }}
      >
        <Flip left>
          <div style={{ paddingTop: 80 }}>
            <span className='send-us-email'>
              Leave us a message for a free estimate!
            </span>
          </div>
        </Flip>

        <ContactForm />
        <div style={{ paddingBottom: 30 }}></div>
        <iframe
          title='nflandscaping location'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.3856875883093!2d-71.35262728526868!3d41.81999237922684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e45b7fe89d3c6b%3A0x21555fc05f23db39!2sNatures%20Frontier%20Landscaping%20Construction%20%26%20Property%20Management!5e0!3m2!1sen!2sus!4v1580445738200!5m2!1sen!2sus'
          width='300'
          height='300'
          frameborder='0'
          allowfullscreen=''
        ></iframe>
        <div style={{ paddingBottom: 100 }}></div>
      </div>
      <div style={{ paddingBottom: 200 }}></div>
    </div>
  );
};
export default ContactPage;
