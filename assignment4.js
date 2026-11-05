document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        clearErrors();

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const address = document.getElementById("address").value.trim();
        const city = document.getElementById("city").value.trim();
        const postalCode = document.getElementById("postalCode").value.trim().toUpperCase();
        const province = document.getElementById("province").value.trim().toUpperCase();
        const age = document.getElementById("age").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        let isValid = true;

        const postalCodePattern = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

        const validProvinces = ["QC", "ON", "MB", "SK", "AB", "BC"];

        if (firstName === "") {
            showError("firstNameError", "First Name is required.");
            isValid = false;
        }

        if (lastName === "") {
            showError("lastNameError", "Last Name is required.");
            isValid = false;
        }

        if (address === "") {
            showError("addressError", "Address is required.");
            isValid = false;
        }

        if (city === "") {
            showError("cityError", "City is required.");
            isValid = false;
        }

        if (postalCode === "") {
            showError("postalCodeError", "Postal Code is required.");
            isValid = false;
        } else if (!postalCodePattern.test(postalCode)) {
            showError("postalCodeError", "Postal Code must be in A1A1A1 format.");
            isValid = false;
        }

        if (province === "") {
            showError("provinceError", "Province is required.");
            isValid = false;
        } else if (!validProvinces.includes(province)) {
            showError("provinceError", "Province must be QC, ON, MB, SK, AB, or BC.");
            isValid = false;
        }

        if (age === "") {
            showError("ageError", "Age is required.");
            isValid = false;
        } else if (isNaN(age) || Number(age) < 18) {
            showError("ageError", "Age must be at least 18 years old.");
            isValid = false;
        }

        if (email === "") {
            showError("emailError", "Email is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            showError("emailError", "Enter a valid email address.");
            isValid = false;
        }

        if (password === "") {
            showError("passwordError", "Password is required.");
            isValid = false;
        } else if (!passwordPattern.test(password)) {
            showError("passwordError", "Password must be at least 6 characters and include 1 uppercase letter and 1 digit.");
            isValid = false;
        }

        if (confirmPassword === "") {
            showError("confirmPasswordError", "Confirm Password is required.");
            isValid = false;
        } else if (password !== confirmPassword) {
            showError("confirmPasswordError", "Passwords do not match.");
            isValid = false;
        }

        if (isValid) {
            alert("Form validation successful. This demo does not save your information.");
            form.reset();
        }
    });

    form.addEventListener("reset", function () {
        setTimeout(clearErrors, 0);
    });

    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    function clearErrors() {
        const errors = document.querySelectorAll(".error");
        errors.forEach(function (error) {
            error.textContent = "";
        });
    }
});