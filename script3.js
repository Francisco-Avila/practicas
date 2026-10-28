let texto = "";

for (let i = 0; i < 5; i++) {
  if (i === 0 || i === 4) {
    texto += "X X X X\n";
  } else if (i === 2) {
    texto += "X X X\n";
  } else {
    texto += "X\n";
  }
}

document.getElementById("patron").textContent = texto;
