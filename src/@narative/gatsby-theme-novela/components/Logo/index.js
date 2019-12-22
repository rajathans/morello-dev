import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./Logo.module.css";

const Logo = ({ fill = "white" }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <h3 className={styles.Logo} style={{ color: fill }}>
      {site.siteMetadata.title}
    </h3>
  );
};

export default Logo;
