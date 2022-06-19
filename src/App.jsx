import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './component/login/login';
import Maker from './component/maker/maker';

function App({ FileInput, authService }) {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Login authService={authService} />
                    </Route>
                    <Route path="/maker">
                        <Maker
                            authService={authService}
                            FileInput={FileInput}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
