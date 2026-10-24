# PC Club BD (Next.js + Tailwind)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

- Edit contact info and discount codes: `src/data/site.js`
- Edit products, categories, photos: `src/data/products.js` (set `img` to a URL or `/images/file.jpg` in `public/images`)
- Edit services: `src/data/services.js`
- Colors and fonts: `tailwind.config.js`, `src/app/layout.jsx`


magick public/shopimgs/dom_cam.avif \
  -resize '1200x800>' \
  -strip -quality 80 \
  public/shopimgs/dom_cam.webp


ffmpeg -i public/videos/promox.mp4 \
  -vf "scale='min(1280,iw)':-2,fps=30" \
  -c:v libx264 -crf 28 -preset medium \
  -pix_fmt yuv420p \
  -an -movflags +faststart \
  public/videos/promo.mp4