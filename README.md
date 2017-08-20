# Atmosphere

## Prerequesites
You will need the following installed on your computer in order to run
Atmosphere:
* [Python](https://www.python.org) (Optional, used to serve the application.)
* [Git](https://git-scm.com/)
* [Yarn](https://yarnpkg.com/)

## Installing
1. Clone this repository
    - via HTTPS `$ git clone https://github.com/zulaica/atmosphere.git` or
    - via SSH `$ git clone git@github.com:zulaica/atmosphere.git`
2. `$ cd atmosphere`
3. `$ yarn`

## Building
4. `$ yarn build`

## Serving
5. `$ yarn serve`
6. Visit http://localhost:8000

## Contributing

### Git Commit Messages<sup id='anchor1'>[[1]](#footnote1)</sup>
* Commit early, commit often™
* Commits should be concise enough to describe in one line
* Limit commit messages to 80 characters
* Use the present tense (e.g. "Do the thing" not "Did the thing")
* Use the imperative mood (e.g. "Do the thing" not "Does the thing")
* Start the commit message with the appropriate emoji pair (followed by two
  spaces)
* Use actual emoji and not Github's emoji short-codes

Emoji Pair    | Usage                    | Suggested Text Shortcut<sup id='anchor2'>[[2]](#footnote2)</sup>
------------- | ------------------------ | -------------------------------------
Code          |                          |
🆕 🛠          | adding new code          | `::codenew`
🔄 🛠          | refactoring code         | `::codeedit`
💨 🐛          | fixing a bug             | `::bugfix`
Dependencies  |                          |
🆕 📦          | adding a dependency      | `::pkgnew`
⬆️ 📦          | upgrading a dependency   | `::pkgup`
⬇️ 📦          | downgrading a dependency | `::pkgdown`
Documentation |                          |
🆕 📝          | adding documentation     | `::docsnew`
🔄 📝          | editing documentation    | `::docsedit`

## License
Atmosphere is licensed under the [Creative Commons
Attribution-NonCommercial-ShareAlike 4.0 International
license](https://creativecommons.org/licenses/by-nc-sa/4.0/) (CC BY-NC-SA 4.0).

---
<sup id='footnote1'>[1]</sup> Borrowed heavily from [Atom's contribution documentation](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages). [↩️](#anchor1)

<sup id='footnote2'>[2]</sup> [My handy TextExpander shortcuts](https://app.textexpander.com/public/0568f36aa710592f6b6d74abb542c8d0),
set up to also add the two spaces after the emoji pair. [↩️](#anchor2)
