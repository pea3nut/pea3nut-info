<template>
    <div>
        <div class="profile-card--list">
            <ul ref="leftInfoList">
                <li
                        v-for="row in leftInfoList"
                        :class="row.print?'pea-print__show':'pea-print__hidden'"
                >
                    <span v-html="row.label"></span>
                    <span v-html="row.text"></span>
                </li>
            </ul>
            <ul ref="rightInfoList">
                <li
                        v-for="row in rightInfoList"
                        :class="row.print?'pea-print__show':'pea-print__hidden'"
                >
                    <span v-html="row.label"></span>
                    <span v-html="row.text"></span>
                </li>
            </ul>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default{
    props:['information'],
    data(){return{
        infoListOffset :0,
    }},
    computed :{
        leftInfoList(){
            return this.information.slice(
                0,
                Math.ceil(this.information.length/2)+this.infoListOffset
            );
        },
        rightInfoList(){
            return this.information.slice(
                Math.ceil(this.information.length/2)+this.infoListOffset
            );
        },
    },
    mounted(){
        var vm =this;
        ~async function (){// dispatch info list item to right or left
            while(true){
                await new Promise(function(resolve){
                    vm.$nextTick(resolve)
                });
                var rightHeight =Array.from(vm.$refs.rightInfoList.childNodes).map(elt=>elt.clientHeight).reduce((a,b)=>a+b);
                var leftHeight =Array.from(vm.$refs.leftInfoList.childNodes).map(elt=>elt.clientHeight).reduce((a,b)=>a+b);
                if(leftHeight-rightHeight >40){
                    vm.infoListOffset--;
                }else if(rightHeight>leftHeight){
                    vm.infoListOffset++;
                    break;
                }else{
                    break;
                }
            }
        }();
    },
    name:'profile-card',
};
</script>


<style lang="scss">
@import "~pea-styles/scss/variable.scss";
.profile-card__mobile{
    .radar-img{
        margin-bottom: 10px;
        background-color: $peaCoolWhite !important;
    }
}
</style>

<style scoped="scoped" lang="scss">
@import "~pea-styles/scss/variable.scss";
.profile-card{
    display: flex;
    align-items:center;
    justify-content: center;
    width:100%;
    .profile-card--list{
        flex-grow:1;
        display: flex;
        ul{
            &:nth-child(1){
                width: 50%;
                padding:0;
                flex-shrink: 0;
            }
            &:nth-child(2){
                flex-grow:1;
                border-left: 1px dashed #707274;
                padding-left:1.5em;
                margin-left:1em;
            }
            list-style: none;
            li{
                color:#1f2021;
                border-bottom: 1px dotted #c5c7c9;
                margin: 2px 0;
                padding: 2px 0;
                &>span:first-child{
                    color: #78797a;
                    margin-right:0.7em;
                    font-family: $peaLabelFont;
                }
            }
        }
    }
    @media print{
        .profile-card--list{
            order:0;
            flex-wrap: wrap;
            ul{
                width:100% !important;
                margin:0 !important;
                padding:0 0 0 0.5em !important;
                border:none !important;
            }
        }
    }
    &.profile-card__mobile{
        flex-wrap: wrap;
        .profile-card--list{
            order:2;
            flex-wrap: wrap;
            ul{
                width:100% !important;
                margin:0 !important;
                padding:0 0 0 0.5em !important;
                border:none !important;
            }
        }
    }
}
</style>
