// Exercise - Bind the profile component
// Remember the profile component we made before that displays a single user or cat? We are going to parameterise that, so that the cat can be passed in from outside.
// Add an inputs attribute to your component decorator. Now make the user component receive a parameter that tells it which user to show.
// Extension
// Parameterise the header component wit ha title and subtitle. Parameterise the footer with a copyright statement.

var ProfileComponent = ng.core
  .Component({
    selector: "profile",
    template:
    `
      <h1>User Profile</h1>
    `
  })
  .Class({
    constructor: function() {
    }
  })

var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [ProfileComponent],
    template:
    `
    <profile></profile>
    `
  })
  .Class({
    constructor: function() {
    }
  })


document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});
