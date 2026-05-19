/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ShieldCheck, 
  Wrench, 
  Clock, 
  Award, 
  ArrowRight, 
  Phone, 
  Instagram, 
  MapPin, 
  MessageCircle,
  ChevronRight,
  Maximize2,
  Moon,
  Sun
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import heroImage from './assets/images/hero_gate_1779027330674.png';
import aboutImage from './assets/images/welder_work_1779027345082.png';
import project1Image from './assets/images/industrial_stairs_1779027359969.png';
import project2Image from './assets/images/commercial_gate_1779027373890.png';
import project3Image from './assets/images/metal_door_1779027393301.png';
import project4Image from './assets/images/metal_structure_1779027408471.png';

// Assets (Using the generated images)
const IMAGES = {
  hero: heroImage,
  logo: 'https://i.ibb.co/KHC9s8W/LOGO-site-01.png',
  about: aboutImage,
  projects: [
    { id: 1, src: project1Image, title: 'Escada Industrial' },
    { id: 2, src: project2Image, title: 'Portão Comercial' },
    { id: 3, src: project3Image, title: 'Porta Pivotante' },
    { id: 4, src: project4Image, title: 'Estrutura Metálica' },
  ]
};

// WhatsApp Official Icon Component
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <div className="relative min-h-screen text-[var(--text-main)] selection:bg-brand-orange selection:text-white">
      
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md py-3 border-b border-black/5 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#inicio" className="flex items-center z-50">
            <img 
              src={IMAGES.logo} 
              alt="Arteferro Industrial Logo" 
              className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-105 ${
                !scrolled && !isMenuOpen ? 'brightness-0 invert' : ''
              }`}
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-[11px] font-condensed uppercase tracking-[0.2em] font-bold transition-colors ${
                  scrolled ? 'text-slate-800' : 'text-white'
                } hover:text-brand-orange`}
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="https://wa.me/5500000000000" 
              className="bg-brand-orange text-white px-4 py-2 rounded-sm font-condensed uppercase tracking-wider text-[11px] hover:bg-brand-orange-dark transition-all hover:scale-105 flex items-center gap-1.5 shadow-lg shadow-brand-orange/20 ml-4"
            >
              <WhatsAppIcon size={14} />
              Solicitar Orçamento
            </a>
          </nav>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-4 lg:hidden z-50">
            <button 
              className={`p-2 transition-colors ${isMenuOpen || scrolled ? 'text-slate-900' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm z-40 bg-white lg:hidden flex flex-col p-10 pt-32 gap-6 shadow-2xl border-l border-black/5"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-display uppercase tracking-widest text-slate-900 font-bold hover:text-brand-orange transition-colors border-b border-black/5 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-auto">
                <a 
                  href="https://wa.me/5500000000000" 
                  className="bg-brand-orange text-white w-full py-4 rounded-sm font-condensed uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-brand-orange/20"
                >
                  <WhatsAppIcon size={20} />
                  Solicitar Orçamento
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main>
        {/* Section: Hero */}
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-[70px] bg-slate-950">
          {/* Hero Image - More visible and sharp */}
          <div className="absolute inset-0">
            <img 
              src={IMAGES.hero} 
              alt="Industrial Gate Background" 
              className="w-full h-full object-cover opacity-85 contrast-[1.1] brightness-[0.85]"
              referrerPolicy="no-referrer"
            />
            {/* Subtle dark gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
          </div>

          <div className="container mx-auto px-6 relative z-10 pt-10 pb-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-brand-orange shadow-[0_0_15px_rgba(206,68,39,0.5)]" />
                <span className="uppercase tracking-[0.4em] text-brand-orange font-condensed text-sm font-bold">Excelência em Serralharia</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[0.9] tracking-tight uppercase text-white drop-shadow-2xl">
                Força,<br />
                Design e<br />
                <span className="text-brand-orange">durabilidade.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-xl font-medium drop-shadow-md">
                Soluções completas em portões, grades, portas e estruturas metálicas com qualidade industrial, segurança e acabamento profissional premium.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 md:mb-32">
                <a href="https://wa.me/5500000000000" className="btn-primary w-full sm:w-auto font-black shadow-xl shadow-brand-orange/30">
                  <WhatsAppIcon size={20} />
                  Solicitar Orçamento
                </a>
                <a href="#servicos" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-sm font-condensed uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all font-black flex items-center justify-center gap-2 w-full sm:w-auto">
                  Conhecer Serviços
                  <ArrowRight size={20} />
                </a>
                
                {/* Scroll Indicator */}
                <div className="hidden md:flex items-center gap-4 ml-4 animate-bounce">
                  <div className="w-10 h-[2px] bg-brand-orange" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-bold whitespace-nowrap">Rolar</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section: Diferenciais */}
        <section id="diferenciais" className="relative z-20 -mt-20 px-6">
          <div className="container mx-auto">
            <div className="bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-color)] grid grid-cols-1 lg:grid-cols-3 overflow-hidden shadow-2xl">
              {[
                { title: 'Qualidade Garantida', desc: 'Rigor industrial em cada solda e acabamento.', icon: ShieldCheck },
                { title: 'Projetos Exclusivos', desc: 'Design sob medida para sua necessidade.', icon: Wrench },
                { title: 'Experiência & Confiança', desc: 'Anos de história no mercado metalúrgico.', icon: Award },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-10 flex flex-col gap-6 ${
                    i !== 2 ? 'lg:border-r border-[var(--border-color)]' : ''
                  } ${
                    i !== 2 ? 'border-b lg:border-b-0 border-[var(--border-color)]' : ''
                  } group hover:bg-brand-orange/5 transition-colors`}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 border-2 border-brand-orange rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="text-brand-orange w-8 h-8" />
                    </div>
                    <h3 className="font-display text-xl uppercase tracking-tight font-bold leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-dim)] leading-relaxed lg:mt-0">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Serviços */}
        <section id="servicos" className="py-32 px-6 bg-slate-900 text-white relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-brand-orange uppercase tracking-[0.3em] font-condensed text-sm block mb-4">O que fazemos</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
                  Soluções completas <br />em <span className="text-brand-orange">serralheria.</span>
                </h2>
              </div>
              <p className="text-slate-400 max-w-sm mb-2">Oferecemos o que há de mais moderno em metalurgia industrial e residencial, unindo funcionalidade a um design impactante.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Portões de Alta Performance', desc: 'Basculantes, deslizantes e pivotantes automatizados com tecnologia silenciosa.', icon: Maximize2 },
                { title: 'Grades e Gradis', desc: 'Proteção perimetral que valoriza a fachada com designs modernos e resistentes.', icon: ShieldCheck },
                { title: 'Portas de Aço & Pivotantes', desc: 'Segurança reforçada para comércios e residências com acabamento impecável.', icon: ArrowRight },
                { title: 'Estruturas Metálicas', desc: 'Projetos estruturais para galpões, mezaninos e reforços sob medida.', icon: Wrench },
                { title: 'Corrimãos e Escadas', desc: 'Peças de design em ferro que garantem segurança e sofisticação ao ambiente.', icon: ArrowRight },
                { title: 'Coberturas Metálicas', desc: 'Soluções em telhados térmicos e coberturas para garagens e áreas de lazer.', icon: ShieldCheck },
              ].map((service, i) => (
                <div key={i} className="bg-slate-800/40 backdrop-blur-sm p-10 group cursor-default shadow-xl border border-white/5 hover:border-brand-orange/50 transition-all duration-300">
                  <div className="mb-8 p-4 bg-slate-800 w-fit group-hover:bg-brand-orange/20 transition-colors">
                    <service.icon className="text-brand-orange w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display uppercase tracking-tight mb-4 group-hover:text-brand-orange transition-colors font-bold">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Sobre */}
        <section id="sobre" className="py-24 bg-[var(--bg-alt)] overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <img 
                    src={IMAGES.about} 
                    alt="Welder at work" 
                    className="w-full aspect-[4/3] object-cover rounded-sm grayscale-[0.3] hover:grayscale-0 transition-all duration-700 shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange flex flex-col items-center justify-center p-4 text-center shadow-lg">
                    <span className="text-3xl text-white font-black leading-none block">15+</span>
                    <span className="text-[10px] text-white uppercase font-bold tracking-widest mt-1">Anos de Experiência</span>
                  </div>
                </motion.div>
                <div className="absolute top-10 left-10 w-full h-full border border-brand-orange/20 -z-0" />
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <span className="text-brand-orange uppercase tracking-[0.3em] font-condensed text-sm block mb-4">Sobre a Arteferro</span>
                  <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
                    Tradição metalúrgica <br />com visão <span className="text-brand-orange">inovadora.</span>
                  </h2>
                  <p className="text-lg text-[var(--text-dim)] leading-relaxed">
                    A Arteferro Industrial nasceu da paixão pelo metal e pelo design. Desenvolvemos soluções metálicas sob medida para residências, comércios e indústrias, sempre focados em três pilares: resistência máxima, acabamento primoroso e compromisso inegociável com os prazos.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-2xl font-display font-bold block mb-2">500+</span>
                    <span className="text-sm text-[var(--text-dim)] uppercase tracking-widest">Projetos Entregues</span>
                  </div>
                  <div>
                    <span className="text-2xl font-display font-bold block mb-2">100%</span>
                    <span className="text-sm text-[var(--text-dim)] uppercase tracking-widest">Satisfação</span>
                  </div>
                </div>

                <a href="#contato" className="btn-outline w-fit font-bold border-[var(--border-color)]">
                  Nossa História
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Projetos */}
        <section id="projetos" className="py-32 px-6 bg-slate-950 text-white">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <span className="text-brand-orange uppercase tracking-[0.3em] font-condensed text-sm block mb-4">Portfólio</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase">Trabalhos de <span className="text-brand-orange">Destaque.</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {IMAGES.projects.map((project, i) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative h-[500px] overflow-hidden cursor-pointer rounded-sm border border-white/5"
                >
                  <img 
                    src={project.src} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.4] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute bottom-10 left-10 right-10">
                    <span className="text-brand-orange font-condensed text-xs uppercase tracking-widest block mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all font-bold">Serralheria Premium</span>
                    <h3 className="text-2xl font-display uppercase font-bold group-hover:text-brand-orange transition-colors">{project.title}</h3>
                  </div>

                  <div className="absolute top-6 right-6 w-12 h-12 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/50 backdrop-blur-sm">
                    <ChevronRight className="text-brand-orange" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a href="https://wa.me/5500000000000" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-sm font-condensed uppercase tracking-wider hover:border-brand-orange hover:text-brand-orange transition-all font-bold inline-flex items-center gap-2">
                Ver Todos os Projetos
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Section: CTA Orçamento */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-orange" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          
          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center text-white">
            <h2 className="text-4xl md:text-7xl font-black uppercase mb-8 leading-[0.8] max-w-4xl">
              Precisa de um projeto metálico <span className="text-black/80">sob medida?</span>
            </h2>
            <p className="text-lg md:text-xl font-medium mb-12 max-w-2xl text-white/90">
              Fale com a Arteferro Industrial hoje mesmo e receba um orçamento personalizado para transformar seu projeto em realidade.
            </p>
            <a 
              href="https://wa.me/5500000000000" 
              className="bg-zinc-950 text-white px-12 py-5 rounded-sm font-display font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3 shadow-2xl"
            >
              <WhatsAppIcon size={24} />
              Chamar no WhatsApp
            </a>
          </div>
        </section>

        {/* Section: Contato */}
        <section id="contato" className="py-32 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <span className="text-brand-orange uppercase tracking-[0.3em] font-condensed text-sm block mb-4">Contato</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">Vamos iniciar <br />seu <span className="text-brand-orange">projeto?</span></h2>
                
                <div className="flex flex-col gap-8 mt-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center rounded-sm text-brand-orange">
                      <Phone size={24} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[var(--text-dim)] block mb-1">Telefone / WhatsApp</span>
                      <p className="text-xl font-display font-bold">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center rounded-sm text-brand-orange">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[var(--text-dim)] block mb-1">Instagram</span>
                      <p className="text-xl font-display font-bold">@arteferroindustrial</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center rounded-sm text-brand-orange">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[var(--text-dim)] block mb-1">Endereço</span>
                      <p className="text-xl font-display font-bold leading-tight">Distrito Industrial, Galpão 04 <br />São Paulo - SP</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--bg-card)] p-10 rounded-sm border border-[var(--border-color)] shadow-2xl relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 flex items-center justify-center">
                  <Wrench className="text-brand-orange/40 w-12 h-12 opacity-20" />
                </div>
                
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-main)]/60">Seu Nome</label>
                      <input 
                        type="text" 
                        placeholder="Ex: João Silva"
                        className="bg-[var(--bg-alt)] border border-[var(--border-color)] p-4 rounded-sm focus:border-brand-orange outline-none transition-colors text-[var(--text-main)] placeholder:text-[var(--text-dim)]/50"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-main)]/60">WhatsApp</label>
                      <input 
                        type="tel" 
                        placeholder="(00) 00000-0000"
                        className="bg-[var(--bg-alt)] border border-[var(--border-color)] p-4 rounded-sm focus:border-brand-orange outline-none transition-colors text-[var(--text-main)] placeholder:text-[var(--text-dim)]/50"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-main)]/60">Serviço de Interesse</label>
                    <div className="relative">
                      <select className="w-full bg-[var(--bg-alt)] border border-[var(--border-color)] p-4 rounded-sm focus:border-brand-orange outline-none transition-colors appearance-none text-[var(--text-main)]">
                        <option>Portão Automático</option>
                        <option>Grades e Gradis</option>
                        <option>Estrutura Metálica</option>
                        <option>Escada / Corrimão</option>
                        <option>Outros Projetos</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-orange">
                        <ChevronRight className="rotate-90" size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-main)]/60">Mensagem (opcional)</label>
                    <textarea 
                      rows={4}
                      placeholder="Conte um pouco sobre o que você deseja..."
                      className="bg-[var(--bg-alt)] border border-[var(--border-color)] p-4 rounded-sm focus:border-brand-orange outline-none transition-colors resize-none text-[var(--text-main)] placeholder:text-[var(--text-dim)]/50"
                    />
                  </div>

                  <button className="btn-primary w-full text-lg mt-4 shadow-xl shadow-brand-orange/10">
                    Enviar Solicitação
                    <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-24 px-6 border-t border-white/5 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-center md:text-left">
            <div className="flex flex-col gap-6 items-center md:items-start">
              <a href="#inicio" className="flex items-center">
                <img 
                  src={IMAGES.logo} 
                  alt="Arteferro Industrial Logo" 
                  className="h-12 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </a>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Referência em serralheria moderna e estruturas metálicas. Transformamos metal em obras de design e segurança para quem não abre mão da excelência.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm hover:bg-brand-orange hover:text-white transition-all text-white/70">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm hover:bg-brand-orange hover:text-white transition-all text-white/70">
                  <Phone size={20} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-display uppercase tracking-widest text-sm mb-6 text-brand-orange font-bold">Links Rápidos</h4>
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-display uppercase tracking-widest text-sm mb-6 text-brand-orange font-bold">Serviços</h4>
              <ul className="flex flex-col gap-4 text-sm text-slate-400 font-medium">
                <li className="hover:text-white transition-colors cursor-pointer">Portões Automáticos</li>
                <li className="hover:text-white transition-colors cursor-pointer">Grades Modernas</li>
                <li className="hover:text-white transition-colors cursor-pointer">Estruturas em Aço</li>
                <li className="hover:text-white transition-colors cursor-pointer">Escadas de Design</li>
                <li className="hover:text-white transition-colors cursor-pointer">Serralheria Artística</li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-display uppercase tracking-widest text-sm mb-6 text-brand-orange font-bold">Atendimento</h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Segunda a Sexta: 08:00 às 18:00 <br />
                Sábado: 08:00 às 13:00
              </p>
              <p className="text-xs text-slate-500 italic max-w-[200px]">
                Atendemos toda Capital, Grande São Paulo e Interior.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-slate-600">
            <p>© 2026 Arteferro Industrial. Todos os direitos reservados.</p>
            <p className="font-bold text-brand-orange/30 group hover:text-brand-orange transition-colors cursor-default">Feito com precisão industrial</p>
          </div>
        </div>
      </footer>

      {/* Persistent WhatsApp FAB */}
      <motion.a 
        href="https://wa.me/5500000000000" 
        className="fixed bottom-10 right-10 z-50 flex items-center bg-[#25D366] text-white rounded-full shadow-2xl overflow-hidden cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ width: 64, height: 64 }}
        whileHover={{ width: 'auto', paddingRight: 24 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div className="min-w-[64px] h-[64px] flex items-center justify-center relative">
          <WhatsAppIcon size={32} className="text-white" />
          <span className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-ping opacity-75" />
        </div>
        <motion.span 
          className="whitespace-nowrap font-bold text-sm pr-4 md:pr-0"
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Envie-nos uma mensagem
        </motion.span>
      </motion.a>
    </div>
  );
}
