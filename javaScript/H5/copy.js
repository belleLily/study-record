//input框复制
<input id="title1" type="text" value="复制功能测试" readonly="readonly" />
function copymsg() { 
    var Url2 = document.getElementById("title1");//要复制文字的节点
     if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {//区分iPhone设备 
        window.getSelection().removeAllRanges();//这段代码必须放在前面否则无效 
        var range = document.createRange(); // 选中需要复制的节点
         range.selectNode(Url2); // 执行选中元素
         window.getSelection().addRange(range); // 执行 copy 操作 
        var successful = document.execCommand('copy'); // 移除选中的元素
         window.getSelection().removeAllRanges(); 
    } else { 
        Url2.select(); // 选择对象 
        document.execCommand("Copy"); // 执行浏览器复制命令 
    } 
}

//文本复制
copyOrder(order) {
    let input = document.createElement("input");
    input.value = order;
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, input.value.length), 
    document.execCommand('Copy');
    document.body.removeChild(input);
    this.$Message.success("订单号复制成功");
}