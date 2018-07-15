import React from 'react'
import styles from './index.css'
console.log(styles) // {red: "_3nNyvxmGvOPb44HkupCXGR", green: "_3Oo34AiMDI2Ojkrds2wW4E _3nNyvxmGvOPb44HkupCXGR", btnGoodbye: "_1W7vb2_Kp5cyE-Nz5SMgXf _2L3SEHr5dQItGwgrazRBdH Fy2_VyMaPXsKAg0l-WKyX"}

export default function Greeting() {
  return (
    <div className="Greeting">
      <h1 className={styles.green}>Hello My Friend!</h1>
      <h2 className={styles.btnGoodbye}>Goodbye</h2>
      <h2>chocolate</h2>
    </div>
  )
}