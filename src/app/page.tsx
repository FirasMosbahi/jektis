import Center, { Axes } from "@jektis/components/generic/center";

export default function Home() {
  return (
    <div className="h-screen">
      <Center axe={Axes.y}>Hello world</Center>
    </div>
  );
}
