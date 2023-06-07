import React from 'react';
import Layout from '../../Layout';
import BackgroundImage from 'gatsby-background-image';
import SEO from '../Seo';
import { useStaticQuery, graphql } from 'next/graphql';
import { useRouter } from 'next/router';
import { logout, getCurrentUser } from '../../../utils/auth';

const clients = [
  {
    name: 'Vuddy',
    paypalID: '46EZA672GVT2L',
    pictures: [
      'https://res.cloudinary.com/dhgnvzmi3/image/upload/v1570555200/2019-10-08_ysmro2.jpg',
      'https://res.cloudinary.com/dhgnvzmi3/image/upload/v1568879692/dan-gold-07AAmZ1dECU-unsplash_b772de.jpg',
      'https://res.cloudinary.com/dhgnvzmi3/image/upload/v1568879692/dan-gold-07AAmZ1dECU-unsplash_b772de.jpg',
    ],
    videos: [
      'https://res.cloudinary.com/dhgnvzmi3/video/upload/v1572764103/Screen_Recording_2019-11-03_at_1.53.34_AM_mpjk53.mov',
    ],
    updates: ['Uploaded project to github'],
    mileStones: ['Finish installing database'],
    clientRequirements: ['Text for splash screens', 'Text for about screen'],
  },
  {
    name: 'Nomando',
    paypalID: 'ZVW4XEVB5MP46',
    pictures: [],
    videos: [],
    updates: [],
    mileStones: [],
    clientRequirements: [],
  },
  {
    name: 'Consilium',
    paypalID: 'VY8HB2D6ZBP5W',
    pictures: [],
    videos: [],
    updates: [],
    mileStones: [],
    clientRequirements: [],
  },
  {
    name: 'K-butta',
    paypalID: 'UZHZZP9YBG4WC',
  },
  {
    name: 'CNU',
    paypalID: 'ASFPWAE8NDGDG',
  },
];

const Dashboard = () => {
      const router = useRouter();
  // !======= ADMIN LOGOUT =======
  const handleLogout = () => {
    logout(() => console.log('logging out'));
    router.push('/clientdashboard/login');
  };


  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "header-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const user = getCurrentUser();
  const bgImageData = data.image.childImageSharp.fluid;
  const client = clients.find((client) => client.name === user.name);

  const generatePicsJSX = client.pictures.map((url, index, array) => {
    if (index !== array.length - 1) {
      return (
        <div>
          <img
            src={url}
            className="Dashboard__content Dashboard__content-block"
          />
        </div>
      );
    } else {
      return (
        <div>
          <img
            src={url}
            className="Dashboard__content Dashboard__content-last Dashboard__content-block"
          />
        </div>
      );
    }
  });

  const generateVideosJSX = client.videos.map((url, index, array) => {
    if (index !== array.length - 1) {
      return (
        <div>
          <video
            autoplay="autoplay"
            controls="controls"
            className="Dashboard__content Dashboard__content-block"
          >
            <source src={url} type="video/mp4" />
          </video>
        </div>
      );
    } else {
      return (
        <div>
          <video
            autoplay="autoplay"
            controls="controls"
            className="Dashboard__content Dashboard__content-last Dashboard__content-block"
          >
            <source src={url} type="video/mp4" />
          </video>
        </div>
      );
    }
  });

  const generateContentJSX = (content, index, array) => {
    if (index !== array.length - 1) {
      return (
        <div className="Dashboard__content Dashboard__content-block">
          <div className="Dashboard__content-top-half">
            <span>{content.date}</span>
            <p>{content.title}</p>
          </div>
          <div className="Dashboard__content-bottom-half">
            <p>{content.desc}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Dashboard__content Dashboard__content-last  Dashboard__content-block">
          <div className="Dashboard__content-top-half">
            <span>{content.date}</span>
            <p>{content.title}</p>
          </div>
          <div className="Dashboard__content-bottom-half">
            <p>{content.desc}</p>
          </div>
        </div>
      );
    }
  };
  const generateUpdatesJSX = client.updates.map(generateContentJSX);

  const generateMilestonesJSX = client.mileStones.map(generateContentJSX);

  const generateClientRequirementsJSX =
    client.clientRequirements.map(generateContentJSX);

  return (
    <Layout>
      <BackgroundImage
        Tag="header"
        className="Header Header--small"
        fluid={bgImageData}
        backgroundColor={`#2b2b2b`}
      >
        <div className="Header__overlay"></div>
        <div className="Header__line"></div>
        <div className="Header__text">
          <h1 className="Heading--primary">{client.name} - Client Portal</h1>
        </div>
      </BackgroundImage>

      <SEO title="Dashboard" />
      <div className="Dashboard">
        {/*  */}
        <form
          className="Dashboard__paypal-form"
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input
            type="hidden"
            name="hosted_button_id"
            value={client.paypalID}
          />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
            border="0"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
        {/*  */}
        <button
          className="Btn Btn--light Dashboard__logout-btn"
          onClick={handleLogout}
        >
          Log out
        </button>
        <div className="Dashboard__section">
          <h2>Videos</h2>
          <div className="Dashboard__content-section">
            {generateVideosJSX.map((vidJSX) => vidJSX)}
          </div>
        </div>
        <div className="Dashboard__section Dashboard__section-dark">
          <h2>Pics</h2>
          <div className="Dashboard__content-section">
            {generatePicsJSX.map((picJsx) => picJsx)}
          </div>
        </div>
        <div className="Dashboard__section">
          <h2>Updates</h2>
          <div className="Dashboard__content-section">
            {generateUpdatesJSX.map((updateJSX) => updateJSX)}
          </div>
        </div>
        <div className="Dashboard__section Dashboard__section-dark">
          <h2>Current Milestones</h2>
          <div className="Dashboard__content-section">
            {generateMilestonesJSX.map((milestoneJSX) => milestoneJSX)}
          </div>
        </div>
        <div className="Dashboard__section">
          <h2>Required from Client</h2>
          <div className="Dashboard__content-section">
            {generateClientRequirementsJSX.map((client) => client)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
