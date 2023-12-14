import { XMarkIcon } from "@heroicons/react/24/solid";
function ProductDetail() {
  return (
    <aside className="w-[360px] h-5/6 m-2 top-[68px] flex flex-col  fixed right-0 border border-black rounded-lg bg-white">
      <div className="items-center justify-between flex">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon className="h-6 w-6 text-black stroke-black" />
        </div>
      </div>
    </aside>
  );
}

export { ProductDetail };
