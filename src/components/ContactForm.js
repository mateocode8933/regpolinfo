import React from "react";
import styles from "styled-components";
import PhoneIcon from "../images/socialiconsmobile/Icon awesome-phone-square-alt.svg"
import MailIcon from "../images/socialiconsmobile/Icon feather-mail.svg"
import LocationIcon from "../images/socialiconsmobile/Icon material-location-on.svg"

const StyledContact = styles.form`
 display: flex;
 flex-direction: column;
 text-align: left;
 width:70%;
 margin: 0 auto;
 color: white;

 label {
   margin: 5px;
 }
 input {
   padding: 3px;
   background: transparent;
   border: 2px solid white;
   color: white;
 }
 textarea {
   background: transparent;
   border: 2px solid white;
   color: white;
   padding: 3px;
 }
 button {
   font-size: 17px;
   font-weight: bold;
   padding: 4px;
   color: white;
   background: #153243;
   border: 2px solid white;
   margin-top: 10px;
   letter-spacing: 3px;
   cursor: pointer;
   transition: all .2s ease-in;
 }
 button:hover {
   background:  #1d4358;
 }
 @media only screen and (min-width: 720px) {
   width: 50%;

 }
 @media only screen and (min-width: 950px) {
   width: 40%;
 }
 @media only screen and (min-width: 1100px) {
   width: 40%;
   input{
     padding: 5px;
   }
 }
 @media only screen and (min-width: 1300px ){
   width: 35%;
   input, textarea, button {
     font-size: 20px;
   }
 }

 @media only screen and (max-height: 750px) {
   height: 70vh;
 }
 
`

const StyledDirectContact = styles.div`
  div {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
  }
    a {
      display: flex;
      text-decoration: none;
      color: white;
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    img{margin-right: 10px;}

    @media only screen and (min-width: 1100px) {
      a{
        font-size: 20px;
      }
      img{
        height: 30px;
      }
    }
   
`

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <>
      
      <StyledContact
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xleoaejo"
        method="POST"
      >
          <label>Imię I Nazwisko:</label>
          <input required type="text" name="Imię I Nazwisko"></input>
          <label>Temat:</label>
          <input required type="text" name="Temat"></input>
        <label>Email:</label>
        <input required type="email" name="E-mail" />
        <label>Wiadomość:</label>
        <textarea required className='messageArea' rows="6" cols="30" name="Wiadomość"></textarea>
        {status === "SUCCESS" ? <p style={{marginTop: '10px'}}>Dziękujemy, wiadomość została wysłana :)</p> : <button>Wyślij</button>}
        {status === "ERROR" && <p>Ooops! Coś poszło nie tak...</p>}
      </StyledContact>
      <StyledDirectContact>
      <div>
          <a href="tel:+523 453 875">
            <img src={PhoneIcon} alt="Phone Icon" />
           <span>(+48) 52 345 38 75</span> 
          </a>
        </div>
        <div>
          <a href="mailto:biuro.regpol@gmail.com">
            <img src={MailIcon} alt="Mail Icon" />
            <span>biuro.regpol@gmail.com</span>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Biuro+Handlowe+REGPOL+Bydgoszcz+Sp.+z+o.o./@53.1087196,18.0504164,17z/data=!3m1!4b1!4m5!3m4!1s0x4703146536e36153:0x71a39fb99e612484!8m2!3d53.1087196!4d18.0526051"
          >
            <img src={LocationIcon} alt="Location Icon" />
           <span>Al. Prezydenta Lecha <br/> Kaczyńskiego 38 <br/> 85-806 Bydgoszcz</span> 
          </a>
        </div>
      </StyledDirectContact>
      </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}