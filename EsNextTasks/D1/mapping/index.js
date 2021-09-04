let stdMap = new Map();
stdMap.set('Ali', {
    Grades: [
        { Coursename: "JavaScript", Grade: "Excellent" },
        { Coursename: "Jquery", Grade: "V.Good" },
        { Coursename: "CSS", Grade: "V.Good" }
    ]
});

stdMap.set('Mohamed', {
    Grades: [
        { Coursename: "JavaScript", Grade: "Excellent" },
        { Coursename: "Jquery", Grade: "Good" },
        { Coursename: "CSS", Grade: "Good" }
    ]
});

stdMap.set('Ibrahim', {
    Grades: [
        { Coursename: "JavaScript", Grade: "Good" },
        { Coursename: "Jquery", Grade: "Excellent" },
        { Coursename: "CSS", Grade: "V.Good" }
    ]
});


// Display each student along with his grades.
stdMap.forEach((val , key , stdMap) => {
    console.log(`${key} => ${val.Grades[0].Coursename} Grade is ${val.Grades[0].Grade}`);
    console.log(`${key} => ${val.Grades[1].Coursename} Grade is ${val.Grades[1].Grade}`);
    console.log(`${key} => ${val.Grades[2].Coursename} Grade is ${val.Grades[2].Grade}`);
});



