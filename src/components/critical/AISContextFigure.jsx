import React from 'react';
import { Network } from 'lucide-react';
import aisInteractionsImg from '../../assets/images/ais_interactions_fig_4_1.png';

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
                        src={aisInteractionsImg}
                        alt="AIS Context Diagram Figure 4.1"
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                <div className="bg-emerald-50/50 rounded-lg p-4 text-sm text-emerald-800 leading-relaxed space-y-2">
                    <p className="font-medium text-emerald-900">يوضح هذا الشكل كيف يتفاعل نظام المعلومات المحاسبي (AIS) في الوسط مع الأطراف الخارجية والداخلية:</p>
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
                    <p className="pt-2 border-t border-emerald-200 mt-2"><strong>الخلاصة:</strong> يعمل الـ AIS كنظام مركزي يربط بين جميع هذه الأطراف، حيث يقوم بجمع البيانات من العمليات المختلفة ومعالجتها لتوفير المعلومات اللازمة لكل طرف.</p>
                </div>
            </div>
        </div>
    );
};

export default AISContextFigure;
