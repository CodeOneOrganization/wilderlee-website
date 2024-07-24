"use client";

import { useState, useCallback, useEffect } from "react";

import { Close, Open } from "@/app/layouts/Nav/Animations/Overlay";

import styles from "./Nav.module.css";

import CheeseIcon from "@/common/components/CheeseIcon";

interface Props extends React.SVGAttributes<SVGSVGElement> { }
function ForkIcon({ ...props }: Props) {
  return (
    <svg
      // width="34"
      // height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3 3L31 31" stroke="white" stroke-width="7.32" />
      <path d="M31 3L3 31" stroke="white" stroke-width="7.32" />
    </svg>

  )
}

interface Props extends React.SVGAttributes<SVGSVGElement> { }
export default function Button({ ...props }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleVerify = useCallback(() => {
    const target = document.getElementsByTagName("menu").item(0)!
    target.setAttribute("data-menu", isOpen ? "closed" : "opened")

    !isOpen ? Open(setIsOpen) : Close(setIsOpen);
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = document.getElementsByTagName("menu").item(0)!

      // When the user press Escape key and the menu is opened, then will closed immediately itself
      if (e.key === "Escape") {
        if (target.dataset.menu === "opened") {
          setIsOpen(false)
          Close(setIsOpen)
          target.setAttribute("data-menu", "closed")
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(() => {
    const handleOnClick = () => {
      const target = document.getElementsByTagName("menu").item(0)!

      target.setAttribute("data-menu", "closed")
    }

    window.addEventListener("click", handleOnClick)

    return () => {
      window.removeEventListener("click", handleOnClick)

    }
  }, [])

  return (
    <div className={styles.icon} onClick={handleVerify}>
      {!isOpen ? (<CheeseIcon className={styles.cheeseBurger} />) : (<ForkIcon className={styles.fork} />)}
    </div>
  );
}
