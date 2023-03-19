import './App.css'
import RatesTable from './components/RatesTable';
const App = ({state, fetchRates}) => {
    return (
        <div>
            <header className='appHeader'>Моніторинг курсів</header>
            <main className='mainContent'>
                <RatesTable exchanges={state.exchanges} fetchRates={fetchRates} isLoading={state.isLoading} />
            </main>
        </div>
    )
}

export default App;