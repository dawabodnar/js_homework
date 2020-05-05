var users = [];
      
function save() {
    console.log("Ви нажали зберегти");
    
    var prizvicheTag = document.getElementById("prizviche");
    var nameTag = document.getElementById("name");
    var birthdateTag = document.getElementById("birthdate");
    
    var person = {
    prizviche: prizvicheTag.value,
    name: nameTag.value,
    birthdate: birthdateTag.value
    }
    
    users.push(person);
    
    console.log("Ось всі збережені: ");
    console.log(users)
}