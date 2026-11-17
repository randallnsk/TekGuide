// Bundles the app into one self-contained page (used for the Claude preview link).
// Usage: node build-preview.js <output.html>
const fs = require('fs');
const path = require('path');
const root = __dirname;
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

const html = read('index.html');
const between = (a, b) => html.split(a)[1].split(b)[0].trim();
const head = between('<!--HEAD-START-->', '<!--HEAD-END-->');
const app = between('<!--APP-START-->', '<!--APP-END-->');
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);

const out = [
  head,
  '<style>\n' + read('styles.css') + '\n</style>',
  app,
  ...scripts.map((s) => '<script>\n' + inlinePhotos(read(s)).replace(/<\/script/gi, '<\\/script') + '\n</script>'),
].join('\n');

// Photos are embedded so the single-file preview shows them.
function inlinePhotos(js) {
  return js.replace(/"(photos\/[^"]+\.(jpe?g|png))"/g, (m, p, ext) =>
    '"data:image/' + (ext === 'png' ? 'png' : 'jpeg') + ';base64,' + fs.readFileSync(path.join(root, p)).toString('base64') + '"');
}

const dest = process.argv[2] || path.join(root, 'preview.html');
fs.writeFileSync(dest, out);
console.log('Wrote', dest, Math.round(out.length / 1024) + ' KB');
