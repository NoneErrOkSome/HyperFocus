Here is the content copied into a code box:

``` go html
{{template "base" .}}

{{define "content"}}
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>This is the about page</h1>
                <p>This is about page</p>
            </div>
        </div>
    </div>
{{end}}
```