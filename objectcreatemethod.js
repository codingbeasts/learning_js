//inheritance with Object.create Method
// creating object with Object.create();

var student = {
  calcPercentage: function(){
    return this.marks / 5;
  }
};


var dipanshu = Object.create(student);
dipanshu.name="dipanshu";
dipanshu.place="tagore garden";
dipanshu.marks=468;


console.log(dipanshu.calcPercentage());


var jatin = Object.create(student,{
  name: {value: "jatin"},
  place:{value: "subash nagar"},
  marks: {value:499}
});

console.log(jatin.calcPercentage());
