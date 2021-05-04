function validate_form(){
    if(document.emp.emp_fname.value==""){
    alert("please fill the first name of employee");
    }
    if(document.emp.emp_mname.value==""){
        alert("please fill the Middle name of Employee")
    }
    if(document.emp.emp_lname.value==""){
        alert("please fill the Last name of Employee")
    }
    if(document.emp.emp_dob.value==""){
        alert("please fill the Date of Birth of Employee")
    }
    if(document.emp.emp_dob.value==""){
        alert("please select the Gender of Employee")
    }
    if(document.emp.emp_mname.value==""){
        alert("please fill the middle name of Employee")
    }
                
}


let employee_data=[];

const addData=(ev)=>{
    ev.preventDefault();
    let emp_data={
        firstName:document.getElementById('emp_fname').value,
        middleName:document.getElementById('emp_mname').value,
        lastName:document.getElementById('emp_lname').value,
        DoB:document.getElementById('emp_dob').value,
        gender:document.getElementById('emp_gender').value,
        salary:document.getElementById('emp_sal').value
    }

    employee_data.push(emp_data);
    document.forms[0].reset();

    console.warn('added',{employee_data});
    let pre=document.querySelector('#msg pre');
    pre.textContent= '\n' + JSON.stringify(employee_data,'\t',2);
}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('btn').addEventListener('click',addData);
});