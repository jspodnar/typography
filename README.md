What is TypeSet?
================

TypeSet is a JQuery plug-in that automatically typesets your page for ideal font size, leading, and line length. It's intent is to set base body copy configuration that maximizes readibility.

How does it do that?
====================
First: It determines your ideal font size using a calculation based on your screen resolution. It will assume you have situated your viewing device to fill approximately 30 degrees of your Field of View.

From there, it determines what an ideal Field of View is for 1&ndash;4 characters, and set the font size accordingly.

At the same time, it will also determine the default font size your device has set. If your font size is larger than the calculation TypeSet has determined, it will your your preference instead.

Once ideal font size is determined, ideal line length and height is then determined using font size as it's base.


How do I use it?
================

View the source of the included HTML page. Follow the example of including JQuery, and then selecting the elements you want to TypeSet. You can apply it to any element you want, but the idea is to use it on body copy elements such as "body" and "p" elements.

Example:
$("body, p, .typeset").typeset();
