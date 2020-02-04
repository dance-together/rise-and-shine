

    {/* Get the button */}
    var mybutton = document.getElementById("myBtn");
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    

//<!-- header part -->

  $(function(){
    var navStatesInPixelHeight = [110,120];
      
    var changeNavState = function(nav, newStateIndex) {
      nav.data('state', newStateIndex).stop().animate({
        height : navStatesInPixelHeight[newStateIndex] + 'px'
      }, 600);    
    };
      
    var boolToStateIndex = function(bool) {
      return bool * 1;    
    };
      
    var maybeChangeNavState = function(nav, condState) {
      var navState = nav.data('state');
      if (navState === condState) {
        changeNavState(nav, boolToStateIndex(!navState));
      }
    };
      
    $('#header_nav').data('state', 1);
      
    $(window).scroll(function(){
      var $nav = $('#header_nav');
          
      if ($(document).scrollTop() > 0) {
        maybeChangeNavState($nav, 1);
      } else {
        maybeChangeNavState($nav, 0); 
      }
    });
  });


//<!-- read more read less -->

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readmore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

  