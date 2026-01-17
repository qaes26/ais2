import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import MidtermMaterial from './pages/MidtermMaterial';
import RevenueCycle from './pages/RevenueCycle';
import ExpenditureCycle from './pages/ExpenditureCycle';
import ProductionCycle from './pages/ProductionCycle';
import CriticalSections from './pages/CriticalSections';
import QuizPage from './pages/QuizPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="midterm" element={<MidtermMaterial />} />
                    <Route path="revenue" element={<RevenueCycle />} />
                    <Route path="expenditure" element={<ExpenditureCycle />} />
                    <Route path="production" element={<ProductionCycle />} />
                    <Route path="critical" element={<CriticalSections />} />
                    <Route path="quiz" element={<QuizPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
