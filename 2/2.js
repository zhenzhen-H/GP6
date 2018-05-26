function banner(){
    this.prev=$("#prev");
    this.next=$("#next");
    this.aLi=$("li");
    // console.log(this.aLi);
    this.init();
}
banner.prototype={
    constructor:banner,
    init(){
        this.play();//进行轮播
    },
    play(){
        var index=0;//现在显示的图片
        var show,hidden;
        var item_width=this.aLi[0].offsetWidth;
        this.next.on("click",function(){
            hidden=index;
            // console.log(this.aLi);
            if(index==this.aLi.length-1){
                index=0;
                show=index;
            }else{
                show=++index;
            }
            // console.log(index,hidden,show);
            this.aLi[show].style.left=item_width+"px";
            this.aLi[show].style.zIndex=1;
            // console.log(this.aLi[show].offsetLeft);
            move(this.aLi[show],0,"left");//移动到显示位置
            // console.log(this.aLi[show].offsetLeft);

            this.aLi[hidden].style.left=0+"px";
            this.aLi[hidden].style.zIndex=0;
            move(this.aLi[hidden],-item_width,"left");//移动到左边隐藏起来
        }.bind(this))
        this.prev.on("click",function(){
            if(index==0){
                index=this.aLi.length-1;
                show=index;
            }else{
                show=--index;
            }
            this.aLi[show].style.left=-item_width+"px";
            this.aLi[show].style.zIndex=1;
            move(this.aLi[show],0,"left");//移动到显示位置

            this.aLi[hidden].style.left=0+"px";
            this.aLi[hidden].style.zIndex=0;
            move(this.aLi[hidden],item_width,"left");//移动到左边隐藏起来
        }.bind(this))


        
    },
    animate(type){

    }
}

new banner();