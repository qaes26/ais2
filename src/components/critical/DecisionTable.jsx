import React from 'react';

const DecisionTable = () => {
    const tableData = [
        {
            activity: 'الحصول على رأس المال (Financing)',
            decisions: [
                'كم المبلغ المطلوب؟',
                'إيجاد مستثمرين أو الاقتراض؟',
                'ما هي شروط القرض المناسبة؟'
            ],
            info: [
                'توقعات التدفقات النقدية (Cash flow projections)',
                'القوائم المالية التقديرية (Pro forma financial statements)',
                'جدول استهلاك القرض (Loan amortization schedule)'
            ]
        },
        {
            activity: 'الحصول على المباني والمعدات (Expenditure)',
            decisions: [
                'الحجم والموقع المناسب؟',
                'كمية المعدات المطلوبة؟',
                'الشراء أم الاستئجار؟',
                'طريقة الإهلاك المناسبة؟'
            ],
            info: [
                'السعة المطلوبة واللوائح الضريبية',
                'أسعار المعدات',
                'دراسة السوق',
                'جداول الإهلاك'
            ]
        },
        {
            activity: 'تعيين وتدريب الموظفين (HR/Payroll)',
            decisions: [
                'الخبرة المطلوبة؟',
                'نزاهة وكفاءة المتقدمين؟',
                'طريقة التدريب؟'
            ],
            info: [
                'الوصف الوظيفي (Job description)',
                'سجل المتقدم ومهاراته',
                'خطة التدريب'
            ]
        },
        {
            activity: 'الحصول على المخزون (Expenditure)',
            decisions: [
                'أي موديلات يجب شراؤها وكم الكمية؟',
                'أي الموردين أفضل جودة وسعراً؟'
            ],
            info: [
                'تحليل السوق وتقارير حالة المخزون',
                'تقارير أداء الموردين'
            ]
        },
        {
            activity: 'الإعلان والتسويق (Revenue)',
            decisions: [
                'ما هي الوسيلة الإعلانية والمحتوى؟'
            ],
            info: [
                'تحليل التكاليف وتغطية السوق'
            ]
        },
        {
            activity: 'بيع البضائع (Revenue)',
            decisions: [
                'هامش الربح / حدود الائتمان؟'
            ],
            info: [
                'قائمة الدخل التقديرية (Pro forma income statement)',
                'حالة حساب العميل'
            ]
        },
        {
            activity: 'تحصيل المدفوعات (Revenue)',
            decisions: [
                'شروط الائتمان؟',
                'كيفية التعامل مع المقبوضات النقدية؟'
            ],
            info: [
                'حالة حساب العميل',
                'تقرير أعمار الديون (AR aging report)'
            ]
        },
        {
            activity: 'أجور الموظفين (HR/Payroll)',
            decisions: [
                'الأجر المستحق والخصومات؟'
            ],
            info: [
                'المبيعات (للعمولات) / الوقت الفعلي للعمل'
            ]
        },
        {
            activity: 'دفع الضرائب (General Ledger)',
            decisions: [
                'متطلبات تقديم الإقرارات الضريبية؟'
            ],
            info: [
                'اللوائح الحكومية / إجمالي الرواتب والمبيعات'
            ]
        },
        {
            activity: 'الدفع للموردين (Expenditure)',
            decisions: [
                'لمن ندفع؟ ومتى؟ وكم؟'
            ],
            info: [
                'فواتير الموردين / سجلات الذمم الدائنة (Accounts payable records)'
            ]
        }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                <h3 className="font-bold text-slate-800">الربط بين القرارات والمعلومات (الجدول 4.1 - ص 53)</h3>
                <span className="text-xs text-slate-500 bg-white px-2 py-1 rounded border">مكتمل ✅</span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-right text-sm">
                    <thead className="bg-slate-100/50 text-slate-700 font-bold border-b">
                        <tr>
                            <th className="p-4 w-1/4">النشاط التجاري</th>
                            <th className="p-4 w-1/3">القرارات الرئيسية</th>
                            <th className="p-4 w-1/3">المعلومات اللازمة</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {tableData.map((row, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                <td className="p-4 font-bold text-slate-800 align-top bg-slate-50/30">
                                    {row.activity}
                                </td>
                                <td className="p-4 text-slate-600 align-top">
                                    <ul className="list-disc list-inside space-y-1">
                                        {row.decisions.map((d, i) => <li key={i}>{d}</li>)}
                                    </ul>
                                </td>
                                <td className="p-4 text-slate-600 align-top">
                                    <ul className="list-disc list-inside space-y-1 text-slate-500">
                                        {row.info.map((info, i) => <li key={i}>{info}</li>)}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DecisionTable;
