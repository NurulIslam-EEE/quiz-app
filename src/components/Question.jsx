"use client";
import { useFetchQuestion } from "@/hooks/fetchQuestion";
import { updateResult } from "@/hooks/setResult";
import { updateResultAction } from "@/redux/features/resultSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Question() {
  const [checked, setChecked] = useState(undefined);
  const trace = useSelector((state) => state?.questions?.trace);
  const result = useSelector((state) => state?.result?.result);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const questions = useSelector((state) => state?.questions?.queue[0]);
  const dispatch = useDispatch();

  // const allState = useSelector((state) => state);

  useEffect(() => {
    dispatch(updateResultAction({ trace, checked }));
  }, [checked]);

  function onSelect(i) {
    // onChecked(i)
    setChecked(i);
    dispatch(updateResult({ trace, checked }));
  }

  // if (isLoading) return <h3 className="text-light">isLoading</h3>;
  // if (serverError) return <h3 className="text-light">No</h3>;

  console.log("qqqq", questions, isLoading, apiData, serverError);

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />

            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div
              className={`check ${result[trace] == i ? "checked" : ""}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
