# Movimento Giovanile Centallo - Website
E' un'associazione che nasce nel cuore di Centallo nel 1989, come luogo di aggregazione della comunità Centallese negli storici spazi del Movi.
Il repo distribuisce liberamente il codice del sito tramite licenza GPL-2. 

Alcune funzioni implementate all'interno del sito: 
- Integrazione con Contentful per la gestione dei contenuti (in dettaglio Progetti)
- Integrazione con Google Cal per la pubblicazione automatica di eventi (in dettaglio Eventi, in beta)
- TailwindCSS e DaisyUI per il frontend

## Preview
Il sito è online, distribuito tramite Netlify, ed è accessibile al seguente link www.movicentallo.it

## Installation

If you are reading this on github, you can click on the "Use this template" button above to create a new repository from astroship to your account. Then you can do a `git clone` to clone it to your local system.

Alternatively, you can clone the project directly from this repo to your local system.

### 1. Clone the repo

```bash
git clone https://github.com/surjithctly/astroship.git myProjectName
# or
git clone https://github.com/surjithctly/astroship.git .
```

The `.` will clone it to the current directory so make sure you are inside your project folder first.

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or (recommended)
pnpm install
```

### 3. Start development Server

```bash
npm run dev
# or
yarn dev
# or (recommended)
pnpm dev
```

### Preview & Build

```bash
npm run preview
npm run build
# or
yarn preview
yarn build
# or (recommended)
pnpm preview
pnpm build
```

We recommend using [pnpm](https://pnpm.io/) to save disk space on your computer.

### Other Commands

```bash
pnpm astro ...
pnpm astro add
pnpm astro --help
```

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## TailwindCSS

TailwindCSS is already configured in this repo, so you can start using it without any installation.
