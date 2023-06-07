import React from 'react';
import  Link  from 'next/link';
import Layout from '../pages/Layout';
import SEO from '../pages/components/Seo';
import BackgroundImage from '../pages/components/BackgroundImage';
import bg from '../../../public/images/header-bg';

const blog = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "header-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      update: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/blog/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              subtitle
              date
              alt
              thumbnail {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `);

  const updatesList = data.update.edges.map((edge) => {
    const id = edge.node.id;
    const excerpt = edge.node.excerpt;
    const slug = edge.node.fields.slug;
    const { title, thumbnail, date, alt } = edge.node.frontmatter;

    return (
      <div key={id} className="Entry">
        <img
          alt={alt}
          className="Entry__img"
          src={thumbnail.childImageSharp.original.src}
        />
        <div>
          <p className="Entry__date">{date}</p>
          <h2 className="Entry__title">{title}</h2>
          <p className="Entry__excerpt">{excerpt}</p>
          <Link to={`${slug}`} className="Btn Btn--dark">
            Read more
          </Link>
        </div>
      </div>
    );
  });

  const bgImageData = data.image.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title="Company Updates Blog" />
      <BackgroundImage
        Tag="header"
        className="Header Header--small"
        fluid={bgImageData}
        src={bg}
        backgroundColor={`#2b2b2b`}
      >
        <div className="Header__overlay"></div>
        <div className="Header__line"></div>
        <div className="Header__text">
          <h1 className="Heading--primary">
            Company
            <br />
            Blog
          </h1>
        </div>
      </BackgroundImage>
      <section className="CompanyUpdates">{updatesList}</section>
    </Layout>
  );
};

export default blog;
