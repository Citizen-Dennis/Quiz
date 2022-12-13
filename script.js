//variable to hold selected answer
let ans = ['Accra', 'Torvalds'];

let check = function(){
    let sval1 = document.querySelector("input[name=capital]:checked").value;
if(sval1 == ans[0])
    alert('Correct')
else{
    alert('Wrong');
    answers.innerHTML = 'Accra\n';
}

let sval2 = document.querySelector("input[name=git]:checked").value;
if(sval2 == ans[1])
    alert('Correct')
else{
    alert('Wrong');
    answers.innerHTML = 'Linux Torvald';
}
} 
