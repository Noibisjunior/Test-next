import React from 'react';
import { useStaticQuery, graphql } from 'next/graphql';
import Link  from 'next/link';
import Update from './update.component';
import { FaArrowRight } from 'react-icons/fa';
import styles from '../../styles/partials/updates.module.scss';


const Updates = () => {
  const updates = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        limit: 3
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
              thumbnail {
                childImageSharp {
                  original {
                    src
                  }
                  fluid(maxWidth: 100, maxHeight: 100) {
                    ...GatsbyImageSharpFluid
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

  const updatesList = updates.allMarkdownRemark.edges.map((edge) => {
    const id = edge.node.id;
    const excerpt = edge.node.excerpt;
    const slug = edge.node.fields.slug;
    const { title, subtitle, thumbnail } = edge.node.frontmatter;

    return (
      <Update
        key={id}
        slug={slug}
        title={title}
        description={excerpt}
        image={thumbnail.childImageSharp.original.src}
      />
    );
  });

  return (
    <section className={styles.Updates}>
      <div className="dFlex mb">
        <div className="headings">
          <h3 className={styles.Heading__tertiary}>Stay informed</h3>
          <h2 className={styles.Heading__secondary}>Company updates</h2>
        </div>
        <Link to="blog" className="Btn Btn--no-bg">
          View all <FaArrowRight className="icon" />
        </Link>
      </div>
      <div className="dFlex">{updatesList}</div>
    </section>
  );
};

export default Updates;
