import { useState } from 'react'

const Faucet = () => {
  const [status, setStatus] = useState('')
  const [address, setAddress] = useState('')

  // Substitua pelo endereço do seu contrato faucet e ABI
  const FAUCET_ADDRESS = '0xSEU_CONTRATO_FAUCET'
  // const FAUCET_ABI = [ ... ]

  const handleRequest = async (e) => {
    e.preventDefault()
    if (!window.ethereum) {
      setStatus('Instale o MetaMask!')
      return
    }
    if (!address) {
      setStatus('Informe seu endereço de carteira.')
      return
    }
    try {
      setStatus('Solicitando tokens...')
      // Aqui você faria a chamada real ao contrato faucet usando ethers.js ou web3.js
      // Exemplo fictício:
      // const provider = new ethers.providers.Web3Provider(window.ethereum)
      // const signer = provider.getSigner()
      // const faucet = new ethers.Contract(FAUCET_ADDRESS, FAUCET_ABI, signer)
      // await faucet.requestTokens(address)
      setTimeout(() => setStatus('Tokens enviados para sua carteira!'), 1500)
    } catch (err) {
      setStatus('Erro ao solicitar tokens.')
    }
  }

  return (
    <section id="faucet">
      <div className="container text-center">
        <h2 className="gradient-text">Solicite seu Faucet</h2>
        <form onSubmit={handleRequest} style={{ margin: '2rem 0' }}>
          <input
            type="text"
            placeholder="Seu endereço de carteira"
            value={address}
            onChange={e => setAddress(e.target.value)}
            style={{
              padding: '0.7rem 1rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
              marginRight: '1rem',
              width: '320px',
              maxWidth: '90%',
            }}
          />
          <button type="submit" className="social-link" style={{padding: '0.7rem 1.5rem'}}>
            Solicitar Faucet
          </button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </section>
  )
}

export default Faucet