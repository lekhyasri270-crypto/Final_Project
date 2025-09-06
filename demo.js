let messagePara = document.getElementById("message");
messagePara.textContent = `THANK YOU for booking a Demo.`;
messagePara.style.color = "green";
document.getElementById("demoBtn").addEventListener("click", function() {
    alert("Redirecting to demo scheduling form...");
    window.location.href = "https://your-demo-form-link.com";
});