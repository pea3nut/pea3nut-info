<template>
    <div>
        <article-header title="个人简历" :description="headerDescription" />
        <profile-card :information="cardInfo">
            <radar-img
                :radar-value="JobRadarInfo"
            ></radar-img>
        </profile-card>
        <block-decal img-src="/static/img/my-career.png">
            曾经在工厂流水线上刷皮鞋、在饭店端盘子。而现在，为了实现梦想而踏上旅程...
        </block-decal>
<!--        <short-night-timeline :data="jobResume" title="职业履历" />-->
        <block-collapsible lang="md" title="技术剖面" class="skill-profile">
            Web前端 & 全栈开发工程师，曾就职于 Mozilla、百度、字节跳动。热爱技术，获[掘金优秀作家](https://juejin.cn/user/3227821867563735/posts)称号，也在 [GitHub](https://github.com/pea3nut) 上获得了 1k 个 Star

            除开发技术外，对于工程化、GPT 落地与实践、业务规划也有非常丰富的经验和知识

            ---

            <radar-img :radar-value="SkillRadarInfo"></radar-img>

            我是这方面的专家，我拥有大量的实践的成功的经验：

            - JavaScript / TypeScript
            - 全栈开发
            - Node.js
            - Prompt Engineering (GPT)
            - 项目、团队工程化
            - GPT 使用及落地

            我非常擅长这些领域，拥有丰富的实践经验：

            - Docker
            - React / Vue
            - CSS
            - Webpack
            - 业务规划
            - 高并发中间件服务器设计

            我十分熟悉这些，它们就像是我的老朋友：

            - Linux & Bash
            - Git
            - 团队成员培养
            - 团队流程搭建
            - 知识分享
            - 内容审核业务
        </block-collapsible>
        <block-justify title="工作">
            <block-justify-row lang="md" title="TikTok">
                2021.3 - 至今，FE Tech Lead，新加坡

                ---

                - 负责字节海外产品的统一文本安全平台，包括 TikTok、Lark、Pico 等
                - 负责文本安全业务的技术和业务规划，与各个职能团队合作规划业务目标、拆分里程碑，以完成业务目标
                - 负责 2 个前端项目和 2 个 Node.js 服务的技术基础建设、工程及合作流程搭建
                - 发起并主导 GPT 赋能项目，在某业务场景提升 47.7% 的准确率和 7.6% 召回率提升
                - 纯英文环境下负责 3 名新加坡本地人团队成员指导，使其独当一面，令其负责某个能够对齐其职业目标的子方向

                > 技术栈：React，Node.js，TypeScript，全栈开发
            </block-justify-row>
            <block-justify-row lang="md" title="百度">
                2018.3 - 2021.3，Web前端开发工程师，北京

                ---

                SwanSSR 项目负责人 - Node.js

                > SwanSSR 是一个拥有**亿级流量**的 Node.js 中间件服务器。是 Swan 的中央分发服务器

                - 针对庞大业务逻辑，设计实现了 Bluebird 服务器框架
                - 使用 TypeScript 对项目进行渐进式重构
                - 对稳定性、性能、代码准入等项目全方面负责

                ---

                Swan 核心开发者 - Vue

                > Swan 是一个类似于 React Native 的百度自研的 基于 Vue 的原生应用渲染框架

                - 使用 Swan + DuerOS 在小度系列硬件上绘制页 面，完成业务需求
                - 开发 Swan 公共组件、 CLI 程序等生产力工具


                ---

                KITT.AI Web前端开发（实习） - HTML、CSS、AngularJS

                > KITT.AI 是一个 to B 的智能客服解决方案，KITT.AI 团队隶属于百度度秘事业部

                - 与后端同学合作，为应用添加新功能
                - 实习期间（53天）完成26个 Task，获“2倍简单奖”

            </block-justify-row>
            <block-justify-row lang="md" title="Mozilla">
                2017.7 - 2018.2，Firefox 浏览器扩展开发（实习）

                - 使用 WebExtensions 技术（HTML + CSS + JS）开发了 5 个浏览器扩展
            </block-justify-row>
        </block-justify>
        <block-collapsible lang="md" title="其他活动">
            - [掘金](https://juejin.cn/user/3227821867563735)优秀作家，投稿屡次登上热榜 TOP 1
            - [Github](https://github.com/pea3nut/) 累计获得 1k Star
            - 作为制作人，帮助某个人出道 Vtuber，并在一个月内将流水翻了30倍，达到 2 万元每月
            - 在[个人博客](http://pea3nut.blog/)中写了 100+ 篇博客
            - 英语达到 @@[B2](简而言之，达到 B2 水平的英语学习者可以理解和使用相对复杂的语言结构，能够在各种情境中流利、准确地沟通，并能够理解主要思想和细节)@@ 水平
        </block-collapsible>
        <block-justify title="项目">
            <block-justify-row lang="md" title="">
                以下所有项目为个人的开源项目，均可在[我的 Github 首页](https://github.com/pea3nut) 中找到

                ---
            </block-justify-row>
            <block-justify-row lang="md" title="AI Dict">
                > Note: 项目仍处于开发中

                基于AI的可对话的超级英语字典~！

                这个项目有2个目标：

                1. 打造一个可对话的超级英语字典网站
                2. 一行代码也不写，纯粹使用 GPT 来完整整站开发！

                - [项目仓库](https://github.com/FoXZilla/aidict)
            </block-justify-row>
            <block-justify-row lang="md" title="Short Night">
                > Note: 项目仍处于 alpha 阶段测试中

                使用 TypeScript、Canvas 技术开发的 Timeline 绘制引擎

                ![](/static/img/short-night-demo.jpg)

                输入多个事件起止事件，可自动绘制漂亮的时间轴。按时间对齐，自动解决元素重叠问题

                - [项目官网](http://short-night.pea3nut.org/)
                - [项目源码](https://github.com/FoXZilla/short-night)
            </block-justify-row>
            <block-justify-row lang="md" title="Pxer">
                一个针对 Pixiv.net 网站的爬虫，采用油猴（Tampermonkey）的方式运行

                ![](https://github.com/FoXZilla/Pxer/blob/master/public/pxer-ui.gif?raw=true)

                自 2014 年服役至今，日流量万级以上。迭代 20 余个版本， Github 700+ Star

                为支撑 Pxer 应用，也开发了官网、数据收集、更新发布等相关支持

                - [项目官网](http://pxer.pea3nut.org/)
                - [项目源码](https://github.com/pea3nut/Pxer)
            </block-justify-row>
            <block-justify-row lang="md" title="pea3nut-hub">
                使用 Docker 技术管理的 DevOps 项目，提供方便的部署、更新、打包、迁移等功能

                目前本项目托管了所有我的在线网站项目，包含以下 7 个独立站点：

                1. [Pxer 官网 v1](http://v1.pxer.pea3nut.org/)
                1. [Pxer 官网 v2](http://pxer.pea3nut.org/)
                1. [Pxer App](https://pxer-app.pea3nut.org/)
                1. [Short Night 官网](http://short-night.pea3nut.org/)
                1. [花生Peadarの个人资料](http://pea3nut.info/)
                1. [打点平台](http://point.pea3nut.org/)
                1. [花生Peadar的博客](http://pea3nut.blog/)

                [项目源码](https://github.com/pea3nut/pea3nut-hub)
            </block-justify-row>
            <block-justify-row lang="md" title="pea3nut-info">
                就是现在你看到的这个页面。用作个人资料展示@|，写了上万字|@

                - [项目源码](https://github.com/pea3nut/pea3nut-info)
                - [项目介绍](/about)
            </block-justify-row>
        </block-justify>
        <block-collapsible lang="md" title="相关链接">
            - 领英：[Peadar Liu](https://www.linkedin.com/in/peadar-liu/)
            - 个人资料网站：[pea3nut.info](http://pea3nut.info/)
            - 个人博客：[pea3nut.blog](http://pea3nut.blog/)
            - Github：[github/pea3nut](https://github.com/pea3nut/)
            - 所有的线上站点管理：[github/pea3nut/pea3nut-hub](https://github.com/pea3nut/pea3nut-hub)
            - 掘金：[juejin.im](https://juejin.cn/user/3227821867563735)
            - Pxer 官网：[pxer.pea3nut.org](http://pxer.pea3nut.org/)
            - Short Night 官网：[shortnight.pea3nut.org](http://shortnight.pea3nut.org/)
        </block-collapsible>
        <block-collapsible lang="md" title="校园经历">
            1. 2014年9月考入青岛理工大学网络工程专业
            1. 大一：
                - 创建技术交流社团“Web 开发协会”，担当会长
                - 注册公司“青岛卓然独立网络科技有限公司”，担当企业法人
                - 创建“Nutjs 团队”，获批入驻“青岛理工大学创业孵化基地”
            1. 大二：
                - 使用 WordPress 搭建个人博客：[blog.pea3nut.com](http://blog.pea3nut.com/)
                - 将协会推广至山东科技大学、中国石油大学，协会总人数100+
                - 担任 Mozilla Firefox 校园大使
                - 获火狐2015年秋季学期优秀校园大使称号
                - 发起“青理助手”创业项目，获“创青春挑战杯大赛”校级金奖
                - 个人博客累计发表 50 篇文章
            1. 大三：
                - 获 5000 元创新创业奖学（5%）
                - 从360前端星计划中顺利毕业
                - GitHub 开源项目 Pxer，100+ Star 达成！
                - 前往 Mozilla Beijing 实习
            1. 大四：
                - Mozilla Beijing 实习
                - 斩获百度 2017 校园秋季招聘 Special Offer
                - 百度 KITT.AI 团队实习
                - 校优秀毕业论文一等奖，顺利毕业
        </block-collapsible>
    </div>
</template>

<script>
import {formatDate} from 'pea-scripts/dist/function.browser.js';
import {jobResume} from '../../config/timeline';

export default {
    extends :require('@/components/abstract/page.vue'),
    name :'page-job',
    data(){return{
        jobResume,
    }},
    computed:{
        cardInfo(){
            var reArr =[{
                label:'姓名',
                text:'刘伯源/Peadar Liu',
            },{
                label:'性别',
                text:`男`,
            },{
                label:'年龄',
                text:`${this.getPeA3nutAge()}（1995.5出生）`,
            },{
                label:'出生地/现居地',
                text:`黑龙江/${this.Info['present_address']}`,
                print:false,
            },{
                label:'毕业院校',
                text:'青岛理工大学（2014-2018）',
            },{
                label:'学位',
                text:'计算机-网络工程（学士）',
            },{
                label:'婚姻状况',
                text:this.Info['marriage'],
                print:false,
            },{
                label:'政治面貌',
                text:'共青团员',
                print:false,
            },{
                label:'微信',
                text:'huasheng_pea',
            },{
                label:'E-mail',
                text:'pea3nut[at]qq.com',
            },{
                label:'英语水平',
                text:'B2，可流利沟通',
                print:false,
            },{
                label:'现状态',
                text: `${this.Info['working_for']}/${this.Info['job_title']}`,
                print:false,
            }];
            return reArr;
        },
        headerDescription(){
            return[
                // {
                //     label:'下载',
                //     text:`
                //         <a href="/static/resource/resume/LiuBoYuan-Github500star.pdf" target="_blank">精简版</a>
                //     `,
                // },
                {
                    label :'最后更新',
                    text :formatDate(this.LastUpdateTime,{hasTime:false,fillZeroOfDate:true}),
                },
            ];
        },
    },
};
</script>