import React, { useState } from 'react';
import { questions } from '../data/QuestionBank';
import { CheckCircle, XCircle, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

const QuizPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]); // { questionId, selected, isCorrect }
    const [quizStarted, setQuizStarted] = useState(false);

    // Use full question bank
    const quizQuestions = questions;

    const handleStart = () => {
        setQuizStarted(true);
        setCurrentQuestionIndex(0);
        setScore(0);
        setAnswers([]);
        setShowResult(false);
    };

    const handleOptionSelect = (index) => {
        setSelectedOption(index);
    };

    const handleNext = () => {
        const currentQ = quizQuestions[currentQuestionIndex];
        const isCorrect = selectedOption === currentQ.correctAnswer;

        const newAnswers = [...answers, {
            question: currentQ,
            selected: selectedOption,
            isCorrect
        }];
        setAnswers(newAnswers);

        if (isCorrect) setScore(score + 1);

        if (currentQuestionIndex + 1 < quizQuestions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
        } else {
            setShowResult(true);
        }
    };

    if (!quizStarted) {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-sm border border-slate-100 min-h-[400px]">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">بنك الأسئلة الشامل</h2>
                <p className="text-slate-500 text-center max-w-md mb-8">
                    يحتوي هذا الاختبار على أسئلة متنوعة تغطي مادة الميد والفاينل (100 سؤال).
                    اختبر معلوماتك الآن!
                </p>
                <button
                    onClick={handleStart}
                    className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                >
                    ابدأ الاختبار
                </button>
            </div>
        );
    }

    if (showResult) {
        return (
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                    <h2 className="text-2xl font-bold mb-2">نتيجة الاختبار</h2>
                    <div className="text-4xl font-black text-primary-600 mb-2">
                        {score} / {quizQuestions.length}
                    </div>
                    <p className="text-slate-500">
                        {score > quizQuestions.length / 2 ? 'أحسنت! أداء رائع' : 'حاول مرة أخرى للمزيد من التركيز'}
                    </p>
                    <button
                        onClick={handleStart}
                        className="mt-6 flex items-center justify-center gap-2 mx-auto text-primary-600 font-bold hover:bg-primary-50 px-4 py-2 rounded-lg"
                    >
                        <RefreshCw size={20} /> أعد المحاولة
                    </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-lg mb-4 text-slate-800">تفاصيل الإجابات</h3>
                    <div className="space-y-6 divide-y divide-slate-100">
                        {answers.map((ans, idx) => (
                            <div key={idx} className="pt-4 first:pt-0">
                                <div className="flex items-start gap-3">
                                    {ans.isCorrect ? (
                                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                                    ) : (
                                        <XCircle className="text-red-500 flex-shrink-0 mt-1" />
                                    )}
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm mb-2">{ans.question.question}</h4>
                                        <div className="text-sm space-y-1">
                                            <p className={ans.isCorrect ? 'text-green-600 font-medium' : 'text-red-600 line-through'}>
                                                إجابتك: {ans.question.options[ans.selected]}
                                            </p>
                                            {!ans.isCorrect && (
                                                <p className="text-green-600 font-medium">
                                                    الإجابة الصحيحة: {ans.question.options[ans.question.correctAnswer]}
                                                </p>
                                            )}
                                            <p className="text-slate-400 text-xs mt-1 bg-slate-50 p-2 rounded">
                                                💡 {ans.question.explanation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const currentQ = quizQuestions[currentQuestionIndex];

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-4 flex justify-between items-center text-sm font-medium text-slate-500">
                <span>سؤال {currentQuestionIndex + 1} من {quizQuestions.length}</span>
                <span>التقدم: {Math.round(((currentQuestionIndex) / quizQuestions.length) * 100)}%</span>
            </div>

            <div className="w-full bg-slate-200 h-2 rounded-full mb-6 overflow-hidden">
                <div
                    className="bg-primary-500 h-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex) / quizQuestions.length) * 100}%` }}
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 min-h-[300px] flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-6 leading-relaxed">
                    {currentQ.question}
                </h3>

                <div className="space-y-3 flex-1">
                    {currentQ.options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleOptionSelect(idx)}
                            className={`w-full text-right p-4 rounded-lg border-2 transition-all
                ${selectedOption === idx
                                    ? 'border-primary-500 bg-primary-50 text-primary-800 font-bold shadow-sm'
                                    : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50 text-slate-600'}
              `}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <div className="mt-8 flex justify-end">
                    <button
                        onClick={handleNext}
                        disabled={selectedOption === null}
                        className={`
              flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all
              ${selectedOption === null
                                ? 'bg-slate-300 cursor-not-allowed'
                                : 'bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'}
            `}
                    >
                        {currentQuestionIndex + 1 === quizQuestions.length ? 'إنهاء الاختبار' : 'التالي'}
                        <ChevronLeft size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
