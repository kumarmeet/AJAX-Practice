const form = document.getElementById("user-form");
const userDetail = document.getElementById("user-detail");
const ol = document.createElement("ol");

const overlay = document.getElementById("overlay");


async function fetchResponseData() {
    const li = document.createElement("li");
    
    const responseData = await fetch("/user");
    const users = await responseData.json();
    
    console.log(users);
    
    for (const user of users) {
        li.textContent = `${user.name}  ${user.age}`
    }
    
    ol.appendChild(li);
    userDetail.appendChild(ol)
}


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userData = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
    };

    const responseData = await fetch("/user-post", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json"
        }
    });

    fetchResponseData();

    document.getElementById("user-form").reset();

    overlay.style.display = "block";
    
    setTimeout(() =>{ 
        overlay.style.display = "none";
        alert("Your form is submitted successfully")
    }, 2000)
})