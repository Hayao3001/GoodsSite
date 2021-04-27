var firebaseConfig = {
    apiKey: "AIzaSyDpJCmeoX_y8uPscoT3FXu5RJHvrMKPBAI",
    authDomain: "goods-management-tool.firebaseapp.com",
    projectId: "goods-management-tool",
    storageBucket: "goods-management-tool.appspot.com",
    messagingSenderId: "510122414702",
    appId: "1:510122414702:web:50b842c15cd4ba4a67cc7f",
    measurementId: "G-3XRQZ3K33K"
  };
  firebase.initializeApp(firebaseConfig);

  var inputarea = document.getElementById('input-area');
  var newuser = document.getElementById('newuser');
  var login = document.getElementById('login');
  var logout = document.getElementById('logout');
  var info = document.getElementById('info');
  
  
  //ログイン処理
  login.addEventListener('click', function(e) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      alert('ログインできません（' + error.message + '）');
    });
  });
  
  
  
  //ログアウト処理
  logout.addEventListener('click', function() {
    firebase.auth().signOut();
  });
  
  
  
  //認証状態の確認
  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      loginDisplay();
    }
    else {
      logoutDisplay();
    }
  });
  
  
  
  function loginDisplay() {
    logout.classList.remove('hide');
    inputarea.classList.add('hide');
    
    window.location.replace('main.html');
  }
  
  
  function logoutDisplay() {
    logout.classList.add('hide');
    inputarea.classList.remove('hide');
  
    info.textContent = "";
  }