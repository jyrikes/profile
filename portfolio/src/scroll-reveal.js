const REVEAL_SELECTOR = [
  '.proof-strip > div',
  '.intro-section > *',
  '.section-heading',
  '.industrial-card',
  '.evidence-card',
  '.research-card',
  '.publication-card',
  '.timeline article',
  '.skills-panel',
  '.contact-section > *',
  'footer > *',
].join(', ')

function revealEverything(elements) {
  elements.forEach((element) => {
    element.classList.add('reveal-on-scroll', 'is-visible')
  })
}

export function initScrollReveal() {
  let attempts = 0

  const initialize = () => {
    const elements = [...document.querySelectorAll(REVEAL_SELECTOR)]

    if (elements.length === 0 && attempts < 30) {
      attempts += 1
      window.requestAnimationFrame(initialize)
      return
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealEverything(elements)
      return
    }

    elements.forEach((element, index) => {
      element.classList.add('reveal-on-scroll')
      element.style.setProperty('--reveal-delay', `${(index % 4) * 90}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -48px 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))
  }

  window.requestAnimationFrame(initialize)
}
