import { Fragment } from "react";
import headerImg from '../../Assets/restaurant_cafe_design1.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props =>{

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Delicious Meals</h1>
                <HeaderCartButton onClickShow={props.onShowCart}/>
            </header>

            <div className={['main-image']}>
                <img src={headerImg} alt="A Table Full of Delicious Food"/>
            </div>
        </Fragment>
    )
};

export default Header;