export const disableScrollbar = () => {
  let scrollTop =
    document.documentElement.scrollTop
      ? document.documentElement.scrollTop
      : document.body.scrollTop 

  document.documentElement.classList.add('lock-scroll')
  document.documentElement.style.top = -scrollTop + 'px' 
}