var currentLessonIndex;
function initPage(){/**初始化页面 */
    {/**读取文档信息 */
        getStore(function(store){
            {/**编辑左侧课程列表 */
                for(let i=0;i<store.lessonList.length;i++){
                    addLesson(store.lessonList[i]);
                }
            }
            {/**生成代码面板 */
                if(store.codeShow.paths.length!=0){
                    document.body.innerHTML+=
                    `
                    <div class="buttonContainer">
                        <div class="cbutton close">+</div>
                    </div>
                    <div class="codePan">
                    </div>
                    `
                }    
                for(let i=0;i<store.codeShow.paths.length;i++){
                    addCodeShow(store.codeShow.paths[i],store.codeShow.paths.length);
                }
            }
            {/**设置首页课程 */
                currentLessonIndex=store.displayLessonIndex;
                openLesson("../main/"+store.lessonList[store.displayLessonIndex].identifier+"_"+store.lessonList[store.displayLessonIndex].path+"/main.html");
            }
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
        document.body.onclick=function(e){
            let list=e.target.classList;
            let isButton=false;
            for(let i=0;i<list.length;i++){
                if(list[i]=="cbutton"){
                    isButton=true;
                    break;
                }
            }
            if(isButton){
                let isCloseing=false;
                let newlist=e.target.classList;
                for(let i=0;i<newlist.length;i++){
                    if(list[i]=="close"){
                        isCloseing=true;
                    }
                }
                if(isCloseing){
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
}


function addLesson(obj/*传入一个课程对象*/){/**添加左侧列表 */
    let container=document.querySelector(".leftPan ul");
    let textTemp="<li><p data-path=\"../main/"+obj.identifier+"_"+obj.path+"/main.html\">"+obj.name+"</p></li>";
    container.innerHTML+=textTemp;
}
function addCodeShow(obj/*传入一个代码类型对象*/,len/*代码类型总长度*/){/**添加右侧代码面板 */
    let container=document.querySelector(".codePan");
    let textTemp="<pre style=\"height:"+100.0/len+"%\"><code spellCheck=\"false\" id=\""+obj.class+"\"></code></pre>";
    container.innerHTML+=textTemp;
}
function openLesson(path){/**切换iframe路径 */
    let iframeBox=document.querySelector(".rightPan iframe");
    iframeBox.src=path;
}
function getStore(f/*传入的函数:function(store){}可以操作store对象*/){/**获取全局储存对象 */
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
function showCode(){/**获取源码 */
    getStore(function(store){
        let baseDir="../main/"+store.lessonList[currentLessonIndex].identifier+"_"+store.lessonList[currentLessonIndex].path;
        for(let i=0;i<store.codeShow.paths.length;i++){
            let requestURL=baseDir+"/"+store.codeShow.paths[i].pathName;
            let request=new XMLHttpRequest();
            request.open("GET",requestURL);
            request.responseType="text";
            request.send();
            request.onload = function(){
                document.querySelectorAll(".codePan pre code")[i].innerText=(request.response);
            }
        }
    });
}
