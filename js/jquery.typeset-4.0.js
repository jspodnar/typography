/**
  * [TypeSet]
  *
  * Description: A JQuery plug-in to automatically typeset your webpage based on viewing device dimensions.
  * Version: 4.0
  * By: Kevin Montgomery
  */

var typeset_obj = new function() {	
	
	/* [R2] */

	/* [Parameters] */
	this.parameters = {

		/* [Field of view] */
		field_of_view: 30, // About 30 degree fov monitor viewing.

		/* [Fovial vision] */
		fovial_vision: 1.5, // fovial vision, in degrees, for 4 letters. Usually 1-2 degrees.

		/* [Field of view ratio] */
		field_of_view_ratio: "", // fovial_vision / field_of_view, // Calculate ratio of fovial vision to field of view

		/* [Determine diameter for 1 lowercase letter] */
		fovial_vision_pixels: "", // Math.round(typeset_obj.user_configuration.screen_avg * typeset_obj.parameters.field_of_view_ratio), // Fovial diameter in pixels, for 4 letters
		letter_diameter_pixels: "", // Math.round(typeset_obj.parameters.fovial_vision_pixels / 4) // Diameter of 1 lowercase letter

		font_height_ratio: ""

	};

	/* [User Configuration Detection] */
	this.user_configuration = {

		/* [Capture screen resolution, use average for diameter] */
		screen_width: screen.width,
		screen_height: screen.height,
		screen_avg: "", // (screen_width + screen_height) / 2
		screen_min: "", // = Math.min(this.screen_width, this.screen_height);

		/* [Establish parameters for users font size] */
		font_height_pixels: "",
		ex_height_pixels: ""

	}

	/* [Outputs] */
	this.outputs = {

		font_height_pixels: "",
		font_height_em: ""

	};

	/* [Initialize the object] */
	this.init = function() {

		/* [Evaluate users font size] */
		var user_font_height_obj = document.createElement("div");
		user_font_height_obj.setAttribute("id", "usr_font_height_obj");
		user_font_height_obj.setAttribute("style", "line-height: 100%, padding: 0, margin: 0");
		user_font_height_obj.innerHTML = "&nbsp;";
		document.getElementsByTagName("body")[0].insertBefore(user_font_height_obj, document.getElementsByTagName("body")[0].childNodes[0]);
		
		typeset_obj.user_configuration.font_height_pixels = Math.min(
			Math.min(user_font_height_obj.scrollHeight, user_font_height_obj.scrollHeight),
			Math.min(user_font_height_obj.offsetHeight, user_font_height_obj.offsetHeight),
			Math.min(user_font_height_obj.clientHeight, user_font_height_obj.clientHeight)
	    );
	    
	    user_font_height_obj.setAttribute("style", "font-size: 1ex;");
	    
	    typeset_obj.user_configuration.ex_height_pixels = Math.min(
			Math.min(user_font_height_obj.scrollHeight, user_font_height_obj.scrollHeight),
			Math.min(user_font_height_obj.offsetHeight, user_font_height_obj.offsetHeight),
			Math.min(user_font_height_obj.clientHeight, user_font_height_obj.clientHeight)
	    );
	    
	    /* [Remove font testing object] */
	    document.getElementsByTagName("body")[0].removeChild(user_font_height_obj);

	    /* [Parameter calculations] */
	    typeset_obj.parameters.font_height_ratio = 1 + (typeset_obj.user_configuration.ex_height_pixels / typeset_obj.user_configuration.font_height_pixels);
	    typeset_obj.parameters.field_of_view_ratio = (typeset_obj.parameters.fovial_vision / typeset_obj.parameters.field_of_view);

	    /* [Outputs calculations] */
	    typeset_obj.outputs.font_height_pixels = Math.max(typeset_obj.parameters.letter_diameter_pixels, typeset_obj.user_configuration.font_height_pixels); // Apply the larger of the users setting, or the new setting.
	    typeset_obj.outputs.font_height_em = Math.round((typeset_obj.outputs.font_height_pixels / typeset_obj.user_configuration.font_height_pixels) * 1000) / 1000; // Calculate height using em measure.

	    /*
		var typeset_letter_dia = Math.round(typeset_px_fontheight / g_ratio);
		var typeset_px_lineheight = (typeset_letter_dia * 2);
		var typeset_em_lineheight = Math.round((typeset_px_lineheight / typeset_px_fontheight) * 1000) / 1000;
		var typeset_px_itemspace = (typeset_letter_dia);
		var typeset_em_itemspace = Math.round((typeset_px_itemspace / typeset_px_fontheight) * 1000) / 1000;
			
		var typeset_em_maxlength = Math.max(39, (typeset_px_fontheight * 2));
		// Calculate ideal line length, compare the 'alphabet-and-a-half rule' to the 'points-times-two' rule
		var typeset_px_maxlength = (typeset_em_maxlength * typeset_px_fontheight);
		*/

	    console.log(typeset_obj.outputs);

	}

};