import React from 'react';
import { Network } from 'lucide-react';

const AISContextFigure = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden transform transition-all hover:shadow-md">
            <div className="bg-emerald-50 p-4 border-b border-emerald-100 flex items-center gap-2">
                <Network className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-emerald-900">نظام المعلومات المحاسبي وعلاقته بالأطراف الخارجية (الشكل 4.1)</h3>
            </div>

            <div className="p-6">
                {/* Image Container */}
                <div className="bg-white rounded-xl border border-slate-100 p-2 mb-4 shadow-sm">
                    <img
                        src="/src/assets/images/figure_4_1_ais.png"
                        alt="AIS Context Diagram Figure 4.1"
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                <div className="bg-emerald-50/50 rounded-lg p-4 text-sm text-emerald-800 leading-relaxed">
                    <p>
                        يوضح هذا الشكل كيف يتفاعل نظام المعلومات المحاسبي (AIS) في الوسط مع الأطراف الخارجية والداخلية:
                    </p>
                    <ul className="grid grid-cols-2 gap-2 mt-2 list-disc list-inside font-medium">
                        <li>الموردين (Vendors)</li>
                        <li>العملاء (Customers)</li>
                        <li>المستثمرين (Investors)</li>
                        <li>الموظفين (Employees)</li>
                        <li>البنوك (Banks)</li>
                        <li>الإدارة (Management)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AISContextFigure;
