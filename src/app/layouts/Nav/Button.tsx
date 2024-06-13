"use client";

import { useState, useCallback } from "react";

import { Close, Open } from "@/app/layouts/Nav/Animations/Overlay";

import styles from "./Nav.module.css";


import GymPlate from "@/common/components/GymPlate";
import { rotateHover, rotateHoverOut } from "@/common/animations/RotateHover";

interface Props extends React.SVGAttributes<SVGSVGElement> {}
export default function Button({ ...props }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleVerify = useCallback(() => {
    !isOpen ? Open(setIsOpen) : Close(setIsOpen);
  }, [isOpen]);

  return (
    <button
      className={styles.gymPlate}
      onMouseEnter={() => rotateHover({ className: `.${styles.gymPlate}` })}
      onMouseLeave={() => rotateHoverOut({ className: `.${styles.gymPlate}` })}
    >
      <GymPlate {...props} onClick={handleVerify} />
    </button>
  );
}
