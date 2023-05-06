const fun = require('./index')

// inputs
let D1 = {
    "2020-01-01": 4,
    "2020-01-02": 4,
    "2020-01-03": 6,
    "2020-01-04": 8,
    "2020-01-05": 2,
    "2020-01-06": -6,
    "2020-01-07": 2,
    "2020-01-08": -2,
};
let D2 = {
    "2020-01-01": 6,
    "2020-01-04": 12,
    "2020-01-05": 14,
    "2020-01-06": 2,
    "2020-01-07": 4,
};
// outputs
let res1 = {
    'Mon': -6, 'Tue': 2, 'Wed': 2, 'Thu': 4, 'Fri': 6, 'Sat': 8, 'Sun': 2
}
let res2 = {
    'Mon': 2, 'Tue': 4, 'Wed': 6, 'Thu': 8, 'Fri': 9, 'Sat': 12, 'Sun': 14
}

test('TEST CASE 1 PASSED SUCCESSFULLY!!!', () => {
    expect(fun(D1)).toStrictEqual(res1);
});

test('TEST CASE 2 PASSED SUCCESSFULLY!!!', () => {
    expect(fun(D2)).toStrictEqual(res2);
});