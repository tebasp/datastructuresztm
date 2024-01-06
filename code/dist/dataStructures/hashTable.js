"use strict";
exports.__esModule = true;
exports.CustomHash = void 0;
var CustomHash = /** @class */ (function () {
    function CustomHash(size) {
        this.data = new Array(size);
    }
    CustomHash.prototype._hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    };
    CustomHash.prototype.set = function (key, value) {
        var address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data[address];
    };
    CustomHash.prototype.get = function (key) {
        var address = this._hash(key);
        var currentItem = this.data[address];
        if (!currentItem) {
            return undefined;
        }
        for (var _i = 0, currentItem_1 = currentItem; _i < currentItem_1.length; _i++) {
            var element = currentItem_1[_i];
            if (element[0] === key) {
                return element[1];
            }
        }
    };
    CustomHash.prototype.keys = function () {
        return this.data.map(function (item) { return item[0][0]; });
    };
    return CustomHash;
}());
exports.CustomHash = CustomHash;
var myHashTable = new CustomHash(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
myHashTable.set('oranges', 2);
var grapes = myHashTable.get('grapes');
console.log('\nGrapes', grapes);
console.log('\nKeys', myHashTable.keys());
