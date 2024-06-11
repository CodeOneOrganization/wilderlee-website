import gsap from "gsap";

interface AnimationClass{
    className: string
}

export function arrowHover({className}:AnimationClass){
    gsap.to(className,{
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power3.out"
    })
}
export function arrowHoverOut({className}:AnimationClass){
    gsap.to(className,{
        opacity: 0,
        x: "-1vw",
        duration: 0.5
    })

}
