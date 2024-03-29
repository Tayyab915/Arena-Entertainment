import React from 'react'
import styles from "./Home.module.css";
import HomeImg from "../../Images/homeImg.png";
import CopyIcon from "../../Images/copyIcn.png";
import FaceBook from "../../Images/facebookIcn.png";
import YouTube from "../../Images/youtubeIcn.png";
import Instagram from "../../Images/InstaIcn.png";
import Dot from "../../Images/dotIcn.png";
import Share from "../../Images/shareIcn.png";
const Home = () => {
  return (
    <div className={styles.homeMain} id='action1'>
      <div className={styles.homeContainer}>
        <div className={styles.homeHeadingMain}>
        COMMUNITY OF MEME
        </div>
        <div className={styles.homeSectionMain}>
        <div className={styles.homeSection1Main}>
<div className={styles.homeSec1Heading}>
Every meme you make will make you rich
</div>
<div className={styles.homeSec1Text}>
Members of our community are creating unprecedented demand for the COME token by sharing creative memes.
</div>
        </div>
        <div className={styles.homeSection2Main}>
            <img src={HomeImg} alt="" className={styles.homeImg} />
        </div>
        <div className={styles.homeSection3Main}>
          <div className={styles.homeSec3Heading}>
          CONTRACT ADDRESS
          </div>
          <div className={styles.copysectionMain}>
            <div className={styles.copyText}>
            GmW12mAzyTj897Y3pgxDQzpnNid7q58E8T7V56rmaUdD
            </div>
            <img src={CopyIcon} alt="" className={styles.copyIcn} />
          </div>
          <div className={styles.IconsMain}>
            <img src={FaceBook} alt="" className={styles.iconImg} />
            <img src={YouTube} alt="" className={styles.iconImg} />
            <img src={Instagram} alt="" className={styles.iconImg} />
            <img src={Dot} alt="" className={styles.iconImg} />
            <img src={Share} alt="" className={styles.iconImg} />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
