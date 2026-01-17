import React, { useState } from 'react';

const MidtermMaterial = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">مادة الميد (الفصول 1، 2، 3)</h2>

            {/* Tabs */}
            <div className="flex rounded-lg bg-slate-200 p-1 overflow-x-auto">
                {[1, 2, 3].map((num) => (
                    <button
                        key={num}
                        onClick={() => setActiveTab(num)}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors whitespace-nowrap
              ${activeTab === num
                                ? 'bg-white text-primary-700 shadow-sm'
                                : 'text-slate-600 hover:text-slate-900'}
            `}
                    >
                        الفصل {num}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 min-h-[300px]">
                {activeTab === 1 && (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-primary-800 border-b pb-2">الفصل الأول: الإطار النظري لأنظمة المعلومات</h3>

                        <div className="prose prose-slate max-w-none text-right">

                            {/* System Definition */}
                            <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                <h4 className="font-bold text-blue-800 mb-2">تعريف النظام (System)</h4>
                                <p className="text-blue-900">
                                    مجموعة من العناصر والأجزاء المترابطة التي تعمل وتتفاعل فيما بينها لتحقيق هدف معين أو مجموعة من الأهداف.
                                </p>
                            </div>

                            {/* System Characteristics */}
                            <div className="mb-6">
                                <h4 className="font-bold text-slate-800 mb-2">خصائص النظام:</h4>
                                <ul className="list-disc list-inside space-y-1 text-slate-600">
                                    <li><strong>الهدف:</strong> لكل نظام هدف يسعى لتحقيقه.</li>
                                    <li><strong>الهيكلية الهرمية (Hierarchical):</strong> تقسيم النظام الكبير إلى نظم فرعية (Subsystems).</li>
                                    <li><strong>البيئة المحيطة:</strong> تأثر النظام بالبيئة وتفاعله معها (مدخلات ومخرجات).</li>
                                    <li><strong>المعالجة التحويلية:</strong> العمليات التي تحول المدخلات إلى مخرجات.</li>
                                    <li><strong>التغذية العكسية (Feedback):</strong> معلومات لتقييم كفاءة النظام وتصحيح الانحرافات.</li>
                                </ul>
                            </div>

                            {/* Data vs Info */}
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-slate-800">البيانات (Data)</h4>
                                    <p className="text-sm text-slate-600">حقائق مجردة (مواد خام) يتم جمعها وتخزينها، ولا تصلح لاتخاذ قرارات بمفردها.</p>
                                </div>
                                <div className="bg-teal-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-teal-800">المعلومات (Information)</h4>
                                    <p className="text-sm text-teal-700">بيانات تمت معالجتها وتنظيمها لتصبح ذات معنى وتساعد في اتخاذ القرارات وتقليل حالة عدم التأكد.</p>
                                </div>
                            </div>

                            {/* Info Characteristics */}
                            <div className="mb-6">
                                <h4 className="font-bold text-slate-800 mb-2">خصائص المعلومات المفيدة:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['الملاءمة', 'الموثوقية', 'الاكتمال', 'التوقيت المناسب', 'القابلية للفهم', 'القابلية للتحقق', 'القابلية للوصول'].map(tag => (
                                        <span key={tag} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-bold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Components */}
                            <div className="mb-4">
                                <h4 className="font-bold text-slate-800 mb-2">مكونات نظام المعلومات المحاسبي:</h4>
                                <ul className="list-decimal list-inside text-slate-600">
                                    <li>الأفراد (People)</li>
                                    <li>الإجراءات (Procedures)</li>
                                    <li>البيانات (Data)</li>
                                    <li>البرمجيات (Software)</li>
                                    <li>البنية التحتية لتكنولوجيا المعلومات (IT Infrastructure)</li>
                                    <li>الرقابة الداخلية والأمن (Internal Controls)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 2 && (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-primary-800 border-b pb-2">الفصل الثاني: الإطار العلمي للمحاسبة كنظام للمعلومات</h3>

                        <div className="prose prose-slate max-w-none text-right">
                            {/* Accounting Definition */}
                            <div className="bg-purple-50 p-4 rounded-lg mb-4">
                                <h4 className="font-bold text-purple-800 mb-2">مفهوم المحاسبة</h4>
                                <p className="text-purple-900">
                                    نظام للمعلومات يختص بتحديد وقياس وتوصيل المعلومات المالية عن الأحداث الاقتصادية لمساعدة المستفيدين في اتخاذ القرارات.
                                </p>
                            </div>

                            {/* Goals */}
                            <div className="mb-4">
                                <h4 className="font-bold text-slate-800">أهداف المحاسبة:</h4>
                                <ul className="list-disc list-inside text-slate-600">
                                    <li>تحديد الربح والخسارة.</li>
                                    <li>تحديد المركز المالي.</li>
                                    <li>تحديد التدفقات النقدية.</li>
                                    <li>تسجيل العمليات المالية (مسك الدفاتر).</li>
                                </ul>
                            </div>

                            {/* Users */}
                            <div className="mb-4">
                                <h4 className="font-bold text-slate-800">المستفيدون من المعلومات المحاسبية:</h4>
                                <ul className="list-disc list-inside text-slate-600">
                                    <li><strong>داخليون:</strong> الإدارة، الموظفون.</li>
                                    <li><strong>خارجيون:</strong> الملاك (حاليون ومتوقعون)، المستثمرون، الدائنون (المقرضون)، الجهات الحكومية (مثل ضريبة الدخل).</li>
                                </ul>
                            </div>

                            {/* GAAP */}
                            <div className="mb-4">
                                <h4 className="font-bold text-slate-800 mb-2">المبادئ المحاسبية المتعارف عليها (GAAP):</h4>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        { title: 'الوحدة المحاسبية', desc: 'استقلال المنشأة مالياً وقانونياً عن مالكيها.' },
                                        { title: 'الاستمرارية', desc: 'افتراض أن المنشأة مستمرة في نشاطها لفترة غير محدودة.' },
                                        { title: 'القياس النقدي', desc: 'النقود هي وحدة القياس المناسبة لتسجيل العمليات.' },
                                        { title: 'الفترة المحاسبية', desc: 'تقسيم حياة المنشأة إلى فترات دورية متساوية (سنة عادة).' },
                                        { title: 'التكلفة التاريخية', desc: 'تسجيل الأصول والالتزامات بقيمتها الفعلية وقت الاقتناء.' },
                                        { title: 'المقابلة', desc: 'تحميل كل فترة بما يخصها من مصروفات ساهمت في تحقيق الإيراد.' },
                                        { title: 'التحقق (الاعتراف بالإيراد)', desc: 'تسجيل الإيراد عند تقديم الخدمة أو تسليم السلعة.' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-slate-50 p-3 rounded border border-slate-100">
                                            <strong className="text-primary-700 block text-sm mb-1">{item.title}</strong>
                                            <span className="text-xs text-slate-500">{item.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 3 && (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary-800">الفصل الثالث: الدورة المستندية</h3>
                        <div className="prose prose-slate max-w-none">
                            <p className="bg-yellow-50 p-4 rounded-lg text-yellow-800">
                                يتضمن هذا الفصل تدفق المستندات والدورة المحاسبية بدءاً من التسجيل في دفتر اليومية، إلى الترحيل لدفتر الأستاذ، ومن ثم إعداد ميزان المراجعة والوصول للقوائم المالية.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MidtermMaterial;
