import './App.css'
import RatesTable from './components/RatesTable';
const App = ({state, fetchRates}) => {
    return (
        <div>
            <header className='appHeader'>Моніторинг курсів</header>
            <main className='mainContent'>
                <RatesTable exchanges={state.exchanges} fetchRates={fetchRates} isLoading={state.isLoading} />
                {/* <iframe src="https://obmennovosti.info/city.php?city=39" width="100%" height="500"></iframe> */}
            </main>
        </div>
    )
}

export default App;