"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(_noLikes) {
        this._noLikes = _noLikes;
        this.buttonLabel = 'Like';
    }
    Like.prototype.clickLikeBtn = function () {
        if (this.buttonLabel === 'Like') {
            this.buttonLabel = 'Liked';
            this._noLikes++;
        }
        else {
            this.buttonLabel = 'Like';
            this._noLikes--;
        }
    };
    Object.defineProperty(Like.prototype, "noLikes", {
        get: function () {
            console.log(this._noLikes);
            return this._noLikes;
        },
        enumerable: false,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
