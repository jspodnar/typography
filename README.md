What Does The Typography Script Do?
===================================
The Typography script is a JavaScript object that automatically determines ideal font size, leading, and line length to maximize readibility. It applies a default configuration to the <html> element, and can be overwritten as required. It also applies orphan control, and has a "smart quotes" feature.

How does it work?
=================
- It determines the best font size based on your screen resolution and ideal reading distance.
- Then, it calculates ideal line length, leading, and paragraph spacing of text elements based on the ideal font size.
- Finally, it applies non-breaking spaces to words that shouldn't be broken up, such as immediately before and after punctuation, and before a sentence ends.

How do I use it?
================
Apply the "typography" class to the <html> tag to apply the ideal font size to your page. This class can also be applied to individual copy tags (h1-h6, p, td, li) before applying "lines", "orphans", and "quotes" classes.

"lines", "orphans", and "quotes" control classes can be added either to the <html> tag for universal application, or to any other element that you want to apply these controls to.

Enjoy!


Changelog
=========
`Ver. 3.0`
- Initial release to GitHub

`Ver. 4.0`
- No longer requires JQuery. Added orphan control.
- Uses class properties instead of inline styles.
- Can be applied globally as a body class, or as individual element classes.

`Ver. 4.1`
- Added "smart quotes" control.

`Ver. 4.2`
- Fixed error with "smart quotes" control not correctly applying quotes.

`Ver. 4.3`
- Updated method for establishing minimum font size for reading on a tablet or handheld device.

`Ver 5.0`
- "Cottage Getaway" version.
- Added "small", "medium", and "large" settings for recommended smallest, average, and largest font sizes.