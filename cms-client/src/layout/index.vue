<template>
 <div id="layout">
  <div class="header">
   <!-- 顶部导航区域 -->
  </div>
  <div class="content" flex="dir:left box:first">
   <div class="asside"></div>
   <div class="main"></div>
  </div>
 </div>
</template>

<style scoped>
#layout .header{
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 57px;
 background: #ffffff;
 box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.05);
 box-sizing: border-box;
}
#layout .content{
 margin-top: 57px;
 width: 100%;
 height: 100vh;
 box-sizing: border-box;
}
#layout .content .asside{
 min-width: 64px;
 height: 100%;
 background: red;
}
#layout .content .asside:hover{
 animation: moveIn 0.3s linear both;
}
#layout .content .main{
 background: blue;
 height: 100%;
}
@keyframes moveIn {
 from {
  width: 64px;
 }
 to {
  width: 200px;
 }
}
</style>