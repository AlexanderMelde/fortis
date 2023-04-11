# GYMBOX

GYMBOX is a one-of-a-kind premium private gym rental solution. Book your gym, workout privately, anytime, anywhere, you
decide!

This repository serves the clickdummy prototype for the upcoming GYMBOX app.

## Usage

Just open the readily built website at https://alexandermelde.github.io/gymbox/ and select "gymbox" to view the current
development release of this webpage.

To serve locally, refer to the development section below.

## Development

Run `npm run start` to start a local dev server. Navigate to `http://localhost:4200/`. The application will
automatically reload if you change any of the source files.

To simulate a database server, a local json server REST API can be started using `npm run start-database-server`

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Finally, run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
Builds will automatically be created using an GitHub action on every commit.

### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `npm run test-silent` or `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this
command, you need to first add a package that implements end-to-end testing capabilities.

An overview of the test coverage can be seen by visiting the deployed URL mentioned above and choosing the "
code-coverage" link.

### Storybook Components

Run `npm run storybook` to serve storybook locally. A prebuilt version can be viewed by visiting the deployed URL listed
above and selecting "storybook" or "storybook-docs".

### Compodoc

Run `npm run docs:serve` to serve compodoc locally. A prebuilt version can be viewed by visiting the deployed URL listed
above and selecting "compodoc".

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Further commands for this project are listed in ``package.json``.
