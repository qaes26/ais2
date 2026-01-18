import CyclesTableFigure from '../components/critical/CyclesTableFigure';
import DecisionTable from '../components/critical/DecisionTable';
import LedgerFigure from '../components/critical/LedgerFigure';

const CriticalSections = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">العناصر الحرجة</h2>
                <p className="text-slate-500">الجداول والأشكال التوضيحية الهامة من الكتاب (شاملة الفصول 4-8).</p>
            </div>

            <div className="space-y-6">
                <CyclesTableFigure />
            </div>

            <DecisionTable />
            <LedgerFigure />
        </div>
    );
};

export default CriticalSections;
