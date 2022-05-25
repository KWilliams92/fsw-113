// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
class Student {
    constructor(studentName, className, studentScores, possibleScores) {

        this.studentName = studentName
        this.className = className
        this.studentScores = studentScores
        this.possibleScores = possibleScores

    }

// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
    getName(){
        return this.studentName
    }
    getClass(){
        return this.className
    }
    scoreSum(){
        return this.studentScores.reduce((t, c) => (t + c))
    }
    totalPoss(){
        return this.possibleScores.reduce((t, c) => (t + c)) 
    }
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)
    grade(){
        let totalScore = (this.scoreSum()/this.totalPoss()) * 100

        if (totalScore >= 90){
             return "A";
        }
        if (totalScore >= 80){
            return "B";
        }
        if (totalScore >= 70){
            return "C";
        }
        if (totalScore >= 60){
            return "D";
        }
        else 
        { return "F"; }
    }
}