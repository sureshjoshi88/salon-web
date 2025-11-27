import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import CardLoader from "./CardLoader";
import {useDispatch,useSelector} from "react-redux"
const HomeSection3 = () => {
  const [category, setCategory] = useState("men");
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const homeSalonData = useSelector((state) => state.homeSalon.homeSalonData);
  const loading = useSelector((state) => state.homeSalon.loading);
  const error = useSelector((state) => state.homeSalon.error);

  const getData = async () => {
    // setLoading(true);
    dispatch({type:'homeSalon/setLoading',payload:true});
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}user/get-home-salons?category=${category}`
      );
      const result = await response.json();
      // setData(result?.data || []);
      // setLoading(false);
      dispatch({type:'homeSalon/setHomeSalonData',payload:result?.data || []});
      dispatch({type:'homeSalon/setLoading',payload:false});
    } catch (error) {
      console.log(error);
      dispatch({type:'homeSalon/setLoading',payload:false});
      dispatch({type:'homeSalon/setError',payload:'Failed to fetch data'});
    }
  };

  useEffect(() => {
    getData();
  }, [dispatch,category]);

  // const dataLength = data.length;
  const ButtonStyle = (btnCat) => ({
    background:
      category === btnCat ? "var(--primary-gradient)" : "#f0f0f0",
    color: category === btnCat ? "white" : "black",
    transition: "0.3s",
  });

  return (
    <div className="p-2">
        <div className='flex justify-between p-2 '>
        <div><p className="text-2xl font-medium ">Salon at Home Services</p></div>
        <div><p className="text-lg text-gray-600 font-medium text-sm">View All </p></div>
      </div>
      <div className="flex gap-3 items-center font-medium p-2 mt-3">
        <button
          onClick={() => setCategory("men")}
          className="px-4 p-2 rounded"
          style={ButtonStyle("men")}
        >
          Men Salon
        </button>

        <button
          onClick={() => setCategory("women")}
          className="px-4 p-2 rounded"
          style={ButtonStyle("women")}
        >
          Women Salon
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4 lg:grid-cols-4">
        
        {loading &&
          Array.from({ length: homeSalonData.length }).map((_, i) => (
           <CardLoader  />
          ))}

        {/* ---- Actual Data Cards ---- */}
        {!loading &&
          homeSalonData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md p-4 cursor-pointer transition-all"
            >
              <div className="h-36 bg-gray-200 rounded-lg mb-3">
                <img className="rounded w-full h-full object-cover" src="https://img.freepik.com/premium-photo/hairdressers-makeup-artist-working-beauty-salon_10069-11140.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>

              <h3 className="font-semibold">{item.shopName}</h3>

              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaMapMarkerAlt className="mr-1" />
                {item.location.address}
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="font-medium">Categories:</span>
                {item.categories.map((srv, i) => (
                  <span
                    key={i}
                    className="bg-green-100 text-sm rounded-2xl px-2 py-0.5"
                  >
                    {srv.name}
                  </span>
                ))}
              </div>

              <div className="flex justify-end text-sm">
                <button className="text-indigo-600 font-medium hover:underline">
                  See More
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeSection3;
