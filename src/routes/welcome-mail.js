const email = require('../lib/email')


module.exports = email`
  <heml>
    <head>
      <subject>Hello World</subject>
    </head>
    <body>
      <container>
        <row>
          <column>
            <p>
              ${"hello world"}
            </p>
          </column>
          <column>
            <p>
              This is an E-Mail.
            </p>
          </column>
        </row>
      </container>
    </body>
  </heml>
`
