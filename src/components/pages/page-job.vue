<template>
    <div>
        <article-header title="个人简历" :description="headerDescription" />
        <profile-card :information="cardInfo">
            <radar-img
                title="Dominance (D), Influence (I), Steadiness (S), and Conscientiousness (C)."
                :radar-value="JobRadarInfo"
            ></radar-img>
        </profile-card>
        <block-collapsible lang="md" title="求职意向">
            Web前端应用设计开发、JavaScript应用开发。

            熟练掌握JavaScript及Vue生态使用，拥有PHP、Node.js后台开发经验
        </block-collapsible>
        <block-collapsible lang="md" title="技术剖面" class="skill-profile">

            计算机-网络工程专业，自2014年6月开始独立自学Web开发技术。技术狂人，[开源项目](http://pxer.pea3nut.org/)日均PV 2000+，[GitHub](https://github.com/pea3nut/pxer) 300+ Star达成！大学期间读完超过10本技术书籍！

            <radar-img :radar-value="SkillRadarInfo"></radar-img>

            - **扎实稳固**的HTML+CSS：<br />曾不依赖前端框架类库独自完成超过5k行代码的前端UI，不借助JS实现响应式兼容移动端。
            - **游刃有余**的JavaScript：<br />曾用原生JavaScript写过数千行的[Js开源爬虫](https://github.com/pea3nut/Pxer)，拥有完整的事件模型、异步管理、数据绑定、健全的模块化设计。维护近3年，迭代20+个版本，重构7次。
            - **轻车熟路**的PHP：<br />曾担任开发Leader，使用原生PHP实现模板渲染、数据交互、模块化设计，驱动万余行Web项目。

            享受写原生Js时的快感，但也喜欢修改/使用现有轮子。读jQuery源码、编译BootStrap、配置webpack、改ThinkPHP内核。

            熟练使用Vue.js全家桶，熟悉node.js生态。用Vue.js写过[多页项目](http://wa4.demo.pea3nut.org)也写过[SPA](http://wa6.demo.pea3nut.org)。

            熟悉Web后端，用原生PHP、ThinkPHP、Express、原生Node.js写过许多CGI接口/MVC项目。

            技术狂人，好读书，活跃于：

            - 个人博客：[blog.pea3nut.com](http://blog.pea3nut.com/)
            - Github：[github.com/pea3nut](https://github.com/pea3nut/)
            - Github/FoXZilla：[github.com/FoXZilla](https://github.com/FoXZilla/)

            更详细的开发技术介绍可以在下方“技能”专栏找到
        </block-collapsible>
        <block-justify title="工作">
            <block-justify-row lang="md" title="百度">
                2018.3 - 2018.6，Web前端（实习）

                2018.7 - 至今，Web前端

                ---

                - 实习期间在KITT.AI团队，为NLU、FAQ新功能提供GUI支持
                - 适应能力极强，实习期间（53天）完成26个Task，获“2倍简单奖”
                - 工作认真，每周周报字数在一千字左右，将感想写成博客[《你不是一个前端》](http://blog.pea3nut.com/e1042)，被InfoQ前端之巅、奇舞周刊转载，sfgg每周精选文章第二名

            </block-justify-row>
            <block-justify-row lang="md" title="Mozilla">
                2017.7 - 2018.2，Web前端（实习）

                ---

                - 负责Firefox中国版本地化扩展开发，使其更加符合国人操作习惯
                - 使用WebExtensions为Firefox添加Add-on，工作效率拔群，在2周内重构完成5个Add-on
                - 在开发Add-on的同时不忘造轮子，设计开发用于WebExtensions的Chaz库
                - GitHub： github.com/pea3nut/Chaz
                - 参与产品讨论，共同制定Add-on形式及功能

                ---

                离职原因：

                1. 环境太过悠闲，工作氛围、技术氛围不够浓厚
                1. 收到了百度的Special Offer
            </block-justify-row>
        </block-justify>
        <block-collapsible lang="md" title="自我评价" :folded="true" v-if="false">
            好胜心强，崇尚竞争。喜欢第一名的畅快淋漓，也不讨厌失败后的惨痛教训！

            互联网的真爱粉，开源运动的践行者。一直在尽自己绵薄之力让互联网变的更好：开源、发Pull request、勘误、翻译MDN。

            富有童心，积极乐观。永远保持一颗好奇心不断向前，擅长融入新环境，交际虽略显笨拙，但却真实。
        </block-collapsible>
        <block-collapsible lang="md" title="校园经历">

            1. 2014年9月考入青岛理工大学网络工程专业
            2. 大一上学期：
                - 创建技术交流社团“Web开发协会”，担当会长
            3. 大一下学期：
                - 注册公司“青岛卓然独立网络科技有限公司”，担当企业法人
                - 创建“Nutjs团队”，获批入驻“青岛理工大学创业孵化基地”
            4. 大二上学期：
                - 使用WordPress搭建个人博客：[blog.pea3nut.com](http://blog.pea3nut.com/)
                - 将协会推广至山东科技大学、中国石油大学，协会总人数100+
                - 担任Mozilla Firefox校园大使
            5. 大二下学期：
                - 获火狐2015年秋季学期优秀校园大使称号
                - 发起“青理助手”创业项目，获“创青春挑战杯大赛”校级金奖
                - 个人博客累计发表50篇文章
            6. 大三上学期：
                - 获5000元创新创业奖学（5%）
            7. 大三下学期：
                - 取得360前端星计划参与资格，顺利毕业（60/1000）
                - GitHub开源项目Pxer，100+ Star达成！
                - 取得Mozilla Beijing Web前端实习Offer
            8. 大四上学期：
                - Mozilla Beijing实习
                - 斩获百度2017校园秋季招聘Special Offer
            9. 大四下学期
                - 百度度秘团队实习
                - 校优秀毕业论文一等奖，顺利毕业
        </block-collapsible>
        <block-justify title="技能">
            <block-justify-row lang="md" title="HTML+CSS">
                扎实稳固的HTML+CSS基础，喜欢自己写原生的HTML+CSS实现与众不同的效果。

                熟练使用float与flex布局，能够使用原生HTML+CSS实现响应式，同时兼容电脑与手机访问。

                熟练使用Bootstrap前端框架、SCSS预处理、字体图标、雪碧图等常用前端技术。
            </block-justify-row>
            <block-justify-row lang="md" title="Java Script">
                游刃有余的JavaScript。

                熟悉ES5、ES6标准，掌握Js高级特性。可以原生Js实现异步状态管理、仿EventTarget事件模型、getter/setter实现动态数据绑定、仿CO模块Generator函数自动执行器等。

                即使不使用jQuery也可以熟练操作DOM、BOM，读过jQuery源码。

                熟悉Vue.js生态，熟练使用Vue全家桶，理解MVVM数据驱动思想。
            </block-justify-row>
            <block-justify-row lang="md" title="Node.js">
                熟练使用Node.js，包括前端工具与Web后台部分，并将Node.js作为计算机日常维护脚本来使用。

                熟悉webpack，可以自己配置webpack多入口、热加载等。

                用原生Node.js写过CGI，也用Express写过MVC项目。
            </block-justify-row>
            <block-justify-row lang="md" title="PHP">
                熟练使用PHP、ThinkPHP框架实现信息管理系统（包括CGI和模板渲染）。

                曾大幅修改订制ThinkPHP中Model模型类、View渲染，增强其渲染功能。

                熟悉Apache、MySQL，能在Linux下配置PHP运行环境。
            </block-justify-row>
            <block-justify-row lang="md" title="设计">
                具有基本的设计功底，了解基本的设计原则，研究过相关书籍。

                熟练使用Photoshop、Sketch、Firework等设计工具。

                对于用户体验有比较深刻的理解，经常做出“看起来不是特别漂亮，但用起来却意外**舒服**”的产品。
            </block-justify-row>
            <block-justify-row lang="md" title="其他">
                - 还算说得过去的算法与数据结构
                - 较不错的软件工程思想
                - 了解HTTP协议
                - 熟练使用Git、Github
                - 良好的演讲与活动组织能力
            </block-justify-row>
            <block-justify-row lang="md" title="读书">

                - 《JavaScript高级程序设计》
                - 《ECMAScript6 入门》
                - 《Web全栈工程师的自我修养》
                - 《写给大家看的设计书》
                - 《Github入门与实践》
                - 《写给大家看的Web设计书》
                - 《软件工程导论》
                - 《JavaScript设计模式与开发实践》
                - 《数据结构》
                - 《图解HTTP》
                - 《程序员的呐喊》
                - 《深入理解ES6》

            </block-justify-row>
        </block-justify>
        <block-justify title="项目">
            <block-justify-row lang="md" title="仿Android手势解锁">
                2017年3月写成，无任何第三方库写成的“手势密码”应用。2017年360前端星作业。

                - 原生Js实现SPA（H5路由）
                - 完全面向对象设计
                - MVVM(MVC)结构
                - Canvas绘图
                - 原生Nodejs自动构建

                2017年360前端星作业，耗时3天完成。

                [demo](http://360homework.demo.pea3nut.org/)演示，项目源码[pea3nut/360homework](https://github.com/pea3nut/360homework)
            </block-justify-row>
            <block-justify-row lang="md" title="Pxer官网">
                2016年3月写成，Pxer的官网。

                Pxer的官方网站，提供安装教程及下载地址，项目使用Node.js MVC构架。

                - Express + pm2
                - EJS模板 + Markdown
                - 使用BootStrap-4.0.0-alpha.6实现响应式布局
                - 使用ES8 async/await 进行异步管理

                Pxer用户不断增加，于是不得不单独为Pxer而开发一个官网来指导用户使用。[Pxer官网](http://pxer.pea3nut.org/)
            </block-justify-row>
            <block-justify-row lang="md" title="Pxer 7">
                2017年3月写成，Pxer第7次重构后的新版本。

                Pxer是采用纯客户端JavaScript编写的pixiv.net爬虫

                - Github开源100+Star 达成！
                - 技术栈：ES6、Vue.js、Node.js、Mocha
                - 设计开发Pxer主程序构架、双版本build、单元测试
                - 制定Pxer推广策略，设计开发Pxer官方网站（pm2+Express）
                - 维护3年，释出超过20个版本（现版本7.0.4）
                - 使用原生Node.js进行build
                - 完全面向对象的低耦合模块化设计

                三年如一日维护，以工匠精神不断打磨Pxer，增加功能、改善用户体验。这是我最自豪的作品，也深得用户好评。是Pxer让我明白了什么叫“用户体验”、什么叫“产品”

                当项目不断膨胀，从最初1.x的30行代码到7.x仅核心代码就超过了2k行，项目的难点早已不是如何实现爬虫，而是如何去组织代码、如何维持2个版本并同步、如何划分模块、如何像webpack一样build项目。

                项目官网[Pxer官网](http://pxer.pea3nut.org/)，项目源码[Github: Pxer](https://github.com/pea3nut/Pxer)

            </block-justify-row>
            <block-justify-row lang="md" title="花生PeA 的个人资料">
                2017年1月写成，就是现在这张页面，用作个人资料展示。

                - 精心的设计
                - 利用 Vue生态，设计大量原创UI组件
                - 内容Markdownable
                - 整站适配移动端（Grid响应式）
                - Vue.js生态实现SPA

                [Github源码](https://github.com/pea3nut/pea3nut-info)。关于本项目的详细信息可以在上方切换“关于”标签中。
            </block-justify-row>
            <block-justify-row lang="md" title="Pxer6">
                2016年10月写成，独自开发，Pxer第6个大版本，上线一周内被上万次使用。

                Pxer是一个使用纯客户端Js写成的免费且开源的pixiv.net爬虫。

                - 上线一周内被使用上万次！
                - 不依赖任何类库
                - 超过1000行的ES6代码
                - 原生Js实现数据动态绑定、异步管理、完整的事件模型

                [Github源码](https://github.com/pea3nut/Pxer/tree/6.1.4)，项目官网[Pxer6官网](http://pxer.pea3nut.org/)

                > 由于版本升级，可能会有许多空链接

            </block-justify-row>
            <block-justify-row lang="md" title="wa6">
                2016年7月写成，青岛理工大学Web开发协会第6代官网。

                独自开发，此项目是刚刚接触Vue.js的过渡项目，使用了ThinkPHP+Vue.js的混合开发实现了SPA

                - OAuth2.0 QQ登陆
                - 良好的响应式设计
                - 不使用Node.js构建的SPA
                - ThinkPHP + Vue.js混合开发

                项目地址[wa6](http://wa6.demo.pea3nut.org)，项目源码[Github: wa6](https://github.com/pea3nut/wa6)
            </block-justify-row>
            <block-justify-row lang="md" title="wa5">
                弃坑于2016年5月，青岛理工大学Web开发协会第5代官网。

                胎死腹中的项目，设计中拥有简易的商城系统，整个项目使用ThinkPHP MVC构建。

                写到一大半时发现ThinkPHP的MVC耦合过于严重，改动了数百行ThinkPHP源代码增强了其model、模板渲染、路由控制等诸多功能，仍难以满足复杂的需求。

                - 庞大的设计
                - 使用ThinkPHP构建
                - 传统BootStrap+jQuery组合
                - MVC结构

                独自开发，弃坑前大概完成了：

                - 10个数据表
                - 20个CGI
                - 25个页面

                项目源码[Github: wa5](https://github.com/pea3nut/wa)
            </block-justify-row>
            <block-justify-row lang="md" title="wa4">
                2015年9月带领协会另2名成员完成，青岛理工大学Web开发协会第4代官网。

                - 健全的模型与设计
                - 整站Ajax通信
                - 没有用媒体查询兼容移动端访问
                - 无任何第三方类库框架
                - 超过10000行代码

                项目开发中担任Leader，主要负责全部网站后台及前端JavaScript工具库开发。

                因版本迭代，本项目已不再运行，你可以[查看实例](http://wa4.demo.pea3nut.org)来查看项目。

                项目涉及到内网登陆：

                - 账号：123456
                - 密码：123456
                - 激活码（可无限使用）：aaaaa
            </block-justify-row>
        </block-justify>

        <block-collapsible lang="md" title="其他链接" class="other-link po-print-hidden">

            - [花生PeA in Github](https://github.com/pea3nut)
            - [花生PeAの博客](http://blog.pea3nut.com)
            - [花生PeA in 掘金](https://juejin.im/user/58fed8a7a22b9d0065b13e30)

        </block-collapsible>
    </div>
</template>

<script>
import {formatDate} from 'pea-scripts/dist/function.browser.js';
export default {
    extends :require('@/components/abstract/page.vue'),
    name :'page-job',
    data(){return{
    }},
    computed:{
        cardInfo(){
            var reArr =[{
                label:'姓名',
                text:'刘伯源',
            },{
                label:'性别',
                text:`男`,
            },{
                label:'年龄',
                text:`${this.getPeA3nutAge()}（1995.5出生）`,
            },{
                label:'户口',
                text:'山东省 青岛市',
                print:false,
            },{
                label:'毕业院校',
                text:'青岛理工大学（2014-2018）',
            },{
                label:'所学专业',
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
                label:'希望地区',
                text:'互联网一二线城市',
                print:false,
            },{
                label:'现状态',
                text:this.Info['now_state_job'],
                print:false,
            }];
            return reArr;
        },
        headerDescription(){
            return[{
                label:'下载',
                text:`
                    <a href="/static/resource/resume/pea3nut-web-resume.pdf" target="_blank">正常版</a>
                    /
                    <a href="/static/resource/resume/pea3nut-web-image-resume.png" target="_blank">单页图片版</a>
                `,
            },{
                label :'最后更新',
                text :formatDate(this.LastUpdateTime,{hasTime:false,fillZeroOfDate:true}),
            }];
        },
    },
};
</script>