window.addEventListener('scroll', function(){
  //document.getElementById('fixheader').setAttribute('data-fixed', window.pageYOffset > 50 ? '1' : '0');
  document.getElementById('fixheader').classList.toggle("fixed");
}, false);
