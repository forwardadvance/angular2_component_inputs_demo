// inputs: ["profile"],
// <user [profile]="'mikey'"></user>
// <user profile="davey"></user>
// <user profile="{{name}}"></user>

var ProfileComponent = ng.core
  .Component({
    selector: "profile",
    inputs: [],
    template:
    `
      User Profile
    `
  })
  .Class({
    constructor: function() {}
  })

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <profile></profile>

    `
  })
  .Class({
    constructor: function() {
      var vm = this;
      vm.name = 'stewey'
      vm.userProfile = {name: 'Manny', age:0};
      setInterval(function() {
        vm.userProfile.age ++
      }, 100);
    }
  })

/**
  * The App Module
  */
var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent, ProfileComponent ],
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
// initial state

// var UserComponent = ng.core
//   .Component({
//     selector: "user",
//     template:
//     `
//       <div>
//         user: {{profile}}
//       </div>
//     `
//   })
//   .Class({
//     constructor: function() {}
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [UserComponent],
//     template:
//     `

//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       vm.name = 'stewey'
//     }
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });




//target state
// var UserComponent = ng.core
//   .Component({
//     selector: "user",
//     inputs: ["profile"],
//     template:
//     `
//       <div>
//         user: {{profile}}
//       </div>
//     `
//   })
//   .Class({
//     constructor: function() {}
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [UserComponent],
//     template:
//     `
//       <user [profile]="'mikey'"></user>
//       <user profile="mikey"></user>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       vm.test = 'davey'
//     }
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });
