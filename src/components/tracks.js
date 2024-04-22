import data from "./data.json"
export const Tracks = () => {

    return(
        <div className="mt-4 w-full max-w grid grid-cols-1 lg:grid-cols-3  ">
        {data.tracks.map((track, index) => (
     <div key={index} className="mb-4 mx-auto">
     <p className="font-bold text-lg mb-1 text-center">{track.track_name}</p>
     <ul className="mt-3  text-left text-md leading-none border-blue-200 divide-y divide-blue-200">
       {track.topics.map((topic, topicIndex) => (
         <li
           key={topicIndex}
           className="py-3.5 w-full flex items-center text-blue-500 hover:text-blue-700 hover:bg-blue-50"
         >
           <span className="lg:ml-5 mr-2.5 w-1 h-6 bg-blue-500 rounded-r-md"></span>
           {topic}
         </li>
       ))}
     </ul>
   </div>
   
        ))}
      </div>
    );

}