"use client"

import styles from "./MyClients.module.css"

import Arrow from "@/common/components/Arrow"
import DraggableSlide from "@/common/components/DraggableSlide"

const clients = [
  { src: "/images/image-snapshot1.jpg", },
  { src: "/images/image-snapshot2.jpg", },
  { src: "/images/image-snapshot3.jpg", }
]


interface SnapshotProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
function Snapshot({src}: SnapshotProps){
  return( 
    <figure className={styles.figure} data-slide-item >
      <img className={styles.image} src={src} alt="" />
    </figure>
  )
}

export default function MyClients() {
  return (
    <section className={styles.myClients} data-slide-element>
      <DraggableSlide trigger={styles.myClients}>
        <div className={styles.slide} data-slide-wrapper>
          <Arrow className={`${styles.arrow} ${styles.left}`} />
          {clients.map((x, i) => <Snapshot key={`Snapshot_${i}`} {...x}/>)}
          <Arrow className={`${styles.arrow} ${styles.right}`} />
        </div>
      </DraggableSlide>
    </section>
  )
}