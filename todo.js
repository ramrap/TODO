// var h =document.createElement('h1')
// var myValue =document.createTextNode("Hello World!")

// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)


// var value=5;
// while (val>0){

//     console.log(val);
//     val--;
    
// }


function addItem(){

    var input=document.getElementById('input');
    var item=input.value;
    console.log("value of item is"+item);
    

    var ul = document.getElementById('list');
    var textnode = document.createTextNode(item)
    if(item===''){
        const pValue=document.getElementById("checkString");
        pValue.textContent="Enter a TODO";
    }
    else{
        

        //create li
        var li=document.createElement('li');
        //create checkbox
        var checkboc=document.createElement('input');
        checkboc.type='checkbox';
        checkboc.setAttribute('id','check');

        // create label
        var label =document.createElement('label');
        

        

        //add these elements on web page
        ul.appendChild(label);
        li.appendChild(checkboc);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        //li.className='visual'
        setTimeout(()=>{
            li.className='visual';

        },1
        );

        input.value='';




    }



}