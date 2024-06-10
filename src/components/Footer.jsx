import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Footer() {
  return (
    <footer className='bg-dark text-center text-white'>
      <Container className='p-4 pb-0'>
        <section className='mb-4'>
          <Button variant="outline-light" className='m-1' href='#!' role='button'>
            <i className="bi bi-facebook"></i>
          </Button>

          <Button variant="outline-light" className='m-1' href='#!' role='button'>
            <i className="bi bi-twitter"></i>
          </Button>

          <Button variant="outline-light" className='m-1' href='#!' role='button'>
            <i className="bi bi-google"></i>
          </Button>

          <Button variant="outline-light" className='m-1' href='#!' role='button'>
            <i className="bi bi-instagram"></i>
          </Button>

          <Button variant="outline-light" className='m-1' href='#!' role='button'>
            <i className="bi bi-linkedin"></i>
          </Button>

          <Button variant="outline-light" className='m-1' href='#!' role='button'>
            <i className="bi bi-github"></i>
          </Button>
        </section>
      </Container>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Hala Mansour
        </a>
      </div>
    </footer>
  );
}
