# boot_102216_expworks
Learn Express.js from the author NodeProgram.com

http://stackoverflow.com/questions/14279155/how-to-install-old-version-of-express-js

.gitignore
https://www.youtube.com/watch?v=_vejzukmn4s

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED
────────────────────────────────────────────────────────────────────────────────

   "Hello World!"                      ==    "Hello World!"

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to HELLO WORLD! passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()
    app.get('/home', function(req, res) {
      res.end('Hello World!')
    })
    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED
────────────────────────────────────────────────────────────────────────────────

   "<html>"                            ==    "<html>"
   "  <head>"                          ==    "  <head>"
   "    <title>expressworks</title>"   ==    "    <title>expressworks</title>"
   "    <link rel=\"stylesheet\" type=\"text/css\" href=\"/main.css\"/>" ==    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"/main.css\"/>"
   "  </head>"                         ==    "  </head>"
   "  <body>"                          ==    "  <body>"
   "    <p>I am red!</p>"              ==    "    <p>I am red!</p>"
   "  </body>"                         ==    "  </body>"
   "</html>"                           ==    "</html>"

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to STATIC passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var path = require('path')
    var express = require('express')
    var app = express()

    app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────
