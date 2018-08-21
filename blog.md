# Where Am I: URL Assertions with Cypress

The URL that appears in the browser's URL bar is one of the first and
primary ways that users interact with our web apps. The URL tells the app
and the user of their location within the route hierarchy of the app. It
sometimes even contains state. The URL consequently serves as an excellent
first assertion when writing integration tests.

When writing [Cypress](https://www.cypress.io/) integration tests, there are
several ways for us to assert about the current URL.

The [`cy.url()`](https://docs.cypress.io/api/commands/url.html#Syntax) and
[`cy.location()`](https://docs.cypress.io/api/commands/location.html#Syntax)
functions are the primary ways for us to gain access to information about
the current state of the URL. From there, we can perform a variety of
assertions.

We can assert about the entire URL:

```javascript
// URL: http://localhost:8000/pokemon
cy.url().should('eq', 'http://localhost:8000/pokemon');
// ✅ passes
```

This is certain the most precise assertion. The tradeoff is that it requires
us to know something about the environment configuration (namely,
`baseUrl`). This can get verbose and make our tests brittle.

Alternatively, we can make a partial assertion about the URL:

```javascript
// URL: http://localhost:8000/pokemon
cy.url().should('contain', '/pokemon');
// ✅ passes
```

This frees us from having to specify the full path with the base URL. This,
too, has a potential drawback. This way of asserting about the URL can be
overly permissive and may result in a false-positive.

Imagine we are writing a test for our pokemon _show_ page. As part of that
test we want to be sure that the _back_ button works. We are on the show
page for a specific pokemon (`/pokemon/2`) and our _back_ button is not
correctly wired up yet. Here is our assertion:

```javascript
// Click: 'Back' -- no change in URL
// URL: http://localhost:8000/pokemon/2
cy.url().should('contain', '/pokemon');
// ✅ passes (false positive)
```

What we'd like is a stricter assertion without the need to specify the base
URL. This is where `cy.location()` can help.

```javascript
// Click: 'Back' -- no change in URL
// URL: http://localhost:8000/pokemon/2
cy.location('pathname').should('eq', '/pokemon');
// ❌ fails
```

This time our assertion correctly fails because `/pokemon` does not match
the current _pathname_ of `/pokemon/2`. Once we update our application code
with a working _back_ button we should see this test pass. Going forward we
will have the confidence that if the _back_ button breaks again, so will the
test.

We looked at a couple ways to assert about the current state of your app's
URL. Though `cy.url()` can certainly be used to this end, I recommend
utilizing `cy.location()`. There is a lot more to `cy.location()` than we
covered in this post. Check out the
[examples](https://docs.cypress.io/api/commands/location.html#Examples) in
the Cypress docs for all the other ways this function can be used to assert
about the URL.

< LINK TO THE CODE HERE >
