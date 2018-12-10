# Heml-now-v2-test

Test repo for heml on now v2.


## Dev

* Install: `npm i`
* Run dev: `npm run dev`
* Check browser: `http://localhost:3000/welcome-mail.js`


## Deploy

* Run: `now`
* Go to: `https://<your-id>.now.sh/welcome-mail.js`


### Info

Deploying it on now should cause an error. However, it seems to work if you just publish the `ncc`d version of it.

* Build: `ncc build src/routes/welcome-mail.js`
* Change the builders src in `now.json` to `dist/index.js`
* Change the routes in `now.json` to `{ "src": "/(.*)", "dest": "/dist/$1" }`
* Add `src` to `.nowignore`
* Go to: `https://<your-id>.now.sh`
