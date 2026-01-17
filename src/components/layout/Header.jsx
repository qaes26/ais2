import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ onMenuClick }) => {
    return (
        <header className="bg-white shadow-sm border-b border-slate-200 h-16 flex items-center px-4 sticky top-0 z-30">
            <button
                onClick={onMenuClick}
                className="p-2 -mr-2 text-slate-600 hover:bg-slate-100 rounded-lg md:hidden"
            >
                <Menu size={24} />
            </button>

            <div className="mr-4 flex-1">
                <h1 className="text-lg font-bold text-primary-900 hidden sm:block">
                    تطبيق مبادئ نظم المعلومات المحاسبية
                </h1>
                <h1 className="text-lg font-bold text-primary-900 sm:hidden">
                    AIS App
                </h1>
            </div>

            <div className="flex items-center gap-3">
                <div className="text-left hidden xs:block">
                    <p className="text-xs text-slate-500">إعداد الطالب</p>
                    <p className="text-sm font-bold text-primary-700">قيس جازي</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold border-2 border-primary-200">
                    ق
                </div>
            </div>
        </header>
    );
};

export default Header;
