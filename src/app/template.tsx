"use client"

import Preloader from "./layouts/Preloader/Preloader";

interface Props extends React.PropsWithChildren { }
export default function Template({ children }: Props) {

  return (
    <>
      <Preloader />
      {children}
    </>
  )
}