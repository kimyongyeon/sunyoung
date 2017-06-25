var _ = require('../node_modules/lodash');
// 로다쉬 연습

var data = _.shuffle([1,2,3,4]);
console.log(data);

var data = _.sample([1,2,3,4,5,6,7,8,9,10], 3);
console.log(data);
 
var max = _.max([1,2,3,44,2234,4,5,6]);
console.log(max);

var min = _.min([1,2,3,44,2234,4,5,6]);
console.log(min);

var sorted = _.sortBy([1,2,3,4,5], (m) => Math.sin(m));
console.log(sorted);

var groupby = _.groupBy([1,2,3,4,5], (num) => Math.floor(num) );
console.log(groupby);

var groupbylen = _.groupBy(['one', 'two', 'three'], 'length');
console.log(groupbylen);

var countby = _.countBy([1, 2, 3, 4, 5], function(num) {
  return num % 2 == 0 ? 'even': 'odd';
});
console.log(countby);

var fill_ = _.fill([4,5,6,7], '*', 1, 3);
console.log(fill_);

var drop_ = _.drop([1,2,3,4,5], 2);
console.log(drop_);

var dropright_ = _.dropRight([1,2,3,4,5,6,7], 2);
console.log(dropright_);

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 var users = _.dropRightWhile(users, function(o) { return !o.active; });
 console.log(users);

 var head_ = _.head([1,2,3,4]);
 console.log(head_);

var intersection = _.intersection([2,1], [2,1]);
console.log(intersection);

var join_ = _.join([1,2,3,4], '~');
console.log(join_);

var last_ = _.last([1,2,3,4,5]);
console.log(last_);

var memberList = [
    {
        idx: 1,
        name: 'kim',
        phone: '010012323'
    },
    {
        idx: 2,
        name: 'kim22222',
        phone: '010012323'
    }
]
const lst = _.remove(memberList, (x) => x.idx === 1);
console.log(memberList);
var remove_ = _.remove([1,2,3,4], (d) => d % 2 === 0 );

const sorteduniq = _.sortedUniq([1,2,3,3,3,4,45,6,7,7]);
console.log(sorteduniq);

const take = _.take([1,20,3,4], 2);
console.log(take);

const takeright = _.takeRight([1,2,3,4,5,6,66,7,7], 3);
console.log(takeright);

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
]; 
var newusers = _.takeRightWhile(users, function(o) { return !o.active; });
console.log(newusers);
var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
var unzipped = _.unzip(zipped);
console.log(zipped);
console.log(unzipped);

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
var newusers = _.filter(users, { 'age': 36, 'active': true });
console.log(newusers);

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
var newusers = _.find(users, { 'age': 1, 'active': true });
console.log(newusers);

function duplicate(n) {
  return [n, n];
} 
var flatmap = _.flatMap([1, 2], duplicate);
console.log(flatmap);

var referer = 'http://www.naver.com/good/bitframe';
var refererValue = _.includes(referer, 'xyz');
console.log(refererValue);

var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];
var newarray = _.keyBy(array, function(o) {
  return String.fromCharCode(o.code);
});
console.log(newarray);
var newarray = _.keyBy(array, 'dir');
console.log(newarray);

function square(n) {
  return n * n;
}
_.map([4, 8], square);
_.map({ 'a': 4, 'b': 8 }, square);

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
// The `_.property` iteratee shorthand.
_.map(users, 'user');

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);