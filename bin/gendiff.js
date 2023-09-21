import { program } from 'commander';

const command = (path, path2) => {
};
program
  .version('0.0.1')
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .action(command)
  .option('f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .parse();

const options = program.opts();
const { args } = program;
const { format } = options;
command(args, format);
