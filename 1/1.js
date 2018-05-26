function renderPage(url,selector){
    if(!url||!selector){
        //如果路径或者拼接html的上级元素不存在，直接结束
        return 0;
    }
    this.url=url;
    this.selector=$(selector);
    // console.log(this.url,this.selector);
    this.init();
}
renderPage.prototype={
    constructor:renderPage,
    //初始化
    init(){
       this.page=1;
       this.load_data()
       .then(function(res){
        this.json=res.data.list;
        // console.log(this.json)
        this.render()//加载数据成功后用json渲染页面
       }.bind(this))
       .fail(function(err_msg){//加载数据失败

       })
    },
    //请求获取接口数据
    load_data(){
        this.opt={
            dataType:"jsonp",
            url:this.url,
            data:{page:this.page}
        }
        // console.log($.ajax(this.opt));
        return $.ajax(this.opt);//ajax请求数据
    },
    //渲染页面
    render(){
        var html="";
        this.json.forEach(function(item){
            html+=`<li>
                        <img src="${item.image}">
                        <span>${item.title}</span>
                        <button>${item.item_id}</button>
                    </li>
                    `;
            // console.log(html);
            
        }.bind(this));
        this.selector.html(this.selector.html()+html);//在原来ul里面添加上字符串模板生成的一个个li
        
    }

}
new renderPage("http://mce.meilishuo.com/jsonp/get/3?offset=0&frame=1&trace=0&limit=10&endId=0&pid=106888&_=1526528205879",".imgList");