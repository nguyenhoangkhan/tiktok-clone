import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import PropTypes from 'react';
const cx = classNames.bind(styles);
const Wrapper = (props) => {
    return <div className={cx('wrapper', props.className)}>{props.children}</div>;
};
export default Wrapper;
