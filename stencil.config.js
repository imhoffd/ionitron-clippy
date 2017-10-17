exports.config = {
  namespace: 'clippytron',
  bundles: [
    { components: ['ionitron-clippy'] }
  ],
  generateDistribution: true,
  generateWWW: true
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
