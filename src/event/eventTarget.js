/*
 *自定义事件
 * */
function EventTarget(){
	this.handlers = {};
}

EventTarget.prototype = {
	constructor:EventTarget,
	/*监听事件*/
	addHandler:function(type,handler){
		if(typeof this.handlers[type] == 'undefined'){
			this.handlers[type] = [];
		}
		
		this.handlers[type].push(handler);
	},
	/*触发事件*/
	fire:function(event){
		if(!event.target){
			event.target = this;
		}
		if(this.handlers[event.type] instanceof Array){
			var handlers = this.handlers[event.type];
			for(var i=0,len=handlers.length; i<len; i++){
				handlers[i](event);
			}
		}
	},
	
	/*移除事件*/
	removeHandler:function(type,handler){
		if(this.handlers[event.type] instanceof Array){
			var handlers = this.handlers[event.type];
			for (var i=0,len = handlers; i<len; i++) {
				if(handlers[i] == handler){
					break;
				}
			}
			handlers.splice(i,1);
		}
		
	}
}
