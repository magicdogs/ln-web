<template>
  <div id="app-json">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-container>
      <el-header>
        <h2>
          <span style="margin-right:1rem;">{{header}}</span>
          <el-select v-model="selValue" placeholder="请选择" @change="selChange">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </h2>
      </el-header>
      <el-divider></el-divider>
      <el-main>
        <el-row>
          <el-col :span="11">
            <el-input
              class="input1"
              type="textarea"
              :autosize="{ minRows: 30, maxRows: 50}"
              placeholder="请输入内容"
              v-model="jsonTextarea"
            ></el-input>
          </el-col>
          <el-col :offset="1" :span="12" class="input2">
            <div>
              <pre v-html="preVal"></pre>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>{{footer}}</el-footer>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import { jsonToGo } from "@/assets/js/cx";
import hljs from "highlight.js/lib/highlight";
import go from "highlight.js/lib/languages/go";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/tomorrow-night.css";

hljs.registerLanguage("go", go);
hljs.registerLanguage("json", json);
hljs.configure({ useBR: true });

export default {
  name: "app",
  components: {
    // HelloWorld
  },
  created() {
    //const ct = hljs.highlight("json", '{"userName":"x","user_info":{"userAge":0}}').value
    //console.log(ct)
    //this.preVal = ct
    this.selChange();
  },
  data() {
    return {
      header: "JSON to GO Struct Convert",
      jsonTextarea: '{"userName":"x","user_info":{"userAge":0}}',
      preVal: "",
      footer: "Copyrigth by magic 2019",
      selValue: "2",
      options: [
        {
          value: "1",
          label: "表单模式"
        },
        {
          value: "2",
          label: "ORM模式"
        }
      ]
    };
  },
  methods: {
    inputChange() {
      console.log(this.jsonTextarea);
    },
    selChange() {
      let go = jsonToGo(this.jsonTextarea, "", true, this.selValue);
      console.log(go);
      if (go.error) {
        this.preVal = go.error;
        return;
      }
      this.preVal = hljs.highlight("go", go.go).value;
      console.log(this.preVal);
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    jsonTextarea: function(newQuestion, oldQuestion) {
      console.log(newQuestion, oldQuestion);
      let go = jsonToGo(newQuestion, "", true, this.selValue);
      console.log(go);
      if (go.error) {
        this.preVal = go.error;
        return;
      }
      this.preVal = hljs.highlight("go", go.go).value;
      console.log(this.preVal);
    }
  }
};
</script>


<style lang='scss' scoped>
// /deep/ == >>>
.input1 /deep/ .el-textarea__inner {
  font-size: 18px;
  background-color: #ecf2f5;
}
.input2 /deep/ pre {
  text-align: left;
  margin: 0 0;
  background-color: #e0ebf5;
  font: 18px/1.5em "Consolas", "Menlo", "Monaco", "Courier New", monospace;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  white-space: pre;
  width: 100%;
  display: block;
  padding: 3%;
  outline: none;
  border: none;
  resize: vertical;
  height: 50rem;
  overflow: scroll;
  tab-size: 4;
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
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: block;
  /* margin-top: 60px; */
}

.el-header,
.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
