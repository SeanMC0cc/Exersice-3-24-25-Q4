// EnterAge
    function verifyAge() {
        let age = document.getElementById("inputAge").value;

        if (age <= 17) {
            window.alert("You're too young to vote.");
        }
        else {
            window.alert("Eligible");
        }
    }