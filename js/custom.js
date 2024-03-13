// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

document.addEventListener("DOMContentLoaded", function () {
    var hiddenSection = document.getElementById("hidden-section");
    var readMoreBtn = document.getElementById("read-more-btn");
    var readLessBtn = document.getElementById("read-less-btn");

    // Event listener for the "Read More" button
    readMoreBtn.addEventListener("click", function () {
        hiddenSection.style.display = "block"; // Show the hidden section
        readMoreBtn.style.display = "none"; // Hide the "Read More" button
        readLessBtn.style.display = "inline-block"; // Show the "Read Less" button
    });

    // Event listener for the "Read Less" button
    readLessBtn.addEventListener("click", function () {
        hiddenSection.style.display = "none"; // Hide the hidden section
        readMoreBtn.style.display = "inline-block"; // Show the "Read More" button
        readLessBtn.style.display = "none"; // Hide the "Read Less" button
    });
});
function toggleAnswer(questionId) {
    let x = document.getElementsByClassName("answer");

    // Hide all answers except the one corresponding to the selected question
    for (let i = 0; i < x.length; i++) {
        if (x[i].id === questionId) {
            if (x[i].style.display === "none" || x[i].style.display === "") {
                x[i].style.display = "block"; // Show the answer if it's hidden
            } else {
                x[i].style.display = "none"; // Hide the answer if it's already shown
            }
        } else {
            x[i].style.display = "none"; // Hide other answers
        }
    }
}