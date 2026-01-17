import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, DollarSign, ShoppingCart, Factory, AlertTriangle, FileText, Home } from 'lucide-react';

import QLogo from './QLogo';

const Sidebar = ({ isOpen, onClose }) => {
    const links = [
        { to: '/', label: 'الرئيسية', icon: Home },
        { to: '/midterm', label: 'مادة الميد (ف 1-3)', icon: BookOpen },
        { to: '/revenue', label: 'دورة الإيرادات', icon: DollarSign },
        { to: '/expenditure', label: 'دورة النفقات', icon: ShoppingCart },
        { to: '/production', label: 'دورة الإنتاج', icon: Factory },
        { to: '/critical', label: 'العناصر الحرجة', icon: AlertTriangle },
        { to: '/quiz', label: 'بنك الأسئلة', icon: FileText },
    ];

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Container */}
            <aside className={`
        fixed top-0 right-0 h-full w-64 bg-slate-900 text-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        md:translate-x-0 md:static md:h-screen
      `}>
                <div className="p-6 border-b border-slate-700 flex flex-col items-center justify-center gap-3">
                    <QLogo className="w-16 h-16 text-secondary-500" />
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-secondary-500">Q Project</h2>
                        <p className="text-xs text-slate-400">AIS System</p>
                    </div>
                </div>

                <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-80px)]">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            onClick={() => window.innerWidth < 768 && onClose()}
                            className={({ isActive }) => `
                flex items-center gap-3 p-3 rounded-lg transition-colors
                ${isActive
                                    ? 'bg-secondary-600 text-white shadow-md'
                                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'}
              `}
                        >
                            <link.icon size={20} />
                            <span className="font-medium">{link.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
