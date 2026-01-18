
import React from 'react';
import { ArrowRightLeft, Activity, Layers, Database } from 'lucide-react';
import aisInteractionsImg from '../../assets/images/ais_interactions_fig_4_1.png';
import aisSubsystemsImg from '../../assets/images/ais_subsystems_fig_4_2.png';
import cyclesTableImg from '../../assets/images/cycles_give_get_table_4_2.png';

const CyclesTableFigure = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="bg-orange-50 p-4 rounded-xl border-b border-orange-100 flex items-center gap-2">
                <Activity className="w-6 h-6 text-orange-600" />
                <h3 className="font-bold text-xl text-orange-900">نظرة شاملة علي نظام المعلومات المحاسبي (AIS)</h3>
            </div>

            {/* 1. Interactions Figure 4.1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transform transition-all hover:shadow-md">
                <div className="p-4 border-b border-slate-50 flex items-center gap-2 bg-slate-50/50">
                    <Database className="w-5 h-5 text-blue-600" />
                    <h4 className="font-bold text-slate-800">نظام المعلومات المحاسبي وعلاقته بالأطراف الخارجية (الشكل 4.1)</h4>
                </div>
                <div className="p-6">
                    <div className="bg-white rounded-xl border border-slate-100 p-2 mb-4 shadow-sm">
                        <img src={aisInteractionsImg} alt="AIS Interactions Figure 4.1" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="bg-blue-50/50 rounded-lg p-4 text-sm text-slate-700 leading-relaxed space-y-2">
                        <p className="font-medium text-blue-900">يوضح هذا الشكل كيف يتفاعل نظام المعلومات المحاسبي (AIS) في الوسط مع الأطراف الخارجية والداخلية:</p>
                        <ul className="list-disc list-inside space-y-1 pr-2">
                            <li><strong>الموردين (Vendors):</strong> تبادل أوامر الشراء، استلام البضائع والخدمات، استلام الفواتير، ودفع المدفوعات.</li>
                            <li><strong>العملاء (Customers):</strong> استلام طلبات العملاء، تقديم السلع والخدمات، إرسال الفواتير، واستلام الدفعات.</li>
                            <li><strong>الموظفين (Employees):</strong> تبادل العمل والخدمات مقابل الرواتب، العمولات، والمكافآت.</li>
                            <li><strong>البنوك (Banks):</strong> عمليات الإيداع، السحب، والحصول على كشوف الحسابات البنكية.</li>
                            <li><strong>المستثمرين (Investors):</strong> استثمار الأموال والحصول على توزيعات الأرباح والتقارير المالية.</li>
                            <li><strong>الجهات الدائنة (Creditors):</strong> الحصول على القروض وسداد دفعات القروض والفوائد.</li>
                            <li><strong>الإدارة (Management):</strong> الحصول على تقارير إدارية وقوائم مالية وموازنات لاتخاذ القرارات.</li>
                            <li><strong>الجهات الحكومية (Government Agencies):</strong> الالتزام باللوائح، تقديم الإقرارات الضريبية، ودفع الضرائب.</li>
                        </ul>
                        <p className="pt-2 border-t border-blue-200 mt-2"><strong>الخلاصة:</strong> يعمل الـ AIS كنظام مركزي يربط بين جميع هذه الأطراف، حيث يقوم بجمع البيانات من العمليات المختلفة ومعالجتها لتوفير المعلومات اللازمة لكل طرف.</p>
                    </div>
                </div>
            </div>

            {/* 2. Subsystems Figure 4.2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transform transition-all hover:shadow-md">
                <div className="p-4 border-b border-slate-50 flex items-center gap-2 bg-slate-50/50">
                    <Layers className="w-5 h-5 text-purple-600" />
                    <h4 className="font-bold text-slate-800">نظام المعلومات المحاسبي ونظمه الفرعية (الشكل 4.2)</h4>
                </div>
                <div className="p-6">
                    <div className="bg-white rounded-xl border border-slate-100 p-2 mb-4 shadow-sm">
                        <img src={aisSubsystemsImg} alt="AIS Subsystems Figure 4.2" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="bg-purple-50/50 rounded-lg p-4 text-sm text-slate-700 leading-relaxed space-y-2">
                        <p className="font-medium text-purple-900">يوضح هذا الشكل العلاقة التكاملية بين دورات المعاملات ونظام دفتر الأستاذ العام:</p>
                        <p>جميع الدورات الخمس (الإيرادات، النفقات، الإنتاج، الرواتب، التمويل) مرتبطة ببعضها البعض وتغذي <strong>نظام دفتر الأستاذ العام وإعداد التقارير</strong> بالبيانات المالية.</p>
                        <p>يقوم دفتر الأستاذ بتجميع هذه البيانات لإصدار التقارير المالية والإدارية لكل من المستخدمين الداخليين والخارجيين، مما يبرز دور الـ AIS كعصب رئيسي للمعلومات في المنشأة.</p>
                    </div>
                </div>
            </div>

            {/* 3. Cycles Table 4.2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transform transition-all hover:shadow-md">
                <div className="p-4 border-b border-slate-50 flex items-center gap-2 bg-slate-50/50">
                    <ArrowRightLeft className="w-5 h-5 text-orange-600" />
                    <h4 className="font-bold text-slate-800">عمليات التبادل الرئيسية في دورات الأعمال (الجدول 4.2)</h4>
                </div>
                <div className="p-6">
                    <div className="bg-white rounded-xl border border-slate-100 p-2 mb-4 shadow-sm">
                        <img src={cyclesTableImg} alt="Cycles Give/Get Table 4.2" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="bg-orange-50/50 rounded-lg p-4 text-sm text-orange-800 leading-relaxed">
                        <p className="font-medium mb-2">يُلخص هذا الجدول مبدأ "الأخذ والعطاء" (Give-Get Exchange) الذي تقوم عليه كل دورة:</p>
                        <ul className="space-y-1 font-medium pr-2">
                            <li>• <strong>دورة الإيرادات:</strong> إعطاء بضاعة/خدمة ⇆ استلام نقدية.</li>
                            <li>• <strong>دورة النفقات:</strong> إعطاء نقدية ⇆ استلام بضاعة/خدمة.</li>
                            <li>• <strong>دورة الإنتاج:</strong> إعطاء مواد وعمل ⇆ استلام بضاعة تامة الصنع.</li>
                            <li>• <strong>دورة الموارد البشرية:</strong> إعطاء نقدية ومزايا ⇆ استلام عمل.</li>
                            <li>• <strong>دورة التمويل:</strong> إعطاء نقدية (عائد) ⇆ استلام نقدية (تمويل).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CyclesTableFigure;
