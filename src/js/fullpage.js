(function(doc, win) {
    var status = true,
        timed = 1000,
        sections,
        el;
    var fullpage = function(options) {
        var obj = new fullpage.init(options);
        return obj;
    }
    fullpage.init = function(o) {
        if (o.timed != undefined) {
            timed = o.timed;
        }
        if (o.el == undefined && o.option == undefined) {
            return;
        } else {
            /*
             * @methods element()
             * @param els string
             * @return html element
             */
            function element(els) {
                if (/^\./.test(els)) {
                    var obj = els.match(/[^\.][\w]*/g);
                    return doc.getElementsByClassName(obj[0]);
                } else if (/^\#/.test(els)) {
                    var obj = els.match(/[^\#][\w]*/g);
                    return doc.getElementById(obj[0]);
                }
            }
            el = this.el = element(o.el)[0];
            sections = this.options = element(o.option);
        }
        this.addEvent();
        this.goIndex();
    }
    fullpage.prototype.fn = {
        addEvent: function() { /*method addEvent() return void*/
            var _self = this;
            document.addEventListener('DOMMouseScroll', function(e) {
                e = e || event || window.event;
                _self.Do(e);
            })
            document.addEventListener('mousewheel', function(e) {
                e = e || event || window.event;
                _self.Do(e);
            })
        },
        Do: function(e) { /*method do(event) return void*/
            if (status) {
                status = false;
                var delta = e.deltaY || e.wheelDelta || e.detail;
                if (delta > 0) {
                    this.goUp();
                } else if (delta < 0) {
                    this.goDown();
                }
                setTimeout(function() {
                    status = true;
                }, timed)
            }
        },
        goDown: function() {
            for (var i = 0; i < sections.length; i++) {
                this.removeClass(sections[i], 'goDown');
                this.removeClass(sections[i], 'goDown2');
                this.removeClass(sections[i], 'goUp');
                this.removeClass(sections[i], 'goUp2');
            }
            this.addClass(el.lastElementChild.previousElementSibling, 'goDown2');
            this.addClass(el.lastElementChild, 'goDown');
            setTimeout(function() {
                el.insertBefore(el.lastElementChild, el.firstElementChild);
            }, timed);
        },
        goIndex: function() {
            el.appendChild(el.firstElementChild);
        },
        goUp: function() {
            for (var i = 0; i < sections.length; i++) {
                this.removeClass(sections[i], 'goDown');
                this.removeClass(sections[i], 'goDown2');
                this.removeClass(sections[i], 'goUp');
                this.removeClass(sections[i], 'goUp2');
            }
            this.addClass(el.lastElementChild, 'goUp2');
            this.addClass(el.firstElementChild, 'goUp');
            el.appendChild(el.firstElementChild);
        },
        addClass: function(el, classname) {
            var oldclass = el.className,
                newclass = oldclass + ' ' + classname;
            el.className = newclass;
        },
        removeClass: function(el, classname) {
            var oldclass = el.className;
            var arr = oldclass.split(' ');
            var newarr = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] != classname) {
                    newarr.push(arr[i]);
                }
            }
            var newclass = newarr.join(' ');
            el.className = newclass;
        }
    }
    fullpage.init.prototype = fullpage.prototype = fullpage.prototype.fn;
    win.fullpage = fullpage;
}(document, window));