import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext(null as any);

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider: React.FC = ({children}) => {
  const [result, setResult] = useState<number[]>([]);


  const getData = async (): Promise<number[]> => {
    const data = await fetch('http://localhost:4000/api/quiz', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ values: result ?? [] }),
    }).then((res) => res.json())
    
    console.log(data);
    return data;
  };
  
  const value = { result, setResult, getData }

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};