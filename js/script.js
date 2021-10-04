
jQuery('a[href^="#"]').click(function() {
    var header = jQuery('header').innerHeight();
    var id = jQuery(this).attr('href');
    var position = jQuery(id).offset().top - header;
    jQuery("html,body").animate({
    scrollTop:position
    },);
    });


    jQuery(".drawer-icon").on("click", function(e) {
        e.preventDefault();
    
        jQuery('.drawer-icon').toggleClass('is-click')
        jQuery('.drawer-content').toggleClass('is-click')
    
        return false;
      });
 
      new WOW().init();

  let $form = $( '#js-form' )
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success' ).slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $( '#js-error' ).slideDown()
        }
      } 
    });
    return false; 
  });       

  let $submit = $( '#js-submit' )
  $( '#js-form input, #js-form textarea' ).on( 'change',function(){
    if(
      $( '#js-form input[type="text"]' ).val() !== "" &&
      $( '#js-form input[type="email"]' ).val() !== "" &&
      $( '#js-form input[name="entry.255353454"]' ).prop( 'checked' ) === true
    ) {
      $submit.addClass( 'submit-active')
    } else {
      $submit.removeClass( 'submit-active')
    }
  });
  