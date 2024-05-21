import { Header } from './header'
import { Footer } from '@/shared/ui/footer'
import { CasesBoard } from '@/widgets/cases'

import './cases-page.scss'

export const CasesPage = () => {
  return (
    <div className="cases-page">
      <div className="cases-page__rect" />
      <Header />
      <CasesBoard className="cases-page__board" />
      <Footer />
    </div>
  )
}
