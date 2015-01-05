  hello.init({
    facebook: FACEBOOK_CLIENT_ID,
    windows: WINDOWS_CLIENT_ID,
    google: GOOGLE_CLIENT_ID
  }, {
    redirect_uri: 'redirect.html'
  });
  hello.on('auth.login', function(auth) {

    // call user information, for the given network
    hello(auth.network).api('/me').then(function(r) {
      // Inject it into the container
      var label = document.getElementById("profile_" + auth.network);
      if (!label) {
        label = document.createElement('div');
        label.id = "profile_" + auth.network;
        document.getElementById('profile').appendChild(label);
      }
      label.innerHTML = '<img src="' + r.thumbnail + '" /> Hey ' + r.name;
    });
  });
