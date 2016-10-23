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

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED
────────────────────────────────────────────────────────────────────────────────

   "<h1>Hello World</h1><p>Today is Sat Oct 22 2016.</p>" ==    "<h1>Hello World</h1><p>Today is Sat Oct 22 2016.</p>"

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to JADE passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()
    app.set('view engine', 'jade')
    app.set('views', process.argv[3])
    app.get('/home', function(req, res) {
      res.render('index', {date: new Date().toDateString()})
    })
    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED
────────────────────────────────────────────────────────────────────────────────

   "Express.js rocks!"                 ==    "Express.js rocks!"

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to GOOD OLD FORM passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var bodyParser = require('body-parser')
    var app = express()

    app.use(bodyParser.urlencoded({extended: false}))

    app.post('/form', function(req, res) {
      res.send(req.body.str.split('').reverse().join(''))
    })

    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────
