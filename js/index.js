window.onscroll= function () {
    //顶部搜索栏背景颜色改变start
    var oHeader = document.getElementById("jd_search_header");
    var Dis = document.documentElement.scrollTop || document.body.scrollTop;
    if(Dis){
        oHeader.style.backgroundColor = '#ec2633';
    }
    else {
        oHeader.style.backgroundColor = '#0c0c0c';
    }
    //顶部搜索栏背景颜色改变end
}
window.onload = function () {

    // 无缝轮播图start
    var oUl1 = document.getElementById("rolling_ad_ul");
    // var oUl_width = oUl1.offsetWidth;
    var i = 1;
    var oUl2 = document.getElementById("rolling_ad_ul2");
    var aUl1_Li = oUl2.getElementsByTagName("li");
    aUl1_Li[0].style.background = 'red';
    setInterval(function () {
        i++;
        aUl1_Li[i-2].style.background = '';
        oUl1 .style.transition = 'all .3s';
        oUl1.style.transform ='translateX(' + -(i/10)*100+'%)';
        if(i==9){
            i=1;
            // 关闭过渡
            oUl1.style.transition = '';
            // 瞬间 修改一下 ul 的位置
            oUl1.style.transform ='translateX(' + -(i/10)*100+'%)';
            // aUl1_Li[0].style.background = 'red';
        }
        aUl1_Li[i-1].style.background = 'red';
    },5000)
    // 无缝轮播图end
    // 布告栏滚动消息start
    var oUl3 = document.getElementById("jd_bulletin_main");
    var aoUl3_Li = oUl3.getElementsByTagName("li");
    var k =0;
    setInterval(function () {
        k++;
        aoUl3_Li[k-1].style.display="none";
        oUl3 .style.transition = 'all .3s';
        if(k==3){
            k =0;
        }
        aoUl3_Li[k].style.display = 'block';
        // oUl3.style.transform ='translateY(' + -((k-1)*3.33/10)*100+'%)';

    },3000)
    // 布告栏滚动消息end

    // 计时器start

    var jd_seckill_time_Date = new Date();
    var oA1 = document.getElementById('jd_seckill_time');
    var oSpan1 = oA1.getElementsByTagName("span")[1];
    var oSpan2 = oA1.getElementsByTagName("span")[2];
    var oSpan4 = oA1.getElementsByTagName("span")[4];
    var oSpan6 = oA1.getElementsByTagName("span")[6];
    function time () {
        var jd_seckill_time_Date = new Date();
        var H = jd_seckill_time_Date.getHours();
        var M = jd_seckill_time_Date.getMinutes();
        var S = jd_seckill_time_Date.getSeconds();
        var TimeFieldlist = ["0点场","8点场","10点场","12点场","14点场","16点场","18点场","20点场","22点场"];

        if(H<10){
            H = "0"+ H;
        }
        oSpan2.innerText = ""+ H;
        if(M<10){
            M = "0"+ M;
        }
        oSpan4.innerText ="" + M;
        if(S<10){
            S = "0"+ S;
        }
        oSpan6.innerText = "" + S;

        if(H>=0 && H<8){
            oSpan1.innerText = ""+ TimeFieldlist[0];
        }
        if(H>=8 && H<10){
            oSpan1.innerText = ""+ TimeFieldlist[1];
        } if(H>=10 && H<12){
            oSpan1.innerText = ""+ TimeFieldlist[2];
        } if(H>=12 && H<14){
            oSpan1.innerText = ""+ TimeFieldlist[3];
        } if(H>=14 && H<16){
            oSpan1.innerText = ""+ TimeFieldlist[4];
        } if(H>=16 && H<18){
            oSpan1.innerText = ""+ TimeFieldlist[5];
        } if(H>=18 && H<20){
            oSpan1.innerText = ""+ TimeFieldlist[6];
        } if(H>=20 && H<22){
            oSpan1.innerText = ""+ TimeFieldlist[7];
        }
        if(H>=22 && H<24){
            oSpan1.innerText = ""+ TimeFieldlist[8];
        }
    }
    setInterval(time,1000);
    time();
    // 计时器end
}