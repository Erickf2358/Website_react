
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from '../components/Navbar';

export default function ConsultingPage() {
  return (
    <>
        <Header />      
        <NavBar />
        
        <main className="contenedor sombra">
            <h1>Consulting Services</h1>
            <p className="page-description">Expert project controls consulting tailored to construction companies and professionals.</p>
            
            <div className="services-grid">
                <div className="service-package">
                    <h3>🎯 Strategy Session</h3>
                    <p className="price">$299<span>/session</span></p>
                    <ul>
                        <li>90-minute video consultation</li>
                        <li>Project controls assessment</li>
                        <li>Process improvement roadmap</li>
                        <li>Tool selection guidance</li>
                        <li>Follow-up summary report</li>
                    </ul>
                    
                </div>
                
                <div className="service-package highlighted">
                    <h3>⚙️ Implementation Support</h3>
                    <p className="price">Custom Pricing</p>
                    <ul>
                        <li>EVM system setup</li>
                        <li>Dashboard development</li>
                        <li>Process automation</li>
                        <li>Team training</li>
                        <li>Ongoing support</li>
                    </ul>
                    
                </div>
                
                <div className="service-package">
                    <h3>📊 Audit & Review</h3>
                    <p className="price">$1,499<span>/project</span></p>
                    <ul>
                        <li>Project controls audit</li>
                        <li>Schedule validation</li>
                        <li>Cost report analysis</li>
                        <li>Compliance check</li>
                        <li>Detailed findings report</li>
                    </ul>
                    
                </div>
            </div>
            
            {/* Contact section */}
            <section id="contacto" className="contacto">
            <h2>Contacto</h2>
            <div className="redes-sociales">
                <a href="https://www.linkedin.com/in/erick-flores-mendoza-11264612a/" target="_blank" rel="noreferrer" className="social-link linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
                </a>
                <a href="https://www.youtube.com/@epm-lean5079" target="_blank" rel="noreferrer" className="social-link youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                YouTube
                </a>
                <a href="mailto:erick.flores.2358@gmail.com" className="social-link email">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                </svg>
                Email
                </a>
            </div>
            </section>
        </main>
        
        <Footer />
        
    </>
  )
}
