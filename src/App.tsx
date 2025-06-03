import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { fetchShelves } from "./store/shelvesSlice";
import ShelfRenderer from "./components/ShelfRenderer";
import {
   FocusContext,
   useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import FeaturedBanner from "./components/FeaturedBanner";

const App: React.FC = () => {
   const dispatch: AppDispatch = useDispatch();
   const { shelves, loading, error } = useSelector(
      (state: RootState) => state.shelves
   );
   const { ref, focusKey } = useFocusable({
      focusKey: "ROOT",
      trackChildren: true,
      isFocusBoundary: true,
      saveLastFocusedChild: true,
      forceFocus: true
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
            className="focusable-root"
            style={{
                outline: 'none',
                padding: "30px",
               minHeight: "120vh",
               width: "100%",
            }}
         >
            <FeaturedBanner parentFocusKey={focusKey} />
            {shelves.map((shelf) => (
               <ShelfRenderer
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
