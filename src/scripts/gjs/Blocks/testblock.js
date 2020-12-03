module.exports = {
  id: 'testblock',
  label: 'testblock',
  select: true,
  content: {
    tagName: 'div',
    // draggable: false,
    attributes: { 'some-attribute': 'some-value' },
    components: [
      {
        tagName: 'span',
        content: '<b>Some static content</b>',
      }, {
        tagName: 'div',
        // use `content` for static strings, `components` string will be parsed
        // and transformed in Components
        components: '<span>HTML at some point</span>',
      }
    ]
  },
  activate: true,
};
