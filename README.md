# Pretty Log
Get beautiful consoles easily

![PrettyLog](./img/info.png) 
![PrettyLog](./img/info_var.png) 
![PrettyLog](./img/success.png) 
![PrettyLog](./img/success_var.png) 
![PrettyLog](./img/warn.png) 
![PrettyLog](./img/warn_var.png) 
![PrettyLog](./img/error.png) 
![PrettyLog](./img/error_var.png) 
![PrettyLog](./img/custom.png) 
![PrettyLog](./img/custom_var.png) 

### Prerequisites

* [NPM](https://www.npmjs.com/)  
or
* [YARN](https://yarnpkg.com/)

### Installing
Using NPM
```
npm i @emersonbraun/pretty-log
```
OR Yarn
```
yarn add @emersonbraun/pretty-log
```

### Usage

import package
```
import PrettyLog from '@emersonbraun/pretty-log' //es6
var PrettyLog = require('@emersonbraun/pretty-log').default // old form 
```
Type Info
```
PrettyLog.info('test info')
```
Output: ![PrettyLog](./img/info.png)  
Type Info (with var)
```
const hello = 'hello word'
PrettyLog.info('test info', hello)
```
Output: ![PrettyLog](./img/info_var.png)  
Type success
```
PrettyLog.success('teste success')
```
Output: ![PrettyLog](./img/success.png)  
Type success (with var)
```
const hello = 'hello word'
PrettyLog.success('teste success', hello)
```
Output: ![PrettyLog](./img/success_var.png)  
Type warn
```
PrettyLog.warn('teste warn')
```
Output: ![PrettyLog](./img/warn.png)  
Type warn (with var)
```
const hello = 'hello word'
PrettyLog.warn('teste warn', hello)
```
Output: ![PrettyLog](./img/warn_var.png)  
Type error
```
PrettyLog.error('teste error')
```
Output: ![PrettyLog](./img/error.png)  
Type error (with var)
```
const hello = 'hello word'
PrettyLog.error('teste error', hello)
```
Output: ![PrettyLog](./img/error_var.png)  
Type custom

pass options 

| Name      | Value                | Obs                                             |
| --------- | :------------------: | :---------------------------------------------: |
| icon      | 'cross', 'tick', ... | Options in [figures](https://www.npmjs.com/package/figures)|
| iconColor | 'red', 'blue', ...   | Options in [chalk](https://www.npmjs.com/package/chalk)|
| title     | string               | Any text   |
| titleColor| 'red', 'blue', ...   | Options in [chalk](https://www.npmjs.com/package/chalk)|

```
PrettyLog.custom('teste custom', null, {
  iconColor: 'white',
  icon: 'bullet',
})
```
Output
![PrettyLog](./img/custom.png)  
Type custom (with var)
```
const hello = 'hello word'
PrettyLog.custom('teste custom', hello, {
  iconColor: 'white',
  icon: 'bullet',
})
```
Output: ![PrettyLog](./img/custom_var.png)  

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/EmersonBraun/pretty-log/tags). 

## Author

* **emersonbraun** - *Initial work* - [EmersonBraun](https://github.com/EmersonBraun)

See also the list of [contributors](https://github.com/EmersonBraun/pretty-log/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details