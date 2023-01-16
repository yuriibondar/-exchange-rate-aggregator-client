import './App.css'
import RatesTable from './components/RatesTable';
const App = () => {
    return (
        <div>
            <header className='appHeader'>Моніторинг курсів</header>
            <main className='mainContent'>
                <RatesTable />
            </main>
        </div>
    )
}

export default App;