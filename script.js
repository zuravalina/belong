/* BELONG — Virea ecosystem | interactions */

  (function(){
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(function(el){
      observer.observe(el);
    });

    document.querySelectorAll('.timeline-step').forEach(function(el){
      observer.observe(el);
    });

    function centerWordmark(svgSelector){
      var svg = document.querySelector(svgSelector);
      if(!svg) return;
      var g = svg.querySelector('g');
      if(!g) return;
      var bbox = g.getBBox();
      var viewBox = svg.viewBox.baseVal;
      var targetCenter = viewBox.x + viewBox.width / 2;
      var currentCenter = bbox.x + bbox.width / 2;

      var transform = g.getAttribute('transform') || 'translate(0,0)';
      var match = transform.match(/translate\(\s*([-\d.]+)[\s,]+([-\d.]+)\s*\)/);
      var ty = match ? parseFloat(match[2]) : 0;

      var newTx = targetCenter - currentCenter;
      g.setAttribute('transform', 'translate(' + newTx + ',' + ty + ')');
    }

    function centerAllWordmarks(){
      centerWordmark('.wordmark');
      centerWordmark('.final-wordmark');
    }

    if(document.fonts && document.fonts.ready){
      document.fonts.ready.then(centerAllWordmarks);
    } else {
      window.addEventListener('load', centerAllWordmarks);
    }
    window.addEventListener('resize', centerAllWordmarks);
  })();
