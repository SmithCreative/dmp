<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'admin@pmi-investments.co.za'; // Replace with your email address
    $subject = 'New message from website contact form';
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo 'Message sent successfully!';
    } else {
        echo 'Failed to send message. Please try again later.';
    }
} else {
    // Redirect to the contact form if accessed directly
    header("Location: index.html");
    exit();
}
?>
