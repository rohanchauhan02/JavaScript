//chalange 1: Your age in Days
function ageInDays(){
    var birthYear=prompt("what yaer were you born..my friend?");
    var ageInDaysss=(2020-birthYear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('your are ' + ageInDaysss +' days old.');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    // document.getElementById('flex-box-result').remove();
    document.getElementById('ageInDays').remove();
    // h1.reset;
}