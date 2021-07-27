
//LOGIN
let userData = [{ email: "test@test.com", password: "test" }];
let password = document.getElementById("password")

document.getElementById("sign-in").addEventListener("click", ()=>{
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

    if (email !== userData[0].email || password !== userData[0].password) {
      document.getElementById
      document.getElementById("validation").style.color = "red"
      document.getElementById("validation").innerHTML = "Email or Password is incorrect."
      document.getElementById("sign-in").disabled = "false"
    }else{
      document.getElementById("sign-in").disabled = "true"
    }

}
)

