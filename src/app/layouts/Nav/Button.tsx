"use client"
import { Close, Open } from "@/app/layouts/Nav/Animations/Overlay";
import Asterisk from "@/common/components/Asterisc";
import styles from "./Nav.module.css";
import { useState, useCallback } from "react";
import {
  asteriscHover,
  asteriscHoverOut,
} from "@/app/layouts/Nav/Animations/Hover";

interface Props extends React.SVGAttributes<SVGSVGElement> {}
export default function Button({ ...props }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleVerify = useCallback(() => {
    !isOpen ? Open(setIsOpen) : Close(setIsOpen);
  }, [isOpen]);

  return (
    <button
      className={`${styles.asterisc} fadeIn`}
      onMouseEnter={asteriscHover}
      onMouseLeave={asteriscHoverOut}
    >
      <Asterisk {...props} onClick={handleVerify} />
    </button>
  );
}
