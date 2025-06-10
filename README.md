# Data Platform Map

This platform centralizes and manages data collected from citizen expeditions organized by Astrolabe Expeditions. This repository contains the map component for visualizing collected data. Other parts of the project include a [back-office and API](https://github.com/astrolabe-expeditions/data-platform-frontend) and an [ETL (Extract, Transform, Load) pipeline](https://github.com/astrolabe-expeditions/data-platform-processing) for processing data.

**Note:** This repository is based on the [Mviewer](https://github.com/mviewer/mviewer) project.

> [!WARNING]
> This project is archived and no longer maintained.
> Feel free to browse the code, but note that no further updates or support will be provided.

## What is Astrolabe Expeditions?

[Astrolabe Expeditions](https://www.astrolabe-expeditions.org/) is an non-profit association that develops participatory science programmes with
laboratories to enable citizens to actively contribute to scientific research.

Citizens' expeditions are set up to collect large-scale scientific data and involve citizens in understanding and preserving the ocean.

## Local development

Clone the repository

```sh
git clone git@github.com:astrolabe-expeditions/data-platform-map.git
```

Switch to the repo folder

```sh
cd data-platform-map
```

> [!TIP]
> For best compatibility, we recommend using [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions and switching to Node 19 before running any commands.

Install all the dependencies using npm

```sh
npm install
```

Start the local development server with `vite`

```sh
npm start
```

You can now access the server at [http://localhost:5051](http://localhost:5051)
