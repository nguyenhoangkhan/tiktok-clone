import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '..';
import MenuItems from './MenuItems';
import Header from './Header';
const cx = classNames.bind(styles);
const Menu = ({ children, items, hideOnClick, onChange = () => {} }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () =>
        current.data.map((item, index) => {
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        const isParent = !!item.children;
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    return (
        <HeadlessTippy
            hideOnClick={hideOnClick}
            offset={[16, 8]}
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 ? <Header title={current.title} onBack={handleBack} /> : undefined}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetToFirstPage}
        >
            {children}
        </HeadlessTippy>
    );
};

export default Menu;
