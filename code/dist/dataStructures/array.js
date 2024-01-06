"use strict";
exports.__esModule = true;
exports.MyArray = void 0;
var MyArray = /** @class */ (function () {
    function MyArray() {
        this.length = 0;
        this.data = {};
    }
    MyArray.prototype.get = function (index) {
        return this.data[index];
    };
    MyArray.prototype.push = function (item) {
        this.data[this.length] = item;
        this.length++;
        return item;
    };
    MyArray.prototype.pop = function () {
        var lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        return lastItem;
    };
    MyArray.prototype["delete"] = function (index) {
        for (var i = index; i < this.length - 1; index++) {
            this.data[i] = this.data[i + 1];
        }
        return delete this.data[this.length - 1];
    };
    return MyArray;
}());
exports.MyArray = MyArray;
var myArray = new MyArray();
myArray.push('hi');
myArray.push('you');
console.log(myArray);
var getIndexZero = myArray.get(0);
console.log('getIndexZero', getIndexZero);
var pop = myArray.pop();
console.log('pop', pop);
