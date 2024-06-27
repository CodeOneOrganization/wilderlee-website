import { MutableRefObject } from "react";

import GSAP from ".d"

function pageTransitionIn(timeline: MutableRefObject<GSAP.>) {
  timeline.current.set()
}
