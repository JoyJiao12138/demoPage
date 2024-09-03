var dom = document.getElementById("chart-panel");
var myChart = echarts.init(dom);
var option;
var app = {};
option = {
    xAxis: {
        type: 'category',
        data: [
            '06-27',
            '06-28',
            '06-29',
            '06-30',
            '07-01',
            '07-02',
            '07-03',
            '07-04'
        ]
    },
    yAxis: {
        type: 'value'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    series: [
        {
            data: [120, 200, 400, 80, 70, 110, 130, 120],
            type: 'bar'
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var pake = document.getElementById("chart-pake");
var myPake = echarts.init(pake);
var pakeOption;
var app = {};
const chartData = [
    {
        value: 520,
        name: '长期空置',
    },
    {
        value: 280,
        name: '长期未外出',
    },
    {
        value: 100,
        name: '小孩独自出门超时',
    },
    {
        value: 100,
        name: '老人独自出门超时',
    },
];
const colorList = [
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: '#CA8CCA',
        },
        {
            offset: 1,
            color: '#EFA5BB',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: '#BFA4E4',
        },
        {
            offset: 1,
            color: '#E29CE2',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: '#A8AAE5',
        },
        {
            offset: 1,
            color: '#BEA3E3',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: '#A4D37D',
        },
        {
            offset: 1,
            color: '#E5F2A7',
        },
    ]),
];
const sum = chartData.reduce((per, cur) => per + cur.value, 0);
const gap = (1 * sum) / 100;
const pieData1 = [];
const pieData2 = [];
const gapData = {
    name: '',
    value: gap,
    itemStyle: {
        color: 'transparent',
    },
};
for (let i = 0; i < chartData.length; i++) {
    pieData1.push({
        ...chartData[i],
        itemStyle: {
            borderRadius: 100,
            shadowColor: '#2a2a34',
            shadowBlur: 5,
            shadowOffsetY: 0,
            shadowOffsetX: 0,
            borderColor: '#2a2a34',
            borderWidth: 2,
        },
    });
    pieData1.push(gapData);

    pieData2.push({
        ...chartData[i],
        itemStyle: {
            borderRadius: 10,
            color: colorList[i],
            opacity: 0.1,
            shadowColor: '#000',
            shadowBlur: 1,
            shadowOffsetY: 5,
            shadowOffsetX: 0,
        },
    });
    pieData2.push(gapData);
}

pakeOption = {
    title: [{
        text: '业主关怀',
        x: '23%',
        y: '33%',
        textAlign: 'center',
        textStyle: {
            fontSize: '15',
            fontWeight: '300',
            color: '#98b5d2',
            textAlign: 'center',
            textShadowColor: '#000',
            textShadowBlur: '1',
            textShadowOffsetX: 2,
            textShadowOffsetY: 2,
        },
    }, {
        text: '',
        left: '25%',
        top: '52%',
        textAlign: 'center',
        textStyle: {
            fontSize: '18',
            fontWeight: '400',
            color: '#5c5a68',
            textAlign: 'center',
            textShadowColor: '#000',
            textShadowBlur: '1',
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
        },
    },],
    legend: {
        left: '45%',
        top: '25%',
        align: 'right',
        itemGap: 10,  // 减少间距以进一步紧凑显示
        itemWidth: 12,  // 缩小图标宽度
        itemHeight: 12, // 缩小图标高度
        shadowBlur: 10,
        shadowOffsetY: 0,
        shadowOffsetX: 0,
        borderColor: '#2a2a34',
        borderWidth: 2,
        textStyle: {
            color: '#D8DDE3',
            fontSize: 12, // 缩小字体大小
            rich: {
                name: {
                    verticalAlign: 'right',
                    align: 'left',
                    fontSize: 12, // 确保名称的字体大小也缩小
                    color: '#D8DDE3',
                },
                percent: {
                    padding: [0, 0, 0, 5], // 稍微减少内边距
                    color: '#D8DDE3',
                    fontSize: 12, // 百分比字体大小也缩小
                },
            },
        },
        formatter: (name) => {
            const item = chartData.find((i) => i.name === name);
            const p = ((item.value / sum) * 100).toFixed(0);
            return '{name|' + name + '}' + '{percent|' + p + '}' + ' %';
        },
    },

    color: colorList,

    series: [
        {
            type: 'pie',
            z: 3,
            roundCap: true,
            radius: ['44%', '51%'],
            center: ['25%', '50%'],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: pieData1,
        },
        {
            type: 'pie',
            z: 2,
            radius: ['40%', '55%'],
            center: ['25%', '50%'],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            silent: true,
            data: pieData2,
        },
    ],
};

if (pakeOption && typeof pakeOption === 'object') {
    myPake.setOption(pakeOption);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var call = document.getElementById("chart-call");
var myCall = echarts.init(call);
var callOption;
var app = {};
let xLabel = ['12', '13', '14', '15', '16', '17', '18日']
let valueData = [64, 159, 112, 86, 151, 131, 118]
callOption = {
    tooltip: {
        textStyle: {
            color: '#000'
        },
        padding: [10, 10],
        trigger: 'axis',
        backgroundColor: '#fff',
        borderColor: 'rgba(255, 186, 108,0.8)',
        borderWidth: 1
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show: false
    },

    xAxis: {
        type: 'category',
        data: xLabel,
        axisLine: {
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)',
            }
        },
        axisLabel: {
            textStyle: {
                color: "rgba(0, 0, 0, 1)"
            }
        },
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            textStyle: {
                color: "rgba(0, 0, 0, 1)"
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#cdd5e2'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)',
            }
        },
    }
    ],
    series: [
        {
            name: '近7日被行政、刑事处罚人员数量',
            type: 'line',
            data: valueData,
            symbolSize: 10,
            symbol: 'circle',
            smooth: false,
            yAxisIndex: 0,
            label: {
                "show": true,
                "textStyle": {
                    "color": "rgba(241, 104, 22, 1)",
                    fontSize: 20,
                    fontFamily: 'DIN',
                    fontWeight: 'bold'
                },
                "position": "top",
                formatter: function (p) {
                    return p.value > 0 ? (p.value) : '';
                }
            },
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(241, 104, 22, 0.5)'
                },
                    {
                        offset: 1,
                        color: 'rgba(241, 104, 22, 0.6)'
                    }
                ]),
                shadowColor: 'rgba(241, 104, 22, 0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            },
            itemStyle: {
                normal: {
                    color: 'rgba(241, 104, 22, 1)',
                    borderColor: '#fff',
                    borderWidth: 3,
                    shadowColor: 'rgba(241, 104, 22, 0.7)',
                    shadowBlur: 5,
                }
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(255, 176, 69, 0.7)"
                    },
                        {
                            offset: 0.5,
                            color: "rgba(255, 176, 69, 0.2)"
                        },
                        {
                            offset: 1,
                            color: "rgba(165, 170, 247, 0)"
                        }
                    ], false),
                    shadowBlur: 0 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
        }
    ]
};

if (callOption && typeof callOption === 'object') {
    myCall.setOption(callOption);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var yibiaopan = document.getElementById("chart-yibiaopan");
var myYibiaopan = echarts.init(yibiaopan);
var yibiaopanOption;
var app = {};
let value = 80;
let title = '%';
let int = value.toFixed(2).split('.')[0];
let float = value.toFixed(2).split('.')[1];

yibiaopanOption = {
    title: {
        text: '{x|覆盖区域}\n{a|' + int + '}{b|.' + float + '}{c|' + title + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                x: {
                    fontSize: 10,
                    color: '#65d3ff'
                },
                a: {
                    fontSize: 10,
                    color: '#65d3ff',
                },
                b: {
                    fontSize: 10,
                    color: '#65d3ff',
                    // padding: [0,0,14,0]
                },
                c: {
                    fontSize: 8,
                    color: '#65d3ff',
                    padding: [5, 0, 0, 0],
                },
            },
        },
    },
    series: [
        {
            type: 'gauge',
            radius: '80%',
            clockwise: true,
            startAngle: '90',
            endAngle: '-270',
            splitNumber: 10,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' ',
            },
            pointer: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [value / 100, '#23b9ff'],
                        [1, 'rgb(3,89,130)'],
                    ],
                    width: 10,
                    shadowColor: '#23b9ff',
                    shadowBlur: 10,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 32,
                lineStyle: {
                    color: 'white',
                    width: 10,
                },
            },
            axisLabel: {
                show: false,
            },
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['43%', '45%'],
            hoverAnimation: true,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#84c1e0',
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
    ],
};

if (yibiaopanOption && typeof yibiaopanOption === 'object') {
    myYibiaopan.setOption(yibiaopanOption);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var yibiaopan1 = document.getElementById("chart-yibiaopan1");
var myYibiaopan1 = echarts.init(yibiaopan1);
var yibiaopanOption1;
var app = {};
let value1 = 65;
let int1 = value1.toFixed(2).split('.')[0];
let float1 = value1.toFixed(2).split('.')[1];

yibiaopanOption1 = {
    title: {
        text: '{x|室内温度}\n{a|' + int1 + '}{b|.' + float1 + '}{c|' + title + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                x: {
                    fontSize: 10,
                    color: '#65d3ff'
                },
                a: {
                    fontSize: 10,
                    color: '#65d3ff',
                },
                b: {
                    fontSize: 10,
                    color: '#65d3ff',
                    // padding: [0,0,14,0]
                },
                c: {
                    fontSize: 8,
                    color: '#65d3ff',
                    padding: [5, 0, 0, 0],
                },
            },
        },
    },
    series: [
        {
            type: 'gauge',
            radius: '80%',
            clockwise: true,
            startAngle: '90',
            endAngle: '-270',
            splitNumber: 10,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' ',
            },
            pointer: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [value1 / 100, '#23b9ff'],
                        [1, 'rgb(3,89,130)'],
                    ],
                    width: 10,
                    shadowColor: '#23b9ff',
                    shadowBlur: 10,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 32,
                lineStyle: {
                    color: 'white',
                    width: 10,
                },
            },
            axisLabel: {
                show: false,
            },
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['43%', '45%'],
            hoverAnimation: true,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#84c1e0',
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
    ],
};

if (yibiaopanOption1 && typeof yibiaopanOption1 === 'object') {
    myYibiaopan1.setOption(yibiaopanOption1);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var call1 = document.getElementById("chart-call1");
var myCall1 = echarts.init(call1);
var callOption1;
var app = {};
let xLabel1 = ['12', '13', '14', '15', '16', '17', '18日']
let valueData1 = [64, 159, 112, 86, 151, 131, 118]
callOption1 = {
    tooltip: {
        textStyle: {
            color: '#000'
        },
        padding: [10, 10],
        trigger: 'axis',
        backgroundColor: '#fff',
        borderColor: 'rgba(255, 186, 108,0.8)',
        borderWidth: 1
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show: false
    },

    xAxis: {
        type: 'category',
        data: xLabel1,
        axisLine: {
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)',
            }
        },
        axisLabel: {
            textStyle: {
                color: "rgba(0, 0, 0, 1)"
            }
        },
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            textStyle: {
                color: "rgba(0, 0, 0, 1)"
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#cdd5e2'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)',
            }
        },
    }
    ],
    series: [
        {
            name: '近7日被行政、刑事处罚人员数量',
            type: 'line',
            data: valueData1,
            symbolSize: 10,
            symbol: 'circle',
            smooth: false,
            yAxisIndex: 0,
            label: {
                "show": true,
                "textStyle": {
                    "color": "rgba(241, 104, 22, 1)",
                    fontSize: 20,
                    fontFamily: 'DIN',
                    fontWeight: 'bold'
                },
                "position": "top",
                formatter: function (p) {
                    return p.value > 0 ? (p.value) : '';
                }
            },
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(241, 104, 22, 0.5)'
                },
                    {
                        offset: 1,
                        color: 'rgba(241, 104, 22, 0.6)'
                    }
                ]),
                shadowColor: 'rgba(241, 104, 22, 0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            },
            itemStyle: {
                normal: {
                    color: 'rgba(241, 104, 22, 1)',
                    borderColor: '#fff',
                    borderWidth: 3,
                    shadowColor: 'rgba(241, 104, 22, 0.7)',
                    shadowBlur: 5,
                }
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(255, 176, 69, 0.7)"
                    },
                        {
                            offset: 0.5,
                            color: "rgba(255, 176, 69, 0.2)"
                        },
                        {
                            offset: 1,
                            color: "rgba(165, 170, 247, 0)"
                        }
                    ], false),
                    shadowBlur: 0 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
        }
    ]
};

if (callOption1 && typeof callOption1 === 'object') {
    myCall1.setOption(callOption1);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var tempe = document.getElementById("chart-tempe");
var myTempe = echarts.init(tempe);
var app = {};
var myData = [];
var data1 = [302, 102];
var data6 = [300, 120];
var temOption = {
    baseOption: {
        timeline: {
            show: false,
            top: 0,
            data: [],
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0,0,0,0.6)',
            borderColor: 'rgba(0,0,0,0.6)',
            textStyle: {
                color: '#fff',
            },
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        // 这是标题的文字
        legend: {
            top: '30%',
            itemWidth: 30,
            itemHeight: 12,
            textStyle: {
                color: '#ffffff',
                fontSize: 8,
            },
            data: ['出水温度', '进水温度'],
        },
        // 网格之间的距离
        grid: [
            {
                left: '20%',
                top: '40%',
                bottom: '30%',
                width: '27%',
            },
            {
                show: false,
                left: '50.5%',
                top: '40%',
                bottom: '30%',
            },
            // right
            {
                show: false,
                right: '26%',
                top: '40%',
                bottom: '30%',
                width: '27%',
            },
        ],
        xAxis: [
            {
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'bottom',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'white',
                        fontSize: '7',
                    },
                },
                splitLine: {
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#B5B5B5'],
                        type: 'dashed',
                        opacity: 0.5,
                    },
                },
                interval: 100,
            },
            {
                gridIndex: 1,
                show: false,
            },
            {
                gridIndex: 2,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'bottom',
                axisLabel: {
                    show: true,
                    interval: 0,
                    textStyle: {
                        color: 'white',
                        fontSize: '8',
                    },
                },
                splitLine: {
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#B5B5B5'],
                        type: 'dashed',
                        opacity: 0.5,
                    },
                },
                interval: 100,
            },
        ],
        yAxis: [
            {
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                data: myData,
            },
            {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 10,
                    },
                },
                data: myData.map(function (value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center',
                        },
                    };
                }),
            },
            {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                data: myData,
            },
        ],
        series: [],
    },
    options: [
        {
            series: [
                {
                    name: '出水温度',
                    type: 'bar',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    barWidth: 18,
                    itemStyle: {
                        normal: {
                            color: '#8D9ECC',
                        },
                    },
                    data: data1,
                },
                {
                    name: '进水温度',
                    type: 'bar',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    barWidth: 18,
                    itemStyle: {
                        normal: {
                            color: '#9B1C1C',
                        },
                    },
                    data: data6,
                },
            ],
        },
    ],
};

if (temOption && typeof temOption === 'object') {
    myTempe.setOption(temOption);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var voltage = document.getElementById("chart-voltage");
var myVoltage = echarts.init(voltage);
var voltageOption;
var app = {};
voltageOption = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [0, 300, '1'],
            [0, 350, '2'],
            [0, 200, '3'],
            [0, 150, '4'],
            [0, 160, '5'],
            [0, 50, '6'],
            [0, 70, '7'],
            [0, 230, '8'],
            [0, 240, '9']
        ]
    },
    grid: {containLabel: true},
    xAxis: {
        name: 'amount',
        axisLabel: {
            color: '#515BE7' // 设置为红色，你可以根据需要修改为其他颜色值
        }
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            color: '#515BE7' // 设置为红色，你可以根据需要修改为其他颜色值
        }
    },
    series: [
        {
            type: 'bar',
            encode: {
                x: 'amount',
                y: 'product'
            },
            // data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markLine: {
                silent: false,
                symbol: ['circle', 'arrow'],
                data: [
                    {
                        name: '平均值',
                        valueDim: 'amount',
                        type: 'max'
                    }
                ]
            }
        }
    ]
};

if (voltageOption && typeof voltageOption === 'object') {
    myVoltage.setOption(voltageOption);
}
///////////////////////////////////////////////////////////////////////////////////////////////
var call2 = document.getElementById("chart-call2");
var myCall2 = echarts.init(call2);
var callOption2;
var app = {};
let xLabel2 = ['12', '13', '14', '15', '16', '17', '18日']
let valueData2 = [64, 159, 112, 86, 151, 131, 118]
callOption2 = {
    tooltip: {
        textStyle: {
            color: '#000'
        },
        padding: [10, 10],
        trigger: 'axis',
        backgroundColor: '#fff',
        borderColor: 'rgba(255, 186, 108,0.8)',
        borderWidth: 1
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show: false
    },

    xAxis: {
        type: 'category',
        data: xLabel2,
        axisLine: {
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)',
            }
        },
        axisLabel: {
            color: '#a5ffff',
        },
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            color: '#a5ffff',
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#cdd5e2'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)',
            }
        },
    }
    ],
    series: [
        {
            name: '近7日被行政、刑事处罚人员数量',
            type: 'line',
            data: valueData2,
            symbolSize: 10,
            symbol: 'circle',
            smooth: false,
            yAxisIndex: 0,
            label: {
                "show": true,
                "textStyle": {
                    "color": "rgba(56, 217, 208, 1)",
                    fontSize: 20,
                    fontFamily: 'DIN',
                    fontWeight: 'bold'
                },
                "position": "top",
                formatter: function (p) {
                    return p.value > 0 ? (p.value) : '';
                }
            },
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(56, 217, 208, 0.5)'
                },
                    {
                        offset: 1,
                        color: 'rgba(56, 217, 208, 0.6)'
                    }
                ]),
                shadowColor: 'rgba(56, 217, 208, 0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            },
            itemStyle: {
                normal: {
                    color: 'rgba(56, 217, 208, 1)',
                    borderColor: '#fff',
                    borderWidth: 3,
                    shadowColor: 'rgba(56, 217, 208, 0.7)',
                    shadowBlur: 5,
                }
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(56, 217, 208, 0.7)"
                    },
                        {
                            offset: 0.5,
                            color: "rgba(56, 217, 208, 0.2)"
                        },
                        {
                            offset: 1,
                            color: "rgba(165, 170, 247, 0)"
                        }
                    ], false),
                    shadowBlur: 0 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
        }
    ]
};

if (callOption2 && typeof callOption2 === 'object') {
    myCall2.setOption(callOption2);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var dom1 = document.getElementById("chart-panel1");
var myChart1 = echarts.init(dom1);
var panelOption;
var app = {};
panelOption = {
    xAxis: {
        type: 'category',
        data: [
            '06-27',
            '06-28',
            '06-29',
            '06-30',
            '07-01',
            '07-02',
            '07-03',
            '07-04'
        ]
    },
    yAxis: {
        type: 'value'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    series: [
        {
            data: [120, 200, 400, 80, 70, 110, 130, 120],
            type: 'bar'
        }
    ]
};

if (panelOption && typeof panelOption === 'object') {
    myChart1.setOption(panelOption);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
var yibiaopan2 = document.getElementById("chart-yibiaopan2");
var myYibiaopan = echarts.init(yibiaopan2);
var yibiaopanOption2;
var app = {};
let value2 = 65;
let int2 = value2.toFixed(2).split('.')[0];
let float2 = value2.toFixed(2).split('.')[1];

yibiaopanOption2 = {
    title: {
        text: '{x|覆盖区域}\n{a|' + int2 + '}{b|.' + float2 + '}{c|' + title + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                x: {
                    fontSize: 10,
                    color: '#65d3ff'
                },
                a: {
                    fontSize: 10,
                    color: '#65d3ff',
                },
                b: {
                    fontSize: 10,
                    color: '#65d3ff',
                    // padding: [0,0,14,0]
                },
                c: {
                    fontSize: 8,
                    color: '#65d3ff',
                    padding: [5, 0, 0, 0],
                },
            },
        },
    },
    series: [
        {
            type: 'gauge',
            radius: '80%',
            clockwise: true,
            startAngle: '90',
            endAngle: '-270',
            splitNumber: 10,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' ',
            },
            pointer: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [value2 / 100, '#23b9ff'],
                        [1, 'rgb(3,89,130)'],
                    ],
                    width: 10,
                    shadowColor: '#23b9ff',
                    shadowBlur: 10,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 32,
                lineStyle: {
                    color: 'white',
                    width: 10,
                },
            },
            axisLabel: {
                show: false,
            },
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['43%', '45%'],
            hoverAnimation: true,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#84c1e0',
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
    ],
};

if (yibiaopanOption2 && typeof yibiaopanOption2 === 'object') {
    myYibiaopan.setOption(yibiaopanOption2);
}
///////////////////////////////////////////////////////////////////////////////////////////////
var dom2 = document.getElementById("chart-panel2");
var myChart2 = echarts.init(dom2);
var panelOption1;
var app = {};
panelOption1 = {
    xAxis: {
        type: 'category',
        data: [
            '06-27',
            '06-28',
            '06-29',
            '06-30',
            '07-01',
            '07-02',
            '07-03',
            '07-04'
        ]
    },
    yAxis: {
        type: 'value'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    series: [
        {
            data: [120, 200, 400, 80, 70, 110, 130, 120],
            type: 'bar'
        }
    ]
};

if (panelOption1 && typeof panelOption1 === 'object') {
    myChart2.setOption(panelOption1);
}
//////////////////////////////////////////////////////////////////////////////////////
var pake1 = document.getElementById("chart-pake1");
var myPake1 = echarts.init(pake1);
var pakeOption1;
var app = {};
const chartData1 = [
    {
        value: 520,
        name: '天棚主机',
    },
    {
        value: 280,
        name: '天棚水泵',
    },
    {
        value: 100,
        name: '新风主机',
    },
    {
        value: 100,
        name: '新风水泵',
    },
    {
        value: 100,
        name: '地源水泵',
    },
    {
        value: 100,
        name: '冷却水泵',
    },
];
const colorList1 = [
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: '#CA8CCA',
        },
        {
            offset: 1,
            color: '#EFA5BB',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: '#BFA4E4',
        },
        {
            offset: 1,
            color: '#E29CE2',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: '#A8AAE5',
        },
        {
            offset: 1,
            color: '#BEA3E3',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: '#A4D37D',
        },
        {
            offset: 1,
            color: '#E5F2A7',
        },
    ]),
];
const sum1 = chartData1.reduce((per, cur) => per + cur.value, 0);
const gap1 = (1 * sum1) / 200;
const pieData11 = [];
const pieData21 = [];
const gapData1 = {
    name: '',
    value: gap1,
    itemStyle: {
        color: 'transparent',
    },
};
for (let i = 0; i < chartData1.length; i++) {
    pieData11.push({
        ...chartData1[i],
        itemStyle: {
            borderRadius: 100,
            shadowColor: '#2a2a34',
            shadowBlur: 5,
            shadowOffsetY: 0,
            shadowOffsetX: 0,
            borderColor: '#2a2a34',
            borderWidth: 2,
        },
    });
    pieData11.push(gapData1);

    pieData21.push({
        ...chartData1[i],
        itemStyle: {
            borderRadius: 10,
            color: colorList1[i],
            opacity: 0.1,
            shadowColor: '#000',
            shadowBlur: 1,
            shadowOffsetY: 5,
            shadowOffsetX: 0,
        },
    });
    pieData21.push(gapData1);
}

pakeOption1 = {
    title: [{
        text: '费用占比',
        x: '23%',
        y: '33%',
        textAlign: 'center',
        textStyle: {
            fontSize: '12',
            fontWeight: '300',
            color: '#98b5d2',
            textAlign: 'center',
            textShadowColor: '#000',
            textShadowBlur: '1',
            textShadowOffsetX: 2,
            textShadowOffsetY: 2,
        },
    }, {
        text: '',
        left: '25%',
        top: '52%',
        textAlign: 'center',
        textStyle: {
            fontSize: '18',
            fontWeight: '400',
            color: '#5c5a68',
            textAlign: 'center',
            textShadowColor: '#000',
            textShadowBlur: '1',
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
        },
    },],
    legend: {
        left: '45%',
        top: '25%',
        align: 'right',
        itemGap: 6,  // 减少间距以进一步紧凑显示
        itemWidth: 12,  // 缩小图标宽度
        itemHeight: 12, // 缩小图标高度
        shadowBlur: 10,
        shadowOffsetY: 0,
        shadowOffsetX: 0,
        borderColor: '#2a2a34',
        borderWidth: 2,
        textStyle: {
            color: '#D8DDE3',
            fontSize: 10, // 缩小字体大小
            rich: {
                name: {
                    verticalAlign: 'right',
                    align: 'left',
                    fontSize: 12, // 确保名称的字体大小也缩小
                    color: '#D8DDE3',
                },
                percent: {
                    padding: [0, 0, 0, 5], // 稍微减少内边距
                    color: '#D8DDE3',
                    fontSize: 12, // 百分比字体大小也缩小
                },
            },
        },
        formatter: (name) => {
            const item = chartData1.find((i) => i.name === name);
            const p = ((item.value / sum1) * 100).toFixed(0);
            return '{name|' + name + '}' + '{percent|' + p + '}' + ' %';
        },
    },

    color: colorList1,

    series: [
        {
            type: 'pie',
            z: 3,
            roundCap: true,
            radius: ['44%', '51%'],
            center: ['25%', '50%'],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: pieData11,
        },
        {
            type: 'pie',
            z: 2,
            radius: ['40%', '55%'],
            center: ['25%', '50%'],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            silent: true,
            data: pieData21,
        },
    ],
};

if (pakeOption1 && typeof pakeOption1 === 'object') {
    myPake1.setOption(pakeOption1);
}
/////////////////////////////////////////////////////////////////////////////////////////////////
var energyAnalysis = document.getElementById("chart-energyAnalysis");
var myEnergyAnalysis = echarts.init(energyAnalysis);
var myEnergyAnalysisOption;
var app = {};
let dateArr = ["2023-01", "2023-02", "2023-03", "2023-04", "2023-05", "2023-06"]
let wzArr = [20, 30, 40, 50, 60, 70]
let gzhArr = [88, 99, 100, 110, 120, 122]
myEnergyAnalysisOption = {
    grid: {
        left: '12%',
        right: '12%',
        top: "15%",
        bottom: "20%"
    },
    legend: {
        show: true,
        // itemWidth:52,
        // itemHeight:30,
        // itemGap:50,
        left: "center",
        top: 0,
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    },
    "xAxis": {
        type: 'value',
        // "max": max,
        "splitLine": {
            "show": true,
            lineStyle: {
                color: "#232e32"
            }
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#fff",
                "fontSize": 12
            }
        },
        "axisTick": {
            "show": false
        }
    },
    "yAxis": [{
        "type": "category",
        "inverse": true,
        "data": dateArr,
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            // "margin": 10,
            "textStyle": {
                "color": "#fff",
                "fontSize": 12
            }
        }
    }],
    "series": [
        { //内
            type: 'bar',
            barWidth: 20,
            barGap: 0.5,
            name: '地热平衡',
            label: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#fff',
                    fontSize: 8,
                    padding: [0, 10],
                    rich: {
                        a: {
                            color: '#fff',
                            fontSize: 16
                        }
                    }
                }
            },
            legendHoverLink: false,
            silent: true,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#0e3537' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#41e1ba' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                } //底色
            },
            data: wzArr
        },
        { //内2
            type: 'bar',
            barWidth: 20,
            name: '节能环保',
            legendHoverLink: false,
            silent: true,
            label: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#fff',
                    padding: [0, 10],
                    fontSize: 8,
                    rich: {
                        a: {
                            color: '#fff',
                            fontSize: 16
                        }
                    }
                }
            },
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#0a303e' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#21a8ea' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                } //底色
            },
            data: gzhArr
        }
    ]
};
if (myEnergyAnalysisOption && typeof myEnergyAnalysisOption === 'object') {
    myEnergyAnalysis.setOption(myEnergyAnalysisOption);
}
///////////////////////////////////////////////////////////////////////////////////////
var call3 = document.getElementById("chart-call3");
var myCall3 = echarts.init(call3);
var callOption3;
var app = {};
let xLabel3 = ['12', '13', '14', '15', '16', '17', '18日']
let valueData3 = [64, 159, 112, 86, 151, 131, 118]
callOption3 = {
    tooltip: {
        textStyle: {
            color: '#000'
        },
        padding: [10, 10],
        trigger: 'axis',
        backgroundColor: '#fff',
        borderColor: 'rgba(255, 186, 108,0.8)',
        borderWidth: 1
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show: false
    },

    xAxis: {
        type: 'category',
        data: xLabel3,
        axisLine: {
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)',
            }
        },
        axisLabel: {
            color: '#a5ffff',
        },
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            color: '#a5ffff',
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#cdd5e2'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)',
            }
        },
    }
    ],
    series: [
        {
            name: '近7日被行政、刑事处罚人员数量',
            type: 'line',
            data: valueData3,
            symbolSize: 10,
            symbol: 'circle',
            smooth: false,
            yAxisIndex: 0,
            label: {
                "show": true,
                "textStyle": {
                    "color": "rgba(56, 217, 208, 1)",
                    fontSize: 20,
                    fontFamily: 'DIN',
                    fontWeight: 'bold'
                },
                "position": "top",
                formatter: function (p) {
                    return p.value > 0 ? (p.value) : '';
                }
            },
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(56, 217, 208, 0.5)'
                },
                    {
                        offset: 1,
                        color: 'rgba(56, 217, 208, 0.6)'
                    }
                ]),
                shadowColor: 'rgba(56, 217, 208, 0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            },
            itemStyle: {
                normal: {
                    color: 'rgba(56, 217, 208, 1)',
                    borderColor: '#fff',
                    borderWidth: 3,
                    shadowColor: 'rgba(56, 217, 208, 0.7)',
                    shadowBlur: 5,
                }
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(56, 217, 208, 0.7)"
                    },
                        {
                            offset: 0.5,
                            color: "rgba(56, 217, 208, 0.2)"
                        },
                        {
                            offset: 1,
                            color: "rgba(165, 170, 247, 0)"
                        }
                    ], false),
                    shadowBlur: 0 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
        }
    ]
};

if (callOption3 && typeof callOption3 === 'object') {
    myCall3.setOption(callOption3);
}