import figures from 'figures';
import chalk from 'chalk';
const log = console.log;

function mountColoredLog(options: { color: any; icon: any; title: any; }) {
  const { color, icon, title } = options
  return `${chalk[color](figures[icon])}  ${chalk.underline[color](title)  }`
}

export function info (msg: string) {
    const colored = mountColoredLog({
      color: 'blue', 
      icon: 'info', 
      title: 'info'
    })
    log(`${colored}  ${msg}`)
  }

export function  success (msg: string) {
    const colored = mountColoredLog({
      color: 'green', 
      icon: 'tick', 
      title: 'success'
    })
    log(`${colored}  ${msg}`)
  }

export function warn (msg: string) {
    const colored = mountColoredLog({
      color: 'yellow', 
      icon: 'warning', 
      title: 'warn'
    })
    log(`${colored}  ${msg}`)
  }

export function error (msg: string) {
    const colored = mountColoredLog({
      color: 'red', 
      icon: 'cross', 
      title: 'error'
    })
    log(`${colored}  ${msg}`)
  }

export function custom (msg: string, options: any) {
    const colored = mountColoredLog(options)
    log(`${colored}  ${msg}`)
  }

