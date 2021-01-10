import React from 'react'
import styles from "../styles/footer.module.css";
import {Link} from 'gatsby';
const Footer = () => {
    return (
        
        <footer className={styles.footer}>
            <p>Copyright © 2021 Kleje przemysłowe, uszczelniacze, silikony | Regpol | Bydgoszcz. <br/> Wszystkie Prawa Zastrzeżone | Mateusz Skrobiś</p>
            <Link to='/rodo'>rodo</Link>
        </footer>
    )
}

export default Footer
