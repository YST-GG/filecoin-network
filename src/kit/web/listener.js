export class Listener{
    constructor(onResponse, onError){
        this.onResponse = onResponse;
        this.onError = onError;
    }
    setOnResponse(callBack){
        this.onResponse = callBack;
        return this;
    }
    setOnError(callBack){
        this.onError = callBack;
        return this;
    }
}