module.exports = {
  id: 'layers',
  el: '.panel__right',
  // Make the panel resizable
  resizable: {
    maxDim: 500,
    minDim: 150,
    tc: 0, // Top handler
    cl: 1, // Left handler
    cr: 0, // Right handler
    bc: 0, // Bottom handler
    // Being a flex child we need to change `flex-basis` property
    // instead of the `width` (default)
    keyWidth: 'flex-basis',
  }
};
