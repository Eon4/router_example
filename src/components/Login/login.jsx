export const Login = () => {

    const submitHandler = (event) => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value


if (username !== "" &&  password !== ""  ) {

    const url = "'https://dummyjson.com/auth/login'";
    const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: username,
      password:  password,
    })}

    fetch (url, options)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then((err) => console.error(err));


}
else {
    alert('du skal udfylde felterne!')
}

        console.log("username:", event.target.username.value)
        console.log("password:", event.target.password.value)

    }



    return (
        <form onSubmit={(event) => submitHandler(event)}>
            <label>
                Brugernavn:

            <input name="username" placeholder="indtast brugernavn"/>
            </label>
            <label>

             Password: 
<input name="password" placeholder="intast password"/>
            </label>
            <input type="submit" value="send"/>
        </form>
    )
}