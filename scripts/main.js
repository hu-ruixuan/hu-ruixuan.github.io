// 将图像选择成变量
let myImage = document.querySelector("img");

// 当点击图像时更改图像的索引，切换图像
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/picture2.jpg") {
    myImage.setAttribute("src", "images/picture1.jpg");
  } else {
    myImage.setAttribute("src", "images/picture2.jpg");
  }
};

// 将按钮和标题选择成变量
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 产生输入框，输入姓名后先存储，同时更改标题内容
function setUserName(){
    let myName = prompt('please input your name:');
    // 检测是否输入为空
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Music is cool!  ' + myName;
    }
};

// 检测存储中是否有姓名
if (!localStorage.getItem("name")) {
    // 如果没有，则调用获取姓名函数
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Music is cool!  " + storedName;
};

// 提供重复触发效果的按钮
myButton.onclick = function(){
    setUserName();
};