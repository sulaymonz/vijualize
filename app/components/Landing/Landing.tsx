import Sidebar from './Sidebar';

export default function Landing() {
  return (
    <section className="flex border-[1px] rounded-lg min-h-[calc(100vh-164px)] lg:min-h-[calc(100vh-190px)] overflow-hidden">
      <div className="flex-none w-[150px]">
        <Sidebar />
      </div>
      <div className="grow flex flex-row">
        <div className="w-1/2 flex justify-center items-center">
          <div className="flex flex-col justify-start">
            <h1 className="text-4xl font-mono font-bold my-2">
              Color selecting
            </h1>
            <h3 className="text-lg">
              was never more fun before. Create ideal
              <br />
              palettes by visualizing them on inspiring
              <br />
              designs.
            </h3>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center font-mono bg-secondary">
          This is landing
        </div>
      </div>
    </section>
  );
}
