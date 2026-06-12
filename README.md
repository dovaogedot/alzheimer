# Alzheimer

A minimalistic personal CV/portfolio website.

## Features

- Statically served using SSG
  - A single langing page is hydraded at **build** time using **[vike](https://vike.dev/)**
- Strongly SEO optimizated
  - Includes **Open Graph**, **Twitter** and **JSON-LD** meta properties
- Easily expandable user profile
  - Single source of truth is `data.ts`
- Github Actions for immediate deployment
  - All that is needed are `VPS_USER`, `VPS_HOST` and `VPS_SSH_KEY` action secrets defined

## Build

```sh
# vite base url is respected
$ export VITE_BASE_URL=/cv

# will produce static hydrated files in dist/client
$ pnpm build
```

## Demo

Available to browse at **[dovaogedot.online/cv](https://dovaogedot.online/cv)**.
