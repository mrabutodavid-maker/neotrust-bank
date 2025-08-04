function fakeLogin() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === 'user' && pass === '1234') {
    alert('Login successful!');
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid login. Try user / 1234');
  }
  return false;
}
function sendTransfer() {
  alert('Transfer submitted (demo only)');
  return false;
}
