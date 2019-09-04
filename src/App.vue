<template>
  <div id="app">
    <TopNav :props="topProps" :key="updateKey"></TopNav>
    <Nav :props="nav"></Nav>
    <router-view />
  </div>
</template>
<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: "APP",
  data() {
    return {
      topBar: {
        leftText: "PLM-风险管理系统"
      },
      updateKey: "",
      topProps: {
        systemName: "PLM-风险管理系统", //'PLM-风险管理系统',
        systemUserName: "",
        lang: {
          isShowLanguageBtn: false,
          languageSelection: "请选择语言",
          language: [
            {
              languageKey: "zh",
              languageVal: "中文简体",
              display: "中"
            },
            {
              languageKey: "en",
              languageVal: "English",
              display: "En"
            }
          ],
          defaultLanguage: {
            languageKey: "zh",
            display: "中"
          }
        },
        strExit: "退出",
        isShowExitBtn: false
      },
      userInfo: {
        systemName: "1",
        systemUserName: "3",
        strExit: false,
        lang: {
          languageSelection: "En",
          defaultLanguage: {
            display: "中"
          }
        }
      },
      nav: {
        items: [
          {
            href: `${this.baseUrl}/risk/rrmp--home/index.html#/home`,
            routerPath: "/home",
            menuTxt: "首页"
          },
          {
            href: `${this.baseUrl}/risk/rrmp--resk-repository/index.html`,
            routerPath: "",
            menuTxt: "风险库"
          },
          {
            href: `${this.baseUrl}/risk/rrmp--main-doc/index.html`,
            routerPath: "",
            menuTxt: "主文档"
          },
          {
            href: `${this.baseUrl}/risk/rrmp--home/index.html#/report`,
            routerPath: "/report",
            menuTxt: "报表"
          }
        ]
      }
    };
  },
  mounted() {
    this.getUser().then(res => {
      let a = `${res.userFullName} ${res.userName} `;
      this.topProps.systemUserName = a;
      this.updateKey = new Date().getTime().toString();
    })
  },
  methods: {
    ...mapActions(['getUser']),
  },
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  margin: 0px;
  background: #f5f5f5;
  text-align: left;
  /*font-size: 14px;*/
  font-family: MicrosoftYaHei;
  -webkit-font-smoothing: antialiased;
  color: #4a4a4a;
  padding: 0px;
}
.required {
  color: #cf0000;
  padding: 0px 7px 0px 4px;
}
a {
  text-decoration: none;
  color: inherit;
  outline: none;
}
.con-common {
  width: 1000px;
  background: #fff;
  padding: 20px 10px 30px 10px;
  min-height: 200px;
}
.con {
  margin: 230px auto 0px auto;
  .con-common();
}
.con-b {
  margin: 170px auto 0px auto;
  .con-common();
}
.con-d {
  margin: 160px auto 0px auto;
  .con-common();
  .summary {
    top: 100px;
  }
}
.con-c {
  margin: 100px auto 0px auto;
  .con-common();
}
/*  h3 {
        font-size: 22px;
        text-align: left;
    }*/
// 修改确认按钮字体颜色
.el-message-box {
  .el-message-box__btns {
    .el-button--primary {
      color: #fff !important;
    }
  }
}
.el-form-item {
  display: inline-block;
  width: 49.5%;
  margin-bottom: 10px;
}
.form-a {
  text-align: left;
  .el-select__tags-text {
    display: inline-block;
    max-width: 240px;
    overflow: hidden;
    vertical-align: middle;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .w100 {
    width: 990px;
  }
  .el-textarea__inner {
    display: block;
    border: 1px solid #f2f2f2;
    border-radius: 5px;
    min-height: 400px;
  }
  .el-form-item.is-success .el-input__inner,
  .el-form-item.is-success .el-input__inner:focus,
  .el-form-item.is-success .el-textarea__inner,
  .el-form-item.is-success .el-textarea__inner:focus {
    border-color: #dcdfe6;
  }
}
.active-effect-second {
  //  margin: 30px 0px;
  border-bottom: 1px dashed #e2e2e2;
  position: relative;
  height: 1px;
  margin: 20px 20px 30px 40px;
  .el-icon-arrow-down,
  .el-icon-arrow-right {
    background: #fff;
    width: 19px;
    font-size: 14px;
    margin-left: -30px;
    margin-right: 14px;
  }
  .effect-list {
    border-left: 2px #c50208 solid;
    display: inline-block;
    height: 14px;
    line-height: 14px;
    background: #fff;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #000;
    position: absolute;
    top: -13px;
    left: 0px;
    padding: 6px 20px 6px 6px;
  }
}
.pop {
  position: fixed;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 999;
  .pop-con {
    background: #fff;
    width: 628px;
    margin-top: 60px;
    left: 50%;
    margin-left: -314px;
    position: fixed;
    border-radius: 5px;
    .error-text {
      color: #f56c6c;
      font-size: 12px;
      line-height: 1;
      padding-top: 6px;
      margin-bottom: 6px;
      display: none;
    }
    .foot {
      text-align: center;
      padding: 20px 0px;
    }
    button {
      width: 78px;
      height: 28px;
      border-radius: 5px;
      color: #333;
      background: #fff;
      font-size: 14px;
      outline: none;
      border: 1px solid #bbb;
      &:hover {
        border: 1px solid #b7d2ff;
        color: #000;
      }
      & + button {
        margin-left: 20px;
        color: #999;
      }
    }
    .head {
      font-size: 16px;
      font-weight: bold;
      color: #363636;
      height: 30px;
      line-height: 30px;
      border-left: 5px solid #cf0000;
      margin-bottom: 10px;
      padding: 6px 10px;
      .el-icon-close {
        float: right;
        background: #ff0404;
        color: #fff;
        font-weight: bold;
        border-radius: 5px;
        padding: 2px;
        font-size: 14px;
        margin-top: 5px;
      }
    }
    .section {
      min-height: 200px;
      padding: 20px;
      text-align: left;
    }
    input {
      height: 28px;
      line-height: 28px;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      outline: none;
      vertical-align: text-top;
      padding: 0px 8px;
    }
  }
}
.r-btnbox {
  position: fixed;
  top: 100px;
  left: 50%;
  z-index: 62;
  padding: 12px 0px;
  text-align: right;
  background: #f5f5f5;
}
.r-btn-edit {
  width: 400px;
  margin-left: 110px;
  .r-btnbox();
}
.r-btn {
  width: 400px;
  margin-left: 110px;
  .r-btnbox();
}
.r-btn-new {
  width: 1030px;
  margin-left: -515px;
  .r-btnbox();
}
.el-select .el-input.is-disabled .el-input__inner {
  cursor: default;
}
.el-checkbox__input.is-disabled + span.el-checkbox__label {
  color: #c0c4cc;
  cursor: default;
}
/*    .search-a{
        display: none;
    }*/

@base-color: #cf0000;
/*-------------多选-------------*/
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: @base-color;
  border-color: @base-color;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: @base-color;
}
/*-------------单选-------------*/
.el-radio__input.is-checked .el-radio__inner {
  border-color: @base-color;
  background: @base-color;
}
.el-radio__input.is-checked + .el-radio__label {
  color: @base-color;
}
/*-------------表单-------------*/

/*-------------提示框样式-------------*/
.el-tooltip__popper {
  max-width: 600px;
}

/*-------------select下拉-------------*/
.el-select .el-input.is-focus .el-input__inner {
  border-color: @base-color;
}
.el-select {
  width: 100%;
}
.el-select-dropdown__item {
  &:hover,
  &.selected {
    border-left: 3px @base-color solid;
    color: #d0021b !important;
    background: #f2f2f2;
  }
  &.hover {
    background: none;
  }
}
.el-select-dropdown.is-multiple .el-select-dropdown__item.selected::after {
  display: none;
}

/*-------------公共弹窗样式，如确定取消弹窗-------------*/
.el-button--danger {
  background-color: @base-color;
  border-color: @base-color;
}

.el-button--danger.is-active,
.el-button--danger:active {
  background: #e76868;
  border-color: #e76868;
}

.el-button--danger:focus,
.el-button--danger:hover {
  background: #f3aaaa;
  border-color: #f3aaaa;
  color: #fff;
}

.el-button:active {
  color: #e76868;
  border-color: #e76868;
}

.el-button:focus,
.el-button:hover {
  color: @base-color;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.el-button--danger,
.el-message-box__btns .el-button--primary {
  color: #fff;
  background-color: @base-color;
  border-color: @base-color;
}

/*-------------表格-------------*/
.el-table--scrollable-x .el-table__body-wrapper {
  &::-webkit-scrollbar {
    width: 5px;
    height: 14px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 4px;
  }
}

.el-input.is-disabled .el-input__inner,
.el-textarea.is-disabled .el-textarea__inner {
  background: #f2f2f2;
  border-color: #e2e2e2;
  color: #5d5d5d;
  cursor: default;
}
.table-a .el-textarea__inner {
  border: none;
}
.el-textarea__inner {
  min-height: 60px !important;
}

.el-loading-spinner i {
  color: @base-color;
}
.el-loading-spinner .el-loading-text {
  color: @base-color;
}
.el-loading-mask {
  position: fixed;
}
/*    .el-input .el-input__inner{
        height:28px;
        line-height: 28px;
    }
    .el-select {
        .el-input__icon {
            line-height: 28px;
        }
        .el-input__inner{
            height: 28px!important;
            line-height: 28px;
        }
    }

    .is-disabled {
        .el-textarea__inner, .el-input__inner, & + span.el-radio__label, & + span.el-checkbox__label, .el-radio__label {
            cursor: auto !important;
            -moz-user-select: text; !*火狐*!
            -webkit-user-select: text; !*webkit浏览器*!
            -moz-user-focus: select-all;
            user-select: text;
            -moz-user-input: enabled;
            -moz-user-modify: read-write;
            -webkit-user-modify: read-write;
            outline: none;
        }
    }
    .el-radio__input.is-disabled+span.el-radio__label {
        color: #c0c4cc;
        cursor: default;
    }*/
</style>
