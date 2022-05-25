// Add an event listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
document.querySelector("#print").addEventListener("click", () => printCertificate(student()))


// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.querySelector("#reset").addEventListener("click", () => {
    [...document.querySelectorAll("input")].forEach(e => e.value = "");
    [...document.querySelectorAll(".cert-data")].forEach(e => e.textContent = "")
})

// Create a function that instantiates a new student object with the input from the HTML form. 
function student(){
    // Declare any necessary variables.
    let name = document.querySelector("#studentName").value
    let course = document.querySelector("#className").value
    let scores = convertToNum(document.querySelector("#studentScores").value)
    let topScores = convertToNum(document.querySelector("#possibleScores").value)   
    return new Student(name, course, scores, topScores);
}

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function printCertificate(cert) {
    document.querySelector("#certStudentName").innerHTML += cert.getName()
    document.querySelector("#certClassName").innerHTML += cert.getClass()
    document.querySelector("#certGrade").innerHTML += cert.grade()
}
// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function convertToNum(arr) {
    return arr.split(",").map(e => parseInt(e))
}