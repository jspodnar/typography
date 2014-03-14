/**
  * [TypeSet]
  *
  * Description: A JQuery plug-in to automatically typeset your webpage based on viewing device dimensions.
  * Version: 4.0
  * By: Kevin Montgomery

  * 
  * What's New?
  + Uses class properties instead of inline styles. Can be applied globally as a body class, or individual element classes.
  *
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

		font_height_ratio: "",

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
		font_height_em: "",
		ex_height_diameter_pixels: "",
		line_height_pixels: "",
		line_height_em: "",
		line_space_before_pixels: "",
		line_space_before_em: "",
		line_space_after_pixels: "",
		line_space_after_em: "",
		line_length_em: "",
		line_length_pixels: ""

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

	    /* [User configuration calculations] */
	    typeset_obj.user_configuration.screen_avg = (typeset_obj.user_configuration.screen_width + typeset_obj.user_configuration.screen_height) / 2;
		typeset_obj.user_configuration.screen_min = Math.min(typeset_obj.user_configuration.screen_width, typeset_obj.user_configuration.screen_height);


	    /* [Parameter calculations] */
	    typeset_obj.parameters.font_height_ratio = 1 + (typeset_obj.user_configuration.ex_height_pixels / typeset_obj.user_configuration.font_height_pixels);
	    typeset_obj.parameters.field_of_view_ratio = (typeset_obj.parameters.fovial_vision / typeset_obj.parameters.field_of_view);
	    typeset_obj.parameters.fovial_vision_pixels = Math.round(typeset_obj.user_configuration.screen_avg * typeset_obj.parameters.field_of_view_ratio), // Fovial diameter in pixels, for 4 letters
	    typeset_obj.parameters.letter_diameter_pixels = Math.round(typeset_obj.parameters.fovial_vision_pixels / 4) // Diameter of 1 lowercase letter

	    /* [Outputs calculations] */
	    typeset_obj.outputs.font_height_pixels = Math.max(typeset_obj.parameters.letter_diameter_pixels, typeset_obj.user_configuration.font_height_pixels); // Apply the larger of the users setting, or the new setting.
	    typeset_obj.outputs.font_height_em = Math.round((typeset_obj.outputs.font_height_pixels / typeset_obj.user_configuration.font_height_pixels) * 1000) / 1000; // Calculate height using em measure.
	    typeset_obj.outputs.ex_height_diameter_pixels = Math.round(typeset_obj.outputs.font_height_pixels / typeset_obj.parameters.font_height_ratio);
	    typeset_obj.outputs.line_height_pixels = typeset_obj.outputs.ex_height_diameter_pixels * 2;
	    typeset_obj.outputs.line_height_em = Math.round((typeset_obj.outputs.line_height_pixels / typeset_obj.outputs.font_height_pixels) * 1000) / 1000;
	    typeset_obj.outputs.line_space_before_pixels =  typeset_obj.outputs.ex_height_diameter_pixels;
	    typeset_obj.outputs.line_space_before_em = Math.round((typeset_obj.outputs.line_space_before_pixels / typeset_obj.outputs.font_height_pixels) * 1000) / 1000;
	    typeset_obj.outputs.line_space_after_pixels =  typeset_obj.outputs.ex_height_diameter_pixels;
	    typeset_obj.outputs.line_space_after_em = Math.round((typeset_obj.outputs.line_space_after_pixels / typeset_obj.outputs.font_height_pixels) * 1000) / 1000;
	    typeset_obj.outputs.line_length_em = Math.max(39, (typeset_obj.outputs.font_height_pixels * 2)); // Calculate ideal line length, compare the 'alphabet-and-a-half rule' to the 'points-times-two' rule
	    typeset_obj.outputs.line_length_pixels = typeset_obj.outputs.line_length_em * typeset_obj.outputs.font_height_pixels;

	    /*
	     * Apply style properties to "typeset" class
	     * Locate all elements with applicable "typeset" class and typeset them.
	     */

	    typeset_obj.typography();
		typeset_obj.stylesheet();

	    console.log(typeset_obj);

	}

	this.stylesheet = function() {

		var typeset_css = document.createElement('style');
		typeset_css.setAttribute("type", "text/css");

		var typeset_body_size = "body.typeset { "+
		"font-size: "+typeset_obj.outputs.font_height_em+"em; "+
		"} ";

		var typeset_margins = "body .typeset, "+
	     	"body.typeset h1, "+
	     	"body.typeset h2, "+
	     	"body.typeset h3, "+
	     	"body.typeset h4, "+
	     	"body.typeset h5, "+
	     	"body.typeset h6, "+
	     	"body.typeset p, " +
	     	"body.typeset td, " +
	     	"body.typeset li " +
		"{ "+
		"line-height: "+typeset_obj.outputs.line_height_em+"em; "+
		"max-width: "+typeset_obj.outputs.line_length_em+"rem; "+
		"margin-top: "+typeset_obj.outputs.line_space_before_em+"rem; "+
		"margin-bottom: "+typeset_obj.outputs.line_space_after_em+"rem; "+
		"margin-left: auto; "+
		"margin-right: auto; "+
		"} ";

		if (typeset_css.styleSheet) {
			typeset_css.styleSheet.cssText = typeset_body_size + typeset_margins;
		} else {
			typeset_css.appendChild(document.createTextNode(typeset_body_size));
			typeset_css.appendChild(document.createTextNode(typeset_margins));
		}

		document.getElementsByTagName("head")[0].appendChild(typeset_css);

	}

	this.typography = function() {

	    /* [Locate elements for typesetter] */
	    var typesetter_elements = document.querySelectorAll("body .typeset, "+
	     	"body.typeset h1, "+
	     	"body.typeset h2, "+
	     	"body.typeset h3, "+
	     	"body.typeset h4, "+
	     	"body.typeset h5, "+
	     	"body.typeset h6, "+
	     	"body.typeset p," +
	     	"body.typeset td," +
	     	"body.typeset li");

	    var punctuation = new Array("!", ".", ",", "?", ":", ";");
	    // !.,?:

	    console.log(typesetter_elements);

	    for (var i = 0; i < typesetter_elements.length; i++) {

			/* [Apply orphan control] */
	    	var line = typesetter_elements[i].innerHTML;
	    	var word_array = line.split(" ");
	    	var last_words =  word_array.splice(-2);
	    	var last_words_join = last_words.join("&nbsp;");

	    	word_array.push(last_words_join);
			line = word_array.join(" ");
			typesetter_elements[i].innerHTML = line;

			/* [Don't break words ending with punctuation] */
	    	var line = typesetter_elements[i].innerHTML;
	    	var word_array = line.split(" ");
	    	for (var ii = 0; ii < word_array.length; ii++) { // Look at each word for punctuation
	    		var word = word_array[ii];
	    		var evaluate_punctuation = word.substring(word.length - 1, word.length);

	    		/*
	    		 * If punctuation is found, apply non-breaking spaces to the preceding and following words.
	    		 */
	    		if (punctuation.indexOf(evaluate_punctuation) > 0) {
	    			var preceding_words =  new Array(word_array[ii - 1], word);
	    			var preceding_words_join = preceding_words.join("&nbsp;");
	    			word_array[ii] = preceding_words_join;
	    			// Remove preceding word and replace current one.

	    			var following_words =  new Array(word_array[ii + 1], word_array[ii + 2]);
	    			var following_words_join = following_words.join("&nbsp;");
	    			// word_array.push(following_words_join);
	    			// Remove 2 words ahead, replace next one with this one?

	    			/*
	    			word_array.push(last_words_join);
					line = word_array.join(" ");
					typesetter_elements[i].innerHTML = line;
					*/
			
	    			// console.log(following_words);

	    		}

				// line = word_array.join(" ");
				// console.log(line);
				// typesetter_elements[i].innerHTML = line;
	    		
	    	}

	    	console.log(word_array);

	    	// var evaluate_punctuation = line.substring(line.length - 1, line.length);
	    	// console.log(evaluate_punctuation);

		}

	}

};