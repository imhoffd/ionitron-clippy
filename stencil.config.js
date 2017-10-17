exports.config = {
  namespace: 'matt',
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
