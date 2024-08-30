//your JS code here. If required.
document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const age = parseInt(document.getElementById('age').value);
    const name = document.getElementById('name').value;

    // Validation for empty inputs
    if (isNaN(age) || name.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Function that returns a promise based on the age
    function validateAge(age, name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age > 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry ${name}. You aren't old enough.`);
                }
            }, 4000); // 4 seconds delay
        });
    }

    // Use the promise to handle the result
    validateAge(age, name)
        .then(message => {
            alert(message);
        })
        .catch(errorMessage => {
            alert(errorMessage);
        });
});
