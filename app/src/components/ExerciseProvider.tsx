import React, { createContext, useContext, useState } from "react";

const ExercisesContext = createContext(null as any);

export const useExercises = () => useContext(ExercisesContext);

export interface Exercise {
  img: string;
  name: string;
  level: string;
  benefits: string[];
}

export const ExerciseProvider: React.FC = ({ children }) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [emotion, setEmotion] = useState("");

  const getExercises = async (): Promise<Exercise[]> => {
    if(exercises && exercises.length)
      return Promise.resolve(exercises);
    const e = await fetch(
      `http://localhost:4000/api/exercises/emotion/${emotion || "HAPPY"}`
    ).then((res) => res.json()).then((data) => data.map((d: any) => d['pose_data']));
    console.log(e);
    setExercises(e as Exercise[]);
    return e;
  };

  const value = { emotion, setEmotion, exercises, setExercises, getExercises };

  return (
    <ExercisesContext.Provider value={value}>
      {children}
    </ExercisesContext.Provider>
  );
};
