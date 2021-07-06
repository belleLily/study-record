// 表单字段
document.forms[0]   //document.form['name']
acceptCharset
aciton
elements
enctype
length
method
name
reset()
//<input type="submit" value="Submit Form"> 
//<button type="submit">Submit Form</button>
submit()    //from.submit()
target
form.elements['color']

// 表单字段属性
// 共有
disabled
form
name
readOnly
tabIndex
type
value
focus()
blur()
change()
//h5
autofocus
required
type    //email,url,number,range,datetime,datetime-local,date,month,week,time
stepUp()
stepDown()
// <input type="text" pattern="\d+" name="count">
pattern
// input
size //指定文本框中能够显示的字符数
maxlength //指定文本框可以接受的最大字符数
// textarea
clos
rows

validity
novalidate
checkVlidity()

selected
remove()

// 富文本编辑
// 必须要将 designMode 设置为"on"，但只有在页面完全加载之后才能设置这个属性。
// <iframe name="richedit" style="height:100px;width:100px;" src="blank.htm"></iframe> 
EventUtil.addHandler(window, "load", function(){ 
 frames["richedit"].document.designMode = "on"; 
});
// 或者
<div class="editable" id="richedit" contenteditable></div>

document.execCommand(copy,false,null)
copy
createlink
cut
delete
paste
selectall