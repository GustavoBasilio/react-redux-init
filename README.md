# Smart Dashboard Project

This project uses:

- Node `8.10.0`
- Express `4.16.3`
- ESLint `4.19.1`
- Webpack `4.2.0`
- React `16.2.0`
- Redux `3.7.2`
- Sass `4.7.2`

## Runnign the project

```
npm install
```

### Development

In development mode this command will run the Lint then it will listen in [http://localhost:8080](http://localhost:8080).

**There is a hot reloding module that will update the browser when a file is edit.** 

```
npm start
```

### Production

The project will be built in the */dist* folder. 

**All the files will be minified**

```
npm run build
```

To run a express server for the production build the command is:

```
node server/prod.js
```

For running the production server in a diferent port it, specify a port in the command, like this:

```
PORT=8080 node server/prod.js
```

## Structure

In this React/Redux project for convention the files are separeted by **Components**, **Reducers** and **Actions**, each with it's own folder.

### Components

The **Components** are separeted by *Presentational* for *Dumb Components* inside a separeted folder and the *Smart Components* in the top folder.

### Reducers

All reducers are in combined in the *index.js* file.