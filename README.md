# Probr HTML Parser

This directory contains a simple implementation of 
[Cucumber HTML Reporter](https://www.npmjs.com/package/cucumber-html-reporter).

## Local Javascript Execution

If your environment is prepared to utilize NPM pagackes,
simply run `npm install` or `npm ci` to update dependencies.
Then, after running probr to generate cucumber output,
execute `parse.js` with the first parameter being the local
directory containing your cucumber output.

```sh
# demo.sh
npm ci
node parse.js <YOUR_CUCUMBER_DIR>
```

## Dockerized Execution

For environments that are not prepared to utilize NPM packages,
it will be easiest to build a docker image from this Dockerfile
or use the corresponding image from Docker Hub.

After generating cucumber files for your service pack, simply
run the container with the appropriate directory mounted as follows:

```sh
# demo.sh
docker run \
    --mount type=bind,source=<YOUR_CUCUMBER_DIR>,target=/probr/cucumber \
    probr-view
```
