import Head from 'next/head'
import BoundHRPhase1Dashboard from '../components/BoundHRPhase1Dashboard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bound HR Dashboard</title>
        <meta name="description" content="Bound HR Phase 1 Dashboard" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <BoundHRPhase1Dashboard />
    </div>
  )
}