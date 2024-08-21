import React from 'react'
import { Link } from 'react-router-dom';
import './NotFound.css';
import notfoundimg  from '../../img/notfound.png';

export default function NotFound() {
  return (
    <>
        <section className='page notfound'>
          <div className="content">
            <img src={notfoundimg} alt="notfound" />
            <Link to={'/'}>RETURN TO HOME PAGE</Link>
          </div>
        </section>
    </>
  )
}
