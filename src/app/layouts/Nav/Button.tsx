"use client"
import { Close, Open } from "@/app/layouts/Nav/Animations/Overlay";
import Asterisk from "@/common/components/Asterisc";
import styles from "./Nav.module.css"
import { useState, useCallback, ButtonHTMLAttributes } from "react";

interface Props extends React.SVGAttributes<SVGSVGElement> { }
export default function Button({ ...props }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleVerify = useCallback(() => {
    !isOpen ? Open(setIsOpen) : Close(setIsOpen)
  }, [isOpen])

  return (
    <Asterisk {...props} className={`${styles.asterisc} button_asterisc_svg`} onClick={handleVerify} />
  );
}
