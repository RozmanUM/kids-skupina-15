document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("date");

  const date = new Date();

  const localDate = date.toLocaleDateString("sl-SI", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  //prikaz datuma
  dateElement.textContent = `Danes je ${localDate}`;
});
