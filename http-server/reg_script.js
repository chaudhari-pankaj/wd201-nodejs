console.log("script.js");
let form_elem = document.getElementById("reg_form");
let submit_button = document.getElementById("submit_button");

let user_data = [];

submit_button.addEventListener('click',(event) => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let terms = document.getElementById("terms").checked;
    
    if(email.includes("@gmail.com") == false) {
        alert("pls enter a valid gmail id");
        event.preventDefault();
        return;
    }
    event.preventDefault();

    let user_input = {name:name,email:email,password:password,dob:dob, terms:terms};
    user_data.push(user_input);
    let data_stuff = {user_data:user_data};
    localStorage.setItem(data_stuff,JSON.stringify(data_stuff));

    catch_data = localStorage.getItem(data_stuff);
    let catch_data_json = JSON.parse(catch_data);
    let some_stuff = catch_data_json["user_data"];
    let final_res = "<table><tr><th>name</th><th>email</th><th>password</th><th>date of birth</th><th>accept terms?</th></tr>" + some_stuff.map((objs) => {
        return "<tr>" + Object.keys(objs).map((key) => {
            return "<td>" + objs[key] + "</td>";
        }).join("\n") + "</tr>";

    }).join("\n") + "</table>";

    let disp = document.getElementById("localstorage_disp");
    disp.innerHTML = final_res;
});

