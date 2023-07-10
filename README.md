# yo-option-or-prompt

[![Beerpay](https://beerpay.io/codejamninja/yo-option-or-prompt/badge.svg?style=beer-square)](https://beerpay.io/codejamninja/yo-option-or-prompt)
[![Beerpay](https://beerpay.io/codejamninja/yo-option-or-prompt/make-wish.svg?style=flat-square)](https://beerpay.io/codejamninja/yo-option-or-prompt?focus=wish)
[![GitHub stars](https://img.shields.io/github/stars/codejamninja/yo-option-or-prompt.svg?style=social&label=Stars)](https://github.com/codejamninja/yo-option-or-prompt)

> Exclude any prompts for data that have been supplied via options

Please &#9733; this repo if you found it useful &#9733; &#9733; &#9733;

![](assets/yo-option-or-prompt.png)

## Features

* Supports boolean data types
* Supports string data types
* ES6 compatible


## Installation

```sh
npm install --save yo-option-or-prompt
```


## Dependencies

* [NodeJS](https://nodejs.org)
* [Yeoman](http://yeoman.io)


## Usage

```js
import Generator from 'yeoman-generator';
import yoOptionOrPrompt from 'yo-option-or-prompt';

class extends Generator {
  initializing() {
    this.optionOrPrompt = yoOptionOrPrompt;
  }

  async prompting() {
    this.context = await this.optionOrPrompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project Name:',
        default: 'some-project'
      }
    ]);
  }
}
```


## Support

Submit an [issue](https://github.com/codejamninja/yo-option-or-prompt/issues/new)


## Contributing

Review the [guidelines for contributing](https://github.com/codejamninja/yo-option-or-prompt/blob/master/CONTRIBUTING.md)


## License

[MIT License](https://github.com/codejamninja/yo-option-or-prompt/blob/master/LICENSE)

[Jam Risser](https://jam.codejamninja.com) &copy; 2018


## Changelog

Review the [changelog](https://github.com/codejamninja/yo-option-or-prompt/blob/master/CHANGELOG.md)


## Credits

* [Jam Risser](https://jam.codejamninja.com) - Author
* Based on [yeoman-option-or-prompt](https://github.com/artefact-group/yeoman-option-or-prompt)


## Support on Beerpay (actually, I drink coffee)

A ridiculous amount of coffee :coffee: :coffee: :coffee: was consumed in the process of building this project.

[Add some fuel](https://beerpay.io/codejamninja/yo-option-or-prompt) if you'd like to keep me going!

[![Beerpay](https://beerpay.io/codejamninja/yo-option-or-prompt/badge.svg?style=beer-square)](https://beerpay.io/codejamninja/yo-option-or-prompt)
[![Beerpay](https://beerpay.io/codejamninja/yo-option-or-prompt/make-wish.svg?style=flat-square)](https://beerpay.io/codejamninja/yo-option-or-prompt?focus=wish)
