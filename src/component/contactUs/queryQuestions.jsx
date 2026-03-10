import React, { useState } from "react";

const QueryQuestions = () => {

const [queries, setQueries] = useState([""]);
const [showOther, setShowOther] = useState(false);

const addQuery = () => {
setQueries([...queries, ""]);
};

const handleChange = (value, index) => {
const updated = [...queries];
updated[index] = value;
setQueries(updated);
};

const inputClass =
"w-full p-3.5 bg-white border border-gray-200 rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-[#FFC107] focus:border-[#FFC107] outline-none transition";

const labelClass = "block mb-1 text-sm font-semibold text-gray-700";

return (

<div className="max-w-4xl mx-auto p-6 space-y-6">

{/* Toggle Button */}

<div className="text-center">
<button
onClick={() => setShowOther(!showOther)}
className="px-6 py-3 rounded-xl font-semibold text-gray-900 bg-gradient-to-r from-[#FFD42A] to-[#FFC107] shadow-lg hover:scale-105 transition"
>
{showOther ? "Close Query Form" : "Other Query"}
</button>
</div>

{/* Query Form */}

{showOther && (

<div className="bg-white p-8 rounded-3xl shadow-xl border space-y-6 animate-fadeIn">

<h3 className="text-2xl font-bold text-gray-800 border-b pb-3">
For Others
</h3>

<div className="grid md:grid-cols-2 gap-5">

<div>
<label className={labelClass}>Name *</label>
<input type="text" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Profession *</label>
<input type="text" className={inputClass}/>
</div>

</div>

<div>
<label className={labelClass}>Mobile Number *</label>
<input type="tel" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Email ID</label>
<input type="email" className={inputClass}/>
</div>

<div className="grid md:grid-cols-3 gap-5">

<div>
<label className={labelClass}>City *</label>
<input type="text" className={inputClass}/>
</div>

<div>
<label className={labelClass}>State / UT *</label>
<input type="text" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Pin Code</label>
<input type="number" className={inputClass}/>
</div>

</div>

{/* Query Fields */}

{queries.map((query, index) => (
<div key={index} className="bg-gray-50 p-4 rounded-xl border">

<label className={labelClass}>
Your Query / Question {index + 1}
</label>

<textarea
rows="4"
value={query}
onChange={(e) => handleChange(e.target.value, index)}
className={inputClass}
/>

</div>
))}

<button
type="button"
onClick={addQuery}
className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm font-medium"
>
+ Add Another Query
</button>

<button className="w-full py-3.5 rounded-xl font-semibold text-gray-900 bg-gradient-to-r from-[#FFD42A] to-[#FFC107] shadow-lg hover:scale-[1.02] transition">
Submit Query / Question
</button>

</div>

)}

</div>

);
};

export default QueryQuestions;