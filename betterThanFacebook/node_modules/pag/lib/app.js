var cli = require('snack-cli');
var templates = require('./templates');
var stdio = require('./stdio');
var pkg = require('../package.json');

var program = cli
    .name(pkg.name)
    .version(pkg.version)
    .usage('templateName [-d dir]\n       pag --list-templates')
    .description(pkg.description)
    .option('-d, --dir <path>', 'Use the template directory <path>', process.cwd())
    .option('-l, --list-templates', 'List all available templates')
    .option('-v, --verbose', 'Output verbose logs')
    .parse();

if (program.verbose) {
    stdio.level = stdio.DEBUG;
}

if (program.listTemplates) {
    templates.list();
}

if (program.args.length !== 1) {
    cli.showHelp();
}

var task = templates.getTask(program.args[0], program.dir);
task.run();
