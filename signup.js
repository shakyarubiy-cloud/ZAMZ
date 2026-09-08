function setMode(mode){
    const isSignup = mode === 'signup';
    document.getElementById('tabSignup').classList.toggle('active', isSignup);
    document.getElementById('tabLogin').classList.toggle('active', !isSignup);
    document.getElementById('headline').textContent = isSignup ? 'Create your account' : 'Welcome back';
    document.getElementById('subline').innerHTML = isSignup
      ? 'Already have one? <a href="#" onclick="setMode(\'login\'); return false;">Log in</a>'
      : 'New here? <a href="#" onclick="setMode(\'signup\'); return false;">Create an account</a>';
    document.getElementById('nameField').style.display = isSignup ? 'block' : 'none';
    document.getElementById('submitBtn').textContent = isSignup ? 'Create account' : 'Log in';
    document.getElementById('fineprint').style.display = isSignup ? 'block' : 'none';
  }

  document.getElementById('authForm').addEventListener('submit', function(e){
    e.preventDefault();
  });