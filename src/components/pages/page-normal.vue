<template>
    <div>
        <article-header title="花生Peadarの个人资料" :description="getRandomItem(Fragment.concat(FragmentNormal))" />
        <profile-card :information="cardInfo">
            <radar-img
                    :radar-value="NormalRadarInfo"
                    radar-color="#B1C6AC,#85BD7D"
                    number-color="#1b2409"
                    border-color="#72A66A"
            ></radar-img>
        </profile-card>
        <block-collapsible lang="md" title="站点指北（点击展开）" :folded="true">
            YaHello，这里是花生Peadar~！

            欢迎来到花生的个人资料站。这个网站是为了向大家展示我自己而建立的，希望可以有人看到，通过这个网站了解花生，交换想法

            为了尽可能的表达清楚@-秀技术-@，网站中使用了许多的“小花招”以增强阅读体验：

            - 点击@@[这里](这里通常是关于点击词语的详细介绍，你可以再次点击页面的其他地方来隐藏这个窗口)@@可以显示更多信息
            - 这里@|（比如说这些文字）|@需要鼠标移入（PC端）或手指点击（移动端）才会显示
            - 你现在正在阅读的这个“站点指北”模块：在标题的右侧有一个 <i class="fa fa-caret-down"></i> 标识。点击文字，这个模块就会被折叠
            - 有些模块是默认折叠的。点击 <i class="fa fa-caret-up"></i> 旁边的文字，可以展开这个模块
            - 点击页面右下角的小兔子，可以快速回到顶部
            - 大部分标题均是<router-link to="/about#站点额外功能">可被索引</router-link>的，点击他们然后复制URL可以方便引用这一模块

            本站点同时支持手机与电脑的访问。除了通过电脑访问，你也可以捧起手机躺在床上来安心享用~！

            你可以切换左侧（PC端）或上方（移动端）的标签栏来查看不同风格的个人资料，不同风格的侧重信息会@-完全不一样-@有很大的不同
        </block-collapsible>
        <block-collapsible lang="md" title="自我介绍">
            Yahello~！这里是花生Peadar！

            当前正作为一名程序员在新加坡而努力工作着

            喜欢二次元，每季度都要看10部以上的动漫，也为听初音未来的演唱会而远征日本；喜欢思考，在[自己的博客](http://pea3nut.blog)中淋淋洒洒写了上百篇文章；喜欢咖啡，最喜欢在炎炎夏日中喝一杯畅快的冰摩卡~

            有一个难以实现的梦想，因此而努力着

            从一名初中辍学的流水线工人，再到入职BAT的北漂程序员。经历过很多的事。有欢笑，但更多的是泪水，是惨痛的教训。曾经的座右铭是“相信，就会存在”，而现在则是“做好现在”
        </block-collapsible>
        <block-justify title="爱好">
            <block-justify-row lang="md" title="看动漫">
                超级喜欢看动漫，每季都要看10部动漫以上，每晚都要看几集动漫才会睡觉。会追当季的新番，算好周几几点更新

                如果某天是自己喜欢动漫更新的日子，那么整个一天都将是开心的

                喜欢看日常、萌系的动漫

                最喜欢的动漫是《GJ部》和《吹响，上低音号》
            </block-justify-row>
            <block-justify-row lang="md" title="写代码">
                我实在是太喜欢写代码了

                从高考结束后开始自学 JavaScript，从此一发不可收拾——我发现我是如此的喜欢写代码

                不仅仅是写代码。从前期的设计、抽象、实现、DevOps、上线，整个流程我都非常喜欢！而流畅完成这一切的我，让我感觉自己简直是数字世界的魔法师~！

                @|如果现在是魔法文明的话，我相信我一定能成为一名不错的魔法师。可惜现在是数字文明，那我就只能做一名程序猿了（笑）|@

                信奉“越晚动手写代码，就越早完成”的软件工程哲学。同时热衷于系统设计和代码实现，激进派工程师

                搞了许多开源项目，最成功 [Pxer](http://pxer.pea3nut.org) 在 Github 收获了 700 个 Star

                十分热爱互联网，十分热爱 JavaScript。在向“加入 JavaScript 标准委员会——TC39”的目标而努力着
            </block-justify-row>
            <block-justify-row lang="md" title="思考">
                喜欢思考，会定期重审自己，反思自己哪里做的不好，哪里可以做的更好

                每年都会写年度总结。而每当季节变换时，还会写“季节邮件”发送给笔友们

                为了创造思考环境，会在吃饭时、通勤路等碎片时间故意什么都不干，来让自己被迫思考

                同时也会把平时遇到的复杂问题记录下来，然后定期找一个安静的环境一口气思考几个小时，将它们全都解决掉。这种专注思考几个小时的行为我称为“长考”

                坚信思考是有力量的，会随身携带纸笔时刻准备进入长考状态
            </block-justify-row>
            <block-justify-row lang="md" title="初音未来">
                V家（VOCALOID，初音一家）铁粉，会为了追初音未来而飞到日本，一口气听4场初音未来的演唱会

                因为V家而改变很多。从V家歌曲中找到了勇气，从而决定去实现[梦想](#梦想)

                V家对我来说意味着很多。详见[《V家对我来说意味着什么》](http://pea3nut.blog/e1264)
            </block-justify-row>
            <block-justify-row lang="md" title="咖啡">
                非常喜欢喝咖啡，最喜欢的咖啡是摩卡咖啡

                最喜欢在炎炎夏日中，畅快的喝一杯冰摩卡；或是在寒风中捧着一杯热摩卡快速喝掉。每当这时，总会让我发出“世界，不过如此”的感慨

                同时也喜欢自制咖啡，在家里拥有咖啡机、可可粉、奶粉、鲜奶油等完备的咖啡制作材料
            </block-justify-row>
            <block-justify-row lang="md" title="游戏">
                @|以前我以为我不喜欢玩游戏，后来我发现我Steam游戏数都上百了，只能不得已承认我|@喜欢玩游戏，最喜欢音乐和动作类游戏

                VR & Steam 玩家。在 Steam 买了上百款游戏，拥有2款 VR 眼镜。最喜欢的游戏是《Rabi-ribi》和《Far Cry 5》。最喜欢的 VR 游戏是《Beat Saber》和《VR Chat》
            </block-justify-row>
        </block-justify>

        <block-decal lang="md">
            ## 《认真宣言》

            再庞大的人生也是由无数的小片段组成的

            只有认真的对待每一个小片段

            才算真正认真对待了自己整个人生
        </block-decal>
        <block-collapsible lang="md" title="不谙世事">
            花生是一只非常典型的技术宅。不说技术好不好，但是宅是真的非常宅

            花生几乎所有的假期都是在家里渡过的：写写代码、学学英语、@-为了健身-@打几局 VR 游戏、在 VR 和 QQ 群里与其他人聊聊天

            以前我偶尔还会骑车出去看看风景，后来我有了 VR 眼镜，学会了如何在 VR 里看风景。。。

            于是，由于过于宅和过少社交，所以你可以看到一个常识匮乏、不谙世事的花生——经常迷路、怕生、以为三亚是个国家。。。但是在某些特定的领域又意外的强，比如当众演讲、独自旅行@-、吃火锅技巧-@。总之就是偏科比较严重
        </block-collapsible>
        <block-collapsible lang="md" title="中二">
            由于看了太多的动漫，因此花生平常的行为举止会有@-亿-@一点点中二

            比如上边这句话我会说“**花生**的行为举止”而不是说“**我**的行为举止”。而每当遇到又大又圆的月亮时，我还会伸出手臂对准月亮@|来吸收能量，释放魔法|@


            同时，由于相信着爱、奇迹、魔法，你可以看到一个充满着@@[中二的正义感](#! md
                是指对所谓的“正确”、“正义”有着不切实际的幻想。所谓的“不切实际的幻想”并不是说是错误的，而是指它太过于偏离现实。如果能够在认清现实后，依旧坚持自己的正确——变成了 **稍稍** 不切实际的“正确”，那么这种“正确”，我就将它称为“中二的正义感”

                中二的正义感，它描绘了一个理想世界的同时，也找到了从现实世界通往理想的路径。详见[《中二的正义感》](http://pea3nut.blog/e1259)

                你也可以管它叫做“有勇气的理想主义”
            )@@的花生
        </block-collapsible>
        <block-collapsible lang="md" title="写文章">
            乐于写东西，享受手指敲击键盘创造东西的感觉

            热衷于写文章，每年都会写年度总结。每当季节变换时，还会写“季节邮件”发送给各个小伙伴们

            平时如果有些什么感想，也会写成文章投到博客或社交媒体上。技术文章偶尔会会写，但是写的不多@|比起写技术文章，我更喜欢直接写代码|@

            值得一提的是，我会将平时自己思考得出的一些非常有趣的结论整理在博客中。这一系列的文章我称为 ITU（I told you，我告诉过你了）。比如下边这几个：

            - [《容量论》](http://pea3nut.blog/e87)： 详解 “如果你从马航的飞机上下来，那你还会去在意与父母的矛盾吗？” 为什么这句话这么有道理
            - [《独行，从入门到重新入门》](http://pea3nut.blog/e891)：讨论了独行的各个阶段、会遇到的问题
            - [《城堡理论》](http://pea3nut.blog/e577)：城堡中的公主如何过上幸福的生活

            [ITU系列文章](http://pea3nut.blog/ecategory/itu)是我思考中最为成熟、最有特点、最具代表性的果实，请务必品尝一下！
        </block-collapsible>
        <block-collapsible lang="md" title="城市生存">
            花生十分擅长单独行动

            时常一个人去吃火锅、看电影、逛街、去酒吧、听音乐会、喝咖啡等。一个人行动的次数要比结伴同行的次数多得多

            熟能生巧，因此我十分擅长单独行动——哪些店时候独自吃、哪些地方适合独自带着、如何避免单人行动的缺点等等。这种技能我称为“城市生存技能”

            在独行时，我会随身携带充电宝、一次性口罩（在新冠疫情流行前就已经如此了）、驱蚊液、小刀、创可贴等来保证良好的城市生存
        </block-collapsible>
        <block-collapsible lang="md" title="梦想">
            我有一个非常难以实现的梦想

            这个梦想非常非常难实现。但是我必须要实现它，不敢有丝毫怠惰。这也是我为什么如此努力，如此激进的原因

            而且这个梦想还稍微有一点羞耻。直到我实现它，我不打算把它告诉任何人

            而让我鼓起勇气去实现梦想的，就是[V家](#初音未来)@|我tm谢谢你|@
        </block-collapsible>
        <block-decal lang="md">
            感谢你阅读这个页面，以上就是在现实世界的花生啦~！

            如果你对于花生作为程序猿的身份感兴趣，还可以阅读[职业技能](/job)标签里的内容

            而如果你还想进一步的了解花生，了解行为背后的底层逻辑，了解花朵下面扎在土壤里的根茎，那么就请阅读[二次元](/acg)标签里的内容吧。注意，到现在为止，花生已经努力的把自己最好的一面展现给你了。如果你不想了解太多，请 ***不要*** 打开[二次元](/acg)标签
        </block-decal>
        <block-collapsible lang="md" title="其他地方的花生" class="other-link po-print-hidden">

            - [一百多篇文章的博客](http://blog.pea3nut.com)
            - [超过二百个回答的知乎](https://www.zhihu.com/people/liu-bo-yuan-75-28/posts)

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
                text:'花生Peadar',
            },{
                label:'常用ID',
                text:'pea3nut、花生PeA、花生派、Peadar Liu',
            },{
                label:'性别',
                text:'男 <i class="fa fa-mars" style="color:#5b75ff;font-weight: bold;"></i>',
            },{
                label:'年龄',
                text:this.getPeA3nutAge(),
            },{
                label:'身高/体重',
                text:'170cm/60kg',
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
              label:'工作于',
              text: `${this.Info['working_for']}/程序员`,
            },{
              label:'现状态',
              text:this.Info['now_state'],
            },{
              label:'喜欢的东西',
              text:'装满水的水杯、空空的垃圾桶',
            }]
        },
    },
    data(){return{
    }},
};
</script>