import classNames from 'classnames/bind';
import PropsTypes from 'prop-types';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
    children,
    href,
    to,
    disabled = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const propsButton = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(propsButton).forEach((key) => {
            if (key.startsWith('on') && typeof propsButton[key] === 'function') {
                delete propsButton[key];
            }
        });
    }
    if (to) {
        propsButton.to = to;
        Comp = Link;
    } else if (href) {
        propsButton.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
    });
    return (
        <Comp className={classes} {...propsButton}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    children: PropsTypes.node,
    href: PropsTypes.string,
    to: PropsTypes.string,
    disabled: PropsTypes.bool,
    primary: PropsTypes.bool,
    outline: PropsTypes.bool,
    small: PropsTypes.bool,
    large: PropsTypes.bool,
    text: PropsTypes.bool,
    rounded: PropsTypes.bool,
    className: PropsTypes.string,
    leftIcon: PropsTypes.object,
    rightIcon: PropsTypes.object,
    onClick: PropsTypes.func,
};
export default Button;
