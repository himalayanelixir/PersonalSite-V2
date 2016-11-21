$(document).ready(function() {
  $.simpleWeather({
    location: 'Elk Grove, CA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<p class="animated fadeInUp">'+'Creating software applications in Elk Grove, California where it&#39;s '+weather.temp+'&deg;'+' and sunny. <a href="mailto:harlenbains@ieee.org">Contact Me</a>.'+'</p>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
