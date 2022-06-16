import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
const Menu = (props) => {
    return <nav className={cx('wrapper')}>{props.children}</nav>;
};

Menu.propTypes = {};

export default Menu;
