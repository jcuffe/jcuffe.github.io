import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout/layout"

export default () => {
  const handleClick = (event) => {
    event.preventDefault();
    const url = `https://calendly.com/jcuffe/60`;
    window.Calendly.initPopupWidget({ url });
    return false;
  }
  return (
    <Layout>
      <Helmet>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
      </Helmet>
      <button onClick={handleClick}>Schedule a one hour tutoring session</button>
    </Layout>
  )
}