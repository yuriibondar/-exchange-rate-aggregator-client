import './App.css'
import RatesTable from './components/RatesTable';
const App = ({state}) => {
    return (
        <div>
            <header className='appHeader'>Моніторинг курсів</header>
            <main className='mainContent'>
                <RatesTable exchanges={state.exchanges} />
            </main>
        </div>
    )
}

export default App;