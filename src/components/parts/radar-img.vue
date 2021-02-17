<template>
    <div>
        <div :class="$options.name+'--echarts'"></div>
    </div>
</template>

<script>
import ECharts from 'echarts/lib/echarts';
import 'echarts/lib/chart/radar';

export default{
    props:{
        'radar-value' :Array ,
        'radar-color' :{
            default:'#b8d3e4,#85aac2',
        } ,
        'number-color' :{
            default:'#02304e',
        } ,
        'text-color' :{
            default:'#7F7F7F',
        } ,
        'border-color' :{
            default:'#91AECD',
        },
        'point-color' :{
            default:'#3E3E3E',
        },
    },
    name:'radar-img',
    data(){return{
    }},
    mounted(){
        this.$nextTick(()=>{
            try{
                var style =getComputedStyle(this.$el.querySelector(`.${this.$options.name}--echarts`));
                var radarImg =ECharts.init(this.$el.querySelector(`.${this.$options.name}--echarts`));
            }catch(e){// some browser is not support ECharts
                alert('浏览器不支持ECharts，请使用更新版本的浏览器：\n'+e.toString());
                return;
            };
            var indicator=[];
            var seriesValue=[];
            for(let {label ,value ,max=110} of this.radarValue){
                seriesValue.push(value);
                indicator.push({
                    text:label,
                    max,
                });
            }
            radarImg.setOption({
                radar: {
                    indicator,
                    radius: 120,
                    name:{
                        textStyle:{
                            color:this['textColor'],
                        },
                    }
                },
                series: [{
                    type: 'radar',
                    data: [{
                        value: seriesValue,
                        label: {normal: {
                            show: true,
                            formatter:function(params) {
                                return params.value;
                            },
                            textStyle:{
                                color:this.numberColor,
                            }
                        }},
                        lineStyle:{normal:{
                            opacity: 0.9,
                            color:this.borderColor,
                        }},
                        itemStyle:{normal:{
                            color:this.pointColor,
                        }},
                        areaStyle: {normal: {
                            opacity: 0.85,
                            color: new ECharts.graphic.RadialGradient(0.5, 0.5, 1, [
                                {
                                    color: this['radarColor'].split(',')[0],
                                    offset: 0
                                },
                                {
                                    color: this['radarColor'].split(',')[1],
                                    offset: 1
                                }
                            ])
                        }}
                    }]
                }]
            });
        });
    },
};
</script>

<style scoped="scoped" lang="scss">
.radar-img{
    min-height: 320px;
    min-width: 320px;
    flex-shrink: 0;
    font-size: 16px;
    letter-spacing: 0;
    overflow: hidden;
    .radar-img--echarts{
        width: 100%;
        min-height: 318px;
    }
}
</style>
