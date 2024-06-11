"use client"
import { Close, Open } from "@/app/layout/Nav/Animations/Overlay";
import Asterisc from "@/common/components/Asterisc";
import styles from "./Nav.module.css"
import { useState, useCallback } from "react";

export default function Button() {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleVerify = useCallback(() =>{
    !isOpen? Open(setIsOpen) : Close(setIsOpen)
  }, [isOpen])

  return (
    // <button className="button_asterisc">
      <Asterisc className={`${styles.asterisc} button_asterisc_svg`}  onClick={handleVerify}/>
    // </button>
  );
}
