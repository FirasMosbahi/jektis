"use client";

import { Disclosure } from "@headlessui/react";
import { Caret } from "@jektis/components/icons";
import MultiRangeSlider from "multi-range-slider-react";
import Stars from "@jektis/components/generic/stars";

const filters = [
  {
    id: "Arrangement",
    name: "Arrangement",
    options: [
      {
        value: "Logement petit déjeuner",
        label: "Logement petit déjeuner",
        checked: false,
      },
      { value: "Demi pension", label: "Demi pension", checked: false },
      { value: "Pension complète", label: "Pension complète", checked: false },
      { value: "All inclusive", label: "All inclusive", checked: false },
      {
        value: "All inclusive soft",
        label: "All inclusive soft",
        checked: false,
      },
    ],
  },
  {
    id: "Thème",
    name: "Thème",
    options: [
      { value: "Promo", label: "Promo", checked: false },
      { value: "Top vente", label: "Top vente", checked: false },
      { value: "Séjours de noces", label: "Séjours de noces", checked: false },
      { value: "Famille", label: "Famille", checked: false },
      { value: "Réveillon", label: "Réveillon", checked: false },
      { value: "Gratuité enfants", label: "Gratuité enfants", checked: true },
      { value: "Tobbogan", label: "Tobbogan", checked: false },
      { value: "Luxe", label: "Luxe", checked: false },
      { value: "Sahara", label: "Sahara", checked: false },
      { value: "Adults only", label: "Adults only", checked: false },
      {
        value: "Recommandé par Jektis",
        label: "Recommandé par Jektis",
        checked: false,
      },
    ],
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HotelsSideFilter() {
  return (
    <div className="hidden xl:block bg-white h-fit w-1/4">
      <div>
        <main className="mx-auto px-4 sm:px-6 lg:px-8">
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <p className="text-[#494461] text-xl border border-[#e6e6e6] pl-4 pt-8 pb-2">
              Filtrer par :
            </p>
            <div className=" gap-x-8 gap-y-10 ">
              {/* Filters */}
              <form className="hidden lg:block">
                <Disclosure
                  as="div"
                  key="Nom de Voyage"
                  className="border border-[#e6e6e6] pb-6 pt-8 pl-4 pr-4"
                  defaultOpen={true}
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root ">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-xl text-nowrap text-[#494461]">
                            Nom de l{"'"}hotel
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <Caret className="h-5 w-5" aria-hidden="true" />
                            ) : (
                              <Caret className="h-5 w-5" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          <div className="mb-6">
                            <input
                              type="text"
                              id="trip-name"
                              placeholder="Nom de l'hotel"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure
                  as="div"
                  key="Budget"
                  className="border border-[#e6e6e6] pb-6 pt-8 pl-4 pr-4"
                  defaultOpen={true}
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root ">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-xl text-[#494461]">
                            Budget:
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <Caret className="h-5 w-5" aria-hidden="true" />
                            ) : (
                              <Caret className="h-5 w-5" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          <div className="mb-6">
                            <MultiRangeSlider
                              minValue={100}
                              maxValue={5000}
                              min={0}
                              max={5000}
                              barInnerColor="#6f6f6f"
                              barLeftColor="#e6e6e6"
                              barRightColor="#e6e6e6"
                              style={{
                                boxShadow: "none",
                                borderColor: "transparent",
                              }}
                            />
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure
                  as="div"
                  key="Category"
                  className="border border-[#e6e6e6] pb-6 pt-8 pl-4 pr-4"
                  defaultOpen={true}
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root ">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-xl text-[#494461]">
                            Catégorie:
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <Caret className="h-5 w-5" aria-hidden="true" />
                            ) : (
                              <Caret className="h-5 w-5" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          <div className="mb-6">
                            <div className="flex items-center">
                              <input
                                id="3 stars"
                                name="stars"
                                defaultValue={3}
                                type="checkbox"
                                defaultChecked={false}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="3 stars"
                                className="ml-3 text-sm text-gray-600"
                              >
                                <Stars number={3} width={25} height={25} />
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="4 stars"
                                name="stars"
                                defaultValue={4}
                                type="checkbox"
                                defaultChecked={false}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="4 stars"
                                className="ml-3 text-sm text-gray-600"
                              >
                                <Stars number={4} width={25} height={25} />
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="5 stars"
                                name="stars"
                                defaultValue={5}
                                type="checkbox"
                                defaultChecked={false}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor="5 stars"
                                className="ml-3 text-sm text-gray-600"
                              >
                                <Stars number={5} width={25} height={25} />
                              </label>
                            </div>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border border-[#e6e6e6] py-6 pl-4"
                    defaultOpen={true}
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-xl text-[#494461]">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <Caret className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <Caret className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">{/* Your content */}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
