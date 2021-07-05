const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const log = console.log;
const createPassword = require("./utilities/createPassword");
const savePassword = require("./utilities/savePassword.js");

program.version("1.0.0").description("A Simple Password Generator");

program
  .option("-l, --length <number>", "length of password", "16")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

//save to file
if (save)
  //Copy to clipboard
  clipboardy.writeSync(generatedPassword);

// Output generated password
log(chalk.blue("Generated password: ") + chalk.bold(generatedPassword));
log(chalk.yellow("Password copied to clipboard"));
