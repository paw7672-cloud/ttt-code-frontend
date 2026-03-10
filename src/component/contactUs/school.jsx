import React from "react";

const School = () => {

const inputClass =
"w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFC107] outline-none";

const labelClass = "text-sm font-semibold text-gray-700";

return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 p-6">

<div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-10 space-y-12">

<h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#FFD42A] to-[#FFC107] bg-clip-text text-transparent">
Query / Question Form
</h2>

{/* School Institution Form */}

<div className="space-y-6">

<h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
For School / Educational Institution
</h3>

<div>
<label className={labelClass}>
Name of the School / Educational Institution *
</label>
<input type="text" className={inputClass}/>
</div>

<div className="grid md:grid-cols-2 gap-5">

<div>
<label className={labelClass}>Your Name *</label>
<input type="text" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Designation *</label>
<input type="text" className={inputClass}/>
</div>

</div>

<div className="grid md:grid-cols-2 gap-5">

<div>
<label className={labelClass}>Phone Number (Institution)</label>
<input type="tel" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Phone Number (Your)</label>
<input type="tel" className={inputClass}/>
</div>

</div>

<div className="grid md:grid-cols-2 gap-5">

<div>
<label className={labelClass}>Email ID (Institution)</label>
<input type="email" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Email ID (Your)</label>
<input type="email" className={inputClass}/>
</div>

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

<div>
<label className={labelClass}>Your Query / Question</label>
<textarea rows="4" className={inputClass}></textarea>
</div>

<button className="w-full py-3 rounded-xl font-semibold text-gray-900 bg-gradient-to-r from-[#FFD42A] to-[#FFC107] shadow-md hover:scale-[1.02] transition">
Submit Query / Question
</button>

</div>

{/* Others Form */}

<div className="space-y-6">

<h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
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

<div>
<label className={labelClass}>Your Query / Question</label>
<textarea rows="4" className={inputClass}></textarea>
</div>

<button className="w-full py-3 rounded-xl font-semibold text-gray-900 bg-gradient-to-r from-[#FFD42A] to-[#FFC107] shadow-md hover:scale-[1.02] transition">
Submit Query / Question
</button>

</div>

</div>
</div>
);
};

export default School;