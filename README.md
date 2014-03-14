What is Typography?
================

Typography is a JavaScript object that automatically adjusts your page for ideal font size, leading, and line length. It's intent is to set base body copy configuration that maximizes readibility.

How does it do that?
====================
First: It determines your ideal font size using a calculation based on your screen resolution. It will assume you have situated your viewing device to fill approximately 30 degrees of your Field of View.

From there, it determines what an ideal Field of View is for 1&ndash;4 characters, and set the font size accordingly.

At the same time, it will also determine the default font size your device has set. If your font size is larger than the calculation TypeSet has determined, it will your your preference instead.

Once ideal font size is determined, ideal line length and height is then determined using font size as it's base.


How do I use it?
================

View the source of the included HTML page. You can apply it to any element you want by using the .typography class, or apply it to the body element to adjust the whole page.


Changelog
=========
`Ver. 3.0` - Initial release to GitHub
`Ver. 4.0` - No longer requires JQuery. Added orphan control.