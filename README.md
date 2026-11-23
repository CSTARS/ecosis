EcoSIS Spectral Library
===========

Main search application.

[http://ecosis.org](Production)
[http://dev-search.ecosis.org](Dev)

## Development

Requires Node.js 24 (see `.nvmrc`; run `nvm use`). The client bundle is built on
the host with webpack 5 and copied into the Docker image from `client/dist`:

```bash
npm install && (cd client/public && npm install)
npm run dist    # production bundle -> client/dist/js
npm run watch   # dev bundle -> client/public/js, rebuilds on change
```
