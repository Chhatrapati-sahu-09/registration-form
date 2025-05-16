document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById("firstName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      mobileNumber: Number(
        document.getElementById("mobileNumber").value.trim()
      ),
      email: document.getElementById("email").value.trim(),
      address: {
        street: document.getElementById("street").value.trim(),
        city: document.getElementById("city").value.trim(),
        state: document.getElementById("state").value.trim(),
      },
      education: {
        X: document.getElementById("classX").value.trim(),
        XII: document.getElementById("classXII").value.trim(),
        graduation: document.getElementById("graduation").value.trim(),
        postgraduation: document.getElementById("postgraduation").value.trim(),
      },
    };

    console.log(formData);
  });
