const renderUserId = document.querySelector("#renderUserId")
const catchError = document.querySelector("#error")

  //Posting data to the server
  function submitData(inputName, inputEmail){
    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: inputName,
        email: inputEmail,
      }),
  })
    .then(response => response.json())
    .then(userDataRespose =>{
        renderUserId.textContent = userDataRespose.id
    })
    .catch(error => {
        catchError.textContent = error.message;
        console.log(error.message);
    });
};