import React from 'react'
import styles from "./Token.module.css"
const Token = () => {
  return (
    <div className={styles.tokenMain} id='action4'>
      <div className={styles.tokenContainer}>
        <div className={styles.tokenLeftSideMain}>
            <div className={styles.tokenHEadingmain}>
            Tokenomics
            </div>
            <div className={styles.tokenButtonMain}>
                <div className={styles.tokenBtn}></div>
            </div>
            <div className={styles.tokenText}>
            399 Tokens left
            </div>
        </div>
        <div className={styles.tokenRightSideMain}>
            <div className={styles.tokenRightHeading}>
            No Private Sale, No Reserved Tokens - A Community-Driven Rise!
            </div>
            <div className={styles.nameText}>

            <span>NAME:</span> 
            Community of Meme  
            </div>
            <div className={styles.nameTextLine}></div>
            <div className={styles.nameText}>

            <span>symbol:</span> 
            Come
            </div>
            <div className={styles.nameTextLine}></div>
            <div className={styles.nameText}>

            <span>Supply:</span> 
            69.000.000.000 
            </div>
            <div className={styles.nameTextLine}></div>
            <div className={styles.nameText2}>

            <span>Team tokens:</span> 
            no
            </div>
            <div className={styles.nameTextLine}></div>
            <div className={styles.nameText2}>

            <span>private:</span> 
            no
            </div>
            <div className={styles.nameTextLine}></div>
            <div className={styles.nameText3}>

            <span>tax:</span> 
            0%
            </div>
            <div className={styles.nameTextLine}></div>
        </div>
      </div>
    </div>
  )
}

export default Token

