function formValidation(){  
    // var uid = document.registration.userid;  
    // var passid = document.registration.passid;  
    var uname = document.registration.username;  
    var uadd = document.registration.address;  
    var ucountry = document.registration.country;  
    var uzip = document.registration.zip;  
    var uemail = document.registration.email;  
    var ucontact = document.registration.contact;
    var umsex = document.registration.msex;  
    var ufsex = document.registration.fsex; 

    // if(userid_validation(uid,5,12)){  
        // if(passid_validation(passid,7,12)){  
            if(allLetter(uname)){  
                if(alphanumeric(uadd)){   
                    if(countryselect(ucountry)){
                        if(allnumeric(uzip)){
                            if(ValidateEmail(uemail)){ 
                                if(allnumeric(ucontact)){ 
                                    if(validsex(umsex,ufsex)){
                                        Resume_create();
                                        
                                    }  
                                }
                            }   
                        }  
                    }   
                }  
            }  
        // }  
    // }  
    return false;  
}  

function Resume_create(){
    document.getElementById("full_name").innerHTML = document.registration.username.value;
    document.getElementById("email").innerHTML = document.registration.email.value;
    document.getElementById("contact_no").innerHTML = document.registration.contact.value;
    document.getElementById("img").src = document.registration.desc.value;
    document.getElementById("email").href = document.registration.email.value;
}

function Resume_education(){
    alert("Form submitted");
    document.getElementById("insti").innerHTML = document.registration2.college_name.value;
    document.getElementById("strm").innerHTML = document.registration2.stream.value;
    document.getElementById("degree").innerHTML = document.registration2.college_prog.value;
    document.getElementById("clg_yr").innerHTML = document.registration2.college_yr.value;
    document.getElementById("12_yr").innerHTML = document.registration2.class12_yr.value;
    document.getElementById("10_yr").innerHTML = document.registration2.class10_yr.value;
    document.getElementById("clg_name").innerHTML = document.registration2.college_name.value;
    document.getElementById("12_name").innerHTML = document.registration2.class12_name.value;
    document.getElementById("10_name").innerHTML = document.registration2.class10_name.value;
    document.getElementById("clg_grade").innerHTML = document.registration2.college_grade.value;
    document.getElementById("12_grade").innerHTML = document.registration2.class12_grade.value;
    document.getElementById("10_grade").innerHTML = document.registration2.class10_grade.value;
    document.getElementById("clg_prog").innerHTML = document.registration2.college_prog.value;
    document.getElementById("12_prog").innerHTML = document.registration2.class12_prog.value;
    document.getElementById("10_prog").innerHTML = document.registration2.class10_prog.value;
    document.getElementById("util").innerHTML = document.registration2.utilities.value;
    document.getElementById("code").innerHTML = document.registration2.coding.value;
    var a = document.getElementsByClassName("achievements");
    var list = document.createElement("ul");
    list.style.paddingLeft = "2px";
    for(var i = 0; i< a.length; i++){
        var list_elem = document.createElement("li");
        list_elem.innerHTML = a[i].value;
        list.appendChild(list_elem);
    }
    document.getElementsByClassName("contents")[0].appendChild(list);
    
    var b = document.getElementsByClassName("extras");
    var list2 = document.createElement("ul");
    list2.style.paddingLeft = "2px";
    for(var i = 0; i< b.length; i++){
        var list_elem = document.createElement("li");
        list_elem.innerHTML = b[i].value;
        list2.appendChild(list_elem);
    }
    document.getElementsByClassName("contents")[1].appendChild(list2);
}

function Resume_work(){
    alert("Form Submited");

    document.getElementById("work_ex_div").innerHTML = "";
    
    var tit = document.createElement("p");
    tit.className  = "section_headers";
    tit.innerHTML = "WORK EXPERIENCE";
    document.getElementById("work_ex_div").appendChild(tit);

    var job_titles = document.getElementsByClassName("job_title");
    var job_objs = document.getElementsByClassName("job_obj");
    var job_apps = document.getElementsByClassName("job_app");
    var job_imps = document.getElementsByClassName("job_imp");
    for(var i = 0; i< job_titles.length; i++){
        var part1 = document.createElement("div");
        var inner = document.createElement("p");
        inner.innerHTML = job_titles[i].value;
        part1.className = "sub_section";
        part1.appendChild(inner);
        //var txt = document.createTextNode(job_titles[i].value);
        //inner.appendChild(txt);
        document.getElementById("work_ex_div").appendChild(part1);

        var tab = document.createElement("table");
        tab.className = "content_table";

        var tab_obj_row = document.createElement("tr");
        var tab_obj_lab = document.createElement("td");
        tab_obj_lab.className = "row_label";
        tab_obj_lab.appendChild(document.createTextNode("OBJECTIVE"));
        var tab_obj = document.createElement("td");
        tab_obj.className = "row_content";
        tab_obj.appendChild(document.createTextNode(job_objs[i].value));
        tab_obj_row.appendChild(tab_obj_lab);
        tab_obj_row.appendChild(tab_obj);
        tab.appendChild(tab_obj_row);

        var tab_app_row = document.createElement("tr");
        var tab_app_lab = document.createElement("td");
        tab_app_lab.className = "row_label";
        tab_app_lab.appendChild(document.createTextNode("APPROACH"));
        var tab_app = document.createElement("td");
        tab_app.className = "row_content";
        tab_app.appendChild(document.createTextNode(job_apps[i].value));
        tab_app_row.appendChild(tab_app_lab);
        tab_app_row.appendChild(tab_app);
        tab.appendChild(tab_app_row);

        var tab_imp_row = document.createElement("tr");
        var tab_imp_lab = document.createElement("td");
        tab_imp_lab.className = "row_label";
        tab_imp_lab.appendChild(document.createTextNode("IMPACT"));
        var tab_imp = document.createElement("td");
        tab_imp.className = "row_content";
        tab_imp.appendChild(document.createTextNode(job_imps[i].value));
        tab_imp_row.appendChild(tab_imp_lab);
        tab_imp_row.appendChild(tab_imp);
        tab.appendChild(tab_imp_row);

        document.getElementById("work_ex_div").appendChild(part1);
        document.getElementById("work_ex_div").appendChild(tab);
    }
    Resume_proj();
}

function Resume_proj(){
    document.getElementById("project").innerHTML = "";
    
    var tit = document.createElement("p");
    tit.className  = "section_headers";
    tit.innerHTML = "PROJECTS & RESEARCH";
    document.getElementById("project").appendChild(tit);

    var job_titles = document.getElementsByClassName("proj_title");
    var job_objs = document.getElementsByClassName("proj_obj");
    var job_apps = document.getElementsByClassName("proj_app");
    var job_imps = document.getElementsByClassName("proj_imp");
    for(var i = 0; i< job_titles.length; i++){
        var part1 = document.createElement("div");
        var inner = document.createElement("p");
        inner.innerHTML = job_titles[i].value;
        part1.className = "sub_section";
        part1.appendChild(inner);
        //var txt = document.createTextNode(job_titles[i].value);
        //inner.appendChild(txt);
        document.getElementById("project").appendChild(part1);

        var tab = document.createElement("table");
        tab.className = "content_table";

        var tab_obj_row = document.createElement("tr");
        var tab_obj_lab = document.createElement("td");
        tab_obj_lab.className = "row_label";
        tab_obj_lab.appendChild(document.createTextNode("OBJECTIVE"));
        var tab_obj = document.createElement("td");
        tab_obj.className = "row_content";
        tab_obj.appendChild(document.createTextNode(job_objs[i].value));
        tab_obj_row.appendChild(tab_obj_lab);
        tab_obj_row.appendChild(tab_obj);
        tab.appendChild(tab_obj_row);

        var tab_app_row = document.createElement("tr");
        var tab_app_lab = document.createElement("td");
        tab_app_lab.className = "row_label";
        tab_app_lab.appendChild(document.createTextNode("APPROACH"));
        var tab_app = document.createElement("td");
        tab_app.className = "row_content";
        tab_app.appendChild(document.createTextNode(job_apps[i].value));
        tab_app_row.appendChild(tab_app_lab);
        tab_app_row.appendChild(tab_app);
        tab.appendChild(tab_app_row);

        var tab_imp_row = document.createElement("tr");
        var tab_imp_lab = document.createElement("td");
        tab_imp_lab.className = "row_label";
        tab_imp_lab.appendChild(document.createTextNode("IMPACT"));
        var tab_imp = document.createElement("td");
        tab_imp.className = "row_content";
        tab_imp.appendChild(document.createTextNode(job_imps[i].value));
        tab_imp_row.appendChild(tab_imp_lab);
        tab_imp_row.appendChild(tab_imp);
        tab.appendChild(tab_imp_row);

        document.getElementById("project").appendChild(part1);
        document.getElementById("project").appendChild(tab);
    }
}

function Add_input(){
    var di = document.createElement("div");

    var line = document.createElement("br");
    var inp = document.createElement("textarea");
    inp.className = "achievements";
    di.appendChild(inp);
    di.appendChild(line);
    document.getElementById("achieve").appendChild(di);
}

function Add_input_extra(){
    var line = document.createElement("br");
    var inp = document.createElement("textarea");
    inp.className = "extras";
    document.getElementById("achieve_extra").appendChild(inp);
    document.getElementById("achieve_extra").appendChild(line);
}

function Add_input_work(){
    var work = document.createElement("div");

    var lab1 = document.createElement("label");
    var inp1 = document.createElement("input");
    var brek1 = document.createElement("br");
    lab1.appendChild(document.createTextNode("Job Title: "));
    inp1.className = "job_title";
    work.appendChild(lab1);
    work.appendChild(inp1);
    work.appendChild(brek1);

    var lab2 = document.createElement("label");
    var inp2 = document.createElement("textarea");
    var brek2 = document.createElement("br");
    lab2.appendChild(document.createTextNode("Objective: "));
    inp2.className = "job_obj";
    work.appendChild(lab2);
    work.appendChild(inp2);
    work.appendChild(brek2);

    var lab3 = document.createElement("label");
    var inp3 = document.createElement("textarea");
    var brek3 = document.createElement("br");
    lab3.appendChild(document.createTextNode("Approach: "));
    inp3.className = "job_app";
    work.appendChild(lab3);
    work.appendChild(inp3);
    work.appendChild(brek3);

    var lab4 = document.createElement("label");
    var inp4 = document.createElement("textarea");
    var brek4 = document.createElement("br");
    lab4.appendChild(document.createTextNode("Impact: "));
    inp4.className = "job_imp";
    work.appendChild(lab4);
    work.appendChild(inp4);
    work.appendChild(brek4);

    var brek5 = document.createElement("br");
    var brek6 = document.createElement("br");    
    work.appendChild(brek5);
    work.appendChild(brek6);

    document.getElementById("work_exp").appendChild(work);
}

function Add_input_proj(){
    var work = document.createElement("div");

    var lab1 = document.createElement("label");
    var inp1 = document.createElement("input");
    var brek1 = document.createElement("br");
    lab1.appendChild(document.createTextNode("Project Title: "));
    inp1.className = "proj_title";
    work.appendChild(lab1);
    work.appendChild(inp1);
    work.appendChild(brek1);

    var lab2 = document.createElement("label");
    var inp2 = document.createElement("textarea");
    var brek2 = document.createElement("br");
    lab2.appendChild(document.createTextNode("Objective: "));
    inp2.className = "proj_obj";
    work.appendChild(lab2);
    work.appendChild(inp2);
    work.appendChild(brek2);

    var lab3 = document.createElement("label");
    var inp3 = document.createElement("textarea");
    var brek3 = document.createElement("br");
    lab3.appendChild(document.createTextNode("Approach: "));
    inp3.className = "proj_app";
    work.appendChild(lab3);
    work.appendChild(inp3);
    work.appendChild(brek3);

    var lab4 = document.createElement("label");
    var inp4 = document.createElement("textarea");
    var brek4 = document.createElement("br");
    lab4.appendChild(document.createTextNode("Impact: "));
    inp4.className = "proj_imp";
    work.appendChild(lab4);
    work.appendChild(inp4);
    work.appendChild(brek4);

    var brek5 = document.createElement("br");
    var brek6 = document.createElement("br");    
    work.appendChild(brek5);
    work.appendChild(brek6);

    document.getElementById("proj").appendChild(work);
}

function layout1(){
    var lay2 = document.getElementsByClassName("inputForm2")[0];
    lay2.style.display = "none";
    var lay1 = document.getElementsByClassName("inputForm")[0];
    lay1.style.display = "block";
    var lay3 = document.getElementsByClassName("inputForm3")[0];
    lay3.style.display = "none";
}

function layout2(){
    var lay2 = document.getElementsByClassName("inputForm2")[0];
    lay2.style.display = "block";
    var lay1 = document.getElementsByClassName("inputForm")[0];
    lay1.style.display = "none";
    var lay3 = document.getElementsByClassName("inputForm3")[0];
    lay3.style.display = "none";
}

function layout3(){
    var lay2 = document.getElementsByClassName("inputForm2")[0];
    lay2.style.display = "none";
    var lay1 = document.getElementsByClassName("inputForm")[0];
    lay1.style.display = "none";
    var lay3 = document.getElementsByClassName("inputForm3")[0];
    lay3.style.display = "block";
}

function userid_validation(uid,mx,my){  
    var uid_len = uid.value.length;  
    if (uid_len == 0 || uid_len >= my || uid_len < mx){  
        alert("User Id should not be empty / length be between "+mx+" to "+my);  
        uid.focus();  
        return false;  
    }  
    return true;  
}  

function passid_validation(passid,mx,my){  
    var passid_len = passid.value.length;  
    if (passid_len == 0 ||passid_len >= my || passid_len < mx){  
        alert("Password should not be empty / length be between "+mx+" to "+my);  
        passid.focus();  
        return false;  
    }  
    return true;  
}  

function allLetter(uname){   
    var letters = /^[A-Za-z\s]+$/;   //Regex
    if(uname.value.match(letters)){  
        return true;  
    }  
    else{  
        alert('Username must have alphabet characters only');  
        uname.focus();  
        return false;  
    }  
}  

function alphanumeric(uadd){   
    return true;
    var letters = /^[0-9a-zA-Z/-]+$/;  
    if(uadd.value.match(letters)){  
        return true;  
    }  
    else{  
        alert('User address must have alphanumeric characters only');  
        uadd.focus();  
        return false;  
    }  
} 

function countryselect(ucountry){  
    if(ucountry.value == "Default"){  
        alert('Select your country from the list');  
        ucountry.focus();  
        return false;  
    }  
    else{  
        return true;  
    }  
}  

function allnumeric(uzip){   
    var numbers = /^[0-9/-]+$/;  
    if(uzip.value.match(numbers)){  
        return true;  
    }  
    else{  
        alert('ZIP code must have numeric characters only');  
        uzip.focus();  
        return false;  
    }  
}  

function ValidateEmail(uemail){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(uemail.value.match(mailformat)){  
        return true;  
    }  
    else{  
        alert("You have entered an invalid email address!");  
        uemail.focus();  
        return false;  
    }  
}

function validsex(umsex,ufsex){  
    x=0;  
    if(umsex.checked){  
        x++;  
    } 
    if(ufsex.checked){  
        x++;   
    }  
    if(x==0){  
        alert('Select Male/Female');  
        umsex.focus();  
        return false;  
    }  
    else{  
        alert('Form Successfully Submitted');  
        return true;
    }  
}
  