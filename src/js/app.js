var changeBackground = confirm (" Do you want to change background color?");
if (changeBackground) {
    document.body.style.background = "black";
}


    var userAge = prompt("Yaşınızı girin:");
    if (userAge !== null) {
        userAge = parseInt(userAge);
        if (userAge < 18) {
            alert("Yaşınız 18'den kiçik olduğu uçun xəbərdarlıq mesajı çıxır.");
        }
    }  


    class User {
        constructor(ad, soyad, password) {
            this.ad = ad;
            this.soyad = soyad;
            this.password = password;
        }

        fullname() {
            return this.ad + " " + this.soyad;
        }
    }

    const user = new User("Nigar", "Cafarova", "27");

    function displayFullName() {
        var fullnameElement = document.getElementById("fullname");
        fullnameElement.innerHTML = user.fullname().toUpperCase();
    }
    