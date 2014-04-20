What is Typography Script?
==========================

Typography is a JavaScript object that automatically sets a page ideal font size, leading, and line length. It also applies some orphan control. It’s intent is to set a base body copy configuration that maximizes readibility, that can be overwritten as required.

How does it do that?
====================
First, it determines the best font size for your screen resolution.

Then, it applies the ideal line length, leading, and paragraph spacing to your text elements based on the ideal font size.

Finally, it applies some orphan control by setting non-breaking spaces to words that shouldn’t be broken up, such as immediately before and after punctuation, and before a sentence ends


How do I use it?
================
Apply the "typography" class to the body tag to apply the ideal font size to your page. This class can also be applied to individual copy tags (h1-h6, p, td, li) before applying "lines", "orphans", and "quotes" classes.

"lines", "orphans", and "quotes" control classes can be added either to the body tag for universal application, to individual copy tags (h1-h6, p, td, li), or to any other element that you want to apply these controls to.

Enjoy!


Changelog
=========
`Ver. 3.0`
- Initial release to GitHub

`Ver. 4.0`
- No longer requires JQuery. Added orphan control.
- Uses class properties instead of inline styles.
- Can be applied globally as a body class, or as individual element classes.