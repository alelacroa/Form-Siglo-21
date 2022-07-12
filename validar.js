
function acceder(){
    let horario = document.getElementById("horario").value;
    let platoprin = document.getElementById("platoprin").value;
    if (horario == null || horario == "" || platoprin == null || platoprin == ""){
        alert("Por favor debes ingresar todos los datos")
    }else{
        alert("Datos cargados correctamente");
        document.form.submit();
        return false;   
    }
    
}

 let opciones1 = document.getElementById("horario")
    let opciones2 = document.getElementById("platoprin")
    
    opciones1.addEventListener("change", () => {
      let texto = opciones1.options[opciones1.selectedIndex].text
      if (texto === "Almuerzo") {
        opciones2[1].disabled = true
        opciones2[2].disabled = true
        opciones2[3].disabled = false
        opciones2[4].disabled = false
       } else {
         opciones2[1].disabled = false
         opciones2[2].disabled = false
         opciones2[3].disabled = true
         opciones2[4].disabled = true
        }
     }
    )