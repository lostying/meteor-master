/**
 * Created by liyulong on 16-1-17.
 */
var postsData = [
    {
        title: '前端工程师',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: '欢乐戏剧人',
        url: 'http://meteor.com'
    },
    {
        title: '张无忌',
        url: 'http://themeteorbook.com'
    }
];
Template.postsList.helpers({
    posts: postsData
});