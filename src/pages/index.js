import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import scrollTo from 'gatsby-plugin-smoothscroll';

import styles from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import BottomLogo from "../images/regpolLogo/TopLogo.png"

const StyledSection = styles.section`
height: 92vh;
max-width: inherit;
position: relative;
margin-top: -5px;
.BckImage{
  height: 100%;
  position: absolute;
  top: 5px;
  z-index: -10;
  filter: brightness(65%);
}
.C2A {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute; 
  top: 30%;
}

.littleImage {
  position: absolute;
  top: 65%;
  left: 5%;
  padding: 15px;
  z-index: 20;
  width: 250px;
}
@media only screen and (max-height: 550px) {
  .littleImage{
    top: 70%;
  }
}


.littleImage p {
  color: white;
  padding: 5px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
}


.C2A p {
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  color: white;
  position: relative;
  margin: 30px;
  padding: 25px;
}
.C2A p::before {
  content: '';
  width: 110%;
height: 3px;
background-color: white;
position: absolute;
top: 0;
left: -5%;
}
.C2A p::after {
  content: '';
  width: 80%;
height: 3px;
background-color: white;
position: absolute;
bottom: 0;
left: 10%;
}

.C2A button {
  font-size: 25px;
  padding:13px;
  border-radius: 10px;
  background: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  outline: none;
  transition: all .2s ease-in;
}
.C2A button:hover{
  transform: scale(1.1);
}

@media only screen and (max-width: 1450px) {
  .littleImage {
    width: 220px;
  }
}
@media only screen and (max-width: 1350px) {
  .C2A p {
    font-size: 35px;
  }
  .C2A button {
    font-size: 20px;
  }
}
@media only screen and (max-width: 1150px) {
  .C2A p {
    font-size: 30px;
    margin: 25px;
  }
  .C2A button {
    font-size: 15px;
  }
  .littleImage {
    width: 200px;
    top: 70%;
  }
}
@media only screen and (max-width: 850px){
  .C2A p {
    font-size: 25px;
    padding: 15px;
  }
  .C2A button {
    font-size: 14px;
  }
  .littleImage {
    width:160px;
    top: 75%;
  }
  .littleImage p {
    font-size: 12px;
  }
}
@media only screen and (max-width: 600px) {
  .C2A p {
    font-size: 20px;
    margin: 15px;
  }
  .C2A button {
    font-size: 12px;
  }
}
@media only screen and (max-width: 450px) {
  .C2A p {
    font-size: 15px;
    padding: 10px;
    line-height: 20px;
    letter-spacing: 1px;
  }
  .C2A p::before{
    width: 105%;
    left: -3%;
  }
  .C2A p::after {
    width: 70%;
    left: 15%;
  }
  .C2A  button {
    font-size: 12px;
    padding: 10px;
    letter-spacing: 1px;
  }
  @media only screen and (max-width: 320px) {
    .C2A p {
      font-size: 12px;
    }
    .C2A p::before {
      width: 100%;
      left: 0;
    }
    .littleImage {
      width: 130px;
    }
    .littleImage p {
      font-size: 10px;
    }
  }

 
}
`
const StyledArticle = styles.article`
width: 80%;
margin: 20px auto;
.articleLogo {
  font-size: 25px;
  width: 80%;
  margin: 0 auto 0 0px;
}

.articleLogo p {
  text-align: left;
  margin-bottom: 10px;
}


.articleLogo img {
  background: var(--mainRed);
  width: 70%;
  height: 70%;
  color: black;
}

@media only screen and (min-width: 450px) {
  .articleLogo img{
    height: 50%;
    width: 50%;
  }
}

@media only screen and (min-width: 750px) {
  .articleLogo img {
    height: 35%;
    width: 35%;
  }
}
@media only screen and (min-width: 1100px) {
  .articleLogo img {
    height: 25%;
    width: 25%;
  }
}

.articleDescription p {
  line-height: 25px;
  letter-spacing: 1px;
  margin-top: 25px;
}
@media only screen and (min-width: 1050px) {
  .articleLogo {
    font-size: 30px;
  }
}
@media only screen and (min-width: 1250px) {
  .articleDescription p {
    line-height: 35px;
  }

}
@media only screen and (min-width: 1550px) {
  .articleDescription p {
    line-height: 42px;
    font-size: 20px;
  }
  .articleLogo img {
    width: 20%;
    height: 20%;
  }
}
`
const getImages = graphql`
  {
    fluid: allFile(filter: { relativeDirectory: { eq: "homeimages" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 40) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

export default function Home() {
  const data = useStaticQuery(getImages)



  return (
    <Layout>
      <Helmet>
        <title>
          Regpol - Kleje przemysłowe, uszczelniacze, silikony | Biuro Handlowe
          Regpol | Bydgoszcz – Jesteśmy autoryzowanym przedstawicielem firm
          Henkel, Loctite i Teroson. Znajdziesz u nas kleje przemysłowe,
          uszczelniacze i silikony. Zapraszamy!
        </title>
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

      <StyledSection>
        <div className="C2A">
          <p>
            Technologie które sprostają <br /> największym wyzwaniom
          </p>
          <button onClick={() => scrollTo('#HomePageArticle')}>Zobacz Więcej</button>
        </div>
        <div className="littleImage">
          <p>Autoryzowany Dystrybutor</p>
          <Image
            className="LctImage"
            fluid={data.fluid.nodes[0].childImageSharp.fluid}
          />
        </div>
        <Image
          className="BckImage"
          fluid={data.fluid.nodes[1].childImageSharp.fluid}
        />
      </StyledSection>
      <StyledArticle id='HomePageArticle'>
        <div className="articleLogo">
       
          <p>BIURO HANDLOWE</p>
          <img alt='regpol logo' src={BottomLogo}></img>
        </div>
        <div className="articleDescription">
          <p>
            Dzień dobry <br /> <br /> Miło mi, że odwiedziliście Państwo naszą
            stronę. Firma Biuro Handlowe REGPOL Bydgoszcz Sp. z o.o. istnieje od
            1992 roku. Jesteśmy autoryzowanym przedstawicielem firmy HENKEL.
            Produkty Loctite oraz Teroson są produktami, które w branży
            przemysłowej i motoryzacyjnej stanowią podstawową bazę środków
            chemicznych w naprawach, renowacjach i konserwacjach. Doświadczenie
            zdobyte po tylu latach obcowania z marką HENKEL, pozwala nam służyć
            Państwu wszelką pomocą w zakresie doboru odpowiedniego produktu oraz
            rozwiązywania najbardziej nietypowych problemów, z którymi mogą sie
            Państwo spotkać nie tylko w sferze zawodowej. <br />
            <br />
            Pozdrawiam, <br /> Aleksandra Chuda
          </p>
        </div>
      </StyledArticle>
    </Layout>
  )
}
