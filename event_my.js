window.newEvent = {
    EventEmitter:function(){
        this.emiiter ={}
        this.on = function(name,fun){
            let arr = this.emiiter[name] || [];
            arr.push(fun);
            this.emiiter[name] = arr;
        }
        this.emit = function(name,...args){
            let arr = this.emiiter[name];
            if(arr.length<=0) return;
            arr[0](...args);
        }
        this.removeLister = function(name,fun){
            let arr = this.emiiter[name];
            if(arr.length<=0) return;
            arr.splice(0,1);
            this.emiiter[name] = arr;
        }
    }
}