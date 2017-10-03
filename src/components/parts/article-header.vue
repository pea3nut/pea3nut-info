<template>
    <header>
        <h2 v-html="title"></h2>
        <div class="article-header--bar pea-print__hidden" v-if="description">
            <template v-if="Array.isArray(description)">
                <p v-for="field in description">
                    <label v-text="field.label"></label>
                    <span v-html="field.text"></span>
                </p>
            </template>
            <template v-if="typeof description ==='string'">
                <p>
                    <span v-html="description"></span>
                </p>
            </template>
        </div>
    </header>
</template>

<script>

export default{
    name:'article-header',
    props:['title','description'],
};
</script>

<style scoped="scoped" lang="scss">
@import "~pea-styles/scss/variable.scss";
.article-header{
    width: 100%;
    h2{
        padding-bottom:0.5rem;
        margin:0;
        text-align: center;
        border-bottom: 1px solid #707274;
        color: #323435;
        font-family: $peaLabelFont;
    }
    &.article-header__desktop{
        h2{
            font-size:2.2rem;
        }
    }
    &.article-header__mobile{
        h2{
            font-size:1.5rem;
        }
        .article-header--bar{
            display: none;
        }
    }
    .article-header--bar{
        text-align: center;
        color: #8b8c8d;
        font-size: 10px;
        p{
            display: inline-block;
            margin:0 0.5rem;
            font-family: $peaFontForSmall;
            label{
                font-weight:bold;
                font-size: 12px;
                color: #a6a7a8;
                margin:0;
                margin-right:0.5em;
                font-family: $peaLabelFont;
            }
        }
    }
    @media print{
        margin-bottom:0.5em;
    }
}
</style>

