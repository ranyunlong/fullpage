window.onload = function() {
    var start = true;
    var timed = 1000;
    var index = 0;
    var len = document.getElementsByClassName('page').length;

    function reset() {
        for (var i = 0; i < len; i++) {
            document.getElementsByClassName('page')[i].style.zIndex = '1';
            document.getElementsByClassName('page')[i].className = 'page page' + i;
        }
    }

    function MoveTop() {
        reset();
        var obj = document.getElementsByClassName('page')[index];
        obj.style.zIndex = '2';
        obj.className = 'page page' + index + ' animated moveDown';
    }

    function MoveBottom() {
        reset();
        var obj = document.getElementsByClassName('page')[index];
        obj.style.zIndex = '2';
        obj.className = 'page page' + index + ' animated moveUp';
    }
    document.onmousewheel = function(e) {
        if (start) {
            start = false;
            if (e.wheelDelta > 0) {
                index++;
                if (index > len - 1) {
                    index = 0;
                }
                MoveTop();
            } else if (e.wheelDelta < 0) {
                index--;
                if (index < 0) {
                    index = len - 1;
                }
                MoveBottom()
            }
            setTimeout(function() {
                start = true;
            }, timed)
        }
    }
}