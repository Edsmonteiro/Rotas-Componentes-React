
import { ArrowRight, ArrowUpRight, Blocks, Globe2, Users, MousePointerClick, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Home(){return <div className="route-page">
  <div className="hero"><span className="hero-eyebrow"><Sparkles size={14}/> SEU UNIVERSO DIGITAL</span><h1>Explore. Conecte.<br/><span>Descubra possibilidades.</span></h1><p>Navegue por novas ideias em uma experiência fluida, simples e construída inteiramente com React Router.</p>
  <div className="hero-buttons"><Link className="btn" to="/about">Conhecer o projeto <ArrowRight size={16}/></Link><Link className="text-link" to="/contact">Entrar em contato <ArrowUpRight size={15}/></Link></div><div className="hero-shape" aria-hidden="true">✦</div></div>
  <div className="section-heading"><div className="eyebrow">O QUE VOCÊ ENCONTRA AQUI</div><h2>Navegue por cada descoberta</h2><p className="muted">Conheça os recursos implementados nesta atividade.</p></div>
  <div className="link-cards">
    <Link className="panel link-card" to="/about"><span className="tile-icon lilac"><Blocks size={23}/></span><h3>Sobre o projeto</h3><p>Componentes, organização e carregamento sob demanda.</p><b>Explorar <ArrowRight size={15}/></b></Link>
    <Link className="panel link-card" to="/user/1"><span className="tile-icon aqua"><Users size={23}/></span><h3>Perfis dinâmicos</h3><p>Parâmetros de URL apresentam conteúdos diferentes.</p><b>Ver um perfil <ArrowRight size={15}/></b></Link>
    <Link className="panel link-card" to="/contact"><span className="tile-icon peach"><MousePointerClick size={23}/></span><h3>Entre em contato</h3><p>Uma nova página com o mesmo cabeçalho e rodapé.</p><b>Abrir página <ArrowRight size={15}/></b></Link>
  </div>
  <div className="panel bottom-tip"><Globe2 size={25}/><div><b>Uma aplicação, várias páginas.</b><p>Os links internos mantêm a navegação rápida, sem recarregar o navegador.</p></div><Link to="/user/2">Testar outra rota <ArrowRight size={15}/></Link></div>
</div>}
