const toggleBtn = document.querySelector('.btn-toggle');
const mainContainer = document.querySelector('.container');

toggleBtn.onclick = function () {
    mainContainer.classList.toggle('active')
}