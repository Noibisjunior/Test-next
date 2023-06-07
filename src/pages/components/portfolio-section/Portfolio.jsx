import React from 'react';
import Link from 'next/link';
import { useStaticQuery, graphql } from 'next/graphql';
import Project from './Project';
import styles from '../../styles/partials/portfolio-section.module.scss';
import style from '../../styles/partials/button.module.scss';
import { FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 3
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
  `);

  return (
    <section className={styles.PortfolioSection}>
      <div className="dFlex mb">
        <div className="headings">
          <h3 className={styles.Heading__tertiary}>Our work</h3>
          <h2 className={styles.Heading__secondary}>Portfolio</h2>
        </div>
        <Link href="/portfolio" passHref>
          <a className={style.Btn__no-bg}>
            View all <FaArrowRight className={style.icon} />
          </a>
        </Link>
      </div>
      <div className="dFlex">
        {allMarkdownRemark.edges.map((edge) => {
          const {
            id,
            fields: { slug },
            frontmatter: {
              title,
              subtitle,
              thumbnail: {
                childImageSharp: {
                  original: { src },
                },
              },
            },
          } = edge.node;

          return (
            <Project
              key={id}
              image={src}
              title={title}
              description={subtitle}
              slug={slug}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;
