const program = require("commander");

program.version("1.0.0").description("A Simple Password Generator");

program.option("-l, --length <number>", "length of password").parse();
