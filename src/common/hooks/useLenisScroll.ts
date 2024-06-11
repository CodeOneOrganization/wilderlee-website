import { useContext } from "react";
import { LenisScrollContext } from "@/common/contexts/LenisScrollProvider";


export default function useLenisScroll(){
  return useContext(LenisScrollContext)
}