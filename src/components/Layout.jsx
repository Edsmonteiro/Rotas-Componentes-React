
import { Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Compass, Home, BookOpen, Mail, Users, Zap, ArrowUpRight, CircleHelp } from 'lucide-react';
const menu = [{to:'/',label:'Início',icon:Home,end:true},{to:'/about',label:'Sobre',icon:BookOpen},{to:'/contact',label:'Contato',icon:Mail}];
export default function Layout() {
  return <div className="site-shell">
    <header className="topbar"><div className="container topbar-inner">
      <Link className="brand" to="/"><span className="logo"><Compass size={22}/></span>orbit<span className="brand-dot">.</span></Link>
      <nav className="navlinks">{menu.map(item=><NavLink end={item.end} key={item.to} to={item.to} className={({isActive})=>isActive?'top-active':''}>{item.label}</NavLink>)}</nav>
      <Link className="user-chip header-profile" to="/user/1">Ver meu perfil <span className="avatar">AL</span></Link>
    </div></header>
    <div className="container site-body">
      <aside className="sidebar">
        <span className="small-label">NAVEGAÇÃO</span>
        <nav>{menu.map(item=><NavLink end={item.end} to={item.to} key={item.to} className={({isActive})=>'side-link'+(isActive?' active':'')}><item.icon size={17}/>{item.label}</NavLink>)}</nav>
        <div className="divider"/>
        <span className="small-label">EXPLORE</span>
        <nav><NavLink className="side-link" to="/user/1"><Users size={17}/> Perfil da Ana</NavLink><NavLink className="side-link" to="/user/2"><Users size={17}/> Perfil do Bruno</NavLink></nav>
        <div className="sidebar-card"><span className="sidebar-card-icon"><Zap size={19}/></span><b>Rotas inteligentes</b><p>Conheça o lazy loading e explore o site sem recarregar a página.</p><Link to="/about">Saiba mais <ArrowUpRight size={14}/></Link></div>
      </aside>
      <main className="main-area"><Suspense fallback={<div className="panel route-loading" role="status">Carregando página...</div>}><Outlet/></Suspense></main>
    </div>
    <footer className="footer"><div className="container"><span>© 2026 Orbit. Descubra novas possibilidades.</span><span>Atividade 04 · React Router <CircleHelp size={13}/></span></div></footer>
  </div>;
}
