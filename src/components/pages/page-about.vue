<template>
    <div>
        <article-header title="关于这个网站" />
        <text-body lang="md">
            ### 关于本页面

            本页面是介绍关于这个网站（pea3nut.info）相关的内容，主要内容包括：


            - 关于本页面
            - 站点额外功能
            - 关于本站点
            - 网站元素构成
                - 原创组件
                - 开源库使用
                - 素材使用
            - 致谢
            - 版权说明

            <h3 v-pea-focus="'站点额外功能'">站点额外功能</h3>

            网站各个标签具有不同的URL：

            - 三次元：`{{rootUrl}}/normal`
            - 职业技能：`{{rootUrl}}/job`
            - 二次元：`{{rootUrl}}/sss`
            - 关于：`{{rootUrl}}/about`

            部分组件中的标题可以通过 URL Hash 所引用，被引用的组件会处于焦点状态。如在浏览器中直接进入`{{rootUrl}}/acg#花生的节日`会跳到“二次元”标签，并滚动至“花生的节日”章节，并展开该组件。

            当鼠标处于“可被索引的标题”上时，会有 小手符号<i class="fa fa-hand-pointer-o" aria-hidden="true"></i> 提示，点击会改变 URL。试着点击上边“站点额外功能”标题，然后观察URL变化。

            ### 关于本站点

            说起来，这个网站一开始设计的初衷是“写一个在线电子简历”。但是在后来找工作的过程中，我发现在线电子简历的作用十分有限，而更多的情况下是：我常用这个站点来介绍自己，不论是职业技能、生活态度、还是二次元。一个网站能够表达的信息，总是要比QQ或微信个人资料要丰富的多。

            于是，在经过6个alpha版本、7个beta版本、2个gamma版本无数次刊误后，终于发布了正式版本。侧重点由“电子简历”变为真正的“个人资料”，项目名也由“电子简历（resume）”变为“个人资料（pea3nut-info）”。

            所以，接下来花生将会从“个人资料”的角度，为这个站点增加更多的内容~

            ### 网站元素构成

            在开发这个网站中，我

            - 使用了诸多开源库
            - 设计开发了大量的原创组件
            - 从各种地方搜集了各种素材

            #### 开源库使用


            - 项目使用：[vue-cli][1]脚手架的[webpack][2]模板进行快速搭建
            - SPA使用：[vue-router][3]进行路由实现
            - 字体图标使用：[font-awesome][4]
            - 雷达图绘制使用：[Echarts][5]
            - Markdown使用：[Marked][6]二次包装进行渲染
            - 全局CSS使用：[BootStrap.alpha-6][7]
            - 时间线绘制使用：[Short-Night: Rules][8]


            感谢上述开源库的贡献团队！！

            [1]: https://github.com/vuejs/vue-cli
            [2]: https://github.com/vuejs-templates/webpack
            [3]: https://router.vuejs.org/
            [4]: http://fontawesome.io/
            [5]: http://echarts.baidu.com/
            [6]: https://github.com/chjj/marked
            [7]: http://getbootstrap.com/
            [8]: https://github.com/FoXZilla/Rules

            #### 网站组件

            #### short-night-timeline

            按照时间精准绘制时间线，并可自动排列解决重叠。使用 [Short-Night: Rules](https://github.com/FoXZilla/Rules) 绘制

            <div id="timeline-example"></div>

        </text-body>
            <short-night-timeline
                :data="[{
                    date: '2010-3-9',
                    endDate: '2012-3-9',
                    title: 'Event A',
                }, {
                    date: '2011-3-9',
                    title: 'Event B',
                }]"
            />
        <text-body lang="md">
            ##### radar-img

            雷达图组件，使用[Echarts](http://echarts.baidu.com/)二次包装
        </text-body>

            <radar-img
                    :radar-value="NormalRadarInfo"
                    radar-color="#B1C6AC,#85BD7D"
                    number-color="#1b2409"
                    border-color="#72A66A"
            ></radar-img>

        <text-body lang="md">
            &nbsp;<!--todo: https://github.com/chjj/marked/issues/942-->

            ##### block-collapsible

            可折叠、支持Markdown渲染、支持radar-img嵌套
        </text-body>

            <block-collapsible title="标题" lang="md">
                内容
            </block-collapsible>

        <text-body lang="md">
            &nbsp;<!--todo: https://github.com/chjj/marked/issues/942-->

            ##### block-decal

            图片+文字方式、支持Markdown渲染
        </text-body>

            <block-decal img-src="/static/img/variety-kokoro.jpg">
                纯文字内容
            </block-decal>

        <text-body lang="md">
            &nbsp;<!--todo: https://github.com/chjj/marked/issues/942-->

            ##### block-justify

            大段标题+内容说明，以减缓频繁使用[block-collapsible](#block-collapsible)组件。
        </text-body>

            <block-justify title="标题">
                <block-justify-row lang="md" title="子标题">
                    纯文字内容，支持Markdown渲染
                </block-justify-row>
            </block-justify>

        <text-body lang="md">
            &nbsp;<!--todo: https://github.com/chjj/marked/issues/942-->

            #### 素材使用

            ##### 背景图

            <img src="//pea.nutjs.com/mine/image/uchu01.jpg" class="page-about--photo-like">

            网站背景使用[pixiv.net][8]背景图，原链接如下

                http://source.pixiv.net/common/images/bg/uchu01.jpg


            <img src="//public.pea3nut.org/img/layer01.bg.gif" class="page-about--photo-like">

            部分背景使用[pixiv.net][8]背景图，原链接如下

                http://source.pixiv.net/common/images/bg/layer01.gif

            ##### 回顶部

            <img src="/static/img/scroll-to-top/scroll-to-top.png" class="page-about--photo-like"><img src="/static/img/scroll-to-top/scroll-to-top__hover.png" class="page-about--photo-like">

            回顶部的小兔子图片使用[snowmiku.com](http://snowmiku.com/skytown/)的回顶部图。经过了部分二次修改（如添加文字）后使用。

            - [PSD文件下载](/static/img/scroll-to-top/scroll-to-top.psd)

            [8]: https://www.pixiv.net/

            #### 标签形状

            <img src="/static/img/tabs/tabs.png" class="page-about--photo-like"><img src="/static/img/tabs/tabs__active.png" class="page-about--photo-like">

            标签形状是花生自己用PS钢笔工具照着某个标签图片（找不到了）画的，可认为是原创内容？

            - [PSD文件下载](/static/img/tabs/tabs.psd)

            #### 二次元标签页警告插画

            <img src="/static/img/follow.jpg" class="page-about--photo-like">

            <br />

            在二次元标签页设置的警告插画。由我委托画师 [uMnshaw](https://www.mihuashi.com/users/uMnshaw) 所画，授权协议为 [MPL-2.0](https://www.mozilla.org/en-US/MPL/2.0/)：著名来源可随意商用、二次修改等。具体事项请参考 [MPL-2.0](https://www.mozilla.org/en-US/MPL/2.0/) 协议

            - [创作画师：uMnshaw](https://www.mihuashi.com/users/uMnshaw)
            - [PSD文件下载](/static/img/follow.7z)


            ### 致谢

            站点“花生Peadarの个人资料”自2017.1.27开发以来，上线经过6个alpha版本测试、7个beta版本测试。十分感谢帮忙测试的人员，让整个站点变的更加友好，非常感谢！！

            名单如下（排名不分先后）：

            - Limo
            - Airen
            - 闲人
            - 国宝熊猫君
            - Rio
            - 纪羽軒
            - 无名学长
            - 劢晢倫

            ### 版权说明

            本项目已成为开源项目，具体请参考[Github: pea3nut-info](https://github.com/pea3nut/pea3nut-info)。
        </text-body>
    </div>
</template>

<script>
export default {
    data(){return {
        rootUrl: location.origin,
    }},
    extends :require('@/components/abstract/page.vue'),
    name :'page-about',
};
</script>

<style scoped="scoped" lang="scss">
@import "~pea-styles/scss/pea-class.scss";
.page-about{
    .text-body+.block-collapsible
    ,.text-body+.block-decal
    ,.text-body+.block-justify{
        margin:0 !important;
    }
    .text-body .page-about--photo-like{
        margin: 0;
        background: url("//public.pea3nut.org/img/layer01.bg.gif");
    }
    &.page-about__desktop{
        .article-header{
            margin-bottom: 30px;
        }
        .text-body:last-child{
            padding:0 1em 7em;
        }
        .page-about--photo-like{
            @extend .pea-photo-like__desktop;
            &+.page-about--photo-like{
                margin-left: 25px;
            }
        }
    }
    &.page-about__mobile{
        @media only screen and (max-width: 330px) {
            padding-left: 15px !important;
            padding-right: 15px !important;
        }
        .text-body:last-child{
            padding:0 0.5em 5em;
        }
        .page-about--photo-like{
            margin: 0;
            @extend .pea-photo-like__mobile;
            &+.page-about--photo-like{
                margin-left: 10px;
            }
        }
    }
}
</style>