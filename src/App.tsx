import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { fetchShelves } from "./store/shelvesSlice";
import ShelfRenderer from "./components/ShelfRenderer";
import {
   FocusContext,
   useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import LazyShelfRenderer from "./components/LazyShelfRenderer";

const App: React.FC = () => {
   const dispatch: AppDispatch = useDispatch();
   const { shelves, loading, error } = useSelector(
      (state: RootState) => state.shelves
   );
   const { ref, focusKey } = useFocusable({
      focusKey: "ROOT",
      trackChildren: true,
      isFocusBoundary: true,
      saveLastFocusedChild: false,
      forceFocus: true,
   });

   useEffect(() => {
      dispatch(fetchShelves());
   }, [dispatch]);

   if (loading) return <div>Loading shelves...</div>;
   if (error) return <div>Error loading shelves: {error}</div>;

   return (
      <FocusContext.Provider value={focusKey}>
         <div
            ref={ref}
            className='focusable-root'
            style={{
               outline: "none",
               padding: "2rem",
               minHeight: "120vh",
               width: "100%",
               background: '#000'
            }}
         >
            {shelves.map((shelf) => (
               <LazyShelfRenderer
                  key={`shelf-${shelf.id}`}
                  config={shelf}
                  parentFocusKey={`${focusKey}-shelf`}
               />
            ))}
         </div>
      </FocusContext.Provider>
   );
};

export default App;
