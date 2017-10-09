<template>
    <div>
        <div
            :class="$options.name+'--img-show'"
            :style="showImgEltStyle"
            @click="toTop"
            ref="stt-img-show"
        ></div>
    </div>
</template>

<script>
export default {
    name:'scroll-to-top',
    props:{
        imgWidth :{
            type: Number,
            'default': 0,
        },
        mobileZoom :{
            type: Number,
            'default': 0.6,
        },
        imgHeight :{
            type: Number,
            'default': 0,
        },
        imgSrc :{
            type: String,
            'default': '/static/img/scroll-to-top/scroll-to-top.png',
        },
        imgSrcHover :{
            type: String,
            'default': '/static/img/scroll-to-top/scroll-to-top__hover.png',
        },
    },
    data(){return{
        state :'normal',//normal|mouseover
        showImgElt :null,

        innerDistance :5,
        distance :20,

        updateShowImgEltStyle :0,

        imgNaturalWidth :null,
        imgNaturalHeight :null,
    }},
    computed:{
        showImgEltStyle(){
            this.updateShowImgEltStyle;//dispatch re-compute hooks
            if(!this.showImgElt)return {};
            if(this.mobileMode) return {
                width :this.inUseImgWidth+'px',
                height :this.inUseImgHeight+'px',
                left :
                    this.getElementPosition(this.$el).x
                    -this.inUseImgWidth
                    -this.innerDistance
                    +'px'
                ,
                backgroundImage:`url('${this.imgSrc}')`,
            };else return {
                width :this.inUseImgWidth+'px',
                height :this.inUseImgHeight+'px',
                left :
                    this.getElementPosition(this.$el).x
                    +this.distance
                    +'px'
                ,
                backgroundImage:
                    this.state==='mouseover'
                        ?`url('${this.imgSrcHover}')`
                        :`url('${this.imgSrc}')`
                ,
            }
        },
        inUseImgWidth(){
            var width =
                this.imgWidth
                ||(this.imgHeight
                        ? this.imgNaturalWidth *(this.imgHeight/img.imgNaturalHeight)
                        : this.imgNaturalWidth
                )
            ;
            if(this.mobileMode) width*=this.mobileZoom;
            return width
        },
        inUseImgHeight(){
            var height =this.imgHeight
                ||(this.imgWidth
                        ? this.imgNaturalHeight *(this.imgWidth/img.imgNaturalWidth)
                        : this.imgNaturalHeight
                )
            ;
            if(this.mobileMode) height*=this.mobileZoom;
            return height;
        },

    },
    created(){
        {
            let img =new Image();
            img.src =this.imgSrc;
            img.onload=()=>{
                this.imgNaturalWidth =img.naturalWidth;
                this.imgNaturalHeight =img.naturalHeight;
            };
        }
    },
    mounted(){

        // preload img
        [this.imgSrc,this.imgSrcHover].forEach(url=>{
            var img =new Image();
            img.src=url;
        });

        this.showImgElt =this.$refs['stt-img-show'];


        this.showImgElt.addEventListener('mouseover',()=>this.state='mouseover');
        this.showImgElt.addEventListener('mouseout' ,()=>this.state='mouseout');

        {
            let timer = null;
            let fn = null;
            window.addEventListener('resize' ,fn = () =>{
                clearTimeout(timer);
                timer = setTimeout(() =>{
                    this.updateShowImgEltStyle++;//dispatch computed property re-compute
                } ,300);
            });
            fn();
        }

    },
    methods:{
        getElementPosition(e) {
            var x = 0;
            var y = 0;
            while (e !== null)  {
                x += e.offsetLeft;
                y += e.offsetTop;
                e = e.offsetParent;
            }
            return {x: x, y: y};
        },
        toTop(){
            window.scrollTo(0,0);
        },
    },
};
</script>

<style scoped="scoped" lang="scss">
.scroll-to-top{
    position: absolute;
    width:0;
    height:0;
    bottom:0;
    right:0;
    .scroll-to-top--img-show{
        position: fixed;
        right:0;
        bottom:0;
        background-repeat: no-repeat;
        background-position: bottom;
        background-size:100%;
        cursor: pointer;
    };
}
</style>