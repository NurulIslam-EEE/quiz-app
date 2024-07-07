import ResultTable from "@/components/ResultTable";
import Link from "next/link";
import "../../styles/result.css";

function Result() {
  const flag = true;
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">0</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points : </span>
          <span className="bold">0</span>
        </div>
        <div className="flex">
          <span>Total Questions : </span>
          <span className="bold">0</span>
        </div>
        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">0</span>
        </div>
        <div className="flex">
          <span>Total Earn Points : </span>
          <span className="bold">0</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span
            style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
            className="bold"
          >
            {flag ? "Passed" : "Failed"}
          </span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" href={"/"}>
          Restart
        </Link>
      </div>

      <div className="container">
        {/* result table */}
        <ResultTable></ResultTable>
      </div>
    </div>
  );
}

export default Result;
