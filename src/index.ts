/* eslint-disable no-console */
import { program } from 'commander';
import { findOdd } from './findOdd';

program
  .version('1.0.0', '-v, --version')
  .usage('[OPTIONS]...')
  .option('-i, --input <value>', 'Word for check.')
  .parse(process.argv);

const options = program.opts();

const result = findOdd(options.input);
console.log(result);
