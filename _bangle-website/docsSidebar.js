module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['hello', 'getting-started', 'contributing'],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/teeny-tiny-editor',
        'guides/understanding-bangle',
        'guides/menu',
        'guides/editing-operations',
        'guides/keybindings',
        'guides/exporting',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Guides',
      items: [
        'advanced-guides/prosemirror',
        'advanced-guides/custom-rendering',
        'advanced-guides/custom-schema',
        'advanced-guides/writing-component',
        'advanced-guides/advanced-editing-operations',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [],
    },
  ],
};