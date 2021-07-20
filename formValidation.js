let submit = document.getElementById("submit")
submit.addEventListener("click", function (e) {
    e.preventDefault();
    formValidate();
})
function formValidate() {
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let address1 = document.getElementById("address1").value
    let address2 = document.getElementById("address2").value
    let city = document.getElementById("city").value
    let pin = document.getElementById("pin").value
    let state = document.getElementById("state").value
    let country = document.getElementById("country").value
    let mgender = document.getElementById("Mgender")
    let fgender = document.getElementById("Fgender")
    let food = document.getElementsByClassName("food")
    

    //let name = `${fname} ${lname}`;
    //let address = `${address1} ${address2} ${city} ${pin} ${state} ${country}`;
    let address = `${address1} ${address2}`
    let foods = []
    let checkedgender
    if(mgender.checked){
        checkedgender= mgender.value
    }
    if(fgender.checked){
        checkedgender = fgender.value
    }
    for (let i = 0; i < 5; i++) {
        if (food[i].checked) {
            foods.push(food[i].value)
        }
    }
    if(fname==='' || lname===''|| address1==='' || state==='' || country ==='' || city===''|| pin==='')
    {
        alert("Fill all the mandatory fields to submit")
    }
    else if(checkedgender===undefined){
        alert("Select Gender");    
    }
    else if (foods.length < 2) {
        alert("Please select 2 are more Food options");
    }
    else {
        createTable(fname, lname, address, pin, checkedgender, foods.join(" "), state, country); 
    }
}

function createTable(fname, lname, address, pin, checkedgender, foods, state, country) {
    
    let tbody = document.getElementById("tbody");
    tbody.innerHTML += `<tr>
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${address}</td>
    <td>${pin}</td>
    <td>${checkedgender}</td>
    <td>${foods}</td>
    <td>${state}</td>
    <td>${country}</td>
</tr>`
document.getElementById("form").reset()
alert("Form Details Submitted Successfully!")
}