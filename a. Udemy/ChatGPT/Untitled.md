# tactiq.io free youtube transcript
# Learn CSS Grid - A 13 Minute Deep Dive
# https://www.youtube.com/watch/EiNiSFIPIQE

00:00:00.179 grids are two-dimensional I can place
00:00:02.399 things on it horizontally vertically and
00:00:04.860 both simultaneously actually I can
00:00:07.319 position items in any way I want even
00:00:09.480 stacked each number represents a line
00:00:12.420 these lines are row lines and these
00:00:14.340 lines are column lines our grid is made
00:00:16.740 up of cells each square is a cell and
00:00:19.560 finally our grid is also made up of
00:00:21.480 tracks these are the rows and these are
00:00:23.640 the columns
00:00:24.840 creating a grid starts in the HTML we
00:00:27.300 need a container and some items inside
00:00:28.980 of it the container is a div with the
00:00:31.679 class of container and the items are
00:00:33.540 divs with the class of item item 1 2 and
00:00:37.079 3. in our CSS we give the container the
00:00:40.379 display of grid
00:00:41.760 we see nothing happened but this is
00:00:43.800 because we need to tell grid how many
00:00:45.600 rows and columns we want to find to
00:00:48.120 Define rows and columns we use the grid
00:00:50.520 template rows and grid template columns
00:00:52.320 properties
00:00:53.520 they work by defining a track for each
00:00:55.800 value that you pass it if I give 100
00:00:58.260 pixels to the columns now I have one
00:01:00.360 column of 100 pixels if I add a second
00:01:02.760 value of 100 pixels now I have two
00:01:04.920 columns of 100 pixels and so on
00:01:07.619 I'll copy the values from my grid
00:01:09.479 template columns and paste them in the
00:01:11.040 grid template rows now I have a grid
00:01:13.260 with six rows and six columns and all of
00:01:15.299 the cells have the same size if I want
00:01:17.700 to position an item I can select it and
00:01:20.040 give it the grid row start grid row and
00:01:22.560 grid column start grid column and
00:01:25.140 properties
00:01:27.060 inside of each we'll go some line
00:01:28.799 numbers let's say I want item 1 to look
00:01:31.320 like this then that means item 1 starts
00:01:34.560 on line 1 of both the rows and the
00:01:36.479 columns we also see that item 1 ends on
00:01:39.299 the third line of the rows and ends on
00:01:41.280 the fifth line of the columns the other
00:01:43.860 two items were pushed because we aren't
00:01:45.780 explicitly defining their position
00:01:48.180 writing these four properties each time
00:01:50.340 you want to position something is a bit
00:01:52.320 much you can instead use these two
00:01:54.479 shorthand properties grid row and grid
00:01:57.180 column
00:01:58.140 like the other properties these also
00:02:00.540 take inline numbers as values the first
00:02:03.180 value is the starting line the second is
00:02:06.060 the ending line and they need to be
00:02:08.038 separated by a slash
00:02:10.500 I want my second item to span two rows
00:02:13.080 and columns I could give it a grid row
00:02:15.540 of one and three and a grid column of 5
00:02:18.060 and 7 and this works amazingly but an
00:02:20.819 easier way to achieve this is with this
00:02:22.680 pan keyword instead of the values that I
00:02:25.200 currently have I can just use this pan
00:02:27.300 keyword with the number of cells that I
00:02:29.160 want to span basically this pan keyword
00:02:31.620 is saying from wherever you currently
00:02:33.480 are span yourself this number of times
00:02:36.420 this is easy to read and is also why a
00:02:39.480 lot of people love this pan keyword but
00:02:41.700 the main downfall of using this is it
00:02:43.739 doesn't allow you to explicitly Define
00:02:45.599 your starting and ending position and as
00:02:48.780 a consequence our item will be pushed
00:02:50.760 away if I increase the size of a nearby
00:02:53.340 item like item 1. if you don't care
00:02:56.459 about anchoring an item into a specific
00:02:58.800 position then this pan keyword is okay
00:03:01.019 to use
00:03:02.280 using grid row and grid column is good
00:03:04.860 but there's an even faster property grid
00:03:07.560 area takes four values the first is the
00:03:09.840 starting line on the rows the second is
00:03:11.819 the starting line on the columns the
00:03:13.980 third is the ending line on the rows and
00:03:16.200 the fourth is the ending line on the
00:03:17.760 columns if I want item 3 to fill out the
00:03:20.879 rest of the available space I can give
00:03:22.500 it the grid area with the starting row
00:03:24.239 of three the ending column of 1 the
00:03:26.819 ending row of 7 and the ending column of
00:03:28.980 7. I can also use the negative numbers
00:03:31.920 that we see on our grid so instead of 7
00:03:35.400 and 7 I could say -1 and -1 and this
00:03:38.580 will work the same this one property
00:03:41.159 does the job of six properties so
00:03:43.379 personally that's the one that I always
00:03:44.879 use
00:03:46.019 before CSS grid layering an item on top
00:03:49.140 of another was painful you had to use an
00:03:51.599 absolute positioning and then try to
00:03:53.220 position the item using the top right
00:03:55.739 bottom and left properties but with CSS
00:03:58.680 grid you just position your item where
00:04:00.659 you want it to be and if that happens to
00:04:02.580 be on top of another item then that
00:04:04.620 creates layering super easy I want item
00:04:07.440 2 to be right here touching both the
00:04:09.720 item 1 and item 3. to do this I'll
00:04:12.480 remove the grid row and grid column and
00:04:14.640 use the grid area instead the row starts
00:04:17.880 at two the column starts at four the row
00:04:20.519 ends at four and the column ends at six
00:04:22.880 our item needs to be on top all we have
00:04:26.160 to do is give it a z index of one and
00:04:28.440 now item two is layered on top of both
00:04:30.540 item 1 and item 3.
00:04:32.820 now we see our items are filling out all
00:04:35.100 of the available space except maybe for
00:04:37.139 the top right corner I'll make item 1
00:04:39.540 span all of the columns just to fill
00:04:41.460 everything up
00:04:42.600 so now that all the cells are occupied
00:04:44.759 what would happen if I added another
00:04:46.919 item in our HTML
00:04:49.620 despite not having any room left our
00:04:52.080 grid added a new row for item 4. when
00:04:55.259 items are added outside of the
00:04:57.060 explicitly defined grid this is referred
00:04:59.520 to as an implicit grid notice how item 4
00:05:02.699 is smaller than the others that's
00:05:04.560 because the implicit grid doesn't
00:05:06.300 inherit the values that we set in the
00:05:08.340 grid template rows and grid template
00:05:09.960 columns properties but what we can do is
00:05:13.199 add the grid Auto rows property on our
00:05:15.960 container
00:05:17.100 what this does is sets the size of the
00:05:20.040 rows on any implicit grid that gets
00:05:22.380 created when I set it to 100 pixels now
00:05:25.680 our implicit grid has a row of 100
00:05:27.840 pixels
00:05:29.100 by default our implicit grid added a row
00:05:31.919 but we can change this with the grid
00:05:34.199 autoflow property and set it to column
00:05:36.720 now any implicit grid that gets created
00:05:38.940 will be created as a column instead with
00:05:41.880 the columns being the new default for
00:05:43.800 our implicit grids we can use grid Auto
00:05:46.320 columns to define the size of those
00:05:48.600 columns and set it to 100 pixels
00:05:51.240 now let's reset our grid by commenting
00:05:53.580 out almost everything except the grid
00:05:55.320 template rows and grid template columns
00:05:56.820 inside the grid template rows and
00:05:58.919 columns can go more than just pixel
00:06:00.660 units you can use M's Rams percentages
00:06:03.780 Etc but there is one called the
00:06:06.419 fractional unit that you should know
00:06:08.160 about I'm going to give the rows two
00:06:10.500 values of 100 pixels and I'll give the
00:06:12.600 columns three values of one fr
00:06:15.840 the FR unit represents a fractional
00:06:18.600 value of the available space and now
00:06:20.580 we've got three columns each one filling
00:06:22.800 out the available space equally if I set
00:06:25.259 the second FR to 2 or 3 we see the
00:06:28.500 column occupying more of the available
00:06:30.180 space
00:06:31.560 you can also mix the FR units with other
00:06:34.380 units without any issues so for example
00:06:36.539 I can make the first value be 100 pixels
00:06:38.819 in general you can mix and match values
00:06:41.520 without any problems
00:06:43.440 when I resize the page some of the items
00:06:45.900 get Way Too Thin to set a minimum width
00:06:48.840 we can use the min max function inside
00:06:51.000 our grid template columns I'll use the
00:06:53.639 min max function on the second column it
00:06:55.860 takes two arguments the first is the
00:06:57.720 minimum size and the second is the
00:06:59.520 maximum size I'll set the minimum size
00:07:01.860 to 100 pixels and the maximum size to
00:07:04.800 3fr now our item will stop shrinking
00:07:08.340 whenever it hits 100 pixels another
00:07:10.919 useful function is the repeat notation
00:07:12.960 I'll use this one on my grid template
00:07:15.120 rows the way the repeat notation works
00:07:17.520 is by taking two arguments the first
00:07:19.919 argument is the number of times you want
00:07:21.780 to repeat a value and the second
00:07:23.400 argument is the value you want to have
00:07:25.139 repeated we had two values of 100 pixels
00:07:28.020 so I'll set the first argument to 2 and
00:07:30.419 the second argument to 100 pixels
00:07:32.880 now the rows are just like they were
00:07:34.740 before two rows of 100 pixels but now at
00:07:37.319 least we aren't repeating ourselves we
00:07:39.360 can also add gaps to our grid with the
00:07:41.280 grid Gap property if you assign it one
00:07:43.560 value then it will add gaps equally to
00:07:45.780 both the rows and the columns if you
00:07:47.819 assign it two values the first is the
00:07:49.740 gaps on the rows and the second value is
00:07:51.539 the gaps on the columns
00:07:53.880 I'm going to replace the values in my
00:07:55.740 grid template rows for 100 pixels 300
00:07:58.199 pixels and 100 pixels I'll also replace
00:08:00.960 the values inside my grid template
00:08:02.580 columns for 1fr and 3fr
00:08:05.759 I'm going to show you another way of
00:08:07.740 positioning items in your grid that
00:08:09.599 doesn't require keeping track of the
00:08:11.460 line numbers in my container I'll add
00:08:13.860 the grid template areas property
00:08:16.319 as a value I'll give it three sets of
00:08:18.780 single quotes stacked on top of one
00:08:20.699 another with a semicolon after the last
00:08:23.280 set of single quotes
00:08:26.460 looking at my grid template rows I see I
00:08:29.099 defined three rows and looking at my
00:08:31.020 grid template columns I see I defined
00:08:33.120 two columns we have three rows and two
00:08:36.059 columns well inside the first set of
00:08:38.820 single quotes I'll say header and header
00:08:40.919 inside the second set of single quotes
00:08:43.140 I'll say Main and aside inside the third
00:08:46.020 set of single quotes I'll say footer and
00:08:48.240 footer the reason I added three sets of
00:08:51.060 single quotes is because I know my grid
00:08:53.040 only has three rows and the reason I
00:08:55.019 added two values inside of each of the
00:08:57.000 single quotes is because I know my grid
00:08:59.040 only has two columns each set of single
00:09:01.380 quotes represents a row and each value
00:09:03.720 inside of them represents a column
00:09:05.700 looking at my grid we see the developer
00:09:08.640 tools added the names we set inside the
00:09:10.740 grid template areas in the appropriate
00:09:12.720 position now all I have to do is give
00:09:15.540 each item the grid area property and
00:09:18.060 assign them the section I want them to
00:09:19.920 occupy I want item 1 to be the header I
00:09:22.980 want item 2 to be the main I want item 3
00:09:25.560 to be the SI and I want item 4 to be the
00:09:28.320 footer
00:09:30.660 now we see each item is occupying the
00:09:33.420 section we assign them to by the way
00:09:35.820 this was just an example I don't think
00:09:38.399 I'd have one grid for all four sections
00:09:40.620 and a real website I'd probably have
00:09:42.839 multiple different grids across my page
00:09:44.820 for the various sections and components
00:09:46.980 also this way of positioning things is
00:09:49.860 fun but it makes layering items more
00:09:52.380 difficult it can be done though it's
00:09:54.540 just more difficult
00:09:55.980 we're almost done I'll reset my grid by
00:09:58.860 commenting out pretty much everything
00:10:00.180 and set a repeat of four 100 pixels on
00:10:03.420 the rows and a repeat of 4 1fr on the
00:10:06.360 columns our items are currently
00:10:08.940 stretching both on the row axis and the
00:10:11.459 column axis and this is because on our
00:10:13.740 container there's two properties we
00:10:15.959 don't currently have but that in the
00:10:18.000 background have a default of stretch the
00:10:20.820 justify items and the Align items
00:10:22.920 properties both have a default value of
00:10:25.140 stretch I can change them to either
00:10:27.180 start and baseline or Center
00:10:31.260 justify items align items on the row
00:10:34.080 axis so if I change it justify items to
00:10:36.480 anything else like start we see our
00:10:39.120 items are at the start of the row axis
00:10:41.519 but still in the center of the column
00:10:43.260 axis if I change align items to anything
00:10:46.019 else like end now our items are still at
00:10:49.440 the start of the row axis but are now at
00:10:51.899 the end of the column axis these
00:10:54.240 properties are affecting all of the
00:10:55.740 items but if we wanted to align items
00:10:57.899 individually we can use the justify self
00:11:00.180 and the outline self properties on the
00:11:02.160 items themselves so for example if I
00:11:04.860 wanted to overwrite the row alignment of
00:11:07.440 item 1 I could use the adjustify self
00:11:09.720 and set it to anything else like Center
00:11:11.700 and if I wanted to also overwrite the
00:11:14.640 column alignment I would use the Align
00:11:16.920 self property maybe this one I'll set it
00:11:19.440 to stretch
00:11:20.760 justify items and align items where to
00:11:23.640 align our items inside our grid but we
00:11:26.339 can also align the grid itself along the
00:11:28.920 container so for example I'll clean
00:11:31.380 things up by removing everything except
00:11:33.540 this play of grid grid template rows and
00:11:35.760 grid template columns I'll also add a
00:11:38.339 height to the container of 600 pixels
00:11:40.440 I'll say that we have two rows instead
00:11:43.440 of four and also two columns instead of
00:11:45.600 four I'll also replace the 1fr with 100
00:11:49.440 pixels now we have a smaller Grid in
00:11:52.500 comparison to The Container we can align
00:11:54.959 the grid with justify content and align
00:11:57.480 content they both take the same values
00:12:00.360 start
00:12:02.040 and Center
00:12:04.920 Baseline
00:12:06.720 space between
00:12:08.579 space around
00:12:10.320 and space evenly
00:12:12.180 justify content aligns the grid along
00:12:14.880 the row axis and align content aligns
00:12:17.519 the grid along the column axis
00:12:19.980 the last thing I want to show you is a
00:12:22.680 cool trick for creating a responsive
00:12:24.600 grid that requires zero media queries
00:12:27.240 that's right responsive without media
00:12:30.240 queries once more I'll reset my grid
00:12:33.060 I'll set up a standard grid the grid
00:12:35.579 template rows can have a repeat of four
00:12:37.920 100 pixels and the grid template columns
00:12:41.339 can have a repeat of four and a min max
00:12:44.820 of 100 pixels and one fr
00:12:47.820 if I resize it it'll eventually break to
00:12:51.120 fix this normally I would add a media
00:12:53.279 query and change things based off the
00:12:55.680 viewport width but instead all I can do
00:12:58.019 is in my grid template columns instead
00:13:00.360 of repeating four times I can replace
00:13:02.220 four with the autofit keyword
00:13:05.459 now when the items reach their minimum
00:13:07.740 size of 100 pixels the autofit keyword
00:13:10.800 will make the items autofit and wrap
00:13:13.320 onto the next row creating a grid that
00:13:15.480 is automatically responsive
00:13:17.639 and there you have it if this video
00:13:20.100 helped you in any way then it achieved
00:13:22.620 its goal also I would be really honored
00:13:25.620 if you considered subscribing to the
00:13:27.540 channel and liking the video
00:13:29.399 I also have a flexbox video if you want
00:13:31.680 to check that out anyways thanks for
00:13:33.600 watching and have a wonderful day


Summarize pls



The video is a 13-minute tutorial on CSS Grid, providing a comprehensive overview of how to use grids in web design. It explains that grids are two-dimensional structures allowing for the placement of items both horizontally and vertically. The tutorial covers key concepts such as cells, tracks, row lines, and column lines.

The process of creating a grid starts with defining a container in HTML and using CSS to apply the `display: grid` property. The video explains how to define rows and columns using the `grid-template-rows` and `grid-template-columns` properties. It also introduces shorthand properties like `grid-row`, `grid-column`, and `grid-area` for positioning items.

The tutorial explores advanced features like layering items with z-index, handling implicit grids, and using fractional units (FR) for distributing space. It introduces functions like `minmax` for setting minimum and maximum sizes, `repeat` notation for simplifying repetitive values, and managing gaps between grid items with the `grid-gap` property.

Additionally, it explains aligning items within the grid using properties such as `justify-items`, `align-items`, `justify-self`, and `align-self`. For aligning the entire grid within its container, it discusses using `justify-content` and `align-content`.

Finally, the video presents a method for creating responsive grids without media queries by utilizing the autofit keyword in conjunction with minmax values.

Overall, this tutorial offers a detailed guide to mastering CSS Grid layout techniques for efficient web design.


pls show me CSS examples too



Certainly! Here are some CSS examples based on the tutorial’s content that demonstrate how to use CSS Grid for web design:

1. **Basic Grid Setup**:
   ```html
   <div class="container">
       <div class="item item1">Item 1</div>
       <div class="item item2">Item 2</div>
       <div class="item item3">Item 3</div>
   </div>
   ```

   ```css
   .container {
       display: grid;
       grid-template-rows: repeat(3, 100px);
       grid-template-columns: repeat(3, 100px);
   }

   .item {
       background-color: lightgray;
       border: 1px solid #ccc;
   }
   ```

2. **Positioning with Grid Area**:
   ```css
   .item1 {
       grid-area: 1 / 1 / 3 / 5; /* From row line 1 to 3 and column line 1 to 5 */
   }

   .item2 {
       grid-area: span 2 / span 2; /* Spans two rows and two columns */
   }
   
   .item3 {
       grid-area: -1 / -1; /* Using negative indices to position at the end */
   }
   ```

3. **Using Fractional Units**:
   ```css
   .container {
       display: grid;
       grid-template-rows: repeat(2, auto);
       grid-template-columns: repeat(3, 1fr); /* Each column takes equal space */
   }
   
4. **Minmax Function and Responsive Design**:
    ```css
    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
    ```

5. **Aligning Items within the Grid**:
    ```css
    .container {
        display: grid;
        justify-items: center; /* Align items horizontally in the center */
        align-items: center; /* Align items vertically in the center */
    }

    .item {
        justify-self: start; /* Override individual item alignment */
        align-self: end;
    }
    ```

6. **Grid Gaps and Auto Flow**:
    ```css
    .container {
        display: grid;
        grid-gap: 10px; /* Adds a gap of 10px between rows and columns */
        grid-auto-flow: row dense; /* Controls how items flow in the implicit grid */
    }
    
7. **Layering with Z-Index**:
```css
.item2 {
    z-index: 10; /* Item will be layered above others if they overlap */
}
```

These examples illustrate various techniques for creating flexible and responsive layouts using CSS Grid. You can experiment with these properties to better understand how they affect the layout of your web design projects!