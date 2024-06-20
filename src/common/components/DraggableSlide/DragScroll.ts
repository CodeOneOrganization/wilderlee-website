
function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max))
}

function lerp(f0: number, f1: number, t: number) {
  return (1 - t) * f0 + f1 * t
}

interface DragConfig {
  wrap: string
  element: string
  items: string
  bar: string


}
class DragScroll {
  wrap: HTMLElement
  el: HTMLElement
  items: NodeListOf<HTMLDivElement>
  bar: HTMLElement
  wrapWidth!: number
  progress!: number
  maxScroll!: number
  draggable!: boolean
  startX!: number
  x_0!: number
  speed!: number
  oldX!: number
  playRate!: number
  x!: number
  scale!: number

  constructor(config: DragConfig) {
    this.wrap = document.querySelector<HTMLElement>(config.wrap)!
    this.el = document.querySelector<HTMLElement>(config.element)!
    this.items = document.querySelectorAll<HTMLDivElement>(config.items)!
    this.bar = document.querySelector<HTMLElement>(config.bar)!
    console.log("items", this.items)

    this.init()
  }

  public init() {
    this.progress = 0
    this.speed = 0
    this.oldX = 0
    this.x = 0
    this.playRate = 0

    this.bindings()
    this.events()
    this.calculate()
    this.raf()
  }

  public bindings() {
  [
    "events",
    "calculate",
    "raf",
    "handleWheel",
    "move",
    "handleTouchStart",
    "handleTouchEnd",
    "handleTouchMove"
  ].forEach((method) => {
    this[method] = this[method].bind(this)
  })
   }

  public calculate() {
    this.wrapWidth = this.items[0].clientWidth * this.items.length
    this.progress = 0
    this.wrap.style.width = `${this.wrapWidth}px`
    this.maxScroll = this.wrapWidth - this.el.clientWidth
  }

  handleWheel(e: WheelEvent) {
    this.progress += e.deltaY
    this.move()
  }

  public handleTouchStart(e: MouseEvent | TouchEvent) {
    e.preventDefault()
    this.draggable = true
    this.x_0 = (e as MouseEvent).clientX || (e as TouchEvent).touches[0].clientX
  }

  public handleTouchMove(e: TouchEvent | MouseEvent) {
    if (!this.draggable) return false

    const x = (e as MouseEvent).clientX || (e as TouchEvent).touches[0].clientX
    this.progress += (this.x_0 - x) * 2.5
    this.x_0 = x
    this.move()
  }

  public handleTouchEnd() {
    this.draggable = false
  }

  public events() {
    window.addEventListener("resize", this.calculate)

    this.el.addEventListener("touchmove", this.handleTouchMove)
    window.addEventListener("touchend", this.handleTouchEnd)
    window.addEventListener("touchstart", this.handleTouchStart)

    this.el.addEventListener("mousedown", this.handleTouchStart)
    this.el.addEventListener("mousemove", this.handleTouchMove)
    this.el.addEventListener("mouseup", this.handleTouchEnd)

    document.body.addEventListener("mouseleave", this.handleTouchEnd)
  }

  public move() {
    this.progress = clamp(this.progress, 0, this.maxScroll)
  }

  public raf() {
    this.x = lerp(this.x, this.progress, 0.1)
    this.playRate = this.x / this.maxScroll

    this.wrap.style.transform = `translateX(${-this.x}px)`
    this.speed = Math.min(100, this.oldX - this.x)
    this.oldX = this.x
  }
}

export default DragScroll