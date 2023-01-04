
let mapOptions = {
    // title: {
    //     // text: 'uu跑腿全国',
    //     //subtext: 'Data from www.census.gov',
    //     //sublink: 'http://www.census.gov/popest/data/datasets.html',
    //     // left: 'right'
    // },
    tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: function (params) {
            console.log('000000000000',params);
            // var value = (params.value + '').split('.');
            // value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
            var value = params.value;
            if(value >= 10000) {
                value = (params.value / 10000).toFixed(2) + '万';
            }
            return params.seriesName + '<br/>' + params.data.city + ': ' + value;
        }
    },
    //visualMap配置参考：https://www.echartsjs.com/zh/option.html#visualMap-piecewise.splitNumber
    visualMap: {
        type: 'piecewise', // 分段型
        pieces: [
            {min: 0,max:999,label: '0-999', color: '#FFE7BA'}, // 不指定 max，表示 max 为无限大（Infinity）。
            // {min: 100, max: 999,label: '0-100', color: '#ffffff'},
            {min: 1000, max: 3999,label: '1000-3999', color: '#FFAEB9'},
            {min: 4000, max: 6999,label: '4000-6999', color: '#FF6347'},
            {min: 7000, max: 9999, label: '7000-9999',color: '#FF0000'},
            // {value: 123, label: '123（自定义特殊颜色）', color: 'grey'}, // 表示 value 等于 123 的情况。
            {min: 10000,label: '>= 10000', color: '#CD2626'}     // 不指定 min，表示 min 为无限大（-Infinity）。
        ],
        left: 'left',
        textStyle: {
            color:'#000000',
            fontSize: 10
        },
        itemWidth: 10,
        itemHeight: 10,

        // min: 500000,
        // max: 38000000,
        // inRange: {
        //     color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        // },
        // text: ['High', 'Low'],           // 文本，默认为数值文本
        // calculable: true
    },
    // toolbox: {
    //     show: true,
    //     //orient: 'vertical',
    //     left: 'left',
    //     top: 'top',
    //     feature: {
    //         dataView: {readOnly: false},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    series: [
        {
            name: '订单量',
            type: 'map',
            roam: false, // 禁止拖拽
            map: 'china',
            label: {
                show: true,
                fontSize: 8,
                color: '#000000',
                fontWeight: 'normal'
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            zoom:1.2,
            top: 40,
            // left:0,
            // right:0,
            // aspectScale: 0.5,
            // 文本位置修正
            // textFixed: {
            //     Alaska: [20, -20]
            // },
            data:[
                {name: '台湾',city:'台北', value: 0},
                {name: '河北',city:'石家庄', value: 100},
                {name: '山西',city:'太原', value: 500},
                {name: '内蒙古', city:'呼和浩特',value: 20},
                {name: '辽宁', city:'沈阳',value: 210},
                {name: '吉林',city:'长春', value: 333},
                {name: '黑龙江', city:'齐齐哈尔',value: 666},
                {name: '江苏', city:'南京',value: 2300},
                {name: '浙江', city:'杭州',value: 4530},
                {name: '安徽',city:'合肥', value: 3654},
                {name: '福建',city:'福州', value: 1562},
                {name: '江西', city:'南昌',value: 1120},
                {name: '山东',city:'济南', value: 2155},
                {name: '河南',city:'郑州', value: 10011},
                {name: '湖北', city:'武汉',value: 6545},
                {name: '湖南', city:'长沙',value: 5641},
                {name: '广东', city:'广州',value: 7112},
                {name: '广西', city:'南宁',value: 2122},
                {name: '海南',city:'海口', value: 200},
                {name: '四川', city:'成都',value: 3210},
                {name: '贵州', city:'贵阳',value: 1234},
                {name: '云南',city:'昆明', value: 333},
                {name: '西藏',city:'拉萨', value: 111},
                {name: '陕西',city:'西安', value: 9995},
                {name: '甘肃', city:'兰州',value: 456},
                {name: '青海',city:'西宁', value: 14},
                {name: '宁夏', city:'银川',value: 22},
                {name: '新疆', city:'乌鲁木齐',value: 11111},
                {name: '北京',city:'北京', value: 8545},
                {name: '天津',city:'天津', value: 4124},
                {name: '上海',city:'上海', value: 5545},
                {name: '重庆', city:'重庆',value: 3210},
                {name: '香港',city:'香港', value: 12},
                {name: '澳门',city:'澳门', value: 10}
            ],
        }
    ]
};
/*
let mapOptions = {
    title: {
        text: 'USA Population Estimates (2012)',
        subtext: 'Data from www.census.gov',
        sublink: 'http://www.census.gov/popest/data/datasets.html',
        left: 'right'
    },
    tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
            return params.seriesName + '<br/>' + params.name + ': ' + value;
        }
    },
    visualMap: {
        left: 'right',
        min: 500000,
        max: 38000000,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        text: ['High', 'Low'],           // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
        show: true,
        //orient: 'vertical',
        left: 'left',
        top: 'top',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: 'USA PopEstimates',
            type: 'map',
            roam: true,
            map: 'USA',
            emphasis: {
                label: {
                    show: true
                }
            },
            // 文本位置修正
            textFixed: {
                Alaska: [20, -20]
            },
            data:[
                {name: 'Alabama', value: 4822023},
                {name: 'Alaska', value: 731449},
                {name: 'Arizona', value: 6553255},
                {name: 'Arkansas', value: 2949131},
                {name: 'California', value: 38041430},
                {name: 'Colorado', value: 5187582},
                {name: 'Connecticut', value: 3590347},
                {name: 'Delaware', value: 917092},
                {name: 'District of Columbia', value: 632323},
                {name: 'Florida', value: 19317568},
                {name: 'Georgia', value: 9919945},
                {name: 'Hawaii', value: 1392313},
                {name: 'Idaho', value: 1595728},
                {name: 'Illinois', value: 12875255},
                {name: 'Indiana', value: 6537334},
                {name: 'Iowa', value: 3074186},
                {name: 'Kansas', value: 2885905},
                {name: 'Kentucky', value: 4380415},
                {name: 'Louisiana', value: 4601893},
                {name: 'Maine', value: 1329192},
                {name: 'Maryland', value: 5884563},
                {name: 'Massachusetts', value: 6646144},
                {name: 'Michigan', value: 9883360},
                {name: 'Minnesota', value: 5379139},
                {name: 'Mississippi', value: 2984926},
                {name: 'Missouri', value: 6021988},
                {name: 'Montana', value: 1005141},
                {name: 'Nebraska', value: 1855525},
                {name: 'Nevada', value: 2758931},
                {name: 'New Hampshire', value: 1320718},
                {name: 'New Jersey', value: 8864590},
                {name: 'New Mexico', value: 2085538},
                {name: 'New York', value: 19570261},
                {name: 'North Carolina', value: 9752073},
                {name: 'North Dakota', value: 699628},
                {name: 'Ohio', value: 11544225},
                {name: 'Oklahoma', value: 3814820},
                {name: 'Oregon', value: 3899353},
                {name: 'Pennsylvania', value: 12763536},
                {name: 'Rhode Island', value: 1050292},
                {name: 'South Carolina', value: 4723723},
                {name: 'South Dakota', value: 833354},
                {name: 'Tennessee', value: 6456243},
                {name: 'Texas', value: 26059203},
                {name: 'Utah', value: 2855287},
                {name: 'Vermont', value: 626011},
                {name: 'Virginia', value: 8185867},
                {name: 'Washington', value: 6897012},
                {name: 'West Virginia', value: 1855413},
                {name: 'Wisconsin', value: 5726398},
                {name: 'Wyoming', value: 576412},
                {name: 'Puerto Rico', value: 3667084}
            ]
        }
    ]
};
*/





export default mapOptions