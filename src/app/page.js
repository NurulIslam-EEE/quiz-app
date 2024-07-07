"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }
  return (
    <main className="">
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        <ol>
          <li>You will be asked 10 questions one after another.</li>
          <li>10 points is awarded for the correct answer.</li>
          <li>
            Each question has three options. You can choose only one options.
          </li>
          <li>You can review and change answers before the quiz finish.</li>
          <li>The result will be declared at the end of the quiz.</li>
        </ol>

        <form id="form">
          <input
            ref={inputRef}
            className="userid"
            type="text"
            placeholder="Username*"
          />
        </form>

        <div className="start">
          <Link className="btn" href="/quiz" onClick={startQuiz}>
            Start Quiz
          </Link>
        </div>
      </div>
    </main>
  );
}
