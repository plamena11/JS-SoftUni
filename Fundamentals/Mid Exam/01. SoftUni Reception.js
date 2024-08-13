function SoftUni_Reception (input) {
    let employee1 = Number(input[0]);
    let employee2 = Number(input[1]);
    let employee3 = Number(input[2]);
    let studentsCount = Number(input[3]);
    let employee = employee1 + employee2 + employee3;
    let hours = 0;
    
    while (studentsCount > 0) {
        studentsCount -= employee;
        hours++;
    
        if (hours % 4 == 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);
}