const webpack = require('webpack');
const webpackConfig = require('../../src/webpack/config/prod.config');
const chalk = require('chalk');
const ora = require('ora');
const spinner = ora(chalk.magenta('Compiling...'));

module.exports = () => {
    spinner.start();

    webpack(webpackConfig, (err, stats) => {
        if (err) throw err;

        process.stdout.write(
            `${stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false,
            })}`,
        );

        console.log('');
        spinner.stop();

        if (stats.compilation.errors.length) process.exit(1);
    });
}
