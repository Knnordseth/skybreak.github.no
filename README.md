# skybreak.github.no
Brand project website
# Skybreak

**One print. One shirt. Never again.**

Skybreak is a small clothing brand of hand-printed shirts. Each design is drawn, carved into a block and printed by hand in a single small batch. When that batch is gone, the block is retired and the design is never printed again.

This repo is the brand's website: a preview catalogue of the shirts, plus tattoo flash, art prints and a look at how the shirts are made.

**Live site:** https://knnordseth.github.io/skybreak.github.no/

## What's on the site

- **Catalogue**: the shirts, arranged on a slowly turning wheel. The real, hand-printed shirts (*How to Leave Town* and *Twin Fantasy*) open as a product view with back, front and hanger shots. The rest are print concepts.
- **Tattoos**: designs drawn for skin, laid out like a tattoo parlour's flash sheet. Each numbered design can only be claimed once.
- **Art**: original drawings and prints on a scrollable wall.
- **Process**: how a shirt gets made, in five steps with photos from the workshop: Concept, Carve, Print, One batch, Gone for good.

## How it's built

It's a plain static site: HTML, CSS and JavaScript, with no build step and no dependencies.

| File | What it does |
|---|---|
| `index.html` | The page itself |
| `styles.css` | Layout, animation and all the visual styling |
| `tokens.css` | Colours, fonts, spacing and other design values |
| `script.js` | Catalogue, tattoo sheet, product mockups and the pop-up preview |
| `text-options.html` | A scratch page for trying out sign and lettering ideas |
| `Images/` | Drawings, vector artwork, product prints and workshop photos |

### Publishing

The site is hosted on GitHub Pages from the `main` branch. Commit and push, then wait a minute or two for it to update. GitHub Pages is case-sensitive, so `Images/Photo.jpg` and `images/photo.jpg` are different files. File names in the code must match exactly.

## Todo

- [ ] Take real product photos with a transparent background and set them as `cutout` for each shirt
- [ ] Check the rights for the *Twin Fantasy* and *How to Leave Town* artwork before selling. Both look like they're based on Car Seat Headrest album covers.
- [ ] Replace the remaining six placeholder shirts in the catalogue with real designs
- [ ] Replace the placeholder tattoo flash and art pieces with real work
- [ ] Add the real Instagram link in the footer (it currently points nowhere)
- [ ] Add a way to buy or reserve a shirt, even just a contact or DM link
- [ ] Add a favicon
- [ ] Add sizes and prices to each shirt
- [ ] Mark shirts as sold out when a batch is gone
- [ ] add a email newsletter signup for those interested. which should pop up after 20s+ 
