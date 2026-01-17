import React from 'react';
import { ArrowRightLeft } from 'lucide-react';

const CyclesTableFigure = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden transform transition-all hover:shadow-md">
            <div className="bg-orange-50 p-4 border-b border-orange-100 flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 text-orange-600" />
                <h3 className="font-bold text-orange-900">عمليات التبادل الرئيسية في دورات الأعمال (الجدول 4.2)</h3>
            </div>

            <div className="p-6">
                {/* Image Container */}
                <div className="bg-white rounded-xl border border-slate-100 p-2 mb-4 shadow-sm">
                    <img
                        src="/src/assets/images/table_4_2_cycles.png"
                        alt="Cycles Give/Get Table 4.2"
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                <div className="bg-orange-50/50 rounded-lg p-4 text-sm text-orange-800 leading-relaxed">
                    <p>
                        يُلخص هذا الجدول طبيعة التبادل (الأخذ والعطاء) في كل دورة:
                    </p>
                    <ul className="mt-2 space-y-1 font-medium">
                        <li>• <strong>الإيرادات:</strong> إعطاء بضاعة/خدمة ⇆ استلام نقدية</li>
                        <li>• <strong>النفقات:</strong> إعطاء نقدية ⇆ استلام بضاعة/خدمة</li>
                        <li>• <strong>الإنتاج:</strong> إعطاء مواد وعمل ⇆ استلام بضاعة تامة الصنع</li>
                        <li>• <strong>الموارد البشرية:</strong> إعطاء نقدية ⇆ استلام عمل</li>
                        <li>• <strong>التمويل:</strong> إعطاء نقدية ⇆ استلام نقدية (تمويل)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CyclesTableFigure;
