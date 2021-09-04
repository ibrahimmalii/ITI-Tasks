class Student{
    name;
    univercity;
    faculity;
    finalGrade;

    constructor(name , univercity , faculity , finalGrade){
        this.name = name;
        this.univercity = univercity;
        this.faculity = faculity;
        this.finalGrade = finalGrade;
    }

    print(){
        console.log(`Std Name Is : ${this.name}
            university : ${this.univercity}
            faculity : ${this.faculity}
            finalGrade : ${this.finalGrade}
        `);
    }
}

let stdOne = new Student('ali' , 'Asyuit' , 'Science' , 'Excellent');
console.log(stdOne.print());