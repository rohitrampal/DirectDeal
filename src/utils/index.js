export const navOptions = [

  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "listing",
    label: "All Products",
    path: "/product/listing/all-products",
  },
  {
    id: "listingCar",
    label: "Car",
    path: "/product/listing/car",
  },
  {
    id: "listingPhone",
    label: "Phone",
    path: "/product/listing/phone",
  },
  {
    id: "listingHelicopter",
    label: "Helicopter",
    path: "/product/listing/helicopter",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Manage All Products",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Add New Product",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Admin",
      },
      {
        id: "customer",
        label: "customer",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Enter price",
    label: "Price",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Category",
    componentType: "select",
    options: [
      {
        id: "car",
        label: "car",
      },
      {
        id: "phone",
        label: "phone",
      },
      {
        id: "helicopter",
        label: "helicopter",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Enter deliveryInfo",
    label: "Delivery Info",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "On Sale",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "On Sale",
      },
      {
        id: "no",
        label: "On Rent",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Enter Price Drop",
    label: "Price Drop",
    componentType: "input",
  },
];



export const firebaseConfig = {
  // apiKey : process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
  // authDomain : process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ,
  // projectId : process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ,
  // storageBucket : process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ,
  // messagingSenderId : process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ,
  // appId : process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId : process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ,
  apiKey: "AIzaSyCFwu0i64Vhy44NsoxlVBLjBSIupV-AM5k",
  authDomain: "next-js-ecommerce-2023-58294.firebaseapp.com",
  projectId: "next-js-ecommerce-2023-58294",
  storageBucket: "next-js-ecommerce-2023-58294.appspot.com",
  messagingSenderId: "948194130889",
  appId: "1:948194130889:web:49fb2f7735d5f88a47c618",
  measurementId: "G-HR2FPM8SCB"
};
// export const firebaseStroageURL =
//   "YOUR_FIREBASE_STROAGE_URL";

export const firebaseStroageURL ="gs://next-js-ecommerce-2023-58294.appspot.com";
// process.env.NEXT_PUBLIC_FIREBASE_STORAGE_URL


  // gs://next-js-ecommerce-2023-58294.appspot.com

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Enter your full name",
    label: "Full Name",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Enter your full address",
    label: "Address",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Enter your city",
    label: "City",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Enter your country",
    label: "Country",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Enter your postal code",
    label: "Postal Code",
    componentType: "input",
  },
];
