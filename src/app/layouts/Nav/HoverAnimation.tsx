import useIsomorphicEffect from "@/common/hooks/useIsomorphicEffect"

interface Props extends React.PropsWithChildren{}

export default function HoverCheeseAnimation({children}: Props){
  
  useIsomorphicEffect(() => {
    const _element = document.querySelector("[data-menu-opened]")
    
  }, [])

  return children
}