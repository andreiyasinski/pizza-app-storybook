import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPizzas, getIngredients, getTypes } from '../../actions';
import styles from './app.module.css';
import Header from '../header/header.component';
import Pizzas from '../pizzas/pizzas.component';
import Bunner from '../banner/banner.component';
import Footer from '../footer/footer.component';
import Basket from '../basket/basket.component';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzas());
    dispatch(getIngredients());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <Router basename={process.env.PUBLIC_URL} >
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.wrapper}>
            <Header />
          </div>
        </div>
        <div className={styles.main}>
          <Bunner />
          <div className={styles.wrapper}>
            <Switch>
              <Route exact path="/" component={Pizzas} />
              <Route path="/promotions" render={() => <h1>Promotions page</h1>} />
              <Route path="/about" render={() => <h1>About page</h1>} />
              <Route path="/delivery"  render={() => <h1>Delivery page</h1>} />
              <Route path="/basket" component={Basket} />
            </Switch>
          </div>
        </div>
        <div className={styles.footerBlock}>
          <div className={styles.wrapper}>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
