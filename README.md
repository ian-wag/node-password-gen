# pgen Password Generator

A simple CLI password generator

## Getting Started

Running the pgen command alone will generate a random password with defualt parameters.

```
pgen
```

## Options

```
  -V, --version          output the version number
  -l, --length <number>  length of password (default: "16")
  -s, --save             save password to passwords.txt
  -nn, --no-numbers      remove numbers
  -ns, --no-symbols      remove symbols
  -h, --help             display help for command
```

### Help

Run help command to see all options

```
pgen -h
```

## Dependencies

Commander is a lightweight CLI framework used to create the CLI program

```
npm install commander
```

Chalk is used to style the CLI strings

```
npm install chalk
```

Clipboardy is used to copy the generated password to the clipboard automatically

```
npm install clipboardy
```
