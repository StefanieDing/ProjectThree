Router.configure({
  layoutTemplate: 'masterLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  yieldTemplates: {
    navbar: {to: 'navbar'},
    footer: {to: 'footer'},
    sidebar: {to: 'sidebar'},
  }
});

// In the map, we set our routes.
Router.map(function () {
  // Index Route
  this.route('home', {
    path: '/',
    template: 'home',
    layoutTemplate: 'masterLayout'
  });
  this.route('profile', {
    path: '/profile',
    template: 'profile',
    layoutTemplate: 'masterLayout'
  });
  this.route('loading', {
    path: 'loading',
    template: 'loading',
    layoutTemplate: 'masterLayout'
  });
  // User Mgmt Route
  this.route('usermgmt', {
    path: '/usermgmt',
    template: 'userManagement',
    layoutTemplate: 'masterLayout',
    onBeforeAction: function() {
      if (Meteor.loggingIn()) {
          this.render(this.loadingTemplate);
      } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
          this.redirect('/');
      }
      this.next();
    },
    loadingTemplate: 'loading'
  });
  // Sign In Route
  AccountsTemplates.configureRoute('signIn', {
      name: 'signin',
      path: '/sign-in',
      template: 'signIn',
      layoutTemplate: 'masterLayout',
      redirect: '/profile',
  });
  // Sign Up Route
  AccountsTemplates.configureRoute('signUp', {
      name: 'sign-up',
      path: '/sign-up',
      template: 'signUp',
      layoutTemplate: 'masterLayout',
      redirect: '/profile',
  });
  // Sign Out Route
  this.route('/sign-out', function(){
      Meteor.logout(function(err) {
          if (err) alert('There was a problem logging you out.');
          Router.go("/");
      });
      Router.go("/");
  });
});