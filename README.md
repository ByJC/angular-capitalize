# angular-capitalize
angular-capitalize is a filter for capitalize some strings with angularJS


## Required
only AngularJS is needed.

## Install

```
npm install angular-capitalize --save
```

then in you angular application, register the module
```js
import 'angular-capitalize'


angular.module('MyApp', [ 'capitalize' ]);
```


## then use it in you html

Example : 'angular capitalize'

```html
<p> {{::CtrlAs.name | capitalize}} </p>
```
=> **Angular capitalize**


You have one options which will capitalize every words in your string:

```html
<p> {{::CtrlAs.name | capitalize:true}} </p>
```
=> **Angular Capitalize**


## Contribute

Feel free to fork and contribute, you just have to install the dependencies and build the project via npm

```
npm run build
```

## Authors

[Jean-Charles FAUVIN](https://github.com/ByJC)

## License

```
The MIT License (MIT)

Copyright (c) 2015 Jean-Charles FAUVIN

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
