export class Like {
    private buttonLabel = 'Like'

    constructor(private _noLikes: number) {
    }

    clickLikeBtn() {
        if(this.buttonLabel === 'Like') {
            this.buttonLabel = 'Liked'
            this._noLikes++
        } else  {
            this.buttonLabel = 'Like'
            this._noLikes--
        }
    }

    get noLikes() {
        console.log(this._noLikes)
        return this._noLikes
    }
}
