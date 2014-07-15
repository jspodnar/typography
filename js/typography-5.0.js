/**
  * [Typography]
  *
  * Description:
  + A JavaScipt object that defines ideal web typography defaults.
  * Version: 5.0
  * By: Kevin Montgomery

  * 
  * What's New?
  + - "Cottage Getaway" version.
  + - Added "small", "medium", and "large" settings for recommended smallest, average, and largest font sizes.
  */

var typography_obj = new function() {	
	
	/* [Parameters] */
	this.parameters = {

		/* [Foveal vision - In degrees, for 4-5 letters. Usually 1-2 degrees.] */
		foveal_vision_min: 1,
		foveal_vision_avg: "",
		foveal_vision_max: 2,

		/* [Field of view settings - About 30-35 degree fov monitor viewing.] */
		screen_field_of_view_min: 30,
		screen_field_of_view_avg: "",
		screen_field_of_view_max: 35,

		/* [Screen field of view ratio] */
		screen_field_of_view_ratio_min: "",
		screen_field_of_view_ratio_avg: "",
		screen_field_of_view_ratio_max: "",

		/* [Foveal vision values] */
		screen_foveal_vision_pixels_min: "",
		screen_foveal_vision_pixels_avg: "",
		screen_foveal_vision_pixels_max: "",
		reading_foveal_vision_inches_min: 0.277,
		reading_foveal_vision_inches_avg: 0.416,
		reading_foveal_vision_inches_max: 0.555,
		reading_foveal_vision_pixels_min: "",
		reading_foveal_vision_pixels_avg: "",
		reading_foveal_vision_pixels_max: "",
		final_foveal_vision_pixels_min: "",
		final_foveal_vision_pixels_avg: "",
		final_foveal_vision_pixels_max: "",

		/* [Letter diameter pixels] */
		letter_diameter_pixels_min: "",
		letter_diameter_pixels_avg: "",
		letter_diameter_pixels_max: "",

		/* [Font height ratio placeholders] */
		font_height_ratio: "",
		golden_ratio: 1.618

	};

	/* [User Configuration Detection] */
	this.user_configuration = {

		/* [Capture screen resolution, use average for diameter] */
		screen_width: screen.width,
		screen_height: screen.height,
		screen_min: "",
		screen_avg: "",
		screen_max: "",		
		screen_resolution: "",

		/* [Establish parameters for users font size] */
		font_height_pixels: "",
		ex_height_pixels: ""

	};

	/* [Outputs] */
	this.outputs = {

		/* [Values that will be used in the resulting CSS] */
		font_height_pixels_min: "",
		font_height_pixels_avg: "",
		font_height_pixels_max: "",
		font_height_em_min: "",
		font_height_em_avg: "",
		font_height_em_max: "",
		// ex_height_diameter_pixels_min: "",
		// ex_height_diameter_pixels_avg: "",
		// ex_height_diameter_pixels_max: "",
		// line_height_pixels_min: "",
		// line_height_pixels_avg: "",
		// line_height_pixels_max: "",
		// line_height_em_min: "",
		// line_height_em_avg: "",
		// line_height_em_max: "",
		// line_space_before_pixels_min: "",
		// line_space_before_pixels_avg: "",
		// line_space_before_pixels_max: "",
		// line_space_before_em_min: "",
		// line_space_before_em_avg: "",
		// line_space_before_em_max: "",
		// line_space_after_pixels_min: "",
		// line_space_after_pixels_avg: "",
		// line_space_after_pixels_max: "",
		// line_space_after_em_min: "",
		// line_space_after_em_avg: "",
		// line_space_after_em_max: "",
		line_length_em_min: "",
		line_length_em_avg: "",
		line_length_em_max: ""
		// line_length_pixels_min: "",
		// line_length_pixels_avg: "",
		// line_length_pixels_max: ""

	};

	/* [Initialize the object] */
	this.init = function() {

		/* [Create element to evaluate users properties] */
		var user_properties_obj = document.createElement("div");
			user_properties_obj.setAttribute("id", "user_properties_obj");
			user_properties_obj.setAttribute("style", "line-height: 100%, padding: 0, margin: 0; width: 1in;");
			user_properties_obj.innerHTML = "&nbsp;";
			document.getElementsByTagName("body")[0].insertBefore(user_properties_obj, document.getElementsByTagName("body")[0].childNodes[0]);

		/* [Create element to evaluate users font size] */
		/*
		var user_font_height_obj = document.createElement("div");
			user_font_height_obj.setAttribute("id", "user_font_height_obj");
			user_font_height_obj.setAttribute("style", "line-height: 100%, padding: 0, margin: 0");
			user_font_height_obj.innerHTML = "&nbsp;";
			document.getElementsByTagName("body")[0].insertBefore(user_font_height_obj, document.getElementsByTagName("body")[0].childNodes[0]);
		*/

		/* [Create element to evaluate users screen resolution] */
		/*
		var user_screen_resolution_obj = document.createElement("div");
			user_screen_resolution_obj.setAttribute("id", "user_screen_resolution_obj");
			user_screen_resolution_obj.setAttribute("style", "width: 1in;");
			user_screen_resolution_obj.innerHTML = "&nbsp;";
			document.getElementsByTagName("body")[0].insertBefore(user_screen_resolution_obj, document.getElementsByTagName("body")[0].childNodes[0]);
		*/

		/* [Calculate users font size] */
		/*
		typography_obj.user_configuration.font_height_pixels = Math.min(
			Math.min(user_font_height_obj.scrollHeight, user_font_height_obj.scrollHeight),
			Math.min(user_font_height_obj.offsetHeight, user_font_height_obj.offsetHeight),
			Math.min(user_font_height_obj.clientHeight, user_font_height_obj.clientHeight)
	    );
		*/

	    /* [Calculate users screen resolution] */
		/*
		typography_obj.user_configuration.screen_resolution = Math.min(
			Math.min(user_screen_resolution_obj.scrollWidth, user_screen_resolution_obj.scrollWidth),
			Math.min(user_screen_resolution_obj.offsetWidth, user_screen_resolution_obj.offsetWidth),
			Math.min(user_screen_resolution_obj.clientWidth, user_screen_resolution_obj.clientWidth)
	    );
	    */

	    /* [Calculate users font size] */
		typography_obj.user_configuration.font_height_pixels = Math.min(user_properties_obj.scrollHeight,user_properties_obj.offsetHeight,user_properties_obj.clientHeight);

	    /* [Calculate users screen resolution] */
		typography_obj.user_configuration.screen_resolution = Math.min(user_properties_obj.scrollWidth,user_properties_obj.offsetWidth,user_properties_obj.clientWidth);
	    
	    /* [Reduce element font size to calculate 1ex] */
	    user_properties_obj.setAttribute("style", "font-size: 1ex;");  
	    
	    /*
	    typography_obj.user_configuration.ex_height_pixels = Math.min(
			Math.min(user_font_height_obj.scrollHeight, user_font_height_obj.scrollHeight),
			Math.min(user_font_height_obj.offsetHeight, user_font_height_obj.offsetHeight),
			Math.min(user_font_height_obj.clientHeight, user_font_height_obj.clientHeight)
	    );
		*/
		typography_obj.user_configuration.ex_height_pixels = Math.min(user_properties_obj.scrollHeight, user_properties_obj.offsetHeight, user_properties_obj.clientHeight);

	    /* [Remove testing object] */
	    document.getElementsByTagName("body")[0].removeChild(user_properties_obj);

	    /* [User configuration calculations] */
		typography_obj.user_configuration.screen_min = Math.min(typography_obj.user_configuration.screen_width, typography_obj.user_configuration.screen_height);
		typography_obj.user_configuration.screen_avg = (typography_obj.user_configuration.screen_width + typography_obj.user_configuration.screen_height) / 2;
		typography_obj.user_configuration.screen_max = Math.max(typography_obj.user_configuration.screen_width, typography_obj.user_configuration.screen_height);

	    /* [Parameter calculations] */

	    /**
	     * Don't forget, we need to compare LOWERCASE letters, not the entire font height.
	     **/
	    
	    /* [The x-height ratio of the default font being used] */
	    typography_obj.parameters.font_height_ratio = Math.round((typography_obj.user_configuration.ex_height_pixels / typography_obj.user_configuration.font_height_pixels) * 1000) / 1000;

	    /* [Average foveal vision and field of view calculations] */
	    typography_obj.parameters.foveal_vision_avg = Math.round(((typography_obj.parameters.foveal_vision_min + typography_obj.parameters.foveal_vision_max) / 2) * 1000) / 1000;
	    typography_obj.parameters.screen_field_of_view_avg = Math.round(((typography_obj.parameters.screen_field_of_view_min + typography_obj.parameters.screen_field_of_view_max) / 2) * 1000) / 1000;

	    // typography_obj.parameters.field_of_view_ratio = typography_obj.parameters.foveal_vision / typography_obj.parameters.field_of_view; // Calculate ratio of foveal vision to field of view

	    /* [Calculate minimum, average, and maximum ratios of screen foveal vision to field of view] */
	    typography_obj.parameters.screen_field_of_view_ratio_min = Math.round((typography_obj.parameters.foveal_vision_min / typography_obj.parameters.screen_field_of_view_min) * 1000) / 1000;
	    typography_obj.parameters.screen_field_of_view_ratio_avg = Math.round((typography_obj.parameters.foveal_vision_avg / typography_obj.parameters.screen_field_of_view_avg) * 1000) / 1000;
	    typography_obj.parameters.screen_field_of_view_ratio_max = Math.round((typography_obj.parameters.foveal_vision_max / typography_obj.parameters.screen_field_of_view_max) * 1000) / 1000;
	    
	    /* [Foveal diameter in pixels, for 4-5 letters] */
	    typography_obj.parameters.screen_foveal_vision_pixels_min = Math.round(typography_obj.user_configuration.screen_min * typography_obj.parameters.screen_field_of_view_ratio_min);
	    typography_obj.parameters.screen_foveal_vision_pixels_avg = Math.round(typography_obj.user_configuration.screen_avg * typography_obj.parameters.screen_field_of_view_ratio_avg);
	    typography_obj.parameters.screen_foveal_vision_pixels_max = Math.round(typography_obj.user_configuration.screen_max * typography_obj.parameters.screen_field_of_view_ratio_max);
	    typography_obj.parameters.reading_foveal_vision_pixels_min = Math.round(typography_obj.parameters.reading_foveal_vision_inches_min * typography_obj.user_configuration.screen_resolution);
	    typography_obj.parameters.reading_foveal_vision_pixels_avg = Math.round(typography_obj.parameters.reading_foveal_vision_inches_avg * typography_obj.user_configuration.screen_resolution);
	    typography_obj.parameters.reading_foveal_vision_pixels_max = Math.round(typography_obj.parameters.reading_foveal_vision_inches_max * typography_obj.user_configuration.screen_resolution);
	    typography_obj.parameters.final_foveal_vision_pixels_min = Math.max(typography_obj.parameters.screen_foveal_vision_pixels_min, typography_obj.parameters.reading_foveal_vision_pixels_min);
	    typography_obj.parameters.final_foveal_vision_pixels_avg = Math.max(typography_obj.parameters.screen_foveal_vision_pixels_avg, typography_obj.parameters.reading_foveal_vision_pixels_avg);
	    typography_obj.parameters.final_foveal_vision_pixels_max = Math.max(typography_obj.parameters.screen_foveal_vision_pixels_max, typography_obj.parameters.reading_foveal_vision_pixels_max);
		// typography_obj.parameters.screen_foveal_vision_pixels_max = Math.round(typography_obj.parameters.foveal_vision_max_inches * typography_obj.user_configuration.screen_resolution); // Minimum foveal diameter in pixels, for 4-5 letters

	    /* [Minimum, average, and maximum diameters of 1 UPPERCASE letter] */
	    typography_obj.parameters.letter_diameter_pixels_min = Math.round((typography_obj.parameters.final_foveal_vision_pixels_min / 4.5) / typography_obj.parameters.font_height_ratio);
	    typography_obj.parameters.letter_diameter_pixels_avg = Math.round((typography_obj.parameters.final_foveal_vision_pixels_avg / 4.5) / typography_obj.parameters.font_height_ratio);
	    typography_obj.parameters.letter_diameter_pixels_max = Math.round((typography_obj.parameters.final_foveal_vision_pixels_max / 4.5) / typography_obj.parameters.font_height_ratio);

	    // typography_obj.parameters.letter_diameter_pixels = Math.round((typography_obj.parameters.foveal_vision_pixels / 4.5) / typography_obj.parameters.font_height_ratio); // Diameter of approximately 1 uppercase letter
	    // typography_obj.parameters.letter_diameter_pixels_min = Math.round((typography_obj.parameters.screen_foveal_vision_pixels_max / 4.5) / typography_obj.parameters.font_height_ratio); // Minimum diameter of approximately 1 uppercase letter

	    /** 
	     * [Outputs calculations] 
	     **/

	    /* [Font height pixels] */
	    typography_obj.outputs.font_height_pixels_min = Math.min(typography_obj.parameters.letter_diameter_pixels_min, typography_obj.user_configuration.font_height_pixels); // The smaller of the users setting, or the minimum setting.
	    typography_obj.outputs.font_height_pixels_avg = Math.max(typography_obj.parameters.letter_diameter_pixels_avg, typography_obj.user_configuration.font_height_pixels); // The larger of the users setting, or the average setting.
	    typography_obj.outputs.font_height_pixels_max = Math.max(typography_obj.parameters.letter_diameter_pixels_max, typography_obj.user_configuration.font_height_pixels); // The larger of the users setting, or the maximum setting.

	    /* [Calculate height using em measure.] */
	    typography_obj.outputs.font_height_em_min = Math.round((typography_obj.outputs.font_height_pixels_min / typography_obj.user_configuration.font_height_pixels) * 1000) / 1000;
	    typography_obj.outputs.font_height_em_avg = Math.round((typography_obj.outputs.font_height_pixels_avg / typography_obj.user_configuration.font_height_pixels) * 1000) / 1000;
	    typography_obj.outputs.font_height_em_max = Math.round((typography_obj.outputs.font_height_pixels_max / typography_obj.user_configuration.font_height_pixels) * 1000) / 1000;

	    /* [Calculate x-height pixels of default font] */
	    // typography_obj.outputs.ex_height_diameter_pixels_min = Math.round(typography_obj.outputs.font_height_pixels_min * typography_obj.parameters.font_height_ratio);
	    // typography_obj.outputs.ex_height_diameter_pixels_avg = Math.round(typography_obj.outputs.font_height_pixels_avg * typography_obj.parameters.font_height_ratio);
	    // typography_obj.outputs.ex_height_diameter_pixels_max = Math.round(typography_obj.outputs.font_height_pixels_max * typography_obj.parameters.font_height_ratio);
	    
	    /*
	    typography_obj.outputs.line_height_pixels_min = Math.round(typography_obj.outputs.font_height_pixels_min + typography_obj.outputs.ex_height_diameter_pixels_min);
	    typography_obj.outputs.line_height_pixels_avg = Math.round(typography_obj.outputs.font_height_pixels_avg + typography_obj.outputs.ex_height_diameter_pixels_avg);
	    typography_obj.outputs.line_height_pixels_max = Math.round(typography_obj.outputs.font_height_pixels_max + typography_obj.outputs.ex_height_diameter_pixels_max);
		*/

		/*
		typography_obj.outputs.line_height_em_min = Math.round((typography_obj.outputs.line_height_pixels_min / typography_obj.outputs.font_height_pixels_min) * 1000) / 1000;
		typography_obj.outputs.line_height_em_avg = Math.round((typography_obj.outputs.line_height_pixels_avg / typography_obj.outputs.font_height_pixels_avg) * 1000) / 1000;
		typography_obj.outputs.line_height_em_max = Math.round((typography_obj.outputs.line_height_pixels_max / typography_obj.outputs.font_height_pixels_max) * 1000) / 1000;
	    */

	    /*
	    typography_obj.outputs.line_space_before_pixels_min =  typography_obj.outputs.ex_height_diameter_pixels_min;
	    typography_obj.outputs.line_space_before_pixels_avg =  typography_obj.outputs.ex_height_diameter_pixels_avg;
	    typography_obj.outputs.line_space_before_pixels_max =  typography_obj.outputs.ex_height_diameter_pixels_max;
		*/

	    /*
	    typography_obj.outputs.line_space_before_em_min = Math.round((typography_obj.outputs.line_space_before_pixels_min / typography_obj.outputs.font_height_pixels_min) * 1000) / 1000;
	    typography_obj.outputs.line_space_before_em_avg = Math.round((typography_obj.outputs.line_space_before_pixels_avg / typography_obj.outputs.font_height_pixels_avg) * 1000) / 1000;
	    typography_obj.outputs.line_space_before_em_max = Math.round((typography_obj.outputs.line_space_before_pixels_max / typography_obj.outputs.font_height_pixels_max) * 1000) / 1000;
		*/

	    /*
	    typography_obj.outputs.line_space_after_pixels_min =  typography_obj.outputs.ex_height_diameter_pixels_min;
	    typography_obj.outputs.line_space_after_pixels_avg =  typography_obj.outputs.ex_height_diameter_pixels_avg;
	    typography_obj.outputs.line_space_after_pixels_max =  typography_obj.outputs.ex_height_diameter_pixels_max;
		*/

	    /*
	    typography_obj.outputs.line_space_after_em_min = Math.round((typography_obj.outputs.line_space_after_pixels_min / typography_obj.outputs.font_height_pixels_min) * 1000) / 1000;
	    typography_obj.outputs.line_space_after_em_avg = Math.round((typography_obj.outputs.line_space_after_pixels_avg / typography_obj.outputs.font_height_pixels_avg) * 1000) / 1000;
	    typography_obj.outputs.line_space_after_em_max = Math.round((typography_obj.outputs.line_space_after_pixels_max / typography_obj.outputs.font_height_pixels_max) * 1000) / 1000;
		*/

	    /* [Calculate ideal line length, compare the 'alphabet-and-a-half rule' to the 'points-times-two' rule] */
	    typography_obj.outputs.line_length_em_min = Math.max(39, typography_obj.outputs.font_height_pixels_min * 2);
	    typography_obj.outputs.line_length_em_avg = Math.max(39, typography_obj.outputs.font_height_pixels_avg * 2);
	    typography_obj.outputs.line_length_em_max = Math.max(39, typography_obj.outputs.font_height_pixels_max * 2);

	    /*
	    typography_obj.outputs.line_length_pixels_min = typography_obj.outputs.line_length_em_min * typography_obj.outputs.font_height_pixels_min;
	    typography_obj.outputs.line_length_pixels_avg = typography_obj.outputs.line_length_em_avg * typography_obj.outputs.font_height_pixels_avg;
	    typography_obj.outputs.line_length_pixels_max = typography_obj.outputs.line_length_em_max * typography_obj.outputs.font_height_pixels_max;
		*/

	    /*
	     * Apply style properties to "typography" class
	     * Locate all elements with applicable "typography" class and adjust them.
	     */

	    typography_obj.quotes_control();
	    typography_obj.orphans_control();
		typography_obj.lines_control();

	};

	this.lines_control = function() {

		var typography_css = document.createElement('style');
		typography_css.setAttribute("type", "text/css");

		var typography_body_size = "html.small.typography { "+
		"font-size: "+typography_obj.outputs.font_height_em_min+"em; "+
		"} " +
		"html.large.typography { "+
		"font-size: "+typography_obj.outputs.font_height_em_max+"em; "+
		"} " +
		"html.typography { "+
		"font-size: "+typography_obj.outputs.font_height_em_avg+"em; "+
		"} ";

		var typography_copy_margins = "html .small.typography.lines, "+
	     	"html.small.typography.lines blockquote, " +
	     	"html.small.typography.lines p, " +
	     	"html.small.typography.lines td, " +
	     	"html.small.typography.lines li " +
		"{ "+
		// "line-height: "+typography_obj.outputs.line_height_em+"em; "+
		"line-height: 3ex; "+
		// "line-height: "+typography_obj.outputs.line_height_em+"rem; "+
		"max-width: "+typography_obj.outputs.line_length_em_min+"em; "+
		"max-width: "+typography_obj.outputs.line_length_em_min+"rem; "+
		// "margin-top: "+typography_obj.outputs.line_space_before_em+"em; "+
		"margin-top: 1ex; "+
		// "margin-top: "+typography_obj.outputs.line_space_before_em+"rem; "+
		// "margin-bottom: "+typography_obj.outputs.line_space_after_em+"em; "+
		"margin-bottom: 1ex; "+
		// "margin-bottom: "+typography_obj.outputs.line_space_after_em+"rem; "+
		"margin-left: auto; "+
		"margin-right: auto; "+
		"} " + 
		"html .large.typography.lines, "+
	     	"html.large.typography.lines blockquote, " +
	     	"html.large.typography.lines p, " +
	     	"html.large.typography.lines td, " +
	     	"html.large.typography.lines li " +
		"{ "+
		"line-height: 3ex; "+
		"max-width: "+typography_obj.outputs.line_length_em_max+"em; "+
		"max-width: "+typography_obj.outputs.line_length_em_max+"rem; "+
		"margin-top: 1ex; "+
		"margin-bottom: 1ex; "+
		"margin-left: auto; "+
		"margin-right: auto; "+
		"} " + 
		"html .typography.lines, "+
	     	"html.typography.lines blockquote, " +
	     	"html.typography.lines p, " +
	     	"html.typography.lines td, " +
	     	"html.typography.lines li " +
		"{ "+
		"line-height: 3ex; "+
		"max-width: "+typography_obj.outputs.line_length_em_avg+"em; "+
		"max-width: "+typography_obj.outputs.line_length_em_avg+"rem; "+
		"margin-top: 1ex; "+
		"margin-bottom: 1ex; "+
		"margin-left: auto; "+
		"margin-right: auto; "+
		"} ";

		var typography_header_margins = "html.small.typography.lines h1, "+
	     	"html.small.typography.lines h2, "+
	     	"html.small.typography.lines h3, "+
	     	"html.small.typography.lines h4, "+
	     	"html.small.typography.lines h5, "+
	     	"html.small.typography.lines h6, "+
	     	"html.small.typography.lines ol, "+
	     	"html.small.typography.lines ul "+
		"{ "+
		"max-width: "+typography_obj.outputs.line_length_em_min+"rem; "+
		"margin: 1ex auto .25ex; "+
		"} " + 
		"html.large.typography.lines h1, "+
	     	"html.large.typography.lines h2, "+
	     	"html.large.typography.lines h3, "+
	     	"html.large.typography.lines h4, "+
	     	"html.large.typography.lines h5, "+
	     	"html.large.typography.lines h6, "+
	     	"html.large.typography.lines ol, "+
	     	"html.large.typography.lines ul "+
		"{ "+
		"max-width: "+typography_obj.outputs.line_length_em_max+"rem; "+
		"margin: 1ex auto .25ex; "+
		"} " + 
		"html.typography.lines h1, "+
	     	"html.typography.lines h2, "+
	     	"html.typography.lines h3, "+
	     	"html.typography.lines h4, "+
	     	"html.typography.lines h5, "+
	     	"html.typography.lines h6, "+
	     	"html.typography.lines ol, "+
	     	"html.typography.lines ul "+
		"{ "+
		"max-width: "+typography_obj.outputs.line_length_em_avg+"rem; "+
		"margin: 1ex auto .25ex; "+
		"} ";

		if (typography_css.styleSheet) {
			typography_css.styleSheet.cssText = typography_body_size + typography_copy_margins + typography_header_margins;
		} else {
			typography_css.appendChild(document.createTextNode(typography_body_size));
			typography_css.appendChild(document.createTextNode(typography_copy_margins));
			typography_css.appendChild(document.createTextNode(typography_header_margins));
		}

		document.getElementsByTagName("head")[0].appendChild(typography_css);

	};

	this.orphans_control = function() {

	    /* [Locate elements for typesetter] */
	    var typesetter_elements = document.querySelectorAll("html .typography.orphans, "+
	     	"html.typography.orphans h1, "+
	     	"html.typography.orphans h2, "+
	     	"html.typography.orphans h3, "+
	     	"html.typography.orphans h4, "+
	     	"html.typography.orphans h5, "+
	     	"html.typography.orphans h6, "+
	     	"html.typography.orphans p," +
	     	"html.typography.orphans td," +
	     	"html.typography.orphans li");

	    var punctuation = new Array("!", ".", ",", "?", ":", ";");

	    for (var i = 0; i < typesetter_elements.length; i++) {

			/* [Apply orphan control] */
	    	var line = typesetter_elements[i].innerHTML;
	    	var word_array = line.split(" ");
	    	var word_count = word_array.length;
	    	
	    	for (var ii = 0; ii < word_array.length - 2; ii++) { // Look at each word for punctuation
	    		
	    		var word = word_array[ii];
				var evaluate_punctuation = word.substring(word.length - 1, word.length);

	    		/*
	    		 * If punctuation is found, apply non-breaking spaces to the preceding and following words.
	    		 */
	    		
	    		if (ii > 0 && punctuation.indexOf(evaluate_punctuation) > 0) {
	    			var preceding_words =  new Array(word_array[ii - 1], word);
	    			var preceding_words_join = preceding_words.join("&nbsp;");
	    			word_array.splice(ii - 1, 2, preceding_words_join);
	    			ii--;

	    			var following_words =  new Array(word_array[ii + 1], word_array[ii + 2]);
	    			var following_words_join = following_words.join("&nbsp;");
	    			word_array.splice(ii + 1, 2, following_words_join);

	    		}
	    		
	    	}

	    	var last_words =  word_array.splice(-2);
	    	var last_words_join = last_words.join("&nbsp;");
			word_array.push(last_words_join);

			line = word_array.join(" ");
			typesetter_elements[i].innerHTML = line;

		}

	};

	this.quotes_control = function() {

	    /* [Locate elements for typesetter] */
	    var typesetter_elements = document.querySelectorAll("html .typography.quotes, "+
	     	"html.typography.quotes h1, "+
	     	"html.typography.quotes h2, "+
	     	"html.typography.quotes h3, "+
	     	"html.typography.quotes h4, "+
	     	"html.typography.quotes h5, "+
	     	"html.typography.quotes h6, "+
	     	"html.typography.quotes p," +
	     	"html.typography.quotes td," +
	     	"html.typography.quotes li");

	    var punctuation = new Array("!", ".", ",", "?", ":", ";"); // Need to scan for quotes placed before punctuation

	    for (var i = 0; i < typesetter_elements.length; i++) {

			/* [Apply orphan control] */
	    	var line = typesetter_elements[i].innerHTML;
	    	var word_array = line.split(" ");
	    	var word_count = word_array.length;
	    	var open_double_quote = false;
    		var open_single_quote = false;

	    	for (var ii = 0; ii < word_array.length; ii++) { // Look at each word for punctuation
	    		
	    		var word = word_array[ii];

	    		var has_punctuation = "";
	    		var evaluate_punctuation = word.substring(word.length - 1, word.length);
	    		var evaluate_open_quotes = word.substring(0,1);

				// The process of evaluating opening and closing quotes needs to be re-evaluated.

				/* [If punctuation is found] */
	    		if (ii > 0 && punctuation.indexOf(evaluate_punctuation) > 0) {
	    			var evaluate_close_quotes = word.substring(word.length - 2, word.length - 1);
	    			has_punctuation = evaluate_punctuation;
	    		} else {
	    			var evaluate_close_quotes = word.substring(word.length - 1, word.length);
	    		}
	    		
				/* [Double Quotes] */
				if (evaluate_open_quotes == '"') { 
	    			open_double_quote = true;
	    			word = "&ldquo;" + word.substring(1, word.length);
	    			word_array[ii] = word;
	    		}

				if (evaluate_close_quotes == '"' && open_double_quote == true) {
					if (has_punctuation.length > 0) {
						word = word.substring(0, word.length - 2) + "&rdquo;" + has_punctuation;
					} else {
						word = word.substring(0, word.length - 1) + "&rdquo;";
					}
					word_array[ii] = word;
					open_double_quote = false;
				}

				/* [Single Quotes] */
				if (evaluate_open_quotes == "'") { 
	    			open_single_quote = true;
	    			word = "&lsquo;" + word.substring(1, word.length);
	    			word_array[ii] = word;
	    		}
				
				if (evaluate_close_quotes == "'" && open_single_quote == true) {
					if (has_punctuation.length > 0) {
						word = word.substring(0, word.length - 2) + "&rsquo;" + has_punctuation;
					} else {
						word = word.substring(0, word.length - 1) + "&rsquo;";
					}
					word_array[ii] = word;
					open_single_quote = false;
				}

				/* [Apostrophes] */
				var evaluate_apostrophes = word.substring(1, word.length - 1);
				if (evaluate_apostrophes.indexOf("'")) {
					word = word.replace("'","&rsquo;");
					word_array[ii] = word;
				}

    		}

			line = word_array.join(" ");
			typesetter_elements[i].innerHTML = line;

		}

	};

};