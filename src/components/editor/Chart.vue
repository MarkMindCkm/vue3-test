<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts';

const domRef = ref(null)
onMounted(() => {
    console.log(domRef);

    var chart = echarts.init(domRef.value);
    let option: any = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    };

    chart.setOption(option);
})


</script>

<template>
    <div class="chart" ref="domRef"></div>
</template>

<style scoped>
.chart {
    width: 600px;
    height: 500px;
}
</style>