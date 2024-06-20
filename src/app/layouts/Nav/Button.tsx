"use client";

import { useState, useCallback } from "react";

import { Close, Open } from "@/app/layouts/Nav/Animations/Overlay";

import styles from "./Nav.module.css";

import CheeseIcon from "@/common/components/CheeseIcon";

interface Props extends React.SVGAttributes<SVGSVGElement> {}
export default function Button({ ...props }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleVerify = useCallback(() => {
    !isOpen ? Open(setIsOpen) : Close(setIsOpen);
  }, [isOpen]);

  return (
    <div className={styles.cheeseBurger} onClick={handleVerify}>
        <CheeseIcon />
      </div>
  );
}
