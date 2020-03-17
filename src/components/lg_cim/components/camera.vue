<template>
  <div class="camera">
      <div class="left"><span>管理区域预警</span>
        <div class="content_item content_left"><div class="item_video"><img src="../../../assets/image/头像.png" alt=""></div><span>摄像头1</span></div>
        <div class="content_item content_left">
            <div class="item_info">
            <div> <img src="../../../assets/image/头像2.png" alt=""></div>
            <div><p>姓名：李四</p>
            <p>性别：男</p>
            <p>进入区域时间</p>
            <p>13：00：00</p>
            </div>
            
            </div><div class="ycs">已超时</div></div>
      </div>
      <div class="right"><span>预警列表</span>
        <ul>
             <li><div class="content_item"><div class="item_video"><img src="../../../assets/image/头像.png" alt=""></div><span>摄像头1</span></div></li>
             <li><div class="content_item"><div class="item_video"><img src="../../../assets/image/头像.png" alt=""></div><span>摄像头2</span></div></li>
             <li><div class="content_item"><div class="item_video"><img src="../../../assets/image/头像.png" alt=""></div><span>摄像头3</span></div></li>
             <li><div class="content_item"><div class="item_video"><img src="../../../assets/image/头像.png" alt=""></div><span>摄像头4</span></div></li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'camera'

}
</script>

<style>

.camera{
    height: 100%;
    width: 100%;
    display: flex;
    background: #080808;
}

.camera .left{
    height: 100%;
    width: 75%;
}

.camera .right{
    height: 100%;
    width: 25%;
    border: 4px solid #3b61ac;
}

.camera .left>span{
    color: #ffd169;
    font-weight: bold;
}

.camera .right>span{
    color: #ffd169;
    font-weight: bold;
}


.camera .right ul li{
    /* height: 100%; */
    list-style: none;
}
.item_info{
    display: flex;
    color: #80a8d3;
}

.item_info div{
    margin: 10% 8%;
}

.ycs{
    color: ffffff;
    font-weight: bold;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    border: 2px solid #fc3636;
    background-color: #280a0a;
}

.content_left{
    width:90% !important;
}

.content_item{
    width: 60%;
    box-sizing: border-box;
    margin:20px auto;
}

.content_item .item_video{
    box-sizing: border-box;
    border: 4px solid #204577;
}

.content_item .item_video img{
    width: 100%;
}

.content_item span{
    display: block;
    font-weight: bold;
    color: #ffffff;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
    background-color: #112c52;

}

</style>