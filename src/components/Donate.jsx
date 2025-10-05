const Donate = () => {
  const donateWithMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        })
        await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [{
            from: accounts[0],
            to: '0x661A2e7187AF6371034e9B0bafF5d52B0e8C59A2',
            value: '0x2386F26FC10000' // 0.01 ETH
          }]
        })
      } catch (error) {
        alert('Transaction failed: ' + error.message)
      }
    } else {
      alert('Please install MetaMask!')
    }
  }

  return (
    <section id="donate">
      <div className="container text-center">
        <h2 className="gradient-text">Support My Work 💙</h2>
        <div className="donate-buttons" style={{ flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <button onClick={donateWithMetaMask} style={{ minWidth: '180px', fontSize: '1rem' }}>
            <i className="fab fa-ethereum"></i> Donate with MetaMask
          </button>
          {/* Outros botões de doação */}
        </div>
      </div>
    </section>
  )
}

export default Donate