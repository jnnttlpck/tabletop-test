function showInfo(data, tabletop) {
  data.forEach(function(data) {
    header-1.innerHTML = data.header-1;
    header-2.innerHTML = data.header-1;
    body.innerHTML = data.body-1;
  });
}

window.addEventListener('DOMContentLoaded', init)
