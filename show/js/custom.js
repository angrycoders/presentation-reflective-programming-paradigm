Reveal.addEventListener('ready', function() {
  $('.codeblock').each(function(i, block) {
    var $block = $(block);
    $block
      .load($block.attr('data-source'), function() {
        Prism.highlightElement(block);
      });
  });
});


/* * * CONFIGURATION VARIABLES * * */
var disqus_shortname = 'gochomugo';
/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
  var dsq = document.createElement('script');
  dsq.type = 'text/javascript';
  dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] ||
    document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
