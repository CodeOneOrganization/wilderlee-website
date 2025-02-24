import styles from './apresentation.module.css';

export default function Apresentation() {
  return (
    <section className={`${styles.apresentation} container`}>

      <svg xmlns="http://www.w3.org/2000/svg" width="1650" height="631" viewBox="0 0 1750 731" fill="none">
        <ellipse cx="875" cy="351" rx="875" ry="380" fill="url(#paint0_radial_1073_986)" />
       
        <defs>
          <radialGradient id="paint0_radial_1073_986" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(875 351) rotate(90) scale(380 875)">
            <stop stopColor="#080808" />
            <stop offset="1" stopColor="#080808" stopOpacity="0" />
          </radialGradient>
        </defs>

      </svg>

      <div className={styles.container}>

        <div>
          <img className={styles.image1} src="/images/wilderlee1.jpg" alt="" />
          <img className={styles.image2} src="/images/wilderleeBack.jpg" alt="" />
        </div>

        <img className={styles.image3} src="/images/wilderlee2.jpg" alt="" />

      </div>


     
    </section>
  )
}