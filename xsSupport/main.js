var currentLessonIndex;
function getStore(f){
    let requestURL="store.json";
    let request=new XMLHttpRequest();
    request.open("GET",requestURL);
    request.responseType="text";
    request.send();
    request.onload = function(){
        var store=JSON.parse(request.response);
        f(store);
    };
}
{/**查看源码 */
    function showCode(){
        {/**定制部分 */
            getStore(function(store){
                let baseDir="../main/"+store.lessonList[currentLessonIndex].identifier+"_"+store.lessonList[currentLessonIndex].path.slice(0,-5);
                {/**返回js */
                    let requestFjsURL=baseDir+"/sketch.js";
                    let requestFjs=new XMLHttpRequest();
                    requestFjs.open("GET",requestFjsURL);
                    requestFjs.responseType="text";
                    requestFjs.send();
                    requestFjs.onload = function(){
                        document.querySelector(".codePan .js").innerText=(requestFjs.response);
                    }
                }
                {/**返回frag */
                    let requestFfrgURL=baseDir+"/vez.frag";
                    let requestFfrg=new XMLHttpRequest();
                    requestFfrg.open("GET",requestFfrgURL);
                    requestFfrg.responseType="text";
                    requestFfrg.send();
                    requestFfrg.onload = function(){
                        document.querySelector(".codePan .frag").innerText=(requestFfrg.response);
                    }
                }
                {/**返回vert */
                    let requestFvertURL=baseDir+"/vez.vert";
                    let requestFvert=new XMLHttpRequest();
                    requestFvert.open("GET",requestFvertURL);
                    requestFvert.responseType="text";
                    requestFvert.send();
                    requestFvert.onload = function(){
                        document.querySelector(".codePan .vert").innerText=(requestFvert.response);
                    }
                }
            });
        }
    }
}

function initPage(){/**初始化页面 */
    {/**读取文档信息 */
        getStore(function(store){
            for(let i=0;i<store.lessonList.length;i++){
                addLesson(store.lessonList[i]);
            }
            currentLessonIndex=store.displayLessonIndex;//设置首页课程
            openLesson("../main/"+store.lessonList[store.displayLessonIndex].identifier+"_"+store.lessonList[store.displayLessonIndex].path+".html");
            registerAction();   
            //填写标题
            document.querySelector(".leftPan .title").innerHTML=store.projectName; 
            showCode();
        });
    }
}
function registerAction(){/**注册动作 */
    {/**单击选择课程 */
        var lessons=document.querySelectorAll(".leftPan ul>li>p");
        for(let i=0;i<lessons.length;i++){
            lessons[i].onclick=function(){
                openLesson(lessons[i].getAttribute("data-path"));
                currentLessonIndex=i;
                showCode();
            }
        }
    }
    {/**切换代码面板【事件委派】 */
        document.querySelector(".buttonContainer").onclick=function(e){
            if(e.target.className=="close"){
                document.querySelector(".codePan").style.height="0px";
                document.querySelector(".codePan").style.top="-20px";
                e.target.classList.remove("close");
                e.target.classList.add("add");
            }else{
                document.querySelector(".codePan").style.height="100vh";
                document.querySelector(".codePan").style.top="0";
                e.target.classList.remove("add");
                e.target.classList.add("close");
            }
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
