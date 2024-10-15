function sqra(){
    let math=parseInt(document.getElementById("math").value);
    let phys=parseInt(document.getElementById("phys").value);
    let chem=parseInt(document.getElementById("chem").value);
    let hindi=parseInt(document.getElementById("hindi").value);
    let eng=parseInt(document.getElementById("eng").value);
    let total_marks=(hindi+eng+math+phys+chem);
    let percentage=total_marks/5;
    

    if((hindi>=0 && hindi<=100) && (eng>=0 && eng<=100) && (math>=0 && math<=100) && (phys>=0 && phys<=100) && (chem>=0 && chem<=100) ){
        document.getElementById("ans").innerHTML="Total Marks : "+total_marks;
        document.getElementById("ans1").innerHTML="Percentage : "+percentage+"%";
        if(percentage>=60){
            document.getElementById("grade").innerHTML = ("Congratulation !<br>Result : PASS<br>Grade : A");
        }else if(percentage>=50){
            document.getElementById("grade").innerHTML = ("Congratulation !<br>Result : PASS<br>Grade : B");
        }else if(percentage>=40){
            document.getElementById("grade").innerHTML = ("Congratulation !<br>Result : PASS<br>Grade : C");
        }else if(percentage>=33){
            document.getElementById("grade").innerHTML = ("Congratulation !<br>Result : PASS<br>Grade : D");
        }else{
            document.getElementById("grade").innerHTML = ("Ohh ! <br>Result : FAIL <br>Keep Study");
        }
    }else{
        document.getElementById("grade").innerHTML = ("<b style='color: red'>*Please Enter Valid marks<br>*Marks should be greater than 0 and less than 100</b>")
    }
}