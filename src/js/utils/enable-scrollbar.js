export const enableScrollbar = () => {
  let scrollTop = parseInt(document.documentElement.getBoundingClientRect().top) 

  document.documentElement.classList.remove('lock-scroll') 
  document.documentElement.scrollTop = -scrollTop 
  document.body.scrollTop = -scrollTop 
}