const cursor=document.getElementById('cursor-outer');
const pointer1=document.getElementById('pointer1');
const pointer2=document.getElementById('pointer2');
const pointer3=document.getElementById('pointer3');

document.addEventListener('mousemove',function(e){
    cursor.style.left=`${e.clientX-12}px`;
    cursor.style.top=`${e.clientY-12}px`;

    pointer1.style.left=`${e.clientX-6}px`;
    pointer1.style.top=`${e.clientY-6}px`;

    pointer2.style.left=`${e.clientX-4}px`;
    pointer2.style.top=`${e.clientY-4}px`;

    pointer3.style.left=`${e.clientX-2}px`;
    pointer3.style.top=`${e.clientY-2}px`;
})