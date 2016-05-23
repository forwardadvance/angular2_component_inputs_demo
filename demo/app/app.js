// inputs: ["profile"],
// <user [profile]="'mikey'"></user>
// <user profile="davey"></user>
// <user profile="{{name}}"></user>


var UserComponent = ng.core
  .Component({
    selector: "user",
    inputs: ["profile"],
    template:
    `
      <div>
        user: {{profile.name}}
        age: {{profile.age}}
        <pre>{{profile | json}}</pre>
      </div>
    `
  })
  .Class({
    constructor: function() {}
  })

var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [UserComponent],
    template:
    `
      <user [profile]="userProfile"></user>

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

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});

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
