import React from 'react';
import  Link  from 'next/link';
import Layout from './Layout';
import SEO from './components/Seo';
import { useStaticQuery, graphql } from 'next/graphql';
import BackgroundImage from './components/BackgroundImage';
import bg from '../../../public/images/header-bg';

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "header-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            src
          }
        }
      }
    }
  `);
  const bgImageData = data.image.childImageSharp.fluid;

  return (
    <Layout>
      <BackgroundImage
        Tag="header"
        src={bg}
        className="Header Header--small"
        fluid={bgImageData}
        backgroundColor={`#2b2b2b`}
      >
        <SEO title="404: Not found" />
        <header className="Header">
          <div className="Header__line"></div>
          <div className="Header__text">
            <h1 className="Heading--primary">
              Sorry page was not found <br />
            </h1>
          </div>
        </header>
      </BackgroundImage>

      <section>
        <p>Uh-oh! You just hit a page that doesn&#39;t exist.</p>
        <Link to="/" className="Btn Btn--dark">
          Go back home
        </Link>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
