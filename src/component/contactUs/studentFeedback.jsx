import React from "react";

const StudentFeedback = () => {

const inputClass =
"w-full p-3.5 bg-white/90 backdrop-blur border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#FFC107] focus:border-[#FFC107] outline-none transition duration-200 shadow-sm";

const labelClass = "block mb-1 text-sm font-semibold text-gray-700";

return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 p-6">

<div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-10 border border-white/40">

<h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#FFD42A] to-[#FFC107] bg-clip-text text-transparent">
Student Feedback
</h2>

<div className="grid md:grid-cols-2 gap-6">

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

<button className="md:col-span-2 py-3.5 rounded-xl text-gray-900 font-semibold bg-gradient-to-r from-[#FFD42A] to-[#FFC107] shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
Submit Feedback
</button>

</div>

</div>
</div>
);
};

export default StudentFeedback;