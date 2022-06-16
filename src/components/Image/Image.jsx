import classNames from 'classnames/';
import { useState, forwardRef } from 'react';
import styles from './Image.module.scss';
import images from '../../assets/images';
const Image = ({ src, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => setFallback(customFallback);
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            alt=""
            src={fallback || src}
            {...props}
            onError={handleError}
        />
    );
};

export default forwardRef(Image);
