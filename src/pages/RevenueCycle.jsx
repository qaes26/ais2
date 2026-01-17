import React, { useState } from 'react';
import { ShoppingCart, Truck, FileText, DollarSign, ArrowRight } from 'lucide-react';

const RevenueCycle = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            id: 1,
            title: 'إدخال أمر المبيعات',
            titleEn: 'Sales Order Entry',
            icon: <ShoppingCart className="w-6 h-6" />,
            desc: 'استلام طلبات العملاء والتحقق من الائتمان وتوفر المخزون.',
            details: [
                'استلام طلب العميل',
                'التحقق من الرصيد الائتماني للعميل (Credit Check)',
                'التحقق من توفر المخزون',
                'الرد على استفسارات العملاء'
            ],
            docs: ['أمر البيع (Sales Order)']
        },
        {
            id: 2,
            title: 'الشحن',
            titleEn: 'Shipping',
            icon: <Truck className="w-6 h-6" />,
            desc: 'تجهيز الطلبية وشحنها للعميل.',
            details: [
                'سحب البضاعة من المخزن (Picking)',
                'تغليف الطلبية (Packing)',
                'شحن الطلبية (Shipping)'
            ],
            docs: ['تذكرة السحب (Picking Ticket)', 'قائمة التعبئة (Packing Slip)', 'بوليصة الشحن (Bill of Lading)']
        },
        {
            id: 3,
            title: 'الفواتير',
            titleEn: 'Billing',
            icon: <FileText className="w-6 h-6" />,
            desc: 'إصدار الفواتير وتحديث حسابات العملاء.',
            details: [
                'إصدار فواتير المبيعات',
                'تحديث حسابات الذمم المدينة (AR)',
                'معالجة مردودات المبيعات والخصومات'
            ],
            docs: ['فاتورة المبيعات (Sales Invoice)', 'الإشعار الدائن (Credit Memo)']
        },
        {
            id: 4,
            title: 'التحصيل النقدية',
            titleEn: 'Cash Collections',
            icon: <DollarSign className="w-6 h-6" />,
            desc: 'استلام المدفوعات وإيداعها في البنك.',
            details: [
                'استلام النقدية / الشيكات',
                'إيداع المبالغ في البنك',
                'تحديث أرصدة العملاء'
            ],
            docs: ['إشعار التحويل (Remittance Advice)', 'قائمة الإيداع']
        }
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-l from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                <h2 className="text-2xl font-bold text-green-900 mb-2">دورة الإيرادات (Revenue Cycle)</h2>
                <p className="text-green-800 leading-relaxed">
                    مجموعة متكررة من الأنشطة التجارية وعمليات معالجة البيانات المرتبطة بتقديم السلع والخدمات للعملاء وتحصيل النقود مقابل تلك المبيعات.
                </p>
                <div className="mt-4 bg-white/60 p-3 rounded-lg border border-green-200 inline-block">
                    <strong className="text-green-900">الهدف الأساسي:</strong>
                    <span className="text-green-800"> تقديم المنتج المناسب في المكان المناسب والوقت المناسب وبالسعر المناسب.</span>
                </div>
            </div>

            {/* Interactive Steps */}
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Steps List */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">الأنشطة الرئيسية للدورة:</h3>
                    {steps.map((step, index) => (
                        <button
                            key={step.id}
                            onClick={() => setActiveStep(index)}
                            className={`w-full text-right p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group
                ${activeStep === index
                                    ? 'bg-green-600 text-white shadow-lg shadow-green-200 border-green-600'
                                    : 'bg-white text-slate-600 hover:border-green-300 hover:bg-green-50 border-slate-100'}
              `}
                        >
                            <div className={`p-2 rounded-lg ${activeStep === index ? 'bg-white/20' : 'bg-green-100 text-green-600'}`}>
                                {step.icon}
                            </div>
                            <div className="flex-1">
                                <span className="text-xs font-medium opacity-80 block mb-0.5">{step.titleEn}</span>
                                <span className="font-bold text-lg">{step.title}</span>
                            </div>
                            <ArrowRight className={`w-5 h-5 transition-transform ${activeStep === index ? 'rotate-180' : 'group-hover:-translate-x-1'}`} />
                        </button>
                    ))}
                </div>

                {/* Details View */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full">
                    <div key={steps[activeStep].id} className="animate-fade-in space-y-6">
                        <div className="flex items-center gap-3 border-b pb-4 mb-4">
                            <div className="p-3 bg-green-100 text-green-700 rounded-xl">
                                {steps[activeStep].icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">{steps[activeStep].title}</h3>
                                <p className="text-slate-500 font-medium">{steps[activeStep].desc}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-50 p-4 rounded-xl">
                                <h4 className="font-bold text-slate-800 mb-2">⚡ الأنشطة التفصيلية:</h4>
                                <ul className="space-y-2">
                                    {steps[activeStep].details.map((detail, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-700">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                                <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    المستندات المستخدمة:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {steps[activeStep].docs.map((doc, i) => (
                                        <span key={i} className="px-3 py-1 bg-white text-amber-800 text-sm font-medium rounded-lg border border-amber-200">
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

export default RevenueCycle;
