/**
 * evento del boton curriculum
 */
const btnCurriculum = document.getElementById("btnCurriculum");
if (btnCurriculum) {
  btnCurriculum.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = `./src/page/curiculum.html`;
  });
}

/**
 * evento del boton volver
 */
const btnBack = document.getElementById("btnBack");
if (btnBack) {
  btnBack.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = `../../index.html`;
  });
}
