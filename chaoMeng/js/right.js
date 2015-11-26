//templateNav
$(".templateNav li a").hover(function() {
    var n = $(".templateNav li a").index(this);
    $(".templateNav li a").removeClass("presentD");
    $(this).addClass("presentD")
})
$(".wmb").hide();
$(".wmb:eq(0)").show();
$(".templateNav li a").click(function() {
        var n = $(".templateNav li a").index(this);
        $(".rightContent .wmb").hide();
        $(".rightContent .wmb:eq(" + n + ")").show();

    })
    //图文素材删除
$(".txt ul .cat2 a").click(function() {
if (confirm('是否删除')) {
            var n = $(".txt ul .cat2 a").index(this);
        $(".rightContent .txt:eq(" + n + ")").remove();
            alert("删除成功");
        } else {
            alert('未能删除');
        }
     
    })
    //js控制显示字数 addtxt
function countChar(textareaName, spanName) {
    document.getElementById(spanName).innerHTML = 0 + document.getElementById(textareaName).value.length;
}
function checkLen(obj) {
    var maxChars = 120; //最多字符数
    if (obj.value.length > maxChars)
        obj.value = obj.value.substring(0, maxChars);
    var curr = maxChars - obj.value.length;
    document.getElementById("count").innerHTML = curr.toString();
}


//user_yg check 全选
$(function() {
    $('#check').click(function() {
        $('input[type=checkbox]').attr('checked', $(this).attr('checked'));
    });
});


//自定义菜单2级导航

    //template div.rightMbbox .mbboxNav
    $(function(){
        $("div.rightMbbox .mbboxNav a").click(function() {
        var n = $(".mbboxNav a").index(this)
        $("div.rightMbbox .mbboxNav a").removeClass("presentI");
        $(this).addClass("presentI");
    })

    })

    //无选中 点击 批量删除 弹框
$(function() {
        $('#removeInput').click(function() {
            if ($('.cInput:checked').length > 0) {
                if (confirm('是否删除')) {
                    $('.cInput:checked').parent().remove();
                    alert('删除成功');
                } else {
                    alert('未能删除');
                }
            } else {
                alert('请先选择您要删除的数据');
            }
        })
    })


//用户管理单个删除
$(function() {
    $(".ul5 li span .removeLi").click(function() {
if (confirm('是否删除')) {
            $(this).parent().parent().remove();
            alert("删除成功");
        } else {
            alert('未能删除');
        }
    })

})
//order_all
 
$(function(){
    $(".zxfkNav li a").hover(function(){
        var n=$(".zxfkNav li a").index(this);
        $(".zxfkNav li a").removeClass("presentJ");
         $(this).addClass("presentJ");

    })
})
