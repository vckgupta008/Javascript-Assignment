var eventUtility = {
    addEvent: function(e1, type, fn)//html event or dom object {
        if (typeof addEventListener !== "undefine") {
            e1.addEventListener(type, fn, false);

        } else if (typeof attachEvent !== "undefine") {
            e1.attachEvent("on" + type, fn);
        } else {
            el["on" + type] = fn;
        }


    },

    removeEvent: function(e1, type, fn) {
        if (typeof removeEventListener !== "undefine") {
            e1.removeEventListener(type, fn, false);

        } else if (typeof detachEvent !== "undefine") {
            e1.detachEvent("on" + type, fn);
        } else {
            el["on" + type] = null;
        }


    },

    getTarget: function(event) {
        if (typeof event.target !== "undefined") {
            return event.target;
        } else {
            return event.srcElement;
        }
    },

    preventDefault: function(event) {
        if (typeof event.preventDefault !== "undefined") {
            event.preventDefault;
        } else {
            event.returnValue = false;
        }
    },
    getCallingElement: function(event) {
        if (typeof event.currentTarget !== "undefined") {
            return event.currentTarget;
        } else {
            return event.srcElement;
        }
    }

};
