<template>
    <div class="short-night-timeline" v-if="!mobileMode">
        <text-body>
            <h3 v-pea-focus="title">{{ title }}</h3>
            <blockquote v-show="radio < iphoneSeMaxRadio">
                <i class="fa fa-mobile fa-lg"></i>
                <i class="fa fa-refresh "></i>
                请将设备横屏来查看下方时间轴
            </blockquote>
        </text-body>
        <div v-show="radio < 0.5">
        </div>
        <div class="timeline-container" ref="timelineContainer">
            <div ref="app"></div>
        </div>
    </div>
</template>

<script>
import { draw, Timeline, Engine } from '@foxzilla/rules';
import {debounce} from 'pea-scripts/dist/function.browser.js';
import TextBody from './text-body';
import chrono from 'chrono-node';

export default {
    props: ['data', 'title'],
    name: "short-night-timeline",
    components:{
        TextBody,
        'markdown-render':require('@/components/parts/markdown-render.vue'),
    },
    data() { return {
        iphoneSeMaxRadio: 0.687,
        $timeline: null,
        radio: 1,
    }},
    computed: {
        formattedData() {
            return this.data.map(event => {
                console.log(event.date, String(event.endDate));
                return Object.assign({}, event, {
                    date: chrono.parseDate(event.date).toISOString(),
                    endDate: event.endDate && chrono.parseDate(String(event.endDate)).toISOString(),
                });
            });
        },
    },
    methods: {
        layout() {
            const container = this.$refs.timelineContainer;
            const containerStyles = getComputedStyle(container);
            const contentStyles = getComputedStyle(this.$timeline.container);

            const containerWidth = parseFloat(containerStyles.width);
            const contentWidth = parseFloat(contentStyles.width);
            const containerHeight = parseFloat(containerStyles.height);

            this.radio = containerWidth / contentWidth;

            if (this.radio < 1) {
                const radio = containerWidth / contentWidth;
                container.style.transform = `scale(${radio})`;
                container.style.marginBottom = `-${containerHeight * (1 - radio)}px`;
                container.style.backgroundColor = 'transparent';
            } else {
                container.style.transform = null;
                container.style.marginBottom = null;
                container.style.backgroundColor = '#f5f5f5';
            }
        },
    },
    async mounted() {
        this.$timeline = await draw(this.$refs.app, this.formattedData);

        window.addEventListener('resize',debounce({
            fn: this.layout,
            idle :400,
            context :this,
            run :true,
        }));
    }
}
</script>

<style scoped>
.short-night-timeline {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.timeline-container {
    width: 100%;
    transform-origin: top left;
}
</style>