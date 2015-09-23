(function() {
     $(function() {

         this.app = {
             platform:{},
             init:function(){
                 return this.detectPlatform();
             },
     detectPlatform: function() {
				var a;
				return a = navigator.appVersion, this.platform.isWechat = /micromessenger/i.test(a), this.platform.isQQ = /qq/i.test(a), this.platform.is_mobile = !1, /(android|BB10)/gi.test(a) ? (this.platform.is_ios = !1, this.platform.is_android = !0, this.platform.is_mobile = !0, this.platform.value = "android", this.platform.is_phone = !0) : /iP(hone|od|ad)/g.test(a) ? (this.platform.is_mobile = !0, this.platform.is_ios = !0, this.platform.ios_6_x = /OS 6_(\d(_\d)*)/g.test(a), this.platform.is_android = !1, /iP(hone|od)/g.test(a) && (this.platform.is_phone = !0), this.platform.value = "ios") : void 0
			},
     setAppleLoc:function(){
         var weikalink = 'weika://open';
         var start, end, elapsed,weblink;
         var weblink = 'https://itunes.apple.com/cn/app/wei-ka./id858357860?l=zh&ls=1&mt=8';
              // start a timer
         var ifr = document.createElement('iframe');  
        ifr.src = 'weika://';  
        ifr.style.display = 'none';  
        document.body.appendChild(ifr); 
        setTimeout(function(){
             document.location = weblink;
        },500);

     },
     setLocation:function(){
        var weikalink = 'weika://open';
        var start, end, elapsed,weblink;
        weblink = 'http://www.wevip.com/index.php?option=com_content&view=article&id=67&Itemid=911';

                 // start a timer
       // start = new Date().getTime();

        // attempt to redirect to the uri:scheme
        // the lovely thing about javascript is that it's single threadded.
        // if this WORKS, it'll stutter for a split second, causing the timer to be off
         // document.location = weikalink;
          var ifr = document.createElement('iframe');  
        ifr.src = 'weika://';  
        ifr.style.display = 'none';  
        document.body.appendChild(ifr); 
        setTimeout(function(){
             document.location = weblink;
        },500);


      
     },

             install:function(){
                 if(this.platform.isWechat){
                 if(this.platform.is_ios){
                     $('.wechat-tips').find('.tip').html('点击右上角菜单在<br/>Safari 中打开并安装');
                 }
                 $('body').addClass("show-wechat-notice");
                 }else{
                     if(this.platform.is_ios){
                         this.setAppleLoc();
                     }else{
                         this.setLocation();
                     }

                 }
             },
             closeCover:function(){
                 $('body').removeClass("show-wechat-notice");
             }
         },app.init()
     });
}).call(this);
