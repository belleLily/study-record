URLSearchParams

touchMove事件冒泡导致页面滑动，touchAction: 'none'

const handleChange = React.useCallback(
    (event) => {
        requestAnimationFrame(() => {
        const clientX = event.clientX || event.touches[0].clientX;
        const rootNode = rootRef.current;
        const { right, left } = rootNode.getBoundingClientRect();
        const { width } = rootNode.firstChild.getBoundingClientRect();
        let percent;
        if (theme.direction === 'rtl') {
            percent = (right - clientX) / (width * num + gap * (num - 1));
        } else {
            percent = (clientX - left) / (width * num + gap * (num - 1));
        }
        const cur = roundValueToPrecision(percent, num);
        setValueDerived(cur);
        onTouchMove(event);
        onChange(event, cur);
        });
    },
    [rootRef, theme, setValueDerived, onTouchMove, onChange, gap, num]
);

ASP //(Abstract Syntax Tree),抽象语法树

// 脚本语言，解释型
// 编译型
// https://segmentfault.com/a/1190000013126460

// 引擎
// 编译器，语法分析，代码生成

// 词法作用域

eval
with