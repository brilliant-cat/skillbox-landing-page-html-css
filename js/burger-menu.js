window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger--menu').addEventListener('click', function() {
    document.querySelector('#nav--burger').classList.toggle('is-active-menu')
  })
})
