import type { Component } from 'vue'
import { h } from 'vue'
import type { NodeKey } from 'lexical'
import { LexicalNode, DecoratorNode, LexicalCommand, EditorConfig, createCommand } from 'lexical'
import * as echarts from 'echarts';
import Chart from './Chart.vue'

export class ChartNode extends DecoratorNode<Component> {
    __data: string

    static getType(): string {
        return 'chart'
    }

    static clone(node: ChartNode): ChartNode {
        return new ChartNode(node.__data, node.__key)
    }

    constructor(data: string, key?: NodeKey) {
        super(key)
        this.__data = data
    }

    createDOM(config: EditorConfig): HTMLElement {
        const div = document.createElement('div')
        div.style.display = 'contents'
        return div
    }

    updateDOM(): false {
        return false
    }

    setData(data: string): void {
        const writable = this.getWritable()
        writable.__data = data
    }

    decorate(): Component {
      //  var dom = document.createElement('div');
        // var myChart = echarts.init(dom);
        // var myChart = echarts.init(document.getElementById('main'));

        // myChart.setOption(JSON.parse(this.__data));

      //  console.log(this);

        //return dom.innerText = this.__data;
        return h(Chart);
    }

    exportJSON (){
        return JSON.parse(this.__data)
    }
}

export function $createChartNode(data: string): ChartNode {
    return new ChartNode(data)
}

export function $isChartNode(node?: LexicalNode) {
    return node instanceof ChartNode
}

type CommandPayload = string
export const INSERT_CHART_COMMAND: LexicalCommand<CommandPayload> = createCommand()