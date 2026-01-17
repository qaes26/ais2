import React from 'react';
import { Share2 } from 'lucide-react';

const LedgerFigure = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 overflow-hidden">
            <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-indigo-900">تفاعل الدورات مع الأستاذ العام (الشكل 4.2 - ص 57)</h3>
            </div>

            <div className="p-6">
                <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-8 text-center bg-white mb-6 relative group">
                    <img
                        src="/src/assets/images/general_ledger_cycles.png"
                        alt="Interaction of Cycles with General Ledger"
                        className="w-full max-h-[600px] object-contain mx-auto rounded-lg"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/800x500/f1f5f9/475569?text=Please+Add+Image:+general_ledger_cycles.png+(Page+57)";
                        }}
                    />
                    <p className="text-sm text-slate-400 mt-4 font-mono">
                        * يرجى حفظ صورة الصفحة 57 باسم <code>general_ledger_cycles.png</code> في مجلد <code>src/assets/images</code>
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-slate-800">شرح تدفق البيانات (كما في الشكل):</h4>
                    <p className="text-slate-600 leading-relaxed">
                        يوضح الشكل كيفية ارتباط جميع الدورات الفرعية بنظام <strong>الأستاذ العام وتقارير المعلومات (General Ledger & Reporting System)</strong>:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-indigo-50/50 p-4 rounded-lg border border-indigo-100">
                            <strong className="text-indigo-800 block mb-2">1. دورة التمويل (Financing Cycle):</strong>
                            <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                                <li>ترسل الأموال (Funds) لدورة النفقات ودورة الرواتب.</li>
                                <li>تستلم الأموال من دورة الإيرادات.</li>
                                <li>ترسل بيانات للأستاذ العام.</li>
                            </ul>
                        </div>

                        <div className="bg-green-50/50 p-4 rounded-lg border border-green-100">
                            <strong className="text-green-800 block mb-2">2. دورة الموارد البشرية (HR/Payroll):</strong>
                            <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                                <li>تستلم الأموال من دورة التمويل.</li>
                                <li>ترسل العمالة (Labor) لدورة الإنتاج.</li>
                                <li>ترسل بيانات للأستاذ العام.</li>
                            </ul>
                        </div>

                        <div className="bg-red-50/50 p-4 rounded-lg border border-red-100">
                            <strong className="text-red-800 block mb-2">3. دورة النفقات (Expenditure Cycle):</strong>
                            <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                                <li>تستلم الأموال من دورة التمويل.</li>
                                <li>ترسل المواد الخام (Raw Materials) للإنتاج.</li>
                                <li>ترسل بيانات للأستاذ العام.</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                            <strong className="text-blue-800 block mb-2">4. دورة الإنتاج (Production Cycle):</strong>
                            <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                                <li>تستلم المواد الخام من النفقات والعمالة من الموارد البشرية.</li>
                                <li>ترسل بضاعة تامة الصنع لدورة الإيرادات.</li>
                                <li>ترسل بيانات للأستاذ العام.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LedgerFigure;
