![Logo](https://lh3.googleusercontent.com/u/1/drive-viewer/AFDK6gOu5a8xNET5uf0Lw2u6p1FuVo2wzpwC3t8QrclVaqE49TTRuJ-K58T_4WX6c1bAiwfBzRtp5AgE2kVQRDEjBcl4PW-r=w1920-h932)

<div style="display: flex; flex-direction: row; gap: 1rem; justify-content: start">

[![Netlify status](https://img.shields.io/netlify/6861d0c5-8ac5-4413-9ebb-57fb71a44bf5?logo=netlify&style=for-the-badge)](https://www.netlify.com/)

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/sebas-tcotd/my-medcord/Development/develop?color=blue&logo=github&style=for-the-badge)

![GitHub Last Commit](https://img.shields.io/github/last-commit/sebas-tcotd/my-medcord?logo=github&style=for-the-badge)

</div>

# My Medcord

MedCord is a Documental System Manager, which is responsible of manage clinical histories from a Clinical Center.

MedCord, in its early phase, is intended for almost all medical stuff from a certain hospital, such as medics, nurses, secretaries in charge of manage clinical histories, etc.

## Tech Stack

**Client:** Angular, Redux (NgRx), TailwindCSS, AG Grid

**Server:** Node, NestJs

<small> For further reference about the backend side of the project, please visit [its respective respository](https://github.com/hbars3/medcord-backend). </small>

## Installation

To install and execute the project locally, you must first have installed NodeJS at its 16 version as minimum.

Once you have it installed in your computer, you have to clone the repository. GitHub provides a easy-going guide for that purpose in the page of any repository (the clone button).

Then, please go to the folder where you cloned the repo, open your preferred terminal and execute the following:

```bash
  npm install
```

You'll have to wait a certain time until all the packages have been downloaded and installed in the project.

Once the instalation process have finished, please execute the following:

```bash
  # If you want just to start the local server
  ng serve

  # If you want to start the server and automatically open it when building have finished
  ng serve -o
```

It will compile all the necessary for the project to be shown in the browser. Once the process have finished, the project will be located in `localhost:4200`. The application will automatically reload if you change any of the source files.

## Running Tests

To run tests, please run the following command:

```bash
  ng test
```

It will execute a remote browser where you will be able to see the test you have configured along all the project.

If you want to see the coverage of the tests, execute the following command:

```bash
  ng test --code-coverage
```

It will create a folder (ignored by Git) with a static `index.html` where you can see in all the coverage the tests have in its disposition.

And if you want to execute tests without opening a web browser, you can do so by writing down the following:

```bash
  ng test --watch=false --browsers=ChromeHeadless
```

The results will be shown in the console.

For further information about testing, please visit the [reference Angular test page](https://angular.io/guide/testing).

## Contributing

If you want to contribute something to this project, please refer to the issue panel and write the things you need for the project.

## Authors

- [@sebas-tcotd](https://github.com/sebas-tcotd)
<!-- Yes, I did all the fucking front-end by my own. I need a hug, please; otherwise, I will do a crazyness -->

To know about the authors from the back-end side of the project, please visit [its respective respository](https://github.com/hbars3/medcord-backend).
