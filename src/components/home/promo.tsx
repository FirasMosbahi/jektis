import Center, { Axes } from "@jektis/components/generic/center";

export default function Promo(): React.ReactNode {
  return (
    <div className="border-4 rounded-2xl flex flex-col">
      <img src="/promo.jpg" alt="promo" className="h-96" />
      <div className="grid grid-cols-6 w-full h-24 border-t-white border-t-4">
        <div className="border-r-4 border-r-white">
          <Center axe={Axes.all}>
            <strong>USA</strong>
          </Center>
        </div>
        <div className="border-r-4 border-r-white">
          <Center axe={Axes.all}>
            <strong>DUBAI</strong>
          </Center>
        </div>
        <div className="border-r-4 border-r-white">
          <Center axe={Axes.all}>
            <strong>PHILIPPINES</strong>
          </Center>
        </div>
        <div className="border-r-4 border-r-white text-center">
          <Center axe={Axes.all}>
            <strong>
              HOTELS <br /> EN TUNISIE
            </strong>
          </Center>
        </div>
        <div className="border-r-4 border-r-white text-center">
          <Center axe={Axes.all}>
            <strong>
              {" "}
              CIRCUIT <br /> SUD
            </strong>
          </Center>
        </div>
        <div>
          <Center axe={Axes.all}>
            <strong>VISA</strong>
          </Center>
        </div>
      </div>
    </div>
  );
}