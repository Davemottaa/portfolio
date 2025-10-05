import { useState } from 'react'
import { ethers } from 'ethers'
import { DaviTokenABI } from '../DaviTokenABI'

const CONTRACT_ADDRESS = '0xFD5952AC5f085eB93E3F1F723F063e13F34D7758'

const Faucet = () => {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [timeLeft, setTimeLeft] = useState(null)

  const requestTokens = async () => {
    if (!window.ethereum) {
      alert('Instale o MetaMask!')
      return
    }
    setLoading(true)
    setStatus('')
    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(CONTRACT_ADDRESS, DaviTokenABI, signer)

      // Checa tempo restante
      const userAddress = await signer.getAddress()
      const time = await contract.timeUntilNextRequest(userAddress)
      if (time > 0) {
        setTimeLeft(Number(time))
        setStatus('Você já solicitou. Aguarde o tempo acabar.')
        setLoading(false)
        return
      }

      // Solicita tokens
      const tx = await contract.requestTokens()
      setStatus('Transação enviada. Aguarde confirmação...')
      await tx.wait()
      setStatus('Tokens enviados para sua carteira!')
      setTimeLeft(24 * 60 * 60) // 24h em segundos
    } catch (err) {
      setStatus('Erro ao solicitar tokens: ' + (err?.reason || err?.message || err))
    }
    setLoading(false)
  }

  // Exibe tempo restante em formato legível
  const formatTime = (seconds) => {
    if (seconds <= 0) return 'Pronto para solicitar!'
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h}h ${m}m ${s}s`
  }

  return (
    <section id="faucet">
      <div className="container text-center">
        <h2 className="gradient-text">Take your tokens</h2>
        <button
          className="social-link"
          style={{ padding: '0.7rem 1.5rem', marginBottom: '1rem', minWidth: '180px', fontSize: '1rem' }}
          onClick={requestTokens}
          disabled={loading || (timeLeft && timeLeft > 0)}
        >
          {loading ? 'Enviando...' : 'Solicitar Faucet'}
        </button>
        {timeLeft !== null && timeLeft > 0 && (
          <p style={{ color: 'orange', fontSize: '1rem' }}>
            Aguarde: {formatTime(timeLeft)}
          </p>
        )}
        {status && <p style={{ fontSize: '1rem' }}>{status}</p>}
      </div>
    </section>
  )
}

export default Faucet