import React from "react";
import Link from "gatsby-link";
import styles from "../pages/about.module.css";

export default ({ children, data }) => (
  <div>
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <div className={styles.navbar}>
        <h3 className={styles.logo}><Link to="/">{data.site.siteMetadata.title}</Link></h3>
        <div className={styles.navlinks}>
          <div>
            <Link to="/about">Products</Link>
          </div>
          <div>
            <Link to="/about">Developers</Link>
          </div>
          <div>
            <Link to="/about">Company</Link>
          </div>
          <div>
            <Link to="/about">Pricing</Link>
          </div>
        </div>
      </div>
      {children()}
    </div>
    <div className={styles.footer}>
      <div style={{ margin: `0 auto`, maxWidth: "80%", padding: `0 1rem` }}>
        <div className={styles.prefooter}>
          <div>
            <h2>Ready to get started?</h2>
            <h3>Get in touch, or create an account</h3>
          </div>
          <div>
            <button>create stripe account</button>
            <button>contact sales</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`