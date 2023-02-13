let weNode = document.getElementById("we");

// adding new textArea for work experience
function addNewWE() {
  let newNode = document.createElement("textarea");
  newNode.classList = "weText";
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", " Enter Work Experience");
  weNode.appendChild(newNode);
  let addBreak = document.createElement("br");
  weNode.appendChild(addBreak);
}

let weNode2 = document.getElementById("aq");
// adding new textArea for Acadmic Qualification
function addNewAQ() {
  let newNode2 = document.createElement("textarea");
  newNode2.classList = "aqText";
  newNode2.setAttribute("rows", 2);
  newNode2.setAttribute("placeholder", " Enter Acadmic Qualification");
  weNode2.appendChild(newNode2);
  let addBreak = document.createElement("br");
  weNode2.appendChild(addBreak);
}

let weNode3 = document.getElementById("lang");
// adding new textArea for lang
function addNewlang() {
  let newNode = document.createElement("textarea");
  newNode.classList = "langText";
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", " Enter languages");
  weNode3.appendChild(newNode);
  let addBreak = document.createElement("br");
  weNode3.appendChild(addBreak);
}

let weNode4 = document.getElementById("certi");
// adding new textArea for certificates
function addNewcerti() {
  let newNode = document.createElement("textarea");
  newNode.classList = "certiText";
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", " Enter certificates");
  weNode4.appendChild(newNode);
  let addBreak = document.createElement("br");
  weNode4.appendChild(addBreak);
}

let weNode5 = document.getElementById("Skill");
// adding new textArea for skill
function addNewSkill() {
  let newNode = document.createElement("textarea");
  newNode.classList = "userSkills";
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", " Enter skill");
  weNode5.appendChild(newNode);
  let addBreak = document.createElement("br");
  weNode5.appendChild(addBreak);
}

// change the colour of background
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//save all info form to template
function saveFunction() {
  //name
  document.getElementById("userName2").innerText =
    document.getElementById("userName").value;
  //number
  document.getElementById("userNum2").innerText =
    document.getElementById("userNum").value;
  document.getElementById("userNum2").href =
    "tel:" + document.getElementById("userNum").value;

  //address
  document.getElementById("userAdd2").innerText =
    document.getElementById("userAdd").value;
  //linkedIn
  document.getElementById("userLinked2").href =
    document.getElementById("userLinked").value;

  document.getElementById("userLinked2").innerText =
    document.getElementById("userLinked").value;
  //gmail
  document.getElementById("userMail2").innerText =
    document.getElementById("userMail").value;

  document.getElementById("userMail2").href =
    "mailto:" + document.getElementById("userMail").value;
  //objective
  document.getElementById("userObj2").innerText =
    document.getElementById("userObj1").value;

  //work experience
  let workExp = document.getElementsByClassName("weText");
  let str = "";
  for (let i of workExp) {
    str = str + `<li> ${i.value} </li>`;
  }
  document.getElementById("userWork2").innerHTML = str;
  //education
  let acadmicQua = document.getElementsByClassName("aqText");
  let str2 = "";
  for (let i of acadmicQua) {
    str2 = str2 + `<li> ${i.value} </li>`;
  }
  document.getElementById("userAq2").innerHTML = str2;
  //languages
  let langData = document.getElementsByClassName("langText");
  let str3 = "";
  for (let i of langData) {
    str3 = str3 + `<li> ${i.value} </li>`;
  }
  document.getElementById("langText2").innerHTML = str3;

  //certificate
  let certiData = document.getElementsByClassName("certiText");
  let str4 = "";
  for (let i of certiData) {
    str4 = str4 + `<li> ${i.value} </li>`;
  }
  document.getElementById("certiText2").innerHTML = str4;

  //skill
  let skillData = document.getElementsByClassName("userSkills");
  let str5 = "";
  for (let i of skillData) {
    str5 = str5 + `<li><button class="btn btn-info"> ${i.value} </button></li>`;
  }
  document.getElementById("userSkill2").innerHTML = str5;

  //upload image
  // let file = document.getElementById("image").files[0];
  // let reader = new FileReader();
  // reader.readAsDataURL(file);
  // reader.onloadend = function () {
  //   document.getElementById("image2").src = reader.result;
  // };
  //hide form and then show the template
  document.getElementById("form").style.display = "none";
  document.getElementById("main-template").style.display = "block";
}

//print the cv
function printCv() {
  document.getElementById("max-temp").style.display = "none";
  window.print();
  document.getElementById("max-temp").style.display = "block";
}

function backForm() {
  document.getElementById("form").style.display = "block";
  document.getElementById("main-template").style.display = "none";
}
// function redFun() {
//   document.getElementsByClassName("colorClass").style.backgroundColor =
//     "#ff0000";
// }
// function blueFun() {}
// function blackFun() {}
// function greenFun() { }

document.getElementById("redFun").onclick = function () {
  document.getElementById("colorClass2").style.backgroundColor =
    "rgb(226, 135, 135)";
  document.getElementById("colorClass3").style.color = "rgb(226, 135, 135)";
  document.getElementById("colorClass4").style.color = "rgb(226, 135, 135)";
  document.getElementById("colorClass5").style.color = "rgb(226, 135, 135)";
  document.getElementById("colorClass6").style.color = "rgb(226, 135, 135)";
  document.getElementById("colorClass7").style.color = "rgb(226, 135, 135)";
};

document.getElementById("blueFun").onclick = function () {
  document.getElementById("colorClass2").style.backgroundColor =
    "rgb(140, 140, 220)";
  document.getElementById("colorClass3").style.color = "rgb(140, 140, 220)";
  document.getElementById("colorClass4").style.color = "rgb(140, 140, 220)";
  document.getElementById("colorClass5").style.color = "rgb(140, 140, 220)";
  document.getElementById("colorClass6").style.color = "rgb(140, 140, 220)";
  document.getElementById("colorClass7").style.color = "rgb(140, 140, 220)";
};

document.getElementById("yellowFun").onclick = function () {
  document.getElementById("colorClass2").style.backgroundColor =
    "rgb(202, 229, 119)";
  document.getElementById("colorClass3").style.color = "rgb(202, 229, 119)";
  document.getElementById("colorClass4").style.color = "rgb(202, 229, 119)";
  document.getElementById("colorClass5").style.color = "rgb(202, 229, 119)";
  document.getElementById("colorClass6").style.color = "rgb(202, 229, 119)";
  document.getElementById("colorClass7").style.color = "rgb(202, 229, 119)";
};

document.getElementById("greenFun").onclick = function () {
  document.getElementById("colorClass2").style.backgroundColor =
    "rgb(106, 200, 106)";
  document.getElementById("colorClass3").style.color = "rgb(106, 200, 106)";
  document.getElementById("colorClass4").style.color = "rgb(106, 200, 106)";
  document.getElementById("colorClass5").style.color = "rgb(106, 200, 106)";
  document.getElementById("colorClass6").style.color = "rgb(106, 200, 106)";
  document.getElementById("colorClass7").style.color = "rgb(106, 200, 106)";
};
