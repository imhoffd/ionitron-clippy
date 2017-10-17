exports.config = {
  namespace: 'matt',
  bundles: [
    { components: ['ionitron-clippy'] }
  ],
  generateDistribution: true,
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
