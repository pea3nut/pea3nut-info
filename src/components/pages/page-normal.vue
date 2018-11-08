<template>
    <div>
        <article-header title="花生PeAの个人资料" :description="getRandomItem(Fragment.concat(FragmentNormal))" />
        <profile-card :information="cardInfo">
            <radar-img
                    :radar-value="NormalRadarInfo"
                    radar-color="#B1C6AC,#85BD7D"
                    number-color="#1b2409"
                    border-color="#72A66A"
            ></radar-img>
        </profile-card>
        <block-collapsible lang="md" title="站点指北" :folded="true">
            Yahello！这里是花生~~

            这里是花生的个人资料页，也是电子简历存放的地方，制作这个站点的一个初衷就是：尽可能的去像大家展示更多，关于我。

            花生为了尽可能的表达清楚@-秀技术-@，所以在网站中使用了许多的“小花招”以增强阅读体验。

            比如说点击@@[这里](这里通常是关于点击词语的详细介绍，你可以再次点击页面的其他地方来隐藏这个窗口)@@可以显示更多信息。而有些文字又是不可见的，需要鼠标移入（PC端）或手指点击（移动端）才会显示@|（比如说这些文字）|@。

            因为此站点的文字量非常大（一万三千字开外），为了快速的索引内容，部分模块是允许折叠的。比如说你现在正在阅读的这个“站点指北”模块：在标题的右侧有一个 <i class="fa fa-caret-down"></i> 按钮，点击它，这个模块就会被折叠。

            有些模块是默认折叠的，你可以点击 <i class="fa fa-caret-up"></i> 展开它。

            为了方便用户快速回到顶部，在页面的右下角增加了“回顶部”的按钮，你可以点击右下角的小兔子来快速回到顶部。

            为了方便分享本站点内容，很多标题是<router-link to="/about#站点额外功能">可被索引</router-link>的。

            值得一提的是，本站点同时支持手机与电脑的访问。请捧起手机躺在床上安心享用吧！祝食用愉快~~
        </block-collapsible>
        <block-decal lang="md" img-src="/static/img/variety-kokoro.jpg">
            你可以切换左侧（PC端）或上方（移动端）的标签栏来查看不同风格的个人资料，不同风格的侧重信息会@-完全不一样-@有很大的不同。
        </block-decal>
        <block-collapsible lang="md" title="简单的自我介绍">
            Yahello！这里是花生PeA（pea3nut）！

            95年出生，{{ getPeA3nutAge() }}岁，当前作为一名程序员在北京工作。

            动漫宅，每一季都会追新番，时常会在夜晚将手臂伸向月亮施放魔法。

            技术宅，在工作之余写了各种开源项目。有一个开源项目维护了4年多，日均PV 2000+。

            喜欢吃汉堡和喝鸡尾酒，业余时间除了写代码和看动漫外，经常会骑自行车出去喝喝咖啡、喝喝鸡尾酒，听听音乐会。

            @|独行者，曾经的人生信条是“相信就会存在”，而如今则是“做好现在”。|@
        </block-collapsible>
        <block-justify title="资料">
            <block-justify-row lang="md" title="兴趣爱好">
                @-我只爱学习！！-@

                - 爱[看动漫](https://gist.github.com/pea3nut/461c9dd9a413c64cdfd908a5d837aecd)——每季都会追新番
                - 爱听音乐——每月都会去听音乐会，拥有独立的音乐播放器
                - 爱喝饮品（Alcohol & Caffeine）——时常会去咖啡厅和酒吧
                - 爱写文章——[知乎](https://www.zhihu.com/people/liu-bo-yuan-75-28)回答200+，[博客](http://blog.pea3nut.com)文章100+
                - 爱互联网——开坑过诸多开源项目。其中有一个维护超4年的开源项目，日均PV2000+
                - 爱萌萌哒——萌豚，养了一只叫做“树莓”的小喵~

            </block-justify-row>
            <block-justify-row lang="md" title="性格">
                脑洞很大，十分欢乐，可以一点点小事而开怀大笑。时常因为突然想到什么有趣的事情，然后突然笑出声，吓到周围的人。会让自己和身边的人充满欢乐~~

                可以为别人的高兴而高兴，为别人的悲伤而悲伤。时常因为一些感人的情节、甚至是一些感人的曲子而哭的稀里哗啦。

                原则之内恪守成规。如在任何出远门都会携带纸笔、任何的草稿都用只铅笔，每一个行为背后都有详细的原因来证明“为什么这些行为是最优解”。

                原则之外随性无比。如在下班途中因为看到很漂亮的黄昏而临时起意去酒吧喝鸡尾酒，或者半夜突然很饿爬起来去吃海底捞。
            </block-justify-row>
            <block-justify-row lang="md" title="自信满满">
                花生一直自信满满，尤其是在自己熟悉的领域中，甚至有些许的狂妄。

                有一定的攻击性，特别喜欢竞争。喜欢争强好胜，喜欢第一名的喜悦，也不讨厌惨痛失败后的痛处。

                说话和做事非常强势，经常说的2句话是“你错了”和“我错了”，相信逻辑、稳定可复现、证明，而不是真理。属于遇强则强的性格，抗打击能力与自制力超强。

                这些自信源于花生的@-聪慧-@计划性与自制力。

                做事非常有计划。常备一个月历，喜欢提前将各种事情安排好，然后有条不紊的按日程推进。哪怕计划因为某些因素而打乱，也会快速的重新规划出另一条最优解来作为新计划。

                并且，强大的自制力为计划执行提供了有效交付。

                花生可是那种说做到就可以做到的人哦~~
            </block-justify-row>
            <block-justify-row lang="md" title="独行">
                独行者，将一个人行动设为默认值。除非特别提到“和aa一起bb”，否则都是单独行动。

                比如，上文提到的：吃火锅、去咖啡厅 & 酒吧、骑自行车、听音乐会。均是一个人。

                十分独立，随身携带创可贴、碘伏、应急食品、水、打火机、小刀等物品，保证在独行过程的顺利。

                行事非常有原则，自己的决定从不受他人干扰。正因为如此也非常不合群，所以遭受过很多不愉快的事情，对所谓的“集体”、“大家”有一定的排斥心理。

                独行的行为给予了花生极高的自由。因此可以常常：带着纸笔在咖啡厅座一天、围着海边骑自行车、在视野辽阔的地方吹风。

                生活方面十分容易得到满足，经常发出“世界，不过如此”的感慨：

                - 返程大巴上的夕阳西下：世界，不过如此
                - 深夜路灯下的空旷骑行：世界，不过如此
                - 惺忪睡眼时的冰咖啡：世界，不过如此
            </block-justify-row>
            <block-justify-row lang="md" title="经历">
                经历过很多。小升初试卷作废、初中辍学、高中学习倒二。。。不过由于这些过于不堪回首，还是从大学开始说好了。

                1. 在高考前，决定去实现最初的梦想
                1. 高考完毕后，开始自学Web开发技术，暑假四个月期间保持每天12+小时
                1. 入学后，发现学校没有Web开发相关组织。因此，自己创建了一个 —— “Web开发协会”
                1. 开始创业。注册公司，创业团队达到十几人、协会百余人，成员包涵3所高校
                1. 猛然意识到不应该再继续下去了
                1. 注销公司、交接项目、协会会长换届。那时花生大三
                1. 独自一人来到北京，继续完成大学里未实现的梦想...

                一笔带过的事件背后其实发生了很多很多的事情。有欢笑，但更多的是泪水，是惨痛的教训。

                曾经的座右铭是“相信，就会存在”，而现在则是“做好现在”。

                具体的心路历程总结请看[博客：《斜23.4度的眺望》](blog.pea3nut.com/e1061)
            </block-justify-row>
        </block-justify>

        <block-collapsible lang="md" title="其他地方的花生" class="other-link po-print-hidden">

            - [一百多篇文章的博客](http://blog.pea3nut.com)
            - [超过二百个回答的知乎](https://www.zhihu.com/people/liu-bo-yuan-75-28/posts)
            - [写了一万三千字开外的个人资料（就是你现在看到的这个页面）](http://pea3nut.info)

        </block-collapsible>
    </div>
</template>

<script>
export default {
    extends :require('@/components/abstract/page.vue'),
    name :'page-normal',
    computed :{
        cardInfo(){
            return [{
                label:'姓名',
                text:'花生PeA',
            },{
                label:'常用ID',
                text:'pea3nut、PeA_nut、花生花生花、一滴水滴p',
            },{
                label:'性别',
                text:'男 <i class="fa fa-mars" style="color:#5b75ff;font-weight: bold;"></i>',
            },{
                label:'年龄',
                text:this.getPeA3nutAge(),
            },{
                label:'生日',
                text:'1995-5-18',
            },{
                label:'毕业院校',
                text:'青岛理工大学',
            },{
                label:'现居地',
                text:this.Info['present_address'],
            },{
                label:'ＱＱ',
                text:'626954412',
            },{
                label:'微信',
                text:'huasheng_pea',
            },{
                label:'职业',
                text:'程序员',
            },{
                label:'现状态',
                text:this.Info['now_state'],
            }]
        },
    },
    data(){return{
    }},
};
</script>