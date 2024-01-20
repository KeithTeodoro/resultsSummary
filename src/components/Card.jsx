import ScoreCard from "./ScoreCard";

export default function Card() {
  return (
    <div id="card" className=" w-4/12 flex font-title rounded-3xl shadow-2xl">
      <div
        id="firstHalf"
        className="flex flex-col items-center flex-1 bg-gradient-to-b from-violet to-blue text-xl font-semibold w-full  rounded-3xl p-4"
      >
        <h1 className="my-6 text-center text-slate-300">Your Result</h1>
        <div className="circle  bg-gradient-to-b from-circleColor to-blue flex flex-col items-center justify-center w-40 max-w-40 h-40 max-h-40 rounded-full mb-6 ">
          <h1 className="text-5xl mb-1 font-bold text-slate-100">76</h1>
          <p className="text-sm text-slate-300">of 100</p>
        </div>
        <h2 className="mb-3 tracking-wide text-2xl text-slate-100">Great</h2>
        <p className="text-center text-sm mx-6 mb-6 text-slate-300">
          You scored higher than 65% of the people who have taken these tests
        </p>
      </div>
      <div id="secondHalf" className="flex-1   px-8 p-4">
        <h1 className="my-6 font-bold text-lg tracking-wide">Summary</h1>
        <ScoreCard
          className="bg-red-100 text-red-500"
          title="Reaction"
          score="80"
        ></ScoreCard>
        <ScoreCard
          className="bg-orange-50 text-yellow-500"
          title="Memory"
          score="92"
        ></ScoreCard>
        <ScoreCard
          className="bg-green-50 text-green-500"
          title="Verbal"
          score="61"
        ></ScoreCard>
        <ScoreCard
          className="bg-purple-200 text-purple-500"
          title="Visual"
          score="72"
        ></ScoreCard>

        <button className=" text-center flex w-full justify-center bg-buttonColor text-slate-50 rounded-full py-3 font-semibold tracking-wide text-md mt-6 hover:bg-gradient-to-b from-circleColor to-blue">
          Continue
        </button>
      </div>
    </div>
  );
}
