console.time('start');
var flatiron = require('../../lib/flatiron'),
    app = flatiron.app;

app.use(flatiron.plugins.cli, {
  dir: __dirname,
  usage: [
    'Simple app example for flatiron!',
    '',
    'app start - print a prompt and arguments',
    'print <msg> - echo a message'
  ]
});

app.cmd('app start', function () {
  console.timeEnd('start');
  console.dir('it works!!!');
  app.prompt.get('name', function (err, name) {
    console.dir(arguments);
  })
})

app.init(function () {
  app.start();
});
