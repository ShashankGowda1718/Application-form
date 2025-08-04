function submit(){
debugger
        fullNameInput = document.getElementById('fullname');
        let nameRegex = /^[a-zA-Z]+$/.test( fullNameInput.value);
        if(nameRegex){
            console.log("Full Name:", fullNameInput.value)
            document.getElementById("hiddenName").style.display = "none"
        }
        else{
            console.log("Full Name:", fullNameInput.value)
            document.getElementById("hiddenName").style.display = "block"
        }

        fatherNameInput = document.getElementById('fathername');
        let fathernameRegex = /^[a-zA-Z]+$/.test( fatherNameInput.value);
        if(fathernameRegex){
            console.log("father Name:", fatherNameInput.value)
            document.getElementById("hiddenFatherName").style.display = "none"
        }
        else{
            console.log("father Name:", fullNameInput.value)
            document.getElementById("hiddenFatherName").style.display = "block"
        }

        motherNameInput = document.getElementById('mothername');
        let mothernameRegex = /^[a-zA-Z]+$/.test( motherNameInput.value);
        if(mothernameRegex){
            console.log("mother Name:", motherNameInput.value)
            document.getElementById("hiddenmotherName").style.display = "none"   
        }
        else{
            console.log("mother Name:", motherNameInput.value)
            document.getElementById("hiddenmotherName").style.display = "block"
        }

        var age= document.getElementById('age');
        console.log("age:",age.value);

        var dob= document.getElementById('dob');
        console.log("Date of Birth:",dob.value);

        var gender= document.getElementById('gender');
        console.log("gender:", gender.value);

        var address= document.getElementById('add');
        console.log("Address:", address.value);

        EmailInput = document.getElementById('email');
        emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(EmailInput.value);
        if(emailRegex){
            console.log("Email address:", EmailInput.value);
            document.getElementById("hiddenEmail").style.display = "none"
        }
        else{
            console.log("Email address:", EmailInput.value);
            document.getElementById("hiddenEmail").style.display = "block"
        } 

        phnoInput = document.getElementById('phno');
        let phnoRegex=/^\d+$/.test(phnoInput.value);
        if(phnoRegex){
            console.log("Phone Number:", phnoInput.value);
            document.getElementById("hiddenPhno").style.display = "none"
        }
        else{
            console.log("Phone Number:", phnoInput.value);
            document.getElementById("hiddenPhno").style.display = "block"
        }

        bloodInput=document.getElementById("bloodgroup");
        let bloodRegex=/^(A|B|AB|O)[+-]$/.test(bloodInput.value)
        if(bloodRegex){
            console.log("Blood group:", bloodInput.value);
            document.getElementById("hiddenbloodgroup").style.display = "none"
        }
        else{
            console.log("Blood group:", bloodInput.value);
            document.getElementById("hiddenbloodgroup").style.display = "block"
        }

        sslcInput=document.getElementById("sslc");
        let sslcRegex=/^(100(\.0{1,2})?|[1-9]?\d(\.\d{1,2})?)$/.test(sslcInput.value)
        if(sslcRegex){
            console.log("SSLC Percentage:", sslcInput.value);
            document.getElementById("hiddensslc").style.display = "none"
        }
        else{
            console.log("SSLC Percentage:", sslcInput.value);
            document.getElementById("hiddensslc").style.display = "block"
        }

        itiInput=document.getElementById("iti");
        let itiRegex=/^(100(\.0{1,2})?|[1-9]?\d(\.\d{1,2})?)$/.test(itiInput.value)
        if(itiRegex){
            console.log("ITI Percentage:", itiInput.value);
            document.getElementById("hiddeniti").style.display = "none"
        }
        else{
            console.log("ITI Percentage:", itiInput.value);
            document.getElementById("hiddeniti").style.display = "block"
        }

        pucInput=document.getElementById("puc");
        let pucRegex=/^(100(\.0{1,2})?|[1-9]?\d(\.\d{1,2})?)$/.test(pucInput.value)
        if(pucRegex){
            console.log("PUC Percentage:", pucInput.value);
            document.getElementById("hiddenpuc").style.display = "none"
        }
        else{
            console.log("PUC Percentage:", pucInput.value);
            document.getElementById("hiddenpuc").style.display = "block"
        }

        var course= document.getElementById('Course');
        console.log("Course:",course.value);
}
    
