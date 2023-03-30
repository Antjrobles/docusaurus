# SERVER
- To change local port and default localhost to a custom ip address and different port, run this command in the terminal:

- In development mode:
``` shell
sudo npm run start -- --port 8053 --host 192.168.0.52
```

- To test server mode:  
``` shell
sudo npm run serve -- --build --port 8053 --host 192.168.0.11  
```


# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

``` shell
$ yarn
```

### Local Development

``` shell
 yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

``` shell
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

``` ssh
$ USE_SSH=true yarn deploy
```

Not using SSH:

``` ssh
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
