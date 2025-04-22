import React from "react";

export default function AccommodationChecklistForm() {
  const items = {
    roomInspection: [
      "बेड", "बेडशीट", "तकिया", "आवरण", "पंखा", "ट्यूबलाइट / बल्ब", "चार्जिंग पॉइंट",
      "ठीक टपकाव", "ठीक खिड़की", "पर्याप्त रोशनी", "डोर मैट", "कचरा ड्रम/बिन", "अग्नि हेतु यंत्र",
      "तौलिया", "आवश्यक अलर्ट", "मच्छरदानी"
    ],
    cleanliness: [
      "बाथरूम में जल", "साबुन", "जल का निकास", "भरा डस्टबिन", "ठीक दरवाजा", "ठीक खिड़की",
      "स्वच्छता", "जेल", "डस्टबिन", "बाथरूम मैट", "बाल्टी", "मग", "मग्गा", "हैंडवाश", "साफ़ नाली", "फ्लशर"
    ],
    corridor: [
      "ट्यूबलाइट / बल्ब", "डस्टबिन", "स्वच्छता", "पोस्टर या संकेत", "सीसीटीवी"
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData.entries());
    console.log("Submitted Checklist:", entries);
    alert("Form submitted! Check console for data.");
  };

  const renderChecklistGroup = (title, list, groupKey) => (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((item, index) => (
          <div key={index} className="flex flex-col gap-1 bg-gray-100 p-3 rounded-md">
            <label className="font-medium text-gray-700">{item}</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name={`${groupKey}_${item}`}
                  value="available"
                  required
                />
                <span className="text-green-700">उपलब्ध</span>
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name={`${groupKey}_${item}`}
                  value="unavailable"
                  required
                />
                <span className="text-red-600">अनुपलब्ध</span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-10 text-center text-orange-700">
        Khelo India 2025 - आवास स्थल चेकलिस्ट
      </h1>
      <form onSubmit={handleSubmit} className="space-y-12">
        {renderChecklistGroup("1. कमरे की जांच एवं स्थिति", items.roomInspection, "roomInspection")}
        {renderChecklistGroup("2. साफ़-सफाई एवं स्वच्छता", items.cleanliness, "cleanliness")}
        {renderChecklistGroup("3. कॉरिडोर", items.corridor, "corridor")}

        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg"
          >
            जमा करें (Submit)
          </button>
        </div>
      </form>
    </div>
  );
}
