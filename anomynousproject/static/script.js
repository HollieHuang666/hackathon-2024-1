// script.js
function openSignUpModal() {
    const signUpModal = document.getElementById('signUpModal');
    signUpModal.style.display = 'block';
}

var statustext=document.getElementById('status').textContent;

if (statustext !== "This student number already exists") {
    // Define the closeSignUpModal function only if the condition is true
    function closeSignUpModal() {
        const signUpModal = document.getElementById('signUpModal');
        signUpModal.style.display = 'none';
    }
}

// script.js
// function startSearching() {
//     const searchButton = document.getElementById('searchButton');
//     const loading = document.getElementById('loading');

//     // Disable the button and show the loading animation
//     searchButton.disabled = true;

//     // Simulate a search operation (you can replace this with your actual search logic)
//     setTimeout(() => {
//         // Enable the button and hide the loading animation after the search is complete
//         searchButton.disabled = false;
//         loading.classList.add('hidden');
//     }, 3000); // Simulating a 3-second search process
// }

// function submitSignUp(event) {
//     event.preventDefault();

//     const studentNumber = document.getElementById('studentNumberInput').value;
//     var url= "https://localhost:5000/submit_sign_up"
//     fetch(url)
//     .then(function(response){
//         if(!response.ok){
//             throw new Error("Network")
//         }
//     })
    // const xhr = new XMLHttpRequest();
    // xhr.open('POST', '/submit_sign_up', true);
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === XMLHttpRequest.DONE) {
    //         if (xhr.status === 200) {
    //             const response = JSON.parse(xhr.responseText);
    //             console.log('Response:', response.message);

    //             if (response.message === 'This student number already exists') {
    //                 console.log('Student number already exists. Please enter a different number.');
    //             } else{
    //                 console.log('here')
    //             }

    //             closeSignUpModal();
    //         } else {
    //             console.error('Error submitting sign-up form:', xhr.status);
    //         }
    //     }
//     };

//     xhr.send('student_number=' + encodeURIComponent(studentNumber));
// }

// document.getElementById('signUpForm').addEventListener('submit', submitSignUp);
