import { Navbar } from "./_components/navbar"
import { Footer } from "./_components/footer"

const MarketinLayout = (
    {children}: {children: React.ReactNode}
) => {
  return (
    <div className="h-full bg-slate-100">
        {/* Header */}
        <Navbar/>
        <main className="pt-40 pb-20 bg-slate-100">
            {children}
        </main>
        <Footer/>
        {/* Footer */}
    </div>
  )
}

export default MarketinLayout