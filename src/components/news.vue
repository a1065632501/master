
<template>
 <div id='test'>
     {{title}}
     <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
          </el-row>
          <div class="line">
                <el-progress :percentage="0" class='sline'></el-progress>
                <el-progress :percentage="70" class='sline'></el-progress>
                <el-progress :percentage="80" color="#8e71c7" class='sline'></el-progress>
                <el-progress :percentage="100" status="success" class='sline'></el-progress>
                <el-progress :percentage="50" status="exception" class='sline'></el-progress>
          </div>
          <div class="box">
                <div class="top">
                  <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                    <el-button>上左</el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                    <el-button>上边</el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
                    <el-button>上右</el-button>
                  </el-tooltip>
                </div>
                <div class="left">
                  <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
                    <el-button>左上</el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
                    <el-button>左边</el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
                    <el-button>左下</el-button>
                  </el-tooltip>
                </div>
              
                <div class="right">
                  <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
                    <el-button>右上</el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
                    <el-button>右边</el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
                    <el-button>右下</el-button>
                  </el-tooltip>
                </div>
                <div class="bottom">
                  <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
                    <el-button>下左</el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                    <el-button>下边</el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
                    <el-button>下右</el-button>
                  </el-tooltip>
                </div>
              </div>
              <div class='click1'>
                    <el-button @click="show2 = !show2">Click Me</el-button>
                
                    <div style="display: flex; margin-top: 20px; height: 100px;">
                      <transition name="el-zoom-in-center">
                        <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
                      </transition>
                
                      <transition name="el-zoom-in-top">
                        <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
                      </transition>
                
                      <transition name="el-zoom-in-bottom">
                        <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
                      </transition>
                    </div>
                  </div>
                  <div class="block">
                        <span class="demonstration">默认不区分颜色</span>
                        <el-rate v-model="value1"></el-rate>
                      </div>
                      <div class="block">
                        <span class="demonstration">区分颜色</span>
                        <el-rate
                          v-model="value2"
                          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                        </el-rate>
                      </div>
                      <el-switch
                        v-model="value3"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                        </el-switch>

 </div>
   
</template>

<script>

    export default {
      data(){
          return{
              title:'新碟上架',
              show2:true,
              value1: null,
                value2: null,
                value3: 1,

          }
      },

    }

</script>
<style>
#test {
   height: 1500px;
  
}
.line{
    margin-top:50px;
    width:300px;
    height:200px;
    margin-left:100px;
}
.line .sline {
    margin-bottom:7px;
}
.box {
    width: 400px;
    margin-left:100px;
}
    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
    .transition-box {

    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .click1{
      margin-left:100px;
  }
  .block {
    margin-left:100px;

  }
</style>
