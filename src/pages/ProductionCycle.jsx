import React, { useState } from 'react';
import { PenTool, Calendar, Hammer, Calculator, ArrowRight } from 'lucide-react';

const ProductionCycle = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            id: 1,
            title: 'تصميم المنتج',
            titleEn: 'Product Design',
            icon: <PenTool className="w-6 h-6" />,
            desc: 'تحديد مواصفات المنتج وتكاليفه.',
            details: [
                'تصميم منتج يلبي طلبات العملاء',
                'تحديد المكونات المطلوبة',
                'الموازنة بين الجودة والتكلفة'
            ],
            docs: ['قائمة المواد (Bill of Materials)', 'قائمة العمليات (Operations List)']
        },
        {
            id: 2,
            title: 'التخطيط والجدولة',
            titleEn: 'Planning and Scheduling',
            icon: <Calendar className="w-6 h-6" />,
            desc: 'وضع جدول زمني للإنتاج.',
            details: [
                'تطوير خطة الإنتاج (Master Production Schedule)',
                'تحديد توقيت الإنتاج',
                'ضمان توفر المواد الخام'
            ],
            docs: ['أمر الإنتاج (Production Order)', 'طلب نقل المواد', 'أمر التشغيل']
        },
        {
            id: 3,
            title: 'عمليات التصنيع',
            titleEn: 'Production Operations',
            icon: <Hammer className="w-6 h-6" />,
            desc: 'التنفيذ الفعلي وتحويل المواد.',
            details: [
                'تحويل المواد الخام إلى منتجات تامة الصنع',
                'استخدام الآلات والعمالة',
                'يمكن استخدام التصنيع بمساعدة الحاسوب (CIM)'
            ],
            docs: ['تذكرة التنقل (Move Ticket)', 'بطاقة الوقت (Time Card)']
        },
        {
            id: 4,
            title: 'محاسبة التكاليف',
            titleEn: 'Cost Accounting',
            icon: <Calculator className="w-6 h-6" />,
            desc: 'حساب تكاليف الإنتاج وتقييم الأداء.',
            details: [
                'جمع وتلخيص بيانات التكاليف',
                'حساب تكلفة الإنتاج الفعلي',
                'مقارنة التكاليف الفعلية بالمعيارية',
                'توفير معلومات للإدارة للتخطيط والرقابة'
            ],
            docs: ['تقرير التكاليف', 'سجلات المخزون']
        }
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-l from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">دورة الإنتاج (Production Cycle)</h2>
                <p className="text-blue-800 leading-relaxed">
                    مجموعة متكررة من الأنشطة المرتبطة بتحويل المواد الخام والعمالة إلى سلع تامة الصنع.
                </p>
                <div className="mt-4 bg-white/60 p-3 rounded-lg border border-blue-200 inline-block">
                    <strong className="text-blue-900">الهدف الأساسي:</strong>
                    <span className="text-blue-800"> التخطيط لعمليات الإنتاج والتأكد من كفاءة التصنيع وتدنية التكاليف.</span>
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
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 border-blue-600'
                                    : 'bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 border-slate-100'}
              `}
                        >
                            <div className={`p-2 rounded-lg ${activeStep === index ? 'bg-white/20' : 'bg-blue-100 text-blue-600'}`}>
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
                            <div className="p-3 bg-blue-100 text-blue-700 rounded-xl">
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
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                                <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
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

export default ProductionCycle;
