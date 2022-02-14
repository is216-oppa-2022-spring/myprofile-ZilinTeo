function highlight(){
    var elements = document.getElementsByTagName('td');
    for(element of elements){
        element.classList.add('bg-dark');
        element.classList.add('text-white');
    }
}
function unhighlight(){
    var elements = document.getElementsByTagName('td');
    for(element of elements){
        element.classList.remove('bg-dark');
        element.classList.remove('text-white');
    }
}