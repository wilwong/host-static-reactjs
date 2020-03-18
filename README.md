# Hosting Static ReactJS Sites

When you host your ReactJS statically, for example, on Netlify. Assuming you start from an app created via `create-react-app`:
1. run `yarn build` to bundle the static assets in the `/build` directory.
2. serve the `/build` directory. In this example, it is done via [ExpressJS](https://expressjs.com/), the code is in `server.js`
3. On services like Netlify, you just need to point the host root to `/build`

This base case is demonstrated in `cra-example`

## React-Router

Now, your web app most probably have more than 1 page; to manage routing, `react-router` is 1 of the most popular choices. `react-router-example` is an example of such set up.

However, you may find that once you put `react-router` in your project, the deployment on ExpressJS starts acting weird. More precisly, navigating to subpages works, but direct access to a subpage using its URL does not.

Although it seems such a trivial task to load `/about.js` when requesting the `/about` route, you have to understand that right now, you have TWO routers: 
1. In `server.js`, we are using the static router provided by ExpressJS, when you make a request for `/about`, it is trying to look for `/about.html`
2. There is a frontend router that intercepts URL changes once the home route `/` is loaded, this frontend router is `react-router`, it is also the router that is smart enough to look for the jsx file `/about.js` and have ReactJS compile it to HTML.

As a result, if the routing went through 2. via navigation on the loaded page, the request works; on the other hand, the direct access to the url went through 1., since `about.html` does not exist, the request fails.

## React-Rounter-Hash

Usually, when we use `react-router`, we use its `<BrowserRouter />`. Actually, to tackle the problem mentioned above, `react-router` has another router called `<HashRouter />`, this router repourpose the #url to avoid making actual route requests. The example code is in `react-router-hash-example`.

If you run this code, you can see that the url of subpages become `/#/subpage`. Since # is a keyword for subsections of a webpage, the request is made to the base url only. I.e. for `index.html/#/subpage`, the request is made to `index.html` (which is a file that exists); and in traditional HTML, `#subpage` only refers to the sub-section of this page with ID #=subpage.

`<HashRouter />` hijack this feature of #url, and use it to make request for the jsx of the subpage. Since it only attempts the hijack after the webpage is loaded, this approach works perfectly in static setups. 

