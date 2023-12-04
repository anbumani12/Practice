// const divison = document.createElement("div");
// divison.innerHTML = "<h1>hi this is demo</h1>";
// document.body.append(divison);

// crete multiple elements
// const divison = document.createElement("div");
// const heading = document.createElement("heading")
// const span = document.createElement("span")
//  heading.innerHTML = "<h1>hi this is head tag</h1>";
//  span.innerHTML = "<span>hi this is span</span>";
//  divison.append(heading);
//  divison.append(span);
//  document.body.append(divison);

//create multiple elements dynamically
// function elements(tagname,content,attrname,attrvalue){
//         const ele = document.createElement(tagname);
//         ele.innerHTML = content;
//         ele.setAttribute(attrname,attrvalue);
//         return ele;
// }
// const ele1 = elements ("div","hi this is div tag","class","container");
// const span = elements ("span","<h1>hi this is head tag</h1>","class","span");
// ele1.append(span);
// document.body.append(ele1);

//call back
// console.log("App started");
// setTimeout(() =>console.log("Loading..."),3000);
// setTimeout(() =>console.log("App completed"),5000);
// console.log("Building the app");

//callback hell
/*setTimeout(() => {
  console.log("5");
  setTimeout(() => {
    console.log("4");
    setTimeout(() => {
      console.log("3");
      setTimeout(() => {
        console.log("2");
        setTimeout(() => {
          console.log("1");
          setTimeout(() => {
            console.log("Happy Independence Day");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


setTimeout(() => {
  document.getElementById("display").innerText = "10";
  setTimeout(() => {
    document.getElementById("display").innerText = "9";
    setTimeout(() => {
      document.getElementById("display").innerText = "8";
      setTimeout(() => {
        document.getElementById("display").innerText = "7";
        setTimeout(() => {
          document.getElementById("display").innerText = "6";
          setTimeout(() => {
            document.getElementById("display").innerText = "5";
            setTimeout(() => {
              document.getElementById("display").innerText = "4";
              setTimeout(() => {
                document.getElementById("display").innerText = "3";
                setTimeout(() => {
                  document.getElementById("display").innerText = "2";
                  setTimeout(() => {
                    document.getElementById("display").innerText = "1";
                    setTimeout(() => {
                      document.getElementById("display").innerText =
                        "Happy Independence day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

