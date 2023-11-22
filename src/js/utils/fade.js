export const fadeIn = (target, duration, propery) => {
  target.style.opacity = 0 
  target.style.display = propery || 'block' 
  target.style.transition = `opacity ${duration}ms` 

  setTimeout(() => {
    target.style.opacity = 1 
  }, 10) 
}

export const fadeOut = (target, duration) => {
  target.style.opacity = 1 
  target.style.transition = `opacity ${duration}ms` 
  target.style.opacity = 0 

  setTimeout(() => {
    target.style.display = 'none' 
  }, duration) 
}

export const fadeToggle = (target, duration, propery) => {
  let display = getComputedStyle(target).display 

  if (display == 'none') {
    fadeIn(target, duration, propery) 
  } else {
    fadeOut(target, duration) 
  }
}