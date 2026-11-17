
import { ArrowLeft, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function NotFound(){return <div className="route-page notfound"><div className="notfound-illustration"><Compass size={70}/></div><span className="eyebrow">PÁGINA NÃO ENCONTRADA</span><h1>Ops! Você saiu da órbita.</h1><p>O endereço que você tentou acessar não existe. Que tal voltar ao início e explorar de novo?</p><div className="notfound-code">404</div><Link className="btn" to="/"><ArrowLeft size={16}/> Voltar ao início</Link></div>}
