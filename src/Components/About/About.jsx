import React from "react";
import styles from "./About.module.css";
import AboutImg from "../../Images/About.png";
import SliderText from "./SliderText";
const About = () => {
  return (
    <div className={styles.aboutMain} id="action2">
      <SliderText/>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutSection1Main}>
          <div className={styles.section1HeadingMain}>
            <div className={styles.section1Heading}>What's our deal?</div>
          </div>
        </div>
        <div className={styles.aboutSection2Main}>
          <div className={styles.aboutSection2Text}>
            Welcome to the Community of Meme (COME), where every meme you create
            is a ticket to wealth! Our vibrant community taps into the boundless
            power of humor, turning every meme into a valuable asset.
          </div>
          <br />
          <div className={styles.aboutSection2Text}>
            With each meme, we reach a vast audience across social media
            platforms, forums, and online spaces, amplifying the demand for the
            COME token and driving its value skyward.
          </div>
          <br />
          <div className={styles.aboutSection2Text}>
            Every member's contribution adds to the COME token's value, as they
            share their unique humor content. This organic growth fuels a
            perpetual rise in the COME token's value.
          </div>
          <br />
          <div className={styles.aboutSection2Text}>
            Join our community today and unleash the potential of humor to build
            your fortune, one meme at a time!
          </div>
        </div>
        <div className={styles.aboutSection3Main}>
          <div className={styles.section3Heading}>Community</div>
          <div className={styles.section3Heading}>Building</div>
          <img src={AboutImg} alt="" className={styles.abtImg} />
        </div>
      </div>
    </div>
  );
};

export default About;
