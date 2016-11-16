// Exercise - Bind the profile component
// Remember the profile component we made before that displays a single user or cat? We are going to parameterise that, so that the cat can be passed in from outside.
// Add an inputs attribute to your component decorator. Now make the user component receive a parameter that tells it which user to show.
// Extension
// Parameterise the header component wit ha title and subtitle. Parameterise the footer with a copyright statement.

var heroModel = {
  name: "LLars Bunderchump",
  x: 0,
  y: 0,
  moveNorth: function() {
    this.x++;
  },
  moveSouth: function() {
    this.x--;
  },
  moveEast: function() {
    this.y--
  },
  moveWest: function() {
    this.y++
  }
}

var locationModel = {
  name: "Nondescript Corridor",
  description: "It is very dark. To the north you can just make out a faint glimmer of golden light.",
  exits: "North"
}

var ProtagonistComponent = ng.core
  .Component({
    selector: "protagonist",
    inputs: [],
    template:
    `
      Name:
    `
  })
  .Class({
    constructor: function() {
    }
  })

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
    <protagonist></protagonist>
    `
  })
  .Class({
    constructor: function() {
      this.hero = heroModel;
      this.location = locationModel;
    }
  })

/**
  * The App Module
  */
var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent, ProtagonistComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });


/**
  * Finally bootstrap
  */
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);
