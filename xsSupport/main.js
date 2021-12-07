function initPage(){/**初始化页面 */
    {/**读取文档信息 */
        var store="";//全部储存对象
        var lessons;//课程列表
        //读取json文件
        let requestURL="store.json";
        let request=new XMLHttpRequest();
        request.open("GET",requestURL);
        request.responseType="text";
        request.send();
        request.onload = function(){
            store=JSON.parse(request.response);
            for(let i=0;i<store.lessonList.length;i++){
                addLesson(store.lessonList[i]);
            }
            openLesson("../main/"+store.lessonList[store.displayLessonIndex].identifier+"_"+store.lessonList[store.displayLessonIndex].path+".html");
            registerAction();   
            //填写标题
            document.querySelector(".leftPan .title").innerHTML=store.projectName; 
        };
    }
}

function registerAction(){/**注册动作 */
    {/**单击选择课程 */
        var lessons=document.querySelectorAll(".leftPan ul>li>p");
        for(let i=0;i<lessons.length;i++){
            lessons[i].onclick=function(){
                console.log(lessons[i].getAttribute("data-path"))
                openLesson(lessons[i].getAttribute("data-path"));
                let cl=lessons[i].classList;
                let hasCurrent=false;
            }
        }
    }
    {/**进入课程 */
        document.querySelector(".jump").onclick=function(){

        }
    }
}


function addLesson(obj){/**添加左侧列表 */
    let container=document.querySelector(".leftPan ul");
    let textTemp="<li><p data-path=\"../main/"+obj.identifier+"_"+obj.path+".html\">"+obj.name+"</p></li>";
    container.innerHTML+=textTemp;
}
function openLesson(path){/**切换iframe路径 */
    let iframeBox=document.querySelector(".rightPan iframe");
    iframeBox.src=path;
}
function junpLink(path){/**跳转到相应课程的网页 */
    window.location=path;
}