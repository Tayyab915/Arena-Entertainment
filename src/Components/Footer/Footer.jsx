import React from 'react'
import styles from "./Footer.module.css"
import Logo from "../../Images/footerLogo.png"
import FaceBook from "../../Images/facebookIcn.png";
import YouTube from "../../Images/youtubeIcn.png";
import Instagram from "../../Images/InstaIcn.png";
import Dot from "../../Images/dotIcn.png";
import Share from "../../Images/shareIcn.png";
import LastImg from "../../Images/footer.png";
import TopIcon from "../../Images/topIcn.png";
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0); 
      };
  return (
    <div className={styles.footerMain}>
        <div className={styles.footerContainer}>
       <img src={Logo} alt="" className={styles.footerlogo} />
       <div className={styles.footerHeading}>
       Follow Us!
       </div>
       <div className={styles.footerText}>
       Stay Connected for the latest updates, news, and
       <br />
exciting developments in the Community of Meme.
       </div>
       <div className={styles.IconsMain}>
            <img src={FaceBook} alt="" className={styles.iconImg} />
            <img src={YouTube} alt="" className={styles.iconImg} />
            <img src={Instagram} alt="" className={styles.iconImg} />
            <img src={Dot} alt="" className={styles.iconImg} />
            <img src={Share} alt="" className={styles.iconImg} />
          </div>
          <div className={styles.footerImages}>
          <img src={LastImg} alt="" className={styles.lastImg} />
          <img src={TopIcon} alt="" className={styles.topIcn} onClick={scrollToTop} />
          </div>

        </div>
      
    </div>
  )
}

export default Footer
