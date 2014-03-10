/**
  * [TypeSet]
	* Description: A JavaScript object to automatically typeset your webpage. 
	* Script will favour the larger of either the users preference, or a calculation of ideal size based on viewing device dimensions.
	* Version: 4.0
	* By: Kevin Montgomery	
	* 
	* Steps:
	+ Capture Screen Resolution
	+ Decide the best value for a diameter
	+ Establish the Fovial Vision area within a Field of View for monitor viewing
	+ Determine diameter for 1 letter within Fovial Vision
	+ Determine appropriate line height based on 1 letter width
	+ Determine ideal line length based on font size
	+ Establish other elements of style appropriate for font size.
	*/

var typeset_obj = new function() {

	/* [R2] */

	
	

	/* [R1] */

	/* [Initialize the object] */
	this.init = function() {

		/* [Capture screen resolution, use minimum for diameter] */
		this.screen_width = screen.width;
		this.screen_height = screen.height;
		this.screen_avg = (this.screen_width + this.screen_height) / 2;
		this.screen_min = Math.min(this.screen_width, this.screen_height);

		/* [Establish our parameters for field of view and fovial vision] */
		this.field_of_view = 30; // About 30 degree fov monitor viewing.
		this.fovial_vision = 1.5; // fovial vision, in degrees, for 4 letters. Usually 1-2 degrees.
		this.field_of_view_ratio = (this.fovial_vision / this.field_of_view); // Calculate ratio of fv to fov
		this.fovial_vision_pixels = Math.round(this.screen_avg * this.field_of_view_ratio); // Fovial diameter in pixels, for 4 letters
		this.calc_font_height_px = Math.round(this.fovial_vision_pixels / 4); // Diameter of 1 lowercase letter

		/* [Evaluate users font size] */
		// this.body = document.getElementsByTagName("body");
		this.user_font_height_obj = document.createElement("div");
		this.user_font_height_obj.setAttribute("id", "usr_font_height_obj");
		this.user_font_height_obj.setAttribute("style", "line-height: 100%, padding: 0, margin: 0");
		this.user_font_height_obj.innerHTML = "&nbsp;";
		document.getElementsByTagName("body")[0].insertBefore(this.user_font_height_obj, document.getElementsByTagName("body")[0].childNodes[0]);
		this.user_font_height_px = Math.min(
			Math.min(this.user_font_height_obj.scrollHeight, this.user_font_height_obj.scrollHeight),
			Math.min(this.user_font_height_obj.offsetHeight, this.user_font_height_obj.offsetHeight),
			Math.min(this.user_font_height_obj.clientHeight, this.user_font_height_obj.clientHeight)
	    );
	    this.user_font_height_obj.setAttribute("style", "font-size: 1ex;");
	    this.user_ex_height_px = Math.min(
			Math.min(this.user_font_height_obj.scrollHeight, this.user_font_height_obj.scrollHeight),
			Math.min(this.user_font_height_obj.offsetHeight, this.user_font_height_obj.offsetHeight),
			Math.min(this.user_font_height_obj.clientHeight, this.user_font_height_obj.clientHeight)
	    );
	    document.getElementsByTagName("body")[0].removeChild(this.user_font_height_obj);

	    /* [Extrapolate ideal typesettings based on font size] */
	    this.golden_ratio = 1 + (this.user_ex_height_px / this.user_font_height_px); // 1.61803399;

	    /*
	    // Evaluate users font size.
				
		var typeset_px_fontheight = Math.max(calc_fontheight, usr_fontheight); // Apply the larger of the users setting, or the new setting.
		var typeset_em_fontheight = Math.round((typeset_px_fontheight / usr_fontheight) * 1000) / 1000; // Calculate height using em measure.
		var typeset_letter_dia = Math.round(typeset_px_fontheight / g_ratio);
		var typeset_px_lineheight = (typeset_letter_dia * 2);
		var typeset_em_lineheight = Math.round((typeset_px_lineheight / typeset_px_fontheight) * 1000) / 1000;
		var typeset_px_itemspace = (typeset_letter_dia);
		var typeset_em_itemspace = Math.round((typeset_px_itemspace / typeset_px_fontheight) * 1000) / 1000;
			
		var typeset_em_maxlength = Math.max(39, (typeset_px_fontheight * 2));
		// Calculate ideal line length, compare the 'alphabet-and-a-half rule' to the 'points-times-two' rule
		var typeset_px_maxlength = (typeset_em_maxlength * typeset_px_fontheight);
		*/

	};

};

typeset_obj.init();

console.log(typeset_obj);

/*
(function( $ ){

  $.fn.typeset = function() {
  
		// Capture screen resolution, use minimum for diameter //
    var screen_width = screen.width;
		var screen_height = screen.height;
		var screen_min = Math.min(screen_width, screen_height);

		// Establish our parameters for field of view and fovial vision //
		var fov = 30; // About 30 degree fov monitor viewing.
		var fv = 1.5; // fovial vision, in degrees, for 4 letters. Usually 1-2 degrees.
		var fov_ratio = (fv / fov); // Calculate ratio, apply to monitor resolution
		var fv_pixels = Math.round(screen_min * fov_ratio); // Fovial diameter in pixels, for 4 letters
		var calc_fontheight = Math.round(fv_pixels / 4); // Diameter of 1 lowercase letter
		
		// Evaluate users font size.
		$("body").append('<p id="typeset_usr_fontobj">&nbsp;</p>');
		var typeset_usr_fontobj = $("#typeset_usr_fontobj");
		$(typeset_usr_fontobj).css({'line-height':'100%', 'padding':'0', 'margin':'0'});
		var usr_fontheight = typeset_usr_fontobj.height();
		$(typeset_usr_fontobj).css({'font-size':'1ex'});
		var usr_font_xheight = typeset_usr_fontobj.height();
		$(typeset_usr_fontobj).remove();
		
		var g_ratio = 1 + (usr_font_xheight / usr_fontheight); // 1.61803399;
		
		var typeset_px_fontheight = Math.max(calc_fontheight, usr_fontheight); // Apply the larger of the users setting, or the new setting.
		var typeset_em_fontheight = Math.round((typeset_px_fontheight / usr_fontheight) * 1000) / 1000; // Calculate height using em measure.
		var typeset_letter_dia = Math.round(typeset_px_fontheight / g_ratio);
		var typeset_px_lineheight = (typeset_letter_dia * 2);
		var typeset_em_lineheight = Math.round((typeset_px_lineheight / typeset_px_fontheight) * 1000) / 1000;
		var typeset_px_itemspace = (typeset_letter_dia);
		var typeset_em_itemspace = Math.round((typeset_px_itemspace / typeset_px_fontheight) * 1000) / 1000;
			
		var typeset_em_maxlength = Math.max(39, (typeset_px_fontheight * 2));
		// Calculate ideal line length, compare the 'alphabet-and-a-half rule' to the 'points-times-two' rule
		var typeset_px_maxlength = (typeset_em_maxlength * typeset_px_fontheight);
		
		return this.each(function(){

      // Store the object
      var $this = $(this);
        
      // Typesetter() typesets the item
      var typesetter = function () {
				
				/*
				for (var i = 0; i < $this.length; i++) {
					var line = $($this[i]).html();
					
					// Do a REGEX match for line_terminator + "word" + " ",
					// Swap the space at the end for a non-breaking one.
					// var line_terminators = line.split("!.,?:");
					
					var word_array = line.split(" ");
					var last_words =  word_array.splice(-2);
					var last_words_join = last_words.join("&nbsp;");
					word_array.push(last_words_join);
					line = word_array.join(" ");
					$($this[i]).html(line);
				}
				*
				
				if ($this[0].nodeName.toLowerCase() != "body") {
					$this.css({
						'font-size':typeset_em_fontheight+'em', 
						'line-height':typeset_em_lineheight+'em', 
						'max-width':typeset_em_maxlength+'em',
						'margin':typeset_em_itemspace+'em 0'
					});
				} else {
					$this.css({
						'font-size':typeset_em_fontheight+'em', 
						'line-height':typeset_em_lineheight+'em'
					});
				}
      };

      // Call once to set.
      typesetter();
      	
    });
				
  };
})( jQuery );
*/