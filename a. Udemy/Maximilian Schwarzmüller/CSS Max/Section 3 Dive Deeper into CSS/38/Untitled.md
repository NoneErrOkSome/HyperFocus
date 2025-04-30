### Summary and Key Takeaways from the Transcript:

1. **Issue with Block-Level Elements:**
    
    - `div` and `nav` elements are block-level by default, which causes them to take the full width of their container, forcing them onto separate lines.
2. **Solution with `display: inline-block`:**
    
    - Applying `display: inline-block` to both the `div` and `nav` ensures they can sit next to each other on the same line.
3. **Direct Child Selector (`>`):**
    
    - Use the direct child combinator (`main-header > div`) to specifically target direct children of the `main-header`, avoiding unwanted styles on nested elements.
4. **Adjusting Alignment:**
    
    - The `text-align: right` property aligns the text inside an inline block, but this alignment won’t work as intended if the parent element (e.g., `nav`) doesn’t have a fixed width.
5. **Unordered List (`ul`) Styling:**
    
    - Reset `ul` padding and margins using:
        
        ```css
        margin: 0;
        padding: 0;
        list-style: none;
        ```
        
6. **Width Calculation with `calc`:**
    
    - To align elements properly, use the CSS `calc()` function for dynamic width adjustments:
        
        ```css
        width: calc(100% - 49px);
        ```
        
7. **Handling Inline-Block Spacing Issues:**
    
    - Even after alignment adjustments, spacing issues between inline-block elements may arise. These are often caused by whitespace in the HTML source or other factors inherent to inline-block layout.

### Final CSS Adjustments:

```css
.main-header > div {
    display: inline-block;
}

.main-nav {
    display: inline-block;
    width: calc(100% - 49px); /* Adjust width dynamically */
    text-align: right;
}

.main-nav__items {
    margin: 0;
    padding: 0;
    list-style: none; /* Remove bullet points */
}

.main-nav__item {
    display: inline-block;
}
```

### Next Steps:

- **Explore Advanced Tools:**
    - Later, you can use browser developer tools to inspect and calculate precise dimensions and spacing.
- **Consider Flexbox:**
    - Flexbox might be a better long-term solution for layout adjustments as it simplifies alignment and spacing issues. For example:
        
        ```css
        .main-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        ```
        

This approach would eliminate many issues with inline-block spacing while providing more flexibility in layout management.