Jonas: Since we're building a real-world website,

we need to think about responsive web design principles

from the very beginning,

even if we initially build and test for big screens.

So these principles are really ingrained

in the entire development process.

And so therefore,

before we actually start building the site,

let's quickly learn what responsive design is all about.

So responsive design, or responsive web design

as it's been more traditionally called,

is essentially a technique that we can use

to make a webpage adjust its layout and its visual style

to any possible screen size.

And with screen size, we don't just mean the entire screen

of the device that is being used to consume the page,

but it might also just be the window

or the viewport size of the browser.

So in practice, this means that responsive web design

makes websites usable on all devices.

So no matter if you're using desktop computers,

tablets, or a mobile phone,

a responsive website will be easily consumable

on all of these devices.

Now, it's important to understand

that responsive web design is not a separate technology.

So instead, it is really just a set of best practices

and of techniques that we use in our regular CSS, okay?

And speaking of this set of best practices and techniques,

let's now actually learn about them.

So there are essentially four big ingredients

to responsive designs,

and those are fluid layouts, responsive units,

flexible images, and media queries.

Now, there might be more,

and they might be classified differently,

but these are really the big and important ones

that you need to know.

And so let's start with fluid layouts,

which basically allow the webpage

to adapt to the current viewport width.

And this is a behavior

that we have already seen in practice a couple of times,

especially when we used flexbox and CSS Grid,

which are fluid by default, all right?

And we can very easily create fluid layouts

simply by using the percentage units

for all elements that should adapt to the viewport.

So using percentages instead of pixels

for all the elements that are usually part of any layout.

So things that should really adapt to the viewport

should always use percentages and not pixels.

Also, we should always use the max-width property

instead of simply width,

and we will learn a little bit about how this one works

in the next lecture.

Next up, there are responsive units,

which basically just means that we should use the rem unit

instead of pixel for most of the length that are in our CSS.

And using rems instead of pixels

will make it really, really easy for us

to basically scale the entire page up or down automatically.

And if that sounds a little bit strange,

I can show it to you in the next lecture as well.

Now here, one helpful trick

that I will also show you how to implement

in the next lecture is to set 1 rem to 10 pixels

because that makes it very easy for us

to then calculate this length.

And again, more about that in the next video.

The next ingredient are flexible and fluid images.

And this is a separate and important ingredient

because by default,

images behave different than text content

because they do not scale automatically

as we change the viewport.

Therefore, we need to fix that.

So we need to ensure that they do also adapt nicely

to whatever viewport the page is viewed at.

And usually, we simply make images flexible

by defining their dimensions in percentages

and not using pixels,

and also sometimes by using the max-width property

instead of width.

So this one sounds trivial and not important,

but actually, flexible images

is yet another important ingredient

of responsive web design.

And now finally, media queries

is what brings all the other ingredients together

and really brings responsive sites to life.

So without media queries,

responsive web design would not work at all,

and that is because media queries allow us to change styles

on certain viewport width, which we call breakpoints.

So basically, media queries allow developers

to create different versions of a website

for different types of devices

because different types of devices have a different width.

Now, just keep in mind that media queries alone

are completely useless.

We really need to start creating a fluid layout

from the very beginning, and the same is true

for responsive units and flexible images.

And in fact, we usually write media queries

only at the end of building a certain page

or a certain component.

And so that's why we will use fluid layouts

and responsive units and flexible images in this section.

But then media queries,

we will only use them in the next section

to really make this page responsive, all right?

Now, just as a side note,

of course, I'm not showing you all of this to scare you

or to make you memorize all this information.

So this slide is more like a reference for you in the future

and also for us to guide us through this project, all right?

Now finally, we also need to talk

about the two opposite strategies

of building responsive sites with CSS.

So the first one is the desktop-first approach

in which we optimize our interfaces for large screens.

And so therefore, we start writing CSS code

for these large screens into our main CSS file.

Then later, when we actually want

to make the website responsive,

we simply write media queries

in order to shrink the design to fit to smaller screens.

This is the more traditional way of doing things,

and it's also the easier way to learn, in my opinion.

And so therefore, that's the reason why

we will actually use the desktop-first approach

in this project.

Now, on the other hand, in mobile-first,

we start writing CSS code for smaller screens

in order to basically optimize our layout and our website

for mobile small screens.

Then from there, we can move up

to larger screens, of course,

and, again, using media queries.

So basically, it is the complete opposite

of desktop-first, right?

Now, the idea that's behind this strategy of mobile-first

is that we, as the designer,

really have to think about the mobile experience

for our users.

And basically, we can do that

by reducing our website to the absolute essentials

and stripping away everything

that is not entirely necessary.

And since we live in a mobile world now,

this has actually become the more modern way

of building websites these days.

But again, doing desktop-first works just as fine, I think,

and it is also way easier for me to show you as a beginner

how web development works,

so basically how CSS and HTML works

with really seeing the results in a large screen.

Okay, and that's it.

That's basically a short introduction

into responsive web design.

And so now in the next lecture, we will quickly learn

about two of the ingredients a little bit better in CSS.

So we're gonna learn how the rem unit works

and also the max-width property.

gather key details from the transcripts pls but rewrite the transcript in your own words



**Title: Introduction to Responsive Web Design**

**Overview:**

Jonas introduces the concept of responsive web design, emphasizing its importance in creating websites that function well across all device types, whether it's a desktop, tablet, or mobile phone. He stresses that responsive design is not a separate technology but a set of best practices integrated into CSS development.

**Key Components of Responsive Web Design:**

1. **Fluid Layouts:** 
   - Fluid layouts allow web pages to adjust according to the viewport width. Techniques like flexbox and CSS Grid are inherently fluid and can be enhanced by using percentages instead of fixed pixel units for layout elements. Additionally, employing the max-width property instead of just width helps in achieving fluidity.

2. **Responsive Units:** 
   - The use of rem units over pixels is recommended for most measurements in CSS. Setting 1 rem to 10 pixels simplifies calculations and helps in scaling pages efficiently.

3. **Flexible Images:** 
   - Unlike text, images do not automatically scale with viewport changes. To make images flexible, define their dimensions using percentages and utilize the max-width property.

4. **Media Queries:** 
   - Media queries are crucial for implementing responsive designs as they enable style changes based on different viewport widths (breakpoints). They are typically employed after establishing fluid layouts and responsive units.

**Design Strategies:**

- **Desktop-First Approach:** 
  - This traditional method involves optimizing designs for larger screens first, then using media queries to adapt them for smaller screens. It's simpler for beginners and will be used in Jonas's project demonstration.

- **Mobile-First Approach:** 
  - This modern strategy focuses on designing for small screens initially, then expanding upwards using media queries. It encourages designers to prioritize essential content for mobile users.

**Conclusion:**

Jonas assures that while this information might seem overwhelming initially, it serves as a reference guide throughout the project. In the following lectures, he plans to delve deeper into specific CSS properties like rem units and max-width to further enhance understanding of responsive web design basics.
