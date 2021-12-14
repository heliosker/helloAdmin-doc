<template>
    <div class="theme-container">
        <div class="c_top">
            <div class="c_title">
                HelloAdmin
            </div>
            <div class="c_subtitle">
                使用Gin + vue3快速开发后台管理系统
            </div>
            <div class="c_btn">
                <a href="/guide/basic/base">快速开始</a>
            </div>
        </div>
        <div class="feature">
            <div class="container">
            <div class="row">
                <div class="col col-2">
                    <div class="text--center">
                        <img :src="$withBase('./img1.png')" alt="">
                        <h3>内置权限管理</h3>
                        <p>内置基于RBAC的权限管理，方便的权限分配和快捷的路由、菜单配置。</p>
                    </div>  
                </div>
                <div class="col col-2">
                    <div class="text--center">
                        <img :src="$withBase('./img5.png')" alt="">
                        <h3>简洁的API</h3>
                        <p>借助 Gin 的框架，通过简洁易懂的代码构建 CURD 页面，杜绝过度封装。</p>
                    </div> 
                </div>
                <div class="col col-2">
                    <div class="text--center">
                        <img :src="$withBase('./img3.png')" alt="">
                        <h3>丰富的表单组件</h3>
                        <p>基于 Ant Design vue 组件库封装，提炼高质量开箱即用的 Vue 组件，共享 Ant Design 设计理念。</p>
                    </div>  
                </div>
                <div class="col col-2">
                    <div class="text--center">
                        <img :src="$withBase('./img4.png')" alt="">
                        <h3>开箱即用、简单易用</h3>
                        <p>已集成 JWT 鉴权、图片上传等基础服务， 支持 Docker 极速安装，轻松使用</p>
                    </div>  
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<style src="../styles/layout.styl" lang="stylus"></style>