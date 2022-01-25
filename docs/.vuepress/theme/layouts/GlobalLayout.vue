<template>
  <div id="global-layout">
    <header class="navbar">
      <div class="nav_inner">
        <div class="n_item">
          <a href="/"><strong>HelloAdmin</strong></a>
        </div>
        <div class="n_item n_right">
          <a href="#">在线体验</a>
          <a href="#">关于我们</a>
          <a href="https://github.com/heliosker/helloadmin-ui">GitHub</a>
        </div>
      </div>
    </header>
    <component :is="layout" />
    <footer>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col col-2" style="padding: 0rem 14rem">
              <h4>团队项目</h4>
              <p>helloadmin</p>
              <p>helloadmin-ui</p>
            </div>
            <div class="col col-2" style="padding: 0rem 13rem">
              <h4>友情链接</h4>
              <p><a href="https://pro.antdv.com/">ant pro vue</a></p>
              <p><a href="#"></a>>Gin</p>
            </div>
          </div>
          <div class="text--center">Copyright © 2021 helloAdmin</div>
          <div class="text--center">
            <a href="https://beian.miit.gov.cn/#/Integrated/index">
              沪ICP备2021028462号-3</a
            >
            <a href="http://wap.scjgj.sh.gov.cn/businessCheck/verifKey.do?showType=extShow&serial=9031000020200902114821000006279656-SAIC_SHOW_310000-2022012010190859555&signData=MEYCIQCDgFCs3Blerh8irYwUBhOwI8nqTOfaZ7t230fCaCW5bQIhAOL7Aq7Hz57312KJUnsChCgQWI8YZ/XBJpf41CugHwHj" target="_blank">
                <img style="width: 20px; vertical-align: middle;" :src="$withBase('./record.png')" alt="">
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import Navbar from '@theme/components/Navbar'
export default {
  components: {
    // Navbar
  },
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFound";
    },
  },
};
</script>
<style src="../styles/index.styl" lang="stylus"></style>
