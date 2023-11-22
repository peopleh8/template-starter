let targetHeight = 0 

export const slideDown = (target, duration, propery) => {
  target.style.display = propery || 'block' 
  target.style.transition = `height ${duration}ms` 
  target.style.overflow = 'hidden' 

  let height = target.clientHeight + 'px' 

  let targetHeight = height 

  target.style.height = 0 

  setTimeout(() => {
    target.style.height = targetHeight 
  }, 10) 

  setTimeout(() => {
    target.style.height = '' 
  }, duration) 
}

export const slideUp = (target, duration) => {
  let height = target.clientHeight + 'px' 

  targetHeight = height 

  target.style.height = targetHeight 
  target.style.overflow = 'hidden' 
  target.style.transition = `height ${duration}ms` 

  setTimeout(() => {
    target.style.height = 0 
    setTimeout( () => {
      target.style.height = '' 
    }, duration) 
  }, 0) 

  setTimeout(() => {
    target.style.display = 'none' 
  }, duration) 
}

export const slideToggle = (target, duration, propery) => {
  let display = getComputedStyle(target).display 

  if (display == 'none') {
    slideDown(target, duration, propery) 
  } else {
    slideUp(target, duration) 
  }
}