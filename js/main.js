// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: false,
  progress: true,
  history: true,
  center: true,

  //theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: 'fade', // default/cube/page/concave/zoom/linear/fade/none

  // Parallax scrolling
  // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
  // parallaxBackgroundSize: '2100px 900px',

  // Optional libraries used to extend on reveal.js
  dependencies: [{
    src: 'lib/js/classList.js',
    condition: function () {
      return !document.body.classList;
    }
  }, {
    src: 'plugin/markdown/marked.js',
    condition: function () {
      return !!document.querySelector('[data-markdown]');
    }
  }, {
    src: 'plugin/markdown/markdown.js',
    condition: function () {
      return !!document.querySelector('[data-markdown]');
    }
  }, {
    src: 'plugin/highlight/highlight.js',
    async: true,
    callback: function () {
      hljs.initHighlightingOnLoad();
    }
  }, {
    src: 'plugin/zoom-js/zoom.js',
    async: true,
    condition: function () {
      return !!document.body.classList;
    }
  }, {
    src: 'plugin/notes/notes.js',
    async: true,
    condition: function () {
      return !!document.body.classList;
    }
  }, {
    src: 'plugin/external/external.js',
    condition: function () { return !!document.querySelector('[data-external]'); }
  }]
});


Reveal.addEventListener('slidechanged', () => {
  document.querySelector('.reveal .footer').style.display = 'none';
});
