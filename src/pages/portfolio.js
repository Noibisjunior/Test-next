import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Layout from '../components/layout.component';
import SEO from './components/Seo';
import Project from './components/portfolio-section/Project';
import BackgroundImage from './components/BackgroundImage';
import bg from '../../../public/images/header-bg';

const QUERY = gql`
  query {
    thumbnail: file(relativePath: { eq: "header-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
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
            duration
            service
            category
            thumbnail {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Portfolio = () => {
  const [val, setVal] = useState('');
  const categories = ['websites', 'mobile', 'other'];

  const { loading, error, data } = useQuery(QUERY);

  const radioButtons = categories.map((category) => (
    <li key={category}>
      <input
        type="radio"
        name="filter"
        id={category}
        value={category}
        checked={category === val}
        onChange={() => {
          setVal(category);
        }}
      />
      <label htmlFor={category}>{category}</label>
    </li>
  ));

  const bgImageData = data?.thumbnail?.childImageSharp?.fluid;

  const projectList = data?.project?.edges
    .filter((edge) => edge.node.frontmatter.category.includes(val))
    .map((edge, i) => (
      <Project
        key={edge.node.id}
        image={edge.node.frontmatter.thumbnail.childImageSharp.original.src}
        title={edge.node.frontmatter.title}
        description={edge.node.frontmatter.subtitle}
        duration={edge.node.frontmatter.duration}
        slug={edge.node.fields.slug}
      />
    ));

  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className="PortfolioPage">
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
              Our
              <br />
              Work
            </h1>
          </div>
          </BackgroundImage>
        <ul className="PortfolioPage__filters">
          <li>
            <input
              value=""
              id="all"
              type="radio"
              name="filter"
              checked={'' === val}
              onChange={() => {
                setVal('');
              }}
            />
            <label htmlFor="all">all</label>
          </li>
          {radioButtons}
        </ul>

        <section className="PortfolioPage__projects">{projectList}</section>
      </div>
    </Layout>
  );
};

export default Portfolio;
