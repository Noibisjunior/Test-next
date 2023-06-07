import React from 'react';
import Link from 'next/link';
import { useStaticQuery, graphql } from 'next/graphql';
import Update from './update.jsx';
import { FaArrowRight } from 'react-icons/fa';
import styles from '../../styles/partials/updates.module.scss';

const Updates = useStaticQuery(graphql`
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
              }
            }
          }
          excerpt
        }
      }
    }
  }
`);

const updatesList = updates.allMarkdownRemark.edges.map(({ node }) => {
  const { id, fields, frontmatter } = node;
  const { slug } = fields;
  const { title, subtitle, thumbnail } = frontmatter;

  return (
    <Update
      key={id}
      slug={slug}
      title={title}
      description={subtitle}
      image={thumbnail.childImageSharp.original.src}
    />
  );
});return (
  <>
    {updatesList}
    <Link href="/blog" className={styles.Updates__view-more}>
      <p>View more updates</p> <FaArrowRight />
    </Link>
  </>
)

export default Updates;



