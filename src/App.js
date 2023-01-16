import './App.css'
const App = () => {
    return (
        <div>
            <header className='appHeader'>Моніторинг курсів</header>
            <main className='mainContent'>
                <div className="table">
                    <div className="tableHeader">
                        $ Вінниця
                    </div>
                    <div className="tableContent">
                        <div className="name">Kit</div>
                        <div className="exchangeRate">40.40/40.90</div>
                        <div className="name">Minfin</div>
                        <div className="exchangeRate">40.40/40.52</div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App;