import React from "react";

const StudentFeedback = () => {

const inputClass =
"w-full p-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none";

const labelClass = "block mb-1 text-sm font-semibold text-gray-700";

return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 p-6">

<div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8">

<h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
Student Feedback
</h2>

<div className="grid md:grid-cols-2 gap-5">

<div className="md:col-span-2">
<label className={labelClass}>Student Name</label>
<input type="text" className={inputClass}/>
</div>

<div className="md:col-span-2">
<label className={labelClass}>Parent Name</label>
<input type="text" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Student Mobile</label>
<input type="tel" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Parent Mobile</label>
<input type="tel" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Student Email</label>
<input type="email" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Parent Email</label>
<input type="email" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Age</label>
<input type="number" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Class</label>
<input type="text" className={inputClass}/>
</div>

<div className="md:col-span-2">
<label className={labelClass}>School / Institution</label>
<input type="text" className={inputClass}/>
</div>

<div className="md:col-span-2">
<label className={labelClass}>Feedback</label>
<textarea rows="4" className={inputClass}/>
</div>

<button className="md:col-span-2 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600">
Submit Feedback
</button>

</div>

</div>
</div>
);
};

export default StudentFeedback;