function validateForm() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Check Email Format
    if (!email.endsWith('@gmail.com')) {
      errorMessage.innerText = "Email must end with '@gmail.com'";
      return false;
    }

    // Check Password: Only 4 numbers
    const passwordRegex = /^\d{4}$/; // Exactly 4 digits
    if (!passwordRegex.test(password)) {
      errorMessage.innerText = "Password must be exactly 4 digits!";
      return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      errorMessage.innerText = "Passwords do not match!";
      return false;
    }

    // If everything is fine
    errorMessage.innerText = "";
    window.location.href = "welcome.html";
    return false;
  };