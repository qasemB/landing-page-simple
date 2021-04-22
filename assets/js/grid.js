document.addEventListener("DOMContentLoaded", function () {
  const sidenav = document.querySelector(".sidenav");
  M.Sidenav.init(sidenav, {});

  var elems = document.querySelectorAll(".slider");
  M.Slider.init(elems, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000,
  });

  const ac = document.querySelector(".autocomplete");
  M.Autocomplete.init(ac, {
    data: {
      عربستان: null,
      مکزیک: null,
      هاوایی: null,
      فلوریدا: null,
      کالیفورنیا: null,
      چابهار: null,
      جاماییکا: null,
      اروپا: null,
    },
  });

  const mb = document.querySelectorAll(".materialboxed");
  M.Materialbox.init(mb, {});

  var ss = document.querySelectorAll(".scrollspy");
  M.ScrollSpy.init(ss, {});
});
