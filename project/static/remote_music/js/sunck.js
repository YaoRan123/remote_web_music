console.log("sunck")
$(document).ready(function(){
    // $("#btn").bind("click",function(){
    //     console.log("*********")
    // },false)
    // $("#btn").addEventListener("click",function(){
    //     console.log("sss")
    // },false)
    document.getElementById("btn").onclick=function(){
        $.ajax({
            type:"get",
            url:"/studentsinf/",
            dataType:"json",
            success:function(data,status){
                console.log(data);
                var d = data["data"]
                for(var i =0;i<d.length;i++){
                    document.write('<p>'+d[i][0]+'</p>')
                }
                
            }
        })
    }
})