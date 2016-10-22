# boot_102216_expworks
Learn Express.js from the author NodeProgram.com

http://stackoverflow.com/questions/14279155/how-to-install-old-version-of-express-js

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
