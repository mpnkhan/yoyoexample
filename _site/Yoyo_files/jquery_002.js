/* v1.0.2 */(function(b){b.fn.mailcheck=function(a,b){var d="yahoo.com,google.com,hotmail.com,gmail.com,me.com,aol.com,mac.com,live.com,comcast.net,googlemail.com,msn.com,hotmail.co.uk,yahoo.co.uk,facebook.com,verizon.net,sbcglobal.net,att.net,gmx.com,mail.com".split(",");if("object"===typeof a&&void 0===b)a.domains=a.domains||d;else{var e=a,a=b;a.domains=e||d}(d=Kicksend.mailcheck.suggest(encodeURI(this.val()),a.domains))?a.suggested&&a.suggested(this,d):a.empty&&a.empty(this)}})(jQuery);
var Kicksend={mailcheck:{threshold:3,suggest:function(b,a){var b=b.toLowerCase(),c=this.splitEmail(b),d=this.findClosestDomain(c.domain,a);return d?{address:c.address,domain:d,full:c.address+"@"+d}:!1},findClosestDomain:function(b,a){for(var c,d=99,e=null,f=0;f<a.length;f++){if(b===a[f])return!1;c=this.stringDistance(b,a[f]);c<d&&(d=c,e=a[f])}return d<=this.threshold&&null!==e?e:!1},stringDistance:function(b,a){if(null==b||0===b.length)return null==a||0===a.length?0:a.length;if(null==a||0===a.length)return b.length;
for(var c=0,d=0,e=0,f=0;c+d<b.length&&c+e<a.length;){if(b.charAt(c+d)==a.charAt(c+e))f++;else for(var g=e=d=0;5>g;g++){if(c+g<b.length&&b.charAt(c+g)==a.charAt(c)){d=g;break}if(c+g<a.length&&b.charAt(c)==a.charAt(c+g)){e=g;break}}c++}return(b.length+a.length)/2-f},splitEmail:function(b){b=b.split("@");if(2>b.length)return!1;for(var a=0;a<b.length;a++)if(""===b[a])return!1;return{domain:b.pop(),address:b.join("@")}}}};
