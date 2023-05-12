<script setup lang="ts">
import { $getSelection } from 'lexical'
import { useEditor } from 'lexical-vue'
import { onMounted, onUnmounted } from 'vue'
import { INSERT_CHART_COMMAND, ChartNode, $createChartNode } from './ChartNode'

let unregisterListener: () => void
let editor = useEditor();

onMounted(() => {

    // Similar with command listener, which returns unlisten callback
    unregisterListener = editor.registerCommand(
        INSERT_CHART_COMMAND,
        (data: string) => {
            // Adding custom command that will be handled by this plugin
            editor.update(() => {
                const selection = $getSelection()
                if (selection !== null)
                    selection.insertNodes([$createChartNode(data)])
            })

            // Returning true indicates that command is handled and no further propagation is required
            return true
        },
        0
    )
})

onUnmounted(() => {
    unregisterListener?.()
})

const insertChart = () => {
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

    editor.dispatchCommand(INSERT_CHART_COMMAND, JSON.stringify(option))

}

</script>

<template>
    <button @click="insertChart()"> 添加图表</button>
</template>

