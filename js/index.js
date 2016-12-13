// for (var i = 10; i >= 2; i = i - 2 ) {
//     document.write(i);
//     document.write('<br>');
// }

// var i = 0;
// while (i <= 10) {
//     document.write(i);
//     document.write('<br>');
//     i++;
// }

// var i = 0;
// do {
//     document.write(i);
//     document.write('<br>');
//     i++;
// } while (i <= 10) {

// var arr = [1, 2, 3, 4, 5];
// arr.push(6);
// arr.push(7);
// arr[50] = 6;
// // document.write(arr);

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i]);
//     document.write('<br>');
// }

// var students = {
//     vasyl: 20,
//     petro: 21,
//     ivan: 18
// }

// // document.write(students['ivan']);

// for (var key in students) {
//     document.write(key + ':' + students[key]);
//     document.write('<br>');
// }

var student = {
    name: 'vasyl',
    age: 20,
    learn: function(what) {
        document.write(this.name + ' is learning ' + what);
        document.write('<br>');
    }
}

student.learn('JavaScript');

function Student(name, age) {
    this.name = name,
    this.age = age,
    this.learn = function(what) {
        document.write(this.name + ' is learning ' + what);
        document.write('<br>');
    }
    return this;
}

var petro = new Student('Petro', 20);
var ivan = new Student('Ivan', 21);
petro.learn('HTML');
ivan.learn('CSS');