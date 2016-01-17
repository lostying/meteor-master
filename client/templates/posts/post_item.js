/**
 * Created by liyulong on 16-1-17.
 */
Template.postItem.helpers({
    domain:function(){
        var a=document.createElement('a');
        a.href=this.url;
        return a.hostname;
    }
})