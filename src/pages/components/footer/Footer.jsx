import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import logo from '../../../../public/images/logo-globe.png';
import Link from 'next/link';
// import '../../styles/partials/footer.styles.scss'

const Footer = () => (
  <footer className="Footer dFlex">
    <div className="Footer__logo">
      <img src={logo} />
      <p>
        AnsonErvin Inc. is a US-based software company dedicated to designing
        cost-effective software solutions that optimize business operations
        across various industries. Our focus on technological innovation aims to
        simplify and enhance the way companies operate, promoting greater ease
        and efficiency.
      </p>
    </div>
    <div>
      <h4>Find us on social media</h4>
      <p>
        <Link href="https://www.facebook.com/AnsonInc/" passHref>
          <FaFacebookF className="Footer__icon" /> Facebook
        </Link>
      </p>
      <p>
        <Link href="https://twitter.com/AnsonErvinInc" passHref>
          <FaTwitter className="Footer__icon" /> Twitter
        </Link>
      </p>
      <p>
        <Link href="https://www.instagram.com/ansonervin_inc/" passHref>
          <FaInstagram className="Footer__icon" /> Instagram
        </Link>
      </p>
    </div>
    <div>
      <h4>General Inquiries</h4>
      <p>Email: anson.ervin@ansonervin.com</p>
      <p>Phone Number: 973-723-2241</p>
    </div>
  </footer>
)

export default Footer
