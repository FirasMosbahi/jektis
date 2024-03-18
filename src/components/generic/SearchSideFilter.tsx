import { FilterSection } from "@jektis/types/filter-type";
import { SearchInputIcon } from "@jektis/components/icons";

export default function SearchSideFilter({
  filters,
  nameFilterPlaceholder,
}: {
  filters: FilterSection[];
  nameFilterPlaceholder: string;
}) {
  return (
    <div className="bg-white px-4 py-8 w-[30%] max-w-[400px]">
      <label
        htmlFor="default-search"
        className="text-[20px] font-bold text-gray-900"
      >
        Filter par :
      </label>
      <div className="relative mt-4">
        <div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
          <SearchInputIcon />
        </div>
        <input
          type="search"
          id="default-search"
          className="px-2 py-1 w-full text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder={nameFilterPlaceholder}
        />
      </div>
      {filters.map((f, index) => (
        <div className="pt-8" key={index}>
          <p className="text-[#2265ae] text-[18px] font-semibold">{f.name}</p>
          <div className="mt-2">
            {f.values.map((v) => (
              <div className="flex items-center mb-1">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={v.value}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-[14px] font-medium text-gray-600"
                >
                  {v.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
