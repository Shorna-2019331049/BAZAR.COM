import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import {Toaster} from 'react-hot-toast';

const Layout = ({ children, title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        {/* <script src="http://localhost:3000/bootstrap.bundle.min.js"></script>
        <link href="http://localhost:3000/bootstrap.min.css" rel="stylesheet" /> */}
        <link href="%PUBLIC_URL%/bootstrap.min.css" rel="stylesheet" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
      <Toaster/>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "BAJAR.COM - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
};

export default Layout;
