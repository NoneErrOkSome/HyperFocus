# tactiq.io free youtube transcript
# 5 CSS Tips & Tricks for better Responsive Web Design
# https://www.youtube.com/watch/2IV08sP9m3U

00:00:00.080 today is all about responsive web design
00:00:02.000 if you want your websites to be
00:00:03.120 successful you have to make it look good
00:00:04.720 on every device but the problem is
00:00:06.560 responsive web design is not one concept
00:00:08.639 you need to learn there's flexbox great
00:00:10.800 media queries and even if you learned
00:00:12.480 all of that that still might not be
00:00:14.360 enough so this video is going to be
00:00:16.160 different I'm going to show you five
00:00:18.039 extremely important responsive
00:00:19.520 techniques that interestingly have
00:00:21.240 nothing to do with flexbox or grid but
00:00:23.039 they are going to make all the
00:00:24.160 difference in how you approach coding in
00:00:25.720 CSS tip number one relative padding the
00:00:28.880 problem with padding is that you of need
00:00:30.240 to specify two different paddings the
00:00:32.520 padding that fits on your desktop screen
00:00:34.160 is way too big for a Mobile screen you
00:00:36.079 see this container here has a padding of
00:00:37.960 5m which works well for my desktop
00:00:39.879 screen but as you can see on a mobile
00:00:41.680 screen that is a bit too much many
00:00:43.719 people would solve this with a media
00:00:45.079 query so you have one pading for your
00:00:46.480 desktop and then at a certain break
00:00:48.199 point you change it to something else
00:00:49.879 which is totally fine but here's a much
00:00:51.800 cooler way instead of providing only one
00:00:54.079 value for our pading we apply two
00:00:56.039 different values a fixed value for
00:00:57.960 desktop devices and a responsive unit
00:01:00.239 for all the other sizes you can do this
00:01:02.359 using the Min function in CSS the Min
00:01:04.720 function can receive multiple arguments
00:01:06.799 you provide CSS values with different
00:01:08.680 units and the function will calculate
00:01:10.560 which of these values is the smallest
00:01:12.159 one and apply that to the petting
00:01:13.799 property so here's how it works we can
00:01:16.320 apply a petting of 5 em for example
00:01:18.680 which is a fixed unit then with a comma
00:01:20.840 we provide a second value for example 8%
00:01:24.079 this is now a relative unit now this
00:01:26.119 function will calculate which of these
00:01:27.680 values is smaller on a desktop screen
00:01:29.920 which is pretty wide 5pm is going to be
00:01:32.360 smaller than 8% of the parent element in
00:01:35.040 this case the parent element is the body
00:01:36.720 so it's 8% of the screen but if I resize
00:01:39.439 the window then we can see that on a
00:01:41.040 smaller device there's a point where 8%
00:01:43.360 of the screen is going to be smaller
00:01:45.360 than 5m so the Min function switches and
00:01:48.320 chooses 8% for the padding and since 8%
00:01:51.399 is a relative unit it will get smaller
00:01:53.320 and smaller as the screen gets smaller
00:01:55.520 so this way we have a padding that looks
00:01:57.039 great on a desktop screen and a Mobile
00:01:58.880 screen using only one declaration
00:02:00.799 without a media query tip number two
00:02:03.399 responsive font sizes font sizes should
00:02:05.719 be treated very carefully unfortunately
00:02:08.038 none of the CSS units we use for font
00:02:10.000 sizes are responsive on their own so we
00:02:12.319 have to come up with a modern CSS
00:02:13.760 solution for it first recommendation is
00:02:16.000 don't use pixels and use REM instead REM
00:02:19.000 is a relative unit that scales relative
00:02:21.120 to the root font size which is usually
00:02:23.360 16 pixels per default for example if you
00:02:26.120 apply a font size of 1.5 gam that is 16
00:02:29.879 pix * 1.5 which equals 24 pixels but
00:02:34.200 what do we do with big headings on small
00:02:36.239 screens especially when we want to avoid
00:02:38.640 line breaks that would take tons of
00:02:40.480 media queries for all the different
00:02:41.879 screen sizes where you have to apply a
00:02:43.480 different font size to make it look good
00:02:45.560 here's an idea to approach this but be
00:02:47.360 careful you can use the viewport unit
00:02:49.519 viewport width for example 10 VW skates
00:02:53.280 the font size to 10% of the viewport
00:02:55.480 width this works great for scaling
00:02:57.480 headings relative to the screen size I I
00:02:59.879 chose 10 VW because it works great for
00:03:01.920 this heading but you will need to adjust
00:03:03.640 this for your own heading as you can see
00:03:05.879 when I resize the window The Heading
00:03:07.680 will scale relative to the width of the
00:03:09.400 screen it will always fit perfectly
00:03:11.519 without a line break however there are
00:03:13.680 three things you need to consider first
00:03:15.560 of all big screens on an ultra wide
00:03:17.720 monitor like my 34in display this
00:03:20.280 heading will be way too big because 10%
00:03:22.680 of an ultrawide monitor is still a lot
00:03:25.000 so we need a maximum size the second
00:03:27.480 thing is small screens on a smartphone
00:03:29.480 screen this heading can get way too
00:03:31.159 small because 10% of a smartphone screen
00:03:33.560 is really really small and remember this
00:03:35.680 should be a heading so it definitely
00:03:37.159 should be bigger than the rest of the
00:03:38.720 text so we also need a minimum size the
00:03:42.040 best solution here is to use the clamp
00:03:44.000 function with clamp you can provide
00:03:46.439 three values a minimum value a preferred
00:03:49.599 value and a maximum value so now the
00:03:52.400 clamp function will always use 10
00:03:54.159 viewport width as long as our minimum or
00:03:56.560 maximum value is not reached this
00:03:58.760 ensures that our heading works great on
00:04:00.439 every screen because it cannot be bigger
00:04:02.560 than 5 Ram but it also can't be smaller
00:04:05.239 than 1.8 Ram so in that case it will
00:04:07.680 create a line break if it gets too small
00:04:09.680 but I think that's fine but there's
00:04:11.439 still one more problem when clamp
00:04:13.840 chooses to use 10 VW for the font size
00:04:16.600 then this size does not zoom with the
00:04:18.880 rest of the page so if we zoom in and
00:04:21.560 out using the control mouse wheel we
00:04:23.639 won't see any changes the rest of the
00:04:26.000 page can zoom but not this heading
00:04:28.160 because this unit VW is based only on
00:04:30.919 the viewport and nothing else other
00:04:33.080 units like Ram or pixels for example
00:04:35.160 they can be zoomed in so to fix this we
00:04:37.759 have to combine VW with a zoomable unit
00:04:40.479 like RAM for example for that I use the
00:04:43.000 C function in CSS I calculate 7 vw+ 1
00:04:47.800 Ram this way the font size scates with
00:04:50.479 the viewport and also responds to user
00:04:52.800 zooming it's the best of both world but
00:04:55.400 you will have to figure this out for
00:04:56.560 your own heading tip number three
00:04:58.440 responsive images by default HTML images
00:05:01.240 are not responsive if I resize the
00:05:03.080 browser window you will see that they
00:05:04.520 leave the screen and here you might want
00:05:06.639 to use dmax with property and set this
00:05:08.639 to 100% so that the image can never be
00:05:11.160 bigger than 100% of the screen size but
00:05:13.720 you will see this will cause the image
00:05:15.400 to stretch or distort that is because of
00:05:17.840 the height and width attribute in HTML
00:05:20.039 for SEO reasons it is recommended to
00:05:22.039 define the height and width in HTML you
00:05:24.080 do this to reserve space for the image
00:05:25.919 and reduce cumulative layout shifts CLS
00:05:28.759 CLS is when you image content shifts
00:05:30.759 around as the image or other resources
00:05:32.560 load so since you need this in HTML you
00:05:35.120 have to make the image responsive in CSS
00:05:37.440 first you still need the max width of
00:05:39.360 100% but you will also need height Auto
00:05:42.280 this way the image will resize on
00:05:43.880 smaller devices but what if you have to
00:05:46.039 handle multiple images and they all have
00:05:47.800 different dimensions in these cases it's
00:05:50.080 often better to maintain a consistent
00:05:51.840 design by forcing the images to have the
00:05:53.800 same dimensions for that I use the
00:05:56.120 aspect ratio property for example an
00:05:58.720 aspect ratio of 1 by one is used to have
00:06:01.440 a square use the aspect ratio of 16 by 9
00:06:04.600 for a smartphone in landscape mode and
00:06:06.880 vice versa you can use the aspect ratio
00:06:08.880 9x 16 for a smartphone and portrait but
00:06:12.080 the moment you change the aspect ratio
00:06:13.720 property the image will look stretched
00:06:15.840 this is a weird default setting in CSS
00:06:18.199 when that happens you have to use the
00:06:19.759 object fit property object fit contain
00:06:22.680 ensures that the entire image fits
00:06:24.400 within the spect ratio but it might
00:06:26.160 leave empty spaces I can show you this
00:06:28.199 by applying a red background so the red
00:06:30.639 area is the aspect ratio we actually
00:06:32.440 want the image to have but if we use
00:06:34.639 object fit contain then we want to
00:06:36.680 contain the entire image so we end up
00:06:39.319 with these empty spaces but if we use
00:06:41.919 object fit cover we get a different
00:06:44.160 result here it tries to cover the entire
00:06:46.520 aspect ratio so there are no empty
00:06:48.520 spaces but obviously to achieve this
00:06:50.840 effect it will automatically zoom in a
00:06:52.599 bit and therefore cut off parts of the
00:06:54.560 image but still I think this is a great
00:06:57.039 solution to have consistent image
00:06:58.479 dimensions now let's move on to tip
00:07:00.520 number four which will solve a very
00:07:02.080 common problem that I see on so many
00:07:03.759 different websites this tip is about the
00:07:05.800 viewport height unit because this unit
00:07:07.879 is sort of problematic we can use a
00:07:10.120 height of 100 viewport height to make an
00:07:12.240 element span the entire height of the
00:07:14.120 viewport that means it will cover the
00:07:16.120 entire screen especially if we have no
00:07:18.479 margin and padding interfering and we
00:07:20.280 only use box sizing border box then we
00:07:22.680 can see how this will perfectly cover
00:07:24.280 the size of the screen I'm using a thick
00:07:26.440 blue border to show you exactly where
00:07:28.240 the element is but but here's the thing
00:07:30.400 while this works great on a desktop
00:07:31.960 screen on a smartphone screen you will
00:07:33.800 see a problem here our element is
00:07:36.160 slightly bigger than one screen size
00:07:38.479 even though I specified 100 viewport
00:07:40.599 height and this is not good because I
00:07:42.440 have to scroll down and by the way you
00:07:44.479 can only see this problem when you test
00:07:46.199 it on a real smartphone in the browser
00:07:48.120 developer tools it will look fine this
00:07:50.280 problem happens because mobile browsers
00:07:52.039 reserve space for UI elements like the
00:07:54.080 address bar and this is not accounted
00:07:56.159 for in the 100 viewport height which is
00:07:58.400 why we have to scroll down to fix this
00:08:00.400 exact problem CSS introduced a newer
00:08:02.400 version of the viewport heide unit it is
00:08:04.240 called dvh if you use this unit then it
00:08:07.560 will work properly on smartphone screens
00:08:09.680 as you can see the blue border is
00:08:11.199 positioned perfectly at the bottom and
00:08:13.319 if you're worried about browser
00:08:14.360 compatibility you can always just write
00:08:16.199 both ways of doing it and the browser
00:08:17.960 will just ignore the one that doesn't
00:08:19.400 work tip number five this one is
00:08:21.840 technically an HTML tip when creating
00:08:23.919 responsive designs we often hide large
00:08:26.080 surface areas like knf bars or drop-
00:08:27.960 down areas on smaller screens we often
00:08:30.080 put them inside a hamburger menu to
00:08:31.919 toggle these menus with transitions you
00:08:33.799 cannot use display none since this
00:08:35.799 doesn't allow transitions while using
00:08:37.839 display none is totally fine many
00:08:39.760 developers like to go a different path
00:08:41.559 to make the transition work so instead
00:08:43.719 you might want to use the opacity
00:08:45.160 property to fade in and out the element
00:08:47.760 or use position absolute and other
00:08:49.680 properties to move the element off
00:08:51.240 screen because these properties will
00:08:53.200 work with a nice transition while these
00:08:55.200 techniques work they are not accessible
00:08:57.360 because hidden elements are still table
00:08:59.600 and remain in the accessibility tree so
00:09:02.120 what is the solution you can use the
00:09:03.800 inerd attribute in HTML the inerd
00:09:05.920 attribute removes the element from the
00:09:07.560 accessibility tree ensuring that the
00:09:09.519 user cannot accidentally interact with
00:09:11.399 the element in your JavaScript logic
00:09:13.399 make sure to add or remove the inert
00:09:15.320 attribute whenever you hide or show the
00:09:17.120 element this is a more advanced
00:09:19.000 technique and making a fully responsive
00:09:20.880 and accessible hamburger menu requires
00:09:22.800 additional logic which is why we
00:09:24.399 dedicated an entire video to it so if
00:09:26.800 you want to learn more about this then
00:09:28.519 watch this video right here there I
00:09:30.480 explain how to build a fully responsive
00:09:32.560 and accessible knf bar step by step my
00:09:34.760 name is Fabian and this was cording to
00:09:36.399 go I will see you in the next video


How many parts can you split to be able to cover all details?

 To effectively cover all details of a topic, it's helpful to break it down into several parts or sections. The exact number of parts will depend on the complexity and scope of the topic you're addressing. However, here are some general guidelines for splitting a topic into parts:

1. **Introduction**: 
   - Provide an overview of the topic.
   - Explain its significance or relevance.

2. **Background/Context**:
   - Offer any necessary background information.
   - Discuss the context in which the topic exists.

3. **Main Components/Aspects**:
   - Identify and explain the key components or aspects.
   - Each component can be a separate section if needed.

4. **Analysis/Discussion**:
   - Dive deeper into each component.
   - Include analysis, comparisons, or discussions as necessary.

5. **Challenges/Issues**:
   - Address any challenges, problems, or controversies related to the topic.

6. **Case Studies/Examples**:
   - Provide real-world examples or case studies to illustrate points.

7. **Solutions/Recommendations**:
   - Offer potential solutions or recommendations if applicable.

8. **Conclusion/Summary**:
   - Summarize the main points covered.
   - Reiterate any conclusions drawn from the discussion.

9. **References/Further Reading** (if applicable):
   - List sources for further reading or references used in research.

The number of parts you choose will depend on how detailed you want your coverage to be and how much information you have on each aspect of the topic. Adjust these sections as needed to fit your specific subject matter and objectives.


---


Explain part 4 in details pls based on the transcript that's given you. with htm/css code pls



Certainly! Part 4, which is about responsive web design techniques, focuses on the **Analysis/Discussion** of specific CSS tips that can enhance the responsiveness of web designs. This involves diving deeper into each tip and understanding how they work in practice.

### Tip 4: Viewport Height Unit (100vh vs dvh)
This part of the transcript addresses a common issue with using the `100vh` unit in CSS for responsive design, particularly on mobile devices.

#### Problem:
- Using `100vh` (100% viewport height) can cause issues on mobile devices because it doesn't account for browser UI elements like the address bar. This may result in content that slightly exceeds the visible screen area, causing unwanted scrolling.

#### Solution:
- The solution is to use the new `dvh` (dynamic viewport height) unit. This unit considers UI elements and adjusts accordingly to fit perfectly within the screen's visible area.

#### Example Code:

Here's an example of how you would set up an element to use both `vh` and `dvh`, ensuring compatibility across different browsers:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Viewport Height Example</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        .full-screen-element {
            /* Use dvh for dynamic viewport height */
            height: 100dvh;
            /* Fallback to vh if dvh is not supported */
            height: 100vh;
            background-color: lightblue;
            box-sizing: border-box;
            border: 5px solid blue; /* To visualize element boundaries */
        }
    </style>
</head>
<body>

<div class="full-screen-element">
    This div should cover the full visible screen height.
</div>

</body>
</html>
```

### Explanation:

1. **CSS Styling**:
   - The `.full-screen-element` class is applied with two `height` values:
     - `height: 100dvh;`: The preferred method for modern browsers that support this new unit.
     - `height: 100vh;`: A fallback for older browsers that do not support `dvh`.
   - The element uses a light blue background with a blue border to make

 sure it stands out on the page. The light blue background provides a subtle contrast that draws attention without being overpowering, while the blue border adds definition and clarity to the element. This combination is effective in highlighting important information or calls-to-action, ensuring that they catch the user's eye immediately upon landing on the page. 

In addition to its visual appeal, this use of color can evoke feelings of trust and calmness, which are often associated with shades of blue. This can be particularly beneficial for elements related to security features, customer testimonials, or any content that aims to reassure or build confidence in the user.

Furthermore, when designing web pages or digital interfaces, using consistent color schemes like this across different elements can help maintain a cohesive look and feel throughout the site. This not only enhances user experience by providing visual harmony but also reinforces brand identity if these colors align with your brand's palette.

Overall, employing a light blue background with a blue border for specific elements is an effective design strategy to ensure key information is noticed and appreciated by users.