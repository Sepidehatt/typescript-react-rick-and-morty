import { useCallback, useState } from "react";
import { UseOpenController } from "../interfaces/useOpenController.interface";

const useOpenController = (initialState: boolean): UseOpenController => {
  const [isOpen, setOpenState] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setOpenState((state) => !state);
  }, [setOpenState]);

  return { isOpen, toggle };
};

export default useOpenController;
