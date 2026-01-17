import React, { useState } from 'react';
import { ShoppingBag, Truck, FileCheck, Wallet, ArrowRight, ArrowDown } from 'lucide-react';

const ExpenditureCycle = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            id: 1,
            title: '1. طلب المواد',
            titleEn: 'Ordering',
            icon: <ShoppingBag className="w-6 h-6" />,
            desc: 'تحديد الاحتياجات واختيار المورد المناسب.',
            details: [
                'تحديد ما يجب شراؤه (الكمية والنوعية)',
                'اختيار الموردين (السعر، الجودة، التسليم)',
                'إصدار أمر الشراء (Purchase Order)'
            ],
            docs: ['طلب الشراء (Purchase Requisition)', 'أمر الشراء (Purchase Order)']
        },
        {
            id: 2,
            title: '2. استلام المواد',
            titleEn: 'Receiving',
            icon: <Truck className="w-6 h-6" />,
            desc: 'استلام البضائع وفحصها.',
            details: [
                'التحقق من الكميات المستلمة مقارنة بأمر الشراء',
                'فحص جودة البضائع',
                'نقل البضائع للمخازن'
            ],
            docs: ['تقرير الاستلام (Receiving Report)', 'إشعار الخصم/الرفض (Debit Memo)']
        },
        {
            id: 3,
            title: '3. الموافقة على الفواتير',
            titleEn: 'Approving Invoices',
            icon: <FileCheck className="w-6 h-6" />,
            desc: 'مطابقة الفواتير (المطابقة الثلاثية).',
            details: [
                'مقارنة الفاتورة مع: 1- أمر الشراء، 2- تقرير الاستلام',
                'التحقق من العمليات الحسابية',
                'تسجيل الالتزام (Accounts Payable)'
            ],
            docs: ['حزمة القسيمة (Voucher Package)', 'فاتورة المورد']
        },
        {
            id: 4,
            title: '4. صرف النقود',
            titleEn: 'Cash Disbursements',
            icon: <Wallet className="w-6 h-6" />,
            desc: 'سداد الالتزامات للموردين.',
            details: [
                'مراجعة القسائم المستحقة للدفع',
                'إعداد الشيكات أو التحويلات البنكية',
                'ختم الفواتير بـ "مدفوع" لتجنب التكرار'
            ],
            docs: ['الشيك (Check)', 'سجل المدفوعات النقدية']
        }
    ];

    return (
        <div className="space-y-10 animate-fade-in pb-10">
            {/* Header */}
            <div className="bg-gradient-to-l from-red-50 to-orange-50 p-6 rounded-2xl border border-red-100">
                <h2 className="text-2xl font-bold text-red-900 mb-2">دورة النفقات (Expenditure Cycle)</h2>
                <p className="text-red-800 leading-relaxed mb-4">
                    هي الأنشطة المرتبطة بشراء السلع أو الخدمات ودفع أثمانها للموردين.
                </p>
                <div className="bg-white/60 p-4 rounded-xl border border-red-200 shadow-sm">
                    <strong className="text-red-900 block mb-1">🎯 الهدف الأساسي:</strong>
                    <span className="text-red-800"> تقليل التكلفة الإجمالية للحصول على المواد والمهمات والخدمات التي تحتاجها المنظمة والمحافظة عليها.</span>
                </div>
            </div>

            {/* 🟢 DIAGRAM & VISUALIZATION (الرسم التوضيحي) */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">مخطط تدفق دورة النفقات</h3>

                <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.id}>
                            {/* Step Circle */}
                            <div
                                onClick={() => setActiveStep(index)}
                                className={`flex flex-col items-center gap-3 cursor-pointer group w-full md:w-auto relative z-10`}
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300
                  ${activeStep === index
                                        ? 'bg-red-600 border-red-200 text-white shadow-lg scale-110'
                                        : 'bg-white border-slate-200 text-slate-400 group-hover:border-red-300 group-hover:text-red-500'}
                `}>
                                    {step.icon}
                                </div>
                                <div className="text-center">
                                    <span className={`block font-bold text-sm ${activeStep === index ? 'text-red-700' : 'text-slate-500'}`}>
                                        {step.title}
                                    </span>
                                </div>
                            </div>

                            {/* Arrow Connector (Horizontal on Desktop, Vertical on Mobile) */}
                            {index < steps.length - 1 && (
                                <div className="flex items-center justify-center text-slate-300">
                                    <ArrowRight className="hidden md:block w-8 h-8" />
                                    <ArrowDown className="block md:hidden w-8 h-8" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}

                    {/* Connector Line Logic (Visual only) */}
                    <div className="absolute top-8 left-0 right-0 h-0.5 bg-slate-100 -z-0 hidden md:block" />
                </div>
            </div>

            {/* Details View */}
            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-3">
                    {steps.map((step, index) => (
                        <button
                            key={step.id}
                            onClick={() => setActiveStep(index)}
                            className={`w-full text-right p-4 rounded-xl border transition-all flex items-center gap-3
                ${activeStep === index
                                    ? 'bg-red-50 border-red-500 text-red-900'
                                    : 'bg-white border-slate-100 text-slate-500 hover:bg-slate-50'}
              `}
                        >
                            <div className="font-bold text-lg opacity-50">0{step.id}</div>
                            <div className="font-bold">{step.title}</div>
                        </button>
                    ))}
                </div>

                <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-md border border-red-100">
                    <div key={steps[activeStep].id} className="animate-fade-in space-y-6">
                        <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                            <div className="p-3 bg-red-100 text-red-600 rounded-xl">
                                {steps[activeStep].icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">{steps[activeStep].title}</h3>
                                <span className="text-slate-400 font-mono text-sm">{steps[activeStep].titleEn}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-50 p-5 rounded-xl">
                                <h4 className="font-bold text-slate-800 mb-3">⚡ تفاصيل النشاط:</h4>
                                <ul className="space-y-2">
                                    {steps[activeStep].details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-700">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                                <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                                    <FileCheck className="w-5 h-5" />
                                    المستندات الهامة:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {steps[activeStep].docs.map((doc, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-white text-amber-800 text-sm font-bold rounded-lg border border-amber-200 shadow-sm">
                                            {doc}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpenditureCycle;
