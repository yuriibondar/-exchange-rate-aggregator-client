import './App.css'
import RatesTable from './components/RatesTable';
import { Analytics } from '@vercel/analytics/react';

const App = ({state, fetchRates}) => {
    return (
        <div>
            <header className='appHeader'>Моніторинг курсів</header>
            <main className='mainContent'>
                <RatesTable exchanges={state.exchanges} fetchRates={fetchRates} isLoading={state.isLoading} />
                {/* <iframe src="https://obmennovosti.info/city.php?city=39" width="100%" height="500"></iframe> */}
            </main>
            <Analytics />
        </div>
    )
}

export default App;