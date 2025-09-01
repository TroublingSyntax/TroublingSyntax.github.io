(function(){
    function setBounds(){
        var h=document.querySelector('h1');
        var p=document.querySelector('body > p');
        var top=0, right=0;
        if(h){ top=h.getBoundingClientRect().bottom+window.scrollY; }
        if(p){
            var pr=p.getBoundingClientRect();
            right=Math.max(0, window.innerWidth - pr.left);
        }
        top+=16;
        document.documentElement.style.setProperty('--landing-top', top+'px');
        document.documentElement.style.setProperty('--landing-right', right+'px');
    }
    window.addEventListener('DOMContentLoaded', setBounds);
    window.addEventListener('resize', setBounds);
})();