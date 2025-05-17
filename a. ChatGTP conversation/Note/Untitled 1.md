<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Omnifood</title>
    <link rel="stylesheet" href="css/style.css" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
      rel="stylesheet"
    />

    <title>Omnifood</title>
  </head>

  <body>
    <section class="section-hero">
      <div class="hero">
        <div class="hero-text-box">
          <h1 class="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p class="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs. We have delivered 250,000+ meals last year!
          </p>
          <a href="#" class="btn btn--full margin-right-sm"
            >Start eating well</a
          >
          <a href="#" class="btn btn--outline">Learn more &darr;</a>
        </div>
        <div class="hero-img-box">
          <img
            src="img/hero.png"
            class="hero-img"
            alt="Woman enjoying food, meals in a storage container, and food bowls on a table"
          />
        </div>
      </div>
    </section>
  </body>
</html>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-family: "Rubik" sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #555;
}

.section-hero {
  background-color: #fdf2e9;
  padding: 9.6rem 0;
}

.hero {
  max-width: 130rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9.6rem;
  align-items: center;
}

.heading-primary {
  font-size: 5.2rem;
  font-weight: 700;
  line-height: 1.05;
  color: #333;
  letter-spacing: -0.5px;
  margin-bottom: 3.2rem;
}

.hero-description {
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
}

.btn:link,
.btn:visited {
  display: inline-block;
  background-color: #e67e22;
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  padding: 1.6rem 3.2rem;
  border-radius: 9px;
  /* Put transition on original "state" */
  transition: background-color 0.3s;
}

.btn--full:link,
.btn--ful:visited {
  bacground-color: #e67e22;
  color: #fff;
}

.btn--full:hover,
.btn--full:active {
  background-color: #cf711f;
}

.btn--outline:link,
.btn--outline:visited {
  background-color: #fff;
  color: #555;
}

.btn--outline:hover,
.btn--outline:active {
  background-color: #fdf2e9;
  color: #555;

  /* border: 3px solid #fff; */
  /* Trick to add border inside */

  box-shadow: inset 0 0 0 3px #fff;
}

.hero-img {
  width: 100%;
}

.margin-right-sm {
  margin-right: 1.6rem !important;
}

Why my webpage didn't change to front Rubik? Must user have Rubik font install in their pc?



If your webpage isn't displaying the Rubik font as expected, there are a few things to check:

1. **Check Font Import Link**: Ensure that the link to Google Fonts is correct and properly placed in the `<head>` section of your HTML. Based on your code, you have correctly included the link:

    ```html
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
      rel="stylesheet"
    />
    ```

2. **Verify CSS `font-family` Declaration**: Make sure that the `font-family` declaration in your CSS is correct and applied to the elements you want. In your CSS, it's defined as:

    ```css
    body {
      font-family: "Rubik", sans-serif;
      line-height: 1;
      font-weight: 400;
      color: #555;
    }
    ```

   Note that there's a missing comma between `"Rubik"` and `sans-serif`. It should be `"Rubik", sans-serif;`.

3. **Check for Browser Issues**: Sometimes, browsers might cache old versions of your files. Try clearing your browser cache or opening the page in an incognito window to see if that resolves the issue.

4. **Ensure Proper Network Access**: Make sure there are no network issues preventing access to Google Fonts' servers from your location.

If you've verified all these steps and it still doesn't work, try loading another font from Google Fonts to see if it's a specific issue with Rubik or something more general with how fonts are being loaded on your site.