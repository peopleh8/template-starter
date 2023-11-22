import { gsap, ScrollToPlugin } from 'gsap/all.js'

gsap.registerPlugin(ScrollToPlugin) 

export const anchorScroll = (scrolledTarget, scrollToTargetId, duration) => {
  gsap.to(scrolledTarget, {
    duration: duration,
    ease: "Expo.easeInOut",
    scrollTo: scrollToTargetId
  }) 
}