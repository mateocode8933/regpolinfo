import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import styles from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
const StyledAside = styles.aside`
  width: 95%;
  margin: 20px auto;
  padding: 15px;
  @media only screen and (min-width: 1100px) {
    width: 90%;
  }

  .topDesc {
    font-weight: bold;
    line-height: 25px;
    margin-bottom: 15px;
    font-size: 17px;
  }
  .firstimages {
    margin: 15px auto;
  }
  .shopImage {
    border-radius: 5px;
    width: 240px;
    filter: brightness(75%);
    margin: 25px auto;
  }
  .bottomDesc {
    font-size: 18px;
  
    letter-spacing: 1px;
    line-height: 28px;
  }
  .secondImages {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  .aboutImage {
    width: 200px;
  }
  @media only screen and (min-width: 410px) {
      .shopImage {
        width: 278px;
      }
      .topDesc {
        font-size: 19px;
      }
  }
  @media only screen and (min-width: 500px) {
    .shopImage {
      width: 300px;
    }
  }
  @media only screen and (min-width: 550px) {
    .firstimages {
      display: flex;
      justify-content: space-around;
    }
    .shopImage {
      width: 235px;
    }
    .topDesc {
      font-size: 20px;
    }
    .aboutImage {
      width:230px;
    }
  }
  @media only screen and (min-width: 720px) {
    .shopImage {
      width: 320px;
    }
    .aboutImage {
      width:270px;
    }
  }
  @media only screen and (min-width: 830px) {
    .shopImage {
      width: 340px;
    }
  }
  @media only screen and (min-width: 900px) {
    .shopImage {
      width: 350px;
    }
    .aboutImage {
      width:330px;
    }
    .topDesc {
      font-size: 22px;
      line-height: 30px;
    }
    .bottomDesc {
      font-size: 20px;
      line-height: 38px;
    }
  }
  @media only screen and (min-width: 1100px) {
    .shopImage {
      width:340px;
    }
  }
  @media only screen and (min-width: 1200px) {
    .allAboutImages {
      width: 90%;
      display: flex;
      margin: 20px auto;
     justify-content: space-around;
    }
    .shopImage, .aboutImage {
      width: 260px;
      margin: 15px;
    }
    .secondImages:nth-child(2) {
      padding: 15px;
    }
    .firstimages {
      width: 100%;
    }
    .secondImages {
      width: 100%;
    }
    .topDesc {
      text-align: center;
    }
  }
  @media only screen and (min-width: 1350px) {
    .shopImage, .aboutImage {
      width: 280px;
      margin: 25px;
    }
    .allAboutImages {
      padding: 20px;
    }
  }
  @media only screen and (min-width:1600px) {
    .shopImage, .aboutImage {
      width: 330px;
      margin: 45px;
    }
    .allAboutImages {
      width: 50%;
    }
    .bottomDesc {
      line-height: 40px;
      font-size: 25px;
    }
    .topDesc {
      font-size: 28px;
      line-height: 35px;
      text-align: left;
    }
  }
`
const getImages = graphql`
  {
    fluid: allFile(
      sort: { fields: relativePath }
      filter: { relativeDirectory: { eq: "aboutimages" } }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 400, quality: 40) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(getImages)

  // fluid={data.fluid.nodes[0].childImageSharp.fluid}
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Kleje przemysłowe, uszczelniacze, silikony"
        />
        <meta
          name="keywords"
          content="Regpol Henkel Loctite Teroson Bonderite"
        />
        <link rel="canonical" href="https://www.regpol.info/"></link>
        
      </Helmet>
      <StyledAside>
        <div className="topDesc">
          <p>
            Biuro Handlowe Regpol Bydgoszcz Sp. z o.o. jako Autoryzowany
            Dystrybutor Firmy Loctite współpracuje od 1992r. Od 1999 roku
            również jako Autoryzowany Dystrybutor marki Teroson.
          </p>
        </div>
        <hr />
        <br />
        <div className="bottomDesc">
          <p>
            Jesteśmy małą rodzinną firmą handlowo usługową oferującą najwyższej
            jakości produkty chemii technicznej takie jak{" "}
            <strong>Loctite Teroson.</strong>
            Naszym zadaniem jest nie tylko sprzedaż produktu. Rozwiązujemy
            problemy naszych klientów oraz sprzedajemy całe aplikacje. Klientami
            <strong> Biura Handlowego Regpol Bydgoszcz Sp. z o.o.</strong> są
            nie tylko serwisy motoryzacyjne. Obsługujemy również małe warsztaty
            samochodowe i w szerokim zakresie zakłady przemysłowe. Jesteśmy
            załogą cztero osobową doskonale wyszkoloną technicznie i prężnie
            działającą , co znajduje uznanie naszych klientów . Świadczymy
            również usługi w zakresie doradztwa technicznego. Firma posiada
            certyfikat KRD , co pomaga w uzyskaniu wiarygodności firmy. Za
            całokształt firmy odpowiada właściciel{" "}
            <strong>Aleksandra Chuda.</strong>
          </p>
        </div>
        <div className="allAboutImages">
          <div className="firstimages">
            <Image
              className="shopImage"
              fluid={data.fluid.nodes[2].childImageSharp.fluid}
            ></Image>
            <Image
              className="shopImage"
              fluid={data.fluid.nodes[3].childImageSharp.fluid}
            ></Image>
          </div>
          <div className="secondImages">
            <Image
              className="aboutImage"
              fluid={data.fluid.nodes[0].childImageSharp.fluid}
            ></Image>
            <Image
              className="aboutImage"
              fluid={data.fluid.nodes[1].childImageSharp.fluid}
            ></Image>
          </div>
        </div>
      </StyledAside>
    </Layout>
  )
}

export default About
