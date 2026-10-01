# Blueprint Hair Designs

Website for Blueprint Hair Designs (April Pengelly): men's and women's haircuts at 7971 Ann Arbor Street, Dexter, MI.

Live: https://www.blueprinthairdesigns.com/

## How it's built
- One static page (`index.html`); styles and scripts are inline. No framework, no build step beyond copying.
- Fonts are self-hosted in `fonts/` (Archivo variable, Montserrat static for the wordmark).
- `node tools/build.mjs` copies the public files into `dist/`.
- Deploy: `npx wrangler pages deploy dist --project-name=blueprint-hair-designs --branch=main`
- Cloudflare Pages project: `blueprint-hair-designs` (pages.dev preview stays up).

## Where things come from
- Booking buttons: April's Square Appointments page.
- Newsletter: posts to April's Square Marketing list (`squareup.com/outreach/CDTruy/subscribe`, embed code from her Square Dashboard).
- Photos in `img/`: April's own, taken from the uploads on her old Square Online site; `april.webp` supplied by April. Logo: `img/logo.jpg` from her Square site.
- Share card `img/og-card.png` and `apple-touch-icon.png` are rendered from `tools/og-card.html` and `tools/touch-icon.html` (headless Edge screenshot).

## DNS
- Domain registered at Register.com. Email is Google Workspace (MX: aspmx.l.google.com and alt1-4). Never drop the MX records.
- aprilpengellyhair.com redirects to www.blueprinthairdesigns.com.

## Things only April can confirm
- Hours (site says "by appointment").
- Gift card availability and how they're sold.
- Service list wording in the Women's and Men's panels.
