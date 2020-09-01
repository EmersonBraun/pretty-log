import chalk from 'chalk'
import figures from 'figures'

import { Options } from './types'
const log = console.log

function getIcon(options: Options) {
  const selectedIcon = options.icon || 'tick'
  if (options.iconColor && options.iconUnderlined) {
    return `${chalk.underline[options.iconColor](figures[selectedIcon])}`
  }
  if (options.iconColor && !options.iconUnderlined) {
    return `${chalk[options.iconColor](figures[selectedIcon])}`
  }
  if (!options.iconColor && options.iconUnderlined) {
    return `${chalk.underline(figures[selectedIcon])}`
  }
  return figures[selectedIcon]
}

function getSpace(value = 2) {
  let space = ''
  for (let index = 0; index < value; index++) {
    space += ' '
  }
  return space
}

function getTitle(options: Options) {
  const space = getSpace(options.titleSpace)
  if (options.titleColor && options.titleUnderlined) {
    return `${space}${chalk.underline[options.titleColor](options.title)}`
  }
  if (options.titleColor && !options.titleUnderlined) {
    return `${space}${chalk[options.titleColor](options.title)}`
  }
  if (!options.titleColor && options.titleUnderlined) {
    return `${space}${chalk.underline(options.title)}`
  }
  return `${space}${options.title}`
}

function getMessage(message: string, options: Options) {
  const space = getSpace(options.messageSpace)
  if (options.messageColor && options.messageUnderlined) {
    return `${space}${chalk.underline[options.messageColor](message)}`
  }
  if (options.messageColor && !options.messageUnderlined) {
    return `${space}${chalk[options.messageColor](message)}`
  }
  if (!options.messageColor && options.messageUnderlined) {
    return `${space}${chalk.underline(message)}`
  }
  return `${space}${message}`
}

function printColoredLog(
  message: string,
  variable: unknown = null,
  options: Options
) {
  const icon = options.icon ? getIcon(options) : ''
  const title = options.title ? getTitle(options) : ''
  const msg = getMessage(message, options)

  if (variable) log(`${icon}${title}${msg}:`, variable)
  else log(`${icon}${title}${msg}`)
}

class PrettyLog {
  info(
    msg: string,
    variable: unknown = null,
    options: Options = {
      icon: 'info',
      iconColor: 'blue',
      title: 'info',
      titleColor: 'blue',
    }
  ) {
    printColoredLog(msg, variable, options)
  }

  success(
    msg: string,
    variable: unknown = null,
    options: Options = {
      icon: 'tick',
      iconColor: 'green',
      title: 'success',
      titleColor: 'green',
    }
  ) {
    printColoredLog(msg, variable, options)
  }

  warn(
    msg: string,
    variable: unknown = null,
    options: Options = {
      icon: 'warning',
      iconColor: 'yellow',
      title: 'warn',
      titleColor: 'yellow',
    }
  ) {
    printColoredLog(msg, variable, options)
  }

  error(
    msg: string,
    variable: unknown = null,
    options: Options = {
      icon: 'cross',
      iconColor: 'red',
      title: 'error',
      titleColor: 'red',
    }
  ) {
    printColoredLog(msg, variable, options)
  }

  custom(msg: string, variable: unknown = null, options: Options) {
    printColoredLog(msg, variable, options)
  }
}

export default new PrettyLog()
