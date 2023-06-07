import React from 'react';
import styles from '../../styles/partials/about-section.module.scss';

const About = () => {
  return (
    <section className={styles.AboutSection}>
      <div className={styles.AboutSection__left}>
        <h3 className={styles.Heading__tertiary}>AE Inc.</h3>
        <h2 className={styles.Heading__secondary}>Info section</h2>
        <p>
          AnsonErvin Inc. is a US-based software company dedicated to designing
          cost-effective software solutions that optimize business operations
          across various industries. Our focus on technological innovation aims
          to simplify and enhance the way companies operate, promoting greater
          ease and efficiency.{' '}
        </p>
        <hr />
      </div>
      <div className={styles.AboutSection__right}>
        <p>
          At our core, we value efficiency and design as the pillars of
          exceptional software development. Whether we're creating mobile
          applications or websites, we approach each project with a focus on
          unique design and tailored structure that meets the specific needs of
          your target audience. Our goal is to provide your company with a
          valuable resource that delivers measurable results.
        </p>
        <p>
          In addition to software development, we also offer software management
          services to help your brand thrive. Our team is dedicated to helping
          your software evolve and scale alongside your business growth. As your
          brand expands, we are committed to ensuring your software meets the
          changing needs of your business.
        </p>
      </div>
    </section>
  );
};

export default About;
