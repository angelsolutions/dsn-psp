    !function(t,a){"function"==typeof define&&define.amd?define(a):"object"==typeof exports?module.exports=a(require,exports,module):t.CountUp=a()}(this,function(t,a,e){/*

    countUp.js
    (c) 2014-2015 @inorganik
    Licensed under the MIT license.

*/
var n=function(t,a,e,n,i,r){for(var o=0,s=["webkit","moz","ms","o"],m=0;m<s.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[s[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[m]+"CancelAnimationFrame"]||window[s[m]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,a){var e=(new Date).getTime(),n=Math.max(0,16-(e-o)),i=window.setTimeout(function(){t(e+n)},n);return o=e+n,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),this.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",postFormatter:null};for(var u in r)r.hasOwnProperty(u)&&(this.options[u]=r[u]);""===this.options.separator&&(this.options.useGrouping=!1),this.options.prefix||(this.options.prefix=""),this.options.suffix||(this.options.suffix=""),this.d="string"==typeof t?document.getElementById(t):t,this.startVal=Number(a),this.endVal=Number(e),this.countDown=this.startVal>this.endVal,this.frameVal=this.startVal,this.decimals=Math.max(0,n||0),this.dec=Math.pow(10,this.decimals),this.duration=1e3*Number(i)||2e3;var l=this;this.version=function(){return"1.6.1"},this.printValue=function(t){var a=isNaN(t)?"--":l.formatNumber(t);"INPUT"==l.d.tagName?this.d.value=a:"text"==l.d.tagName||"tspan"==l.d.tagName?this.d.textContent=a:this.d.innerHTML=a},this.easeOutExpo=function(t,a,e,n){return e*(-Math.pow(2,-10*t/n)+1)*1024/1023+a},this.count=function(t){l.startTime||(l.startTime=t),l.timestamp=t;var a=t-l.startTime;l.remaining=l.duration-a,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.easeOutExpo(a,0,l.startVal-l.endVal,l.duration):l.frameVal=l.easeOutExpo(a,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(a/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(a/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.floor(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),a<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},this.start=function(t){return l.callback=t,l.rAF=requestAnimationFrame(l.count),!1},this.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},this.reset=function(){l.paused=!1,delete l.startTime,l.startVal=a,cancelAnimationFrame(l.rAF),l.printValue(l.startVal)},this.update=function(t){cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=Number(t),l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count)},this.formatNumber=function(t){t=t.toFixed(l.decimals),t+="";var a,e,n,i;if(a=t.split("."),e=a[0],n=a.length>1?l.options.decimal+a[1]:"",i=/(\d+)(\d{3})/,l.options.useGrouping)for(;i.test(e);)e=e.replace(i,"$1"+l.options.separator+"$2");var r=l.options.prefix+e+n+l.options.suffix;return null!=l.options.postFormatter&&(r=l.options.postFormatter(r)),r},l.printValue(l.startVal)};return n});

    $(document).ready(function() {
        $('.review-item').viewportChecker({
            classToAdd: 'is-active',
            offset: 100
           });

        $('.stat-item').viewportChecker({
            classToAdd: 'bounceInUp',
            classToRemove: 'hidden',
            offset: 100
           });
    });


    