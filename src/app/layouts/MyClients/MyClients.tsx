"use client"

import styles from "./MyClients.module.css"
import DraggableSlide from "@/common/components/DraggableSlide"

const clientsPhotos = [
  { src: "/images/after-before.jpg", },
  { src: "/images/after-before2.jpg", },
  { src: "/images/after-before3.jpg", },
]

const clientsVideos = [
  {src: "/videos/client.mp4",},
  {src: "/videos/client2.mp4",}
]


interface SnapshotProps extends React.ImgHTMLAttributes<HTMLImageElement> { }
interface VideoProps extends React.ImgHTMLAttributes<HTMLVideoElement> { }

function Snapshot({ src }: SnapshotProps) {
  return (
    <figure className={styles.figure} data-slide-item >
      <img className={styles.image} src={src} alt="" />
    </figure>
  )
}

function Video({src}: VideoProps) {
  return (
    <div className={styles.video} data-slide-item>
      <video src={src} autoPlay loop muted></video>
    </div>
  )
}

export default function MyClients() {
  return (
    <section className={styles.myClients} data-slide-element>
      <DraggableSlide trigger={styles.myClients}>
        <div className={styles.slide} data-slide-wrapper>

          {clientsPhotos.map((x, i) => <Snapshot key={`Snapshot_${i}`} {...x} />)}
          {clientsVideos.map((x, i) => <Video key={`Video ${i}`} {...x} />)}

        </div>
      </DraggableSlide>
    </section>
  )
}