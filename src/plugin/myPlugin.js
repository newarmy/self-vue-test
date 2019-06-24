let install = function (Vue, options) {
    Vue.directive('demo', {
        bind: function (el, binding, vnode) {
            var s = JSON.stringify
            el.innerHTML =
                'name: '       + s(binding.name) + '<br>' +
                'value: '      + s(binding.value) + '<br>' +
                'expression: ' + s(binding.expression) + '<br>' +
                'argument: '   + s(binding.arg) + '<br>' +
                'modifiers: '  + s(binding.modifiers) + '<br>' +
                'vnode keys: ' + Object.keys(vnode).join(', ')
        }
    })
    Vue.directive('xj-touch', {
        bind (el, binding, vnode, oldNode) {
            let x = 0;
            let dir = null;
            el.addEventListener('touchstart', function (e) {
                let obj = e.touches[0];
                x = obj.clientX;
                dir = "click";
            });
            el.addEventListener('touchmove', function (e) {
                let obj = e.changedTouches[0];
                let curX = obj.clientX;
                let diff = curX - x;
                if(diff> 0 && Math.abs(diff) > 10) {
                    dir = 'right';
                } else if(diff < 0 && Math.abs(diff) > 10) {
                    dir = 'left';
                } else {
                    dir = 'click'
                }
            })
            el.addEventListener('touchend', function (e) {
                let func = binding.value;
                if(typeof func !== 'function') {
                    return ;
                }
                switch (dir) {
                    case 'click':
                        func('click');
                        break;
                    case 'left':
                        func('left');
                        break;
                    case 'right':
                        func('right');
                        break;
                }
            })
        }
    })
}

export default  {install};