export const getScrollbarWidth = () => {
  let documentWidth = parseInt(document.documentElement.clientWidth) 
  let windowsWidth = parseInt(window.innerWidth) 
  let scrollbarWidth = windowsWidth - documentWidth 
  return scrollbarWidth 
}