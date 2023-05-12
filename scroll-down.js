window.addEventListener('scroll', function() {
  var scrollDistance = window.pageYOffset;
  if (scrollDistance > 350) {
    document.querySelector('.scroll-down').style.display = 'none';
  } else {
    document.querySelector('.scroll-down').style.display = 'block';
  }
});
