<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <div class="inner">
          <div class="nav">
            <router-link to="/" class="logo"></router-link>
            <router-link to="/discover">发现音乐</router-link>
            <router-link to="/">我的音乐</router-link>
            <router-link to="/">关注</router-link>
            <router-link to="/">商城</router-link>
            <router-link to="/">音乐人</router-link>
            <router-link to="/">下载客户端</router-link>
          </div>
          <div class="info">
            <el-input
              v-model="keywords"
              class="w-50 m-2 search"
              size="default"
              placeholder="音乐/视频/电台/用户"
            />
            <a href="#" class="crt_center">创作者中心</a>
          </div>
        </div>
      </el-header>
      <div class="subnav">
        <div class="inner">
          <ul class="nav">
            <li>
              <router-link to="/discover">推荐</router-link>
            </li>
            <li>
              <router-link to="/">排行榜</router-link>
            </li>
            <li>
              <router-link to="/">歌单</router-link>
            </li>
            <li>
              <router-link to="/">主播电台</router-link>
            </li>
            <li>
              <router-link to="/">歌手</router-link>
            </li>
            <li>
              <router-link to="/">新碟上架</router-link>
            </li>
          </ul>
        </div>
      </div>
      <el-main>Main</el-main>
      <el-footer class="footer" height="auto">
        <div class="wrap">
          <div class="copy">
            <p class="link">
              <a href="#">服务条款</a>
              <span class="line">|</span>
              <a href="#">隐私政策</a>
              <span class="line">|</span>
              <a href="#">儿童隐私政策</a>
              <span class="line">|</span>
              <a href="#">版权投诉</a>
              <span class="line">|</span>
              <a href="#">投资者关系</a>
              <span class="line">|</span>
              <a href="#">广告合作</a>
              <span class="line">|</span>
              <a href="#">廉正举报</a>
              <span class="line">|</span>
              <a href="#">联系我们</a>
            </p>
            <p class="left">
              <span>网易公司版权所有©1997-2022</span>
              <span>杭州乐读科技有限公司运营：</span>
              <a href="#">浙网文[2021] 1186-054号</a>
            </p>
            <p class="left">
              <a href="#">粤B2-20090191-18 工业和信息化部备案管理系统网站</a>
              <a href="#">
                <span class="police-logo"></span>
                <span class="police-text">浙公网安备 33010902002564号</span>
              </a>
            </p>
            <p class="left">
              <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
              <span style="margin-left: 15px"
                >监督举报邮箱：51jubao@service.netease.com</span
              >
            </p>
          </div>
          <ul class="enter">
            <li class="unit">
              <a href="#"></a>
              <span class="title"></span>
            </li>
            <li class="unit">
              <a href="#"></a>
              <span class="title"></span>
            </li>
            <li class="unit">
              <a href="#"></a>
              <span class="title"></span>
            </li>
            <li class="unit">
              <a href="#"></a>
              <span class="title"></span>
            </li>
            <li class="unit">
              <a href="#"></a>
              <span class="title"></span>
            </li>
          </ul>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// import { Search } from '@element-plus/icons-vue'
export default {
  data: function () {
    return {
      keywords: "",
    };
  },
};
</script>

<style lang="less">
@img: "https://s2.music.126.net/style/web2/img/frame/topbar.png?cdfc587f0ca0e40bb6a09f700cb968b2";
.inner {
  width: 1100px;
  margin: 0 auto;
}
.header {
  background: #242424;
  height: 70px;
  display: flex;
  .inner {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    .logo {
      // height: 100%;
      width: 177px;
      background-image: url("@{img}");
    }
    .info {
      margin-left: 85px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-input {
        width: 158px;
        height: 32px;
        overflow: hidden;
        border-radius: 32px !important;
        .el-input__inner::placeholder {
          font-size: 14px;
        }
      }
      .crt_center {
        margin-left: 10px;
        // width: 90px;
        font-size: 12px;
        line-height: 32px;
        padding: 0 15px;
        border-radius: 30px;
        border: 1px solid #4f4f4f;
        &:hover {
          background-color: inherit;
          border-color: #ffffff;
        }
      }
    }
    .active,
    a:not(.logo):hover {
      background: #000;
      color: #ffffff;
    }
    .active {
      position: relative;
    }
    .active::after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      border: 6px solid transparent;
      border-bottom-color: #c20c0c;
    }
  }
  .nav {
    display: flex;
    flex-shrink: 0;
  }
  a {
    color: #cccccc;
    font-size: 14px;
    line-height: 70px;
    padding: 0 19px;
  }
}
.subnav {
  background: #c20c0c;
  .inner {
    height: 35px;
  }
  .nav {
    margin-left: 200px;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      display: flex;
      align-items: center;
      line-height: 35px;
      a {
        font-size: 12px;
        color: white;
        padding: 0 13px;
        border-radius: 20px;
        line-height: 21px;
        margin-right: 35px;
      }
      .active {
        background: #9b0909;
      }
    }
  }
}
.footer {
  padding-bottom: 60px;
  background: #f2f2f2;
  border-top: 1px solid #d3d3d3;
  font-size: 12px;
  .copy {
    padding-top: 15px;
    .link {
      color: #999999;
      a:hover {
        text-decoration: underline;
      }
      .line {
        margin: 0 2px 0 4px;
        color: #c2c2c2;
      }
    }
    p {
      line-height: 24px;
    }
    .left {
      * {
        color: #666666;
      }
      a:hover {
        text-decoration: underline;
      }
      .police-logo {
        font-family: Arial, Helvetica, sans-serif;
        -webkit-text-size-adjust: none;
        word-wrap: break-word;
        word-break: break-word;
        line-height: 24px;
        color: #666;
        font-size: 0;
        cursor: pointer;
        width: 14px;
        height: 14px;
        background: url(https://s2.music.126.net/style/web2/img/3rd/police.png?e42b77e8c051860a0fda38c01453fbea)
          no-repeat;
        background-size: cover;
        display: inline-block;
        margin-right: 2px;
        vertical-align: -2px;
      }
    }
  }
  .wrap {
    display: flex;
  }
  .enter {
    flex-grow: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .unit {
      display: flex;
      align-items: center;
      flex-direction: column;
      a {
        width: 50px;
        height: 45px;
        background-image: url(https://s2.music.126.net/style/web2/img/foot_enter_new.png?8399f75ccf0e96584e37e84c0b56fec5);
        background-repeat: no-repeat;
        background-size: 110px 552px;
      }
      .title {
        width: 74px;
        height: 14px;
        background-image: url(https://s2.music.126.net/style/web2/img/foot_enter_tt.png?f6b63040b76ffe07fcc18d65c3f53089);
        background-repeat: no-repeat;
        background-size: 180px 139px;
        margin-top: 5px;
      }
    }
    & .unit:nth-child(1) a {
      background-position: -63px -456.5px;
    }
    & .unit:nth-child(2) a {
      background-position: -63px -101px;
    }
    & .unit:nth-child(3) a {
      background-position: 0 0;
    }
    & .unit:nth-child(4) a {
      background-position: -60px -50px;
    }
    & .unit:nth-child(5) a {
      background-position: 0 -101px;
    }
    & .unit:nth-child(1) .title {
      background-position: 0 -108px;
    }
    & .unit:nth-child(2) .title {
      background-position: 10px -91px;
    }
    & .unit:nth-child(3) .title {
      background-position: 10px 0;
    }
    & .unit:nth-child(4) .title {
      background-position: 10px -54px;
    }
    & .unit:nth-child(5) .title {
      background-position: 10px -72px;
    }
  }
}
.wrap {
  width: 980px;
  margin: 0 auto;
}
</style>
