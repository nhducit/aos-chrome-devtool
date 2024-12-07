import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div>
        <div className="mb-8 text-left whitespace-pre-line">
          After opening the stackblitz.com link, open the preview window in new tab.
        </div>

      </div>
      {/* <img className="w-[700px] mb-8" src="/preview.jpg" /> */}



      <div className="mb-2 text-left whitespace-pre-line">
        When we clicked the button below, I expected the browser to open https://www.google.com/. However, it actually opened https://www.ascenda.com/ instead.

        <div className="rounded p-4 bg-gray-300 whitespace-pre">

        </div>
      </div>
    </>
  )
}

// element.addEventListener("click", () => {
//   window.location.href = "https://www.google.com/";
//   setTimeout(() => {
//           // My hypothesis:
//           // 1. That DevTools is already disconnected at this line "window.location.href = 'https://www.google.com/';"
//           // so the Chrome DevTools won't pause execution for "debugger".
//           debugger;
//           // 2. The front-end application is not destroyed immediately after that. This is why the following lines are still executed.
//           window.location.href = "https://www.ascenda.com/";
//   }, 0);
// });
export default App
