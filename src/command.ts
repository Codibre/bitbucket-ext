#!/usr/bin/env node
import { program } from 'commander';
import { copySettings } from './commands/copy-settings';
import { createRepo } from './commands/create-repo';
import { wrap } from './commands/wrap';

program
	.command('copy-settings <source> <destination>')
	.description(
		'Copy all the settings from one repository to another (no source code is changed)',
	)
	.action(wrap(copySettings));

program
  .command('create-repo <repoName>')
  .option('-P, --private', 'Created project must to be private')
  .option('-p, --project <projectName>', 'Project where the repository will be put')
  .option('-s, --settings <projectSettings>', 'Source project from where the settings may be copied')
  .action(wrap(createRepo));

program.version(process.env.NPM_PACKAGE_VERSION!);

program.parse(process.argv);
