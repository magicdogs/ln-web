<template>
  <div class="hello" :style="{ backgroundImage: 'url(' + bg_url + ')' , opacity: opacity}">
     <div class="pt">
       <div class="grid-content bg-purple-dark">后台管理系统</div>
     </div>
     <!-- <div class="grid-content bg-purple-dark"></div> -->
    <!-- <el-row>
      <el-col :span="12" :offset="6">

      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import Bg1 from '@/../static/bg1.jpg'
import Bg2 from '@/../static/bg2.jpg'

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      bg_url: "",
      opacity: 1,
    };
  },
  mounted() {
    const targets = this.$el;
    let arrays = [Bg1,Bg2];
    let opc = 0,pos = 0;
    let that = this;
    this.bg_url = Bg2;
    // setInterval(function(){
    //     opc += 0.005;
    //     that.opacity =  opc;
    //     if(opc > 1){
    //       that.bg_url = arrays[pos++];
    //       that.opacity = opc = 0;
    //       if(pos == arrays.length){
    //         pos = 0;
    //       }
    //     }
    // },20);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  margin: 0 0;
  background-color: #99a9bf;
  background-image: url('~@/../static/bg1.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;

}

.pt {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40rem;
    height: 30rem;
    margin-left: -20rem;
    margin-top: -15rem;
    background-color: #d2cdc7;
    opacity: 0.7;
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
