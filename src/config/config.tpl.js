const Join =require('path').join;

const path =Join(__dirname,'config.js');
var content =`
/* auto generate */

export const DevelopMode =${process.argv.includes('--dev')};
export const LastUpdateTime =${+new Date};
export const FragmentNormal =[
    '就是因为无法认同镜中的自己才会自取灭亡',
    '想知道更多……',
    '趁一切晚了之前',
    '因为不想徒增遗憾',
    '世界真的是美妙无比啊！',
    '虽然什么也不知道，但是，还要继续向前',
    '夸别人的人最可爱',
    '不要和坏孩子做朋友',
    '偶然、命运或宿命，这些我全都不信',
    '通过各种手段，也可以说是种种努力而获得的爱情，对自己而言，真的是自己打从心底期待的爱情吗？',
    '没有来电，没有邮件，电量也没剩多少了，我讨厌这样的手机',
    '若能以言语以言喻',
    '人生处处皆修行',
    '路途越远越有努力的价值',
];
export const Fragment =[
    'pea3nut is here, always.',
    '事后会带着惨痛的回忆，懊恼地告诫自己不要再犯第二次错误，这才是所谓的成长吧。',
    '就算从梦中醒来，回忆也会留着的',
    '为什么不能肯定现在和过去的自己？',
    '所谓的学习 就是要自己找出意义',
    '用别人的成果来证明自己是正确的，哪有半点可信度？',
    '即使开始的方式不对，还半途而废过，但只要不是欺骗或虚假的……‘喜欢’这种感情并没有错……我是这么认为的 ',
];
export const FragmentAcg =[
    '哪怕是扭曲、幼稚或者错误，只要贯彻到底就是正确的。',
    '这种认真的事情不适合找朋友帮忙……',
    '真正的强者不会扎堆，独自一人也能与全世界为敌',
    '通常牢骚发完之后，对方就会回以“辛苦的又不止你一个”这样的套话。为什么大家辛苦我就非得辛苦不可啊？这有什么逻辑关系吗？',
    '正因为有时限的生命，所以才会为了不留下悔恨而全力地活着',
    '是么，终于到了这一步了。竭尽我……几乎连血液都已经没有的生命。一去不可复返，无法再回头的转折点，刚才已经跨过去了。',
    '明明世界那么大，什么都不知道的我，就要消失了',
];
export const Info ={
    now_state      :'工作ing',
    working_for    :'Tik Tok',
    job_title      :'Web前端开发',
    present_address:'新加坡',
    marriage       :'单身',
};
`;


const Fs =require('fs');
Fs.writeFileSync(path,content);
console.log(`generate file ${path}`);
