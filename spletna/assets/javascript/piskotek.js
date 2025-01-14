let clickCount = 0;
const counterElement = document.getElementById("counter");
const cookieImage = document.getElementById("cookie");

function updateText(count) {

  if (count === 1) {
    return `Naredili ste ${count} klik.`;
  } else if (count === 2) {
    return `Naredili ste ${count} klika.`;
  } else if (count >= 3 && count <= 4) {
    return `Naredili ste ${count} klike.`;
  } else {
    return `Naredili ste ${count} klikov.`;
  }
}

cookieImage.addEventListener("click", () => {
  clickCount++;
  counterElement.textContent = updateText(clickCount);
});
