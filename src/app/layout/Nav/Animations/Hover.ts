import gsap from "gsap";

export function InHover(){
    gsap.to(".button_asterisc",{
        rotate: 100,
        duration: 1,
        ease: "power3.out"
    })
}
export function OutHover(){
    
    gsap.to(".button_asterisc",{
        rotate: 0,
        duration: 1,
        ease: "power3.out"
    })
}
