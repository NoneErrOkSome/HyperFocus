Here is the content copied into a code box:

```go html template
{{define "base"}}
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

            {{block "css" .}}

            {{end}}
    </head>

    <body>
    
    {{block "content" .}}

    {{end}}

    {{block "js" .}}

    {{end}}

    </body>

    </html>

{{end}}
```