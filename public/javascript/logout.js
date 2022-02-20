async function logout() {
	console.log("inside")
	const response = await fetch('/api/users/logout', {
	  method: 'post',
	  headers: { 'Content-Type': 'application/json' }
	});
  
	if (response.ok) {
	  document.location.replace('/');
	} else {
	  alert(response.statusText);
	}
  }
  console.log("outside");
  document.querySelector('#logout').addEventListener('click', logout);
  