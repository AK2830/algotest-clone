export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>AlgoTest Clone</h1>
        <p style={{ fontSize: '1.25rem', color: '#666' }}>Algorithmic Trading Backtesting Platform</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        <div style={{ padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
          <h2>📊 Dashboard</h2>
          <p>Monitor your trading strategies and portfolio performance</p>
        </div>
        
        <div style={{ padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
          <h2>🔄 Backtest</h2>
          <p>Test your strategies against historical market data</p>
        </div>
        
        <div style={{ padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
          <h2>📈 Live Trading</h2>
          <p>Execute trades with real-time market data</p>
        </div>
      </div>
      
      <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Welcome to AlgoTest</h3>
        <p>A comprehensive platform for algorithmic trading and backtesting. Get started by exploring the dashboard to create and manage your trading strategies.</p>
      </div>
    </main>
  )
}
