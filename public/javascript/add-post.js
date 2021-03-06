async function newFormHandler(event) {
	event.preventDefault();
  
	const title = document.querySelector('input[name="post-title"]').value;
	const description = document.querySelector('input[name="post-desc"]').value;
  const img_url = document.querySelector("#post-img").value;
  
	const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      img_url,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  
	if (response.ok) {
	  document.location.replace('/dashboard');
	} else {
	  alert(response.statusText);
	}
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  