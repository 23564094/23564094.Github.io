UIkit.util.on('#open-gal', 'click', function(e) {
   UIkit.lightboxPanel({
      items: [
        {source: 'https://playboys.pages.dev/img/DemoDB/D1.png', caption: 'this is Demo photo one'},
        {source: 'https://playboys.pages.dev/img/DemoDB/D2.png', caption: 'Demo photo two'},
        {source: 'https://playboys.pages.dev/img/DemoDB/D.png', caption: 'Demo'},
      ]
      }).show();
  e.preventDefault();
});
