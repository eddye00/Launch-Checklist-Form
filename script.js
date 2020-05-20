
window.onload = () => {
   let launchForm = document.querySelector("form");

   launchForm.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotInput = document.querySelector("input[name=pilotName]").value;
      let copilotInput = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoLevel = document.querySelector("input[name=cargoMass]").value;

      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuel = document.getElementById("fuelStatus");
      let cargo = document.getElementById("cargoStatus");
      class textField {
         constructor(pilotName, copilotName, fuelLevel, cargoMass) {
            this.pilotName = pilotName;
            this.copilotName = copilotName;
            this.fuelLevel = fuelLevel;
            this.cargoMass = cargoMass;
         }
      }

      let validInput = document.querySelectorAll(".textField");
      let missingFields = [];
      for (let i=0; i < validInput.length; i++) {
         if (validInput[i].value === "") {
            missingFields.push(validInput[i].name);
         } else if (["pilotName", "copilotName"].includes(event.target[i].name)){
            if (!isNaN(Number(validInput[i].value))) {
               missingFields.push(`${validInput[i].name} is a number`);
            } 
         } else if (["fuelLevel", "cargoMass"].includes(event.target[i].name)){
            if (isNaN(validInput[i].value)) {
               missingFields.push(`${validInput[i].name} is a string`);
            }
         }
      }
      
      if (missingFields.length > 0) {
         alert(`All fields are required!\nMissing fields: ${JSON.stringify(missingFields)}`);
         missingFields = [];
      } else {
         document.getElementById("faultyItems").style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotInput} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotInput} is ready for launch`;
         if (fuelLevel < 10000) {
            fuel.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
         }
         if (cargoLevel > 10000) {
            cargo.innerHTML = "There is too much mass for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
         }       
      
      
      }
   });
}