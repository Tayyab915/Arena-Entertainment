import React from 'react'
import Marquee from "react-fast-marquee";
import styles from "./About.module.css"
import Slider1 from "../../Images/silder1.png"
import Slider2 from "../../Images/slider2.png"
import Slider3 from "../../Images/slider3.png"
import Slider4 from "../../Images/slider4.png"
import Slider5 from "../../Images/slider5.png"
import Slider6 from "../../Images/slider6.png"
const SliderText = () => {
  return (
    <div>
 <Marquee>
 <div className={styles.sliderMain}>
    <div className={styles.sliderdivMain}>
        <div className={styles.dotText}>·</div>
        <div className={styles.sliderIconDiv}>
            <img src={Slider1} alt="" className={styles.slider1} />
            <div className={styles.iconText}>PinkSale</div>
        </div>
    </div>
    <div className={styles.sliderdivMain}>
        <div className={styles.dotText}>·</div>
        <div className={styles.sliderIconDiv}>
            <img src={Slider2} alt="" className={styles.slider1} />
            <div className={styles.iconText}>DexView</div>
        </div>
    </div>
    <div className={styles.sliderdivMain}>
        <div className={styles.dotText}>·</div>
        <div className={styles.sliderIconDiv}>
            <img src={Slider3} alt="" className={styles.slider1} />
            <div className={styles.iconText}>raydium</div>
        </div>
    </div>
    <div className={styles.sliderdivMain}>
        <div className={styles.dotText}>·</div>
        <div className={styles.sliderIconDiv}>
            <img src={Slider4} alt="" className={styles.slider1} />
            <div className={styles.iconText}>coinmarketcap</div>
        </div>
    </div>
    <div className={styles.sliderdivMain}>
        <div className={styles.dotText}>·</div>
        <div className={styles.sliderIconDiv}>
            <img src={Slider5} alt="" className={styles.slider1} />
            <div className={styles.iconText}>coingecko</div>
        </div>
    </div>
    <div className={styles.sliderdivMain}>
        <div className={styles.dotText}>·</div>
        <div className={styles.sliderIconDiv}>
            <img src={Slider6} alt="" className={styles.slider1} />
            <div className={styles.iconText}>avedex</div>
        </div>
    </div>
 </div>
  </Marquee>
    </div>
  )
}

export default SliderText
