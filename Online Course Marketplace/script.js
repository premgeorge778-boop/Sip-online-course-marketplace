// ===============================
// GeoMarket JavaScript
// ===============================

// Search Courses
function searchCourse() {
    let input = document.getElementById("search");

    if (input == null) {
        alert("Search box not found!");
        return;
    }

    let course = input.value.trim();

    if (course === "") {
        alert("Please enter a course name.");
    } else {
        alert("Searching for: " + course);
        window.location.href = "courses.html";
    }
}

// Enroll Button
function enrollCourse(courseName) {
    alert("You selected: " + courseName);
    window.location.href = "course-details.html";
}

// Buy Course
function buyCourse() {
    let confirmBuy = confirm("Do you want to purchase this course?");

    if (confirmBuy) {
        window.location.href = "payment.html";
    }
}

// Login
function loginUser() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    alert("Login Successful!");
    window.location.href = "dashboard.html";
}

// Register
function registerUser() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please complete the registration form.");
        return;
    }

    alert("Registration Successful!");
    window.location.href = "login.html";
}

// Contact Form
function sendMessage() {

    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("contactMessage").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    alert("Message Sent Successfully!");

    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactMessage").value = "";
}

// Add Wishlist
function addWishlist(courseName) {

    alert(courseName + " added to Wishlist!");

    window.location.href = "wishlist.html";
}

// Remove Wishlist
function removeWishlist(courseName){

    alert(courseName + " removed from Wishlist.");

}

// Dashboard
function startCourse(courseName){

    alert("Opening " + courseName);

}

// Logout
function logout(){

    let answer = confirm("Are you sure you want to Logout?");

    if(answer){
        window.location.href="index.html";
    }

}

// Payment
function paymentSuccess(){

    alert("Payment Successful!");

    window.location.href="dashboard.html";

}

// Learn More
function learnMore(){

    window.location.href="about.html";

}

// View Instructor
function viewInstructor(){

    window.location.href="instructors.html";

}

// Categories
function openCategory(category){

    alert(category + " Courses");

    window.location.href="courses.html";

}

// Newsletter
function subscribe(){

    let email=document.getElementById("subscribeEmail");

    if(email==null){

        alert("Subscription Successful!");

        return;

    }

    if(email.value==""){

        alert("Please enter your Email.");

        return;

    }

    alert("Subscribed Successfully!");

    email.value="";

}