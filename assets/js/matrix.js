const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.getElementById("header").clientWidth;
const h = canvas.height = document.getElementById("header").clientHeight;
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix () {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#0f0';
  ctx.font = '15pt monospace';

  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

  document.body.style.background = "url(" + canvas.toDataURL() + ")";
setInterval(matrix, 80);

