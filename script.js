document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let city = document.getElementById("city").value;
    let isStudent = document.getElementById("isStudent").value;
    let photo = document.getElementById("photo").files[0];

    let resultText = `
        Ім'я: ${name}<br>
        Вік: ${age}<br>
        Ріст: ${height} см<br>
        Вага: ${vaga} кг<br>
        Місто: ${city}<br>
        Студент: ${isStudent}
    `;

    document.getElementById("resultText").innerHTML = resultText;

    if (photo) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("resultImage").src = e.target.result;
        };
        reader.readAsDataURL(photo);
    }

    document.getElementById("result").style.display = "block";
});
