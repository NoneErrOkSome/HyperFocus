Instructor: All right, so now that steps one,

two and three are completed,

it's time to finally

start with step number four.

Which is going to

be the actual design

and development phase.

And so in this lecture,

we are going to do some quick setup

in order to be able to start working

on the actual website very soon.

So back in VS code.

As always,

we need to start by creating our files

so index.html,

and for some reason it created it inside

of the index folder,

but we want it outside.

Okay,

so if we now close this

then the index.html is clearly outside

and then we also want

uh style

.CSS

And for some reason

it keeps creating them inside.

But we can easily fix that.

Right.

now here

we will once again scaffold

or html,

but

of course if you want

to practice a little bit more

you can also write it by hand,

but I will just

use exclamation mark

and then enter like this.

And then starting with the title here,

Omnifood

for now

a little bit later we

might add something there

but for now,

let's call it just Omnifood.

And then I also want

to connect the style.CSS file.

So remember that it's link.

Then here we need to specify

this rel property

uh set it to style

sheet,

and then the actual path.

So that's the href.

And actually I want to

put this style here

in a separate CSS folder this time.

So we're gonna have multiple CSS files

and multiple image files.

And so I want to create

a folder for each of them.

Okay.

So actually let's take everything out

of the content folder and then delete it

because here we already

have the image folder

that we will want to be using.

So let's take that out

and why not the content as well.

And then this folder is empty

and so we no longer need that actually.

All right,

so we have or image folder

as we always had.

And then let's create

a new folder here called

CSS.

And later we will

then also have another folder

for JavaScript,

but that will be a lot later now.

Okay.

But anyway

now here we need to specify the path

to that file as always.

And so that is at CSS

/

style.css

>

Give a first save,

and that formats

uh the HTML here as always.

And then here,

let's just add

the H one element.

And here we can immediately grab

the content from here.

Why not?

So the headline of Omnifood is this one.

so let's actually use that right away.

So,

okay,

and so for now

that's actually enough for the html.

Let's just make sure

that it works

by going live right away.

Now that opened it

in a wrong browser for me

but I can also manually do it.

So 1 27 0.0 0.0 0

.1,

and then it is port 5, 5 0, 0,

I think.

And so here we go.

So that is our HTML right there.

And now let's go actually to our CSS.

And here as always

I'm going to start

with the global reset.

So selecting everything

and then setting padding

and margin

to zero

in order to override the default styles

of all browsers.

And then also activating

the border box setting

in our box model.

Okay,

so that is our global reset as always

and just to see if the CSS

is correctly connected.

Now all the paddings

and margins should begun here,

and indeed they are.

And so now let's also

start adding some simple styles

to the

body.

And I will start by setting

the font family simply to Sans Serif.

That's because

for now I don't want to choose

any specific type phase yet.

I think it's best that

we first build a little bit

of the page at least

before we can figure

out which type phase is the best fit

for our design and

for our website personality.

Then here,

I also like to reset the line height

on the entire page to one

and set the front weight to 400.

And finally,

let's set a text color

to

5,

5, 5.

So this is a great color

that I like to use a lot.

So basically one

of those colors

which have only three numbers,

so like 3 3 3

or 5 5 5,

which is remember the same as this,

Right.

So I find these quite easy to work with.

And so usually I reach

for one of them as my base gray color.

Okay.

Let's just check it out here.

And indeed,

our CSS is already working.

And so this is basically

our initial CSS setup here

uh, in the code.

So as I said, that's the code.

And now let's think a little bit

about the design.

So basically taking our very

first design decisions here

and setting up some

small design systems as well.

So here I will add a big comment block.

And then in there

I will basically write all the

design settings that we want

for our overall design here.

And let's start with the typography.

So typography

system.

Now here

I want to use those font sizes

that we have been using

in the previous section as well.

So let's actually open

uh

one of the files from that.

So just to copy that.

So it is on my desktop then here

in uh components.

And then let's just get

the very first one.

And so here we have

these two systems

so just copy them and paste them here.

Spacing that's for later.

So this is for the font sizes in pixels,

Okay.

But then the spacing system comes a bit later

because for typography

we can actually define some more

basically defaults here.

So we can also specify

default font weights

and also

default line heights.

So not really defaults, but more

of commonly used settings that we use.

So I like to do this here.

So specifying kind of a design system so

that then whenever I need something,

I just have to go here

to the top of my CSS file and then reach it from there.

And so that will help us a lot

in maintaining a consistent design across the entire page.

So for example, I can say

that the default line eight is one

which is what we set here.

And then as we keep growing the page

we will then keep adding

more and more here.

Okay?

So remove that

just add a dash here

just to make it a bit more visible.

And of course here to.

Okay,

so typography is our first design ingredient.

Remember that.

And so let's now go through all of them here.

So the second one remember is colors.

And we already have our primary color.

So that's here in the content,

right?

Okay.

And then remember,

we also need to generate some tints

and some shades,

and we might also need some X and colors.

So again,

all of that can be found

in the web design lecture on colors.

So tints,

which is basically

a darker versions and shades

which are lighter versions

or maybe it's the other way around,

I never know.

Then we will also

at some point define some accents

and of course,

uh

or grace.

And the grace,

we already have at least one of them.

So this five, five,

but over time

we will keep adding more of them.

So let's just add some dash here again.

Okay.

And again, we will add this here over time.

So I'm not yet going to

generate all the possible tints

that I might need and all

the possible shades

because

well

I might not need them then

and so I will simply generate them as we go.

Okay?

So just in order to save some time.

And uh

the same of course

about the accents and the gray colors.

The next design ingredient is images,

but for that

we cannot really set up any system.

So there's no values

to define for images.

However,

I can show you where I actually got

all of these images here.

So remember there is all

of these different images.

So like these customers,

these ones here in the gallery

and well, really a ton of images.

And of course, I needed to get them from somewhere.

And my main source that I already mentioned also

before is unsplash

.com.

And as always,

the link is on my resources page.

And so then it's of course very easy.

All you have to do is, for example

to search for

food.

Right.

And then uh,

whatever you need

you can just click here

on this download arrow

and this will then

immediately download the image

and you can then use it

for free without any

restrictions wherever you want.

So I think this one here is actually

on the gallery or something.

And

you'll

see many of these images here,

actually,

on our webpage.

While the restaurant

does not really exist.

But again, there is really a ton

of high quality images that

are really, really nice.

So this one here, remember

was actually the background image

for the header that

we built in the last section.

And it is also

very important in this project

because here we have

this hero image that I created.

So it's made out of these three images

and one of them is again

this beautiful image here of

this women eating some food.

Okay? And so yeah,

this is how I got these images.

Then as for the customers,

there is a very nice

page

or website,

which is called UI faces.

So this one here and here,

you can download all

of these faces basically

completely for free.

And just as the images from Unsplash

you can just use them wherever you want

and free of charge, of course.

So that's where I got those.

And I think that's it,

these other ones.

So these app screens here

I actually designed them

completely on my own.

Basically based on the design

of our site here.

Next up there would be icons,

but again

there's not really anything

to specify there.

So let's go to the next one,

which is shadows.

So here we might

at some point define

some rules for shadows

or basically some standard

that we want to repeat over

and over again because just

with all the other design ingredients,

it looks a lot better

if we stay consistent

throughout the design

and don't use, for example,

two very similar shadows

but which are not exactly the same.

So for now, there's nothing here

but a bit later there might.

Then the same for border radius

which is the next ingredient.

So here we will also a little bit

later specify something.

And finally

or less design ingredient

that matters here is white space.

And so here we now have

this spacing system

so that system that we are going to use.

And while I guess that's

actually it.

So that's the only thing

we can specify here,

for white space.

And so I think that's it, for now.

And again, we will keep filling

this up as we go.

Here, we can actually also say

that the default

that we already set before is 400

and then we will again keep adding more.

All right.

Very nice.

So with this,

we have basically everything

in place to finally start coding

and start building this project.

Now,

just one more thing

that we need to learn

about before is

a little bit about responsive design.

That's because the

responsive web design principles

need to be applied from the very,

very beginning of a project.

And up until this point,

we never cared about this

but now we are building

a real world project.

And so then of course,

we need to make it responsive

from the very beginning.

Make it adapt to all screen sizes.

And so therefore

let's now quickly learn

the basics of responsive web design.

capture the key details from the transcripts




The transcript provides a detailed walkthrough of the initial setup for designing and developing a website using HTML and CSS. Here are the key details captured:

1. **Project Setup:**
   - The instructor is setting up a project in Visual Studio Code (VS Code).
   - Files created include `index.html` and `style.css`, which are organized into respective folders such as `CSS` for styles and potentially others for images and JavaScript.

2. **HTML Structure:**
   - An HTML scaffold is created using the exclamation mark shortcut in VS Code.
   - The title of the webpage is set to "Omnifood."
   - A link to the CSS file is established within the HTML using a `<link>` tag with `rel="stylesheet"`.

3. **CSS Setup:**
   - A global reset is applied to remove default browser styling by setting padding and margin to zero.
   - The box-sizing property is set to `border-box`.
   - Basic styling is applied to the body, including setting a default font family (`Sans Serif`), line height, font weight, and text color (`#555`).

4. **Design System:**
   - The instructor emphasizes creating a design system for consistency across the project.
   - Typography settings like font sizes, weights, and line heights are defined.
   - Color schemes are discussed, including primary colors, tints, shades, accent colors, and grays.
   
5. **Image Resources:**
   - Images are sourced from Unsplash.com for various elements like backgrounds and galleries.
   - UI Faces provides profile images used on the site.

6. **Design Elements Not Yet Implemented:**
   - Shadows, border-radius specifications, icons, and spacing systems will be defined later as needed.

7. **Responsive Design Introduction:**
   - Responsive web design principles will be addressed before starting detailed coding to ensure adaptability across different screen sizes.

This setup phase prepares students for further development by organizing project files systematically, establishing basic styling conventions, sourcing necessary assets, and planning for responsive design from the outset.