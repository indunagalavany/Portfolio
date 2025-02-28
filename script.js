document.addEventListener("DOMContentLoaded", function () { 
    console.log("Script loaded"); // ✅ Debugging check

    // GitHub Link Click Event
    document.getElementById("githubLink").addEventListener("click", function () {
        console.log("GitHub clicked");
        window.open("https://github.com/indunagalavany", "_blank");
    });

    // LinkedIn Link Click Event
    document.getElementById("linkedinLink").addEventListener("click", function () {
        console.log("LinkedIn clicked");
        window.open("https://www.linkedin.com/in/indu-pasam-3a9b3b285/", "_blank");
    });

    // CodeChef Link Click Event
    document.getElementById("codechefLink").addEventListener("click", function () {
        console.log("CodeChef clicked");
        window.open("https://www.codechef.com/users/indunagalavany", "_blank");
    });
});

