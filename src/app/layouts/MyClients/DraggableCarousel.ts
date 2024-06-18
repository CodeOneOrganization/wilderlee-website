import lerp from "@/common/utils/clamp"

interface DraggableCarouselParams {
  element: string
  wrap: string
  items: string
}

export default class DraggableCarousel {
  el: HTMLElement
  wrap: HTMLElement
  items: NodeListOf<Element>
  wrapWidth!: number
  progress!: number
  maxScroll!: number
  constructor(props: DraggableCarouselParams) {
    this.el = document.querySelector(props.element)!
    this.wrap = document.querySelector(props.wrap)!
    this.items = document.querySelectorAll(props.items)

    this.init()
  }

  public init() {
    this.wrapWidth = this.items[0].clientWidth * this.items.length
    this.progress = 0
    this.x = 0
    this.oldX = 0

    this.maxScroll = this.wrapWidth - this.el.clientWidth
  }

  public move() {
    this.progress = lerp(this.progress, this.x, 0.1)
  }
}
