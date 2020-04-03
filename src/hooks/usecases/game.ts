import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestore} from "~/infrastructures/firebase";

export const useGame = () => {
  const [values, loading, error] = useCollectionData(
    firestore.collection("games"),
    { idField: "id" }
  );
  return { values, loading, error };
};
