### What We Did Basically:

1. **Identified the Problem:**
    
    - The `div` and `nav` elements in the header were treated as block-level elements by default, causing them to stack on separate lines instead of sitting next to each other.
2. **Changed the Display Property:**
    
    - To fix this, we applied `display: inline-block` to both the `div` and `nav`. This allowed them to behave like inline elements while still being able to have width, height, and padding like block elements.
3. **Used Precise Selectors:**
    
    - We used the direct child combinator (`>`) to specifically target the `div` inside the header (`main-header > div`). This ensures that only direct child elements are affected, avoiding unintended styling of nested `div`s.
4. **Aligned the Navigation:**
    
    - To align the navigation (`nav`) content to the right, we attempted `text-align: right`. However, this alone didn’t work because the `nav` element didn’t occupy the full width of its container.
5. **Reset Default Styles:**
    
    - The unordered list (`ul`) inside the navigation had default padding, margin, and bullet points. We removed them by setting:
        - `margin: 0`
        - `padding: 0`
        - `list-style: none`
6. **Calculated Dynamic Width:**
    
    - Since the `nav` needed to fit beside the `div`, we dynamically calculated its width using `calc(100% - 49px)` to subtract the `div`’s width (49px) from the total width of the header.
7. **Managed Inline-Block Quirks:**
    
    - Inline-block elements can sometimes have unexpected spacing issues (e.g., gaps caused by whitespace in the HTML). We accounted for this while ensuring proper layout.

### In Simple Terms:

We adjusted the layout so that the `div` (brand link) and the `nav` (navigation menu) could sit on the same line, aligned correctly. We reset unnecessary styles, dynamically calculated widths to fit everything in place, and ensured a cleaner, more functional header design.