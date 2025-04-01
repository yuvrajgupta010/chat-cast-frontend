
export const combinationofbar = {
    data: {
        x: 'x',
        columns: [
            ['x', '2013', '2014', '2015', '2016', '2017', '2018'],
            ['data1', 30, 20, 50, 40, 60, 50],
            ['data4', 200, 130, 90, 240, 130, 220],
            ['data6', 90, 70, 20, 50, 60, 120],
        ],
        type: 'bar',

        types: {
            data6: 'spline',
            data4: 'spline',

        }

    }
};
export const MultipleBarchart = {
    data: {
        x: 'x',
        columns: [
            ['x', '2013', '2014', '2015', '2016', '2017', '2018'],
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
    },

};
export const SingleBarchart = {
    data: {
        x: 'x',

        columns: [
            ['x', '2013', '2014', '2015', '2016', '2017', '2018'],
            ['data1', 30, 200, 100, 400, 150, 250],
        ],
        bgcolor: 'red',

        type: 'bar',

    }
};
export const HorizontalBar = {
    data: {
        columns: [
            ['data1', '11', '8', '15', '18', '19', '17',],
            ['data2', '7', '7', '5', '7', '9', '12',],
        ],
        type: 'bar',
        labels: true,
    },
    axis: {
        rotated: true,
        y: {
            show: true,
        },
        x: {
            type: 'category',
            categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN']
        }
    },

};

export const BarChart = {
    data: {
        x: 'x',
        columns: [
            ['x', '2013', '2014', '2015', '2016', '2017', '2018'],
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar',
        groups: [
            ['data1', 'data2']
        ]
    },

    x: {
        type: 'category',
    }
};
export const Areaspline = {
    data: {
        x: 'x',
        columns: [
            ['x', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2010',],
            ['Profit', 0, 1, 2, 21, 9, 12, 10, 31, 13, 65, 10, 12, 6],
            ['Sales', 0, 1, 2, 7, 5, 6, 8, 24, 7, 12, 5, 6, 3],
            ['Gain', 0, 1, 0, 2, 0, 1, 0, 2, 3, 0, 2, 3, 2]
        ],

        types: {
            Profit: 'spline',
            Sales: 'area-spline',
            Gain: 'spline',
        }
    }
};
