import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useRouteChange(callback: () => void) {
  const pathName = usePathname();
  const params = useSearchParams();
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => {
    if (load) {
      callback();
      setLoad(false);
    } else {
      setLoad(true);
    }

    // onClose();
  }, [params, pathName, callback]);
}
