import React from 'react';
import { BookOpen, Award, CheckCircle } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-2xl p-6 text-white shadow-lg">
                <h1 className="text-2xl font-bold mb-2">مرحباً بك في تطبيق AIS</h1>
                <p className="text-primary-100 mb-4">
                    مرجعك الشامل لمادة مبادئ نظم المعلومات المحاسبية.
                </p>
                <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <span className="font-bold ml-2">إعداد:</span>
                    قيس جازي
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="font-bold text-slate-800">المحتوى الدراسي</h3>
                    </div>
                    <p className="text-sm text-slate-500">
                        شرح شامل لفصول الميد والفاينل (الدورات المستندية).
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 bg-teal-50 text-teal-600 rounded-lg">
                            <CheckCircle size={24} />
                        </div>
                        <h3 className="font-bold text-slate-800">بنك الأسئلة</h3>
                    </div>
                    <p className="text-sm text-slate-500">
                        أكثر من 100 سؤال وتدريب مع التصحيح الفوري.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
                            <Award size={24} />
                        </div>
                        <h3 className="font-bold text-slate-800">العناصر الحرجة</h3>
                    </div>
                    <p className="text-sm text-slate-500">
                        جداول تفاعلية لربط القرارات بالمعلومات والرسوم التوضيحية.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
