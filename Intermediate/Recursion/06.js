// Check if palindrom or not

const solve = (A, s, e) => {
  if (s >= e) {
    return true;
  }
  if (A[s] === A[e]) {
    return solve(A, s + 1, e - 1);
  } else {
    return false;
  }
};

const A = "malayalam";

console.log(solve(A, 0, A.length - 1));

const obje = [
  {
    value: "8ad08c0f7c0bf2ee017c0dd6a699659b",
    label: "Ford Depot Charging Base - A",
    sku: "SKU-00000294"
  },
  {
    value: "8ad08c0f7c7d7410017c7fdea1d4438a",
    label: "Ford Depot Charging Base - B",
    sku: "SKU-00000294"
  },
  {
    value: "8ad0965d7c7d7e7c017c7fdfaba347df",
    label: "Ford Depot Charging Base - C",
    sku: "SKU-00000294"
  },
  {
    value: "8ad08c0f7c7d7410017c7fe0c2505a0a",
    label: "Ford Depot Charging Base - D",
    sku: "SKU-00000294"
  },
  {
    value: "8ad08c0f7c7d7410017c7fe18a556253",
    label: "Ford Depot Charging Base - E",
    sku: "SKU-00000294"
  },
  {
    value: "8ad09f8a7c7d7e79017c7fe28aac095c",
    label: "Ford Depot Charging Base - F",
    sku: "SKU-00000294"
  },
  {
    value: "8ad0824e7c7d741b017c80911aeb2b",
    label: "ternal - Ford Depot Charging Base - G",
    sku: "SKU-00000294"
  },
  {
    value: "8ad098317c3f4ac3017c611e3a5863c6",
    label: "Ford Depot Charging Elite - A",
    sku: "SKU-00000295"
  },
  {
    value: "8ad0965d7c7d7e7c017c80a02b5922b6",
    label: "Ford Depot Charging Elite - B",
    sku: "SKU-00000295"
  },
  {
    value: "8ad0824e7c7d741b017c80a0f5915447",
    label: "Ford Depot Charging Elite - C",
    sku: "SKU-00000295"
  },
  {
    value: "8ad084a67c7d7425017c80a19d507776",
    label: "Ford Depot Charging Elite - D",
    sku: "SKU-00000295"
  },
  {
    value: "8ad098317c7d7e7a017c80a239ad6e62",
    label: "Ford Depot Charging Elite - E",
    sku: "SKU-00000295"
  },
  {
    value: "8ad098317c7d7e7a017c80a2a29070ac",
    label: "Ford Depot Charging Elite - F",
    sku: "SKU-00000295"
  },
  {
    value: "8ad084a67c7d7425017c80a3322b0256",
    label: "Ford Depot Charging Elite - G",
    sku: "SKU-00000295"
  },
  {
    value: "8ad0965d7c3f4adc017c61253f015334",
    label: "One-Time Charger Onboarding",
    sku: "SKU-00000296"
  }
];
