function Graduation (input) {
    let index = 0;
    let name = input[index];
    index++;

    let sumGrades = 0;
    let classGrade = 1;
    let badGradeCounter = 0;
    let hasExcluded = false;

    while (classGrade <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4) {
            badGradeCounter++;
            if (badGradeCounter === 2) {
                console.log(`${name} has been excluded at ${classGrade} grade`);
                hasExcluded = true;
                break;
            }
            continue;
        }

        sumGrades += grade;
        classGrade++;
    }

    if (!hasExcluded) {
        let avgGrade = sumGrades / 12;
        console.log(`${name} graduated. Average grade: ${(avgGrade).toFixed(2)}`);
    }  
}