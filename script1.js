function submitForm() {
    // Get input values from the form
    var customerID = document.getElementById("customerID").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone_no = document.getElementById("phone_no").value;
    var address = document.getElementById("address").value;

    // Display input values in the output elements
    document.getElementById("output1").innerHTML = customerID;
    document.getElementById("output2").innerHTML = name;
    document.getElementById("output3").innerHTML = email;
    document.getElementById("output4").innerHTML = phone_no;
    document.getElementById("output5").innerHTML = address;

    // Get input value for unit consumed
    let unitConsumed = parseFloat(document.getElementById("unitConsumed").value);

    // Validate the input for unit consumed
    if (isNaN(unitConsumed) || unitConsumed < 0) {
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number for unit consumed.";
        return;
    }

    // Calculate electricity charges based on the given table
    let chargesPerUnit;
    let amountCharges;
    let surcharge = 0;
    let netAmount;

    // Determine charges per unit based on the unit consumed
    if (unitConsumed >= 0 && unitConsumed <= 199) {
	chargesPerUnit = 1.20;

    } else if (unitConsumed >= 200 && unitConsumed < 400) {
        chargesPerUnit = 1.50;

    } else if (unitConsumed >= 400 && unitConsumed < 600) {
        chargesPerUnit = 1.80;

    } else if (unitConsumed >= 600) {
        chargesPerUnit = 2.00;
    }

    // Calculate amount charges
    amountCharges = unitConsumed * chargesPerUnit;

    // Apply surcharge if the amount charged is above RM 400
    if (amountCharges > 400) 
    {
        surcharge = amountCharges * 0.15;
        netAmount = amountCharges + surcharge;
    } 
    else if (amountCharges < 400) {
        netAmount = 50;
    }

    // Display the billing details in the output elements
    document.getElementById("output6").innerHTML = unitConsumed;
    document.getElementById("output7").innerHTML = amountCharges;
    document.getElementById("output8").innerHTML = surcharge;
    document.getElementById("output9").innerHTML = netAmount;
}

