/**
 * Transition type to animation mapping
 */
const TRANSITION_ANIMATIONS = {
  fade: { out: "fade-out", in: "fade-in" },
  slide: { out: "slide-out", in: "slide-in" },
  zoom: { out: "zoom-out", in: "zoom-in" },
  rotate: { out: "rotate-out", in: "rotate-in" },
  none: { out: "none-transition", in: "none-transition" },
};

/**
 * Apply a transition type by setting CSS custom properties
 * @param {string} transitionType - The transition type (fade, slide, zoom, rotate, none)
 */
export function applyTransition(transitionType) {
  const animations = TRANSITION_ANIMATIONS[transitionType];

  if (!animations) {
    console.warn(`Unknown transition type: ${transitionType}`);
    return;
  }

  // Set CSS custom properties on the root element
  document.documentElement.style.setProperty("--transition-out", animations.out);
  document.documentElement.style.setProperty("--transition-in", animations.in);
}

/**
 * Get all available transition types
 * @returns {string[]} Array of transition type names
 */
export function getTransitionTypes() {
  return Object.keys(TRANSITION_ANIMATIONS);
}
