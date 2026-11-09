// export default function Loading() {
//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">
//         Loading Recipes...
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
//             <div className="bg-gray-200 h-48 rounded-lg" />

//             <div className="bg-gray-200 h-5 w-3/4 rounded mt-3" />
        
//       </div>
//     </div>
//   );
// }

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />

      <p className="mt-4 text-gray-600 font-medium">
        Loading recipes...
      </p>
    </div>
  );
}