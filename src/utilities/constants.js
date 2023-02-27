import { FaLocationArrow, FaMailBulk, FaMoneyCheckAlt } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdBookOnline } from "react-icons/md";
import image1 from "../assets/Courier-Service-1024x683.jpg";
import image2 from "../assets/courier.png";
import image3 from "../assets/COURIER-SERVICE-PHOTO.webp";
import image4 from "../assets/ayo.jpg";
import image5 from "../assets/brooke.jpg";
import image6 from "../assets/ian.jpg";
import brand1 from "../assets/brand-01.png";
import brand2 from "../assets/brand-02.png";
import brand3 from "../assets/brand-03.png";
import brand4 from "../assets/brand-04.png";
import brand5 from "../assets/brand-05.png";
import brand6 from "../assets/brand-06.png";
import brand7 from "../assets/brand-07.png";
import brand8 from "../assets/brand-08.png";
import brand9 from "../assets/brand-09.png";
import brand10 from "../assets/brand-10.svg";
import brand11 from "../assets/brand-11.png";

export const packDoc = [
  { item: "Activated Credit/Debit/ATM Card", type: "Prohibited", remark: "" },
  { item: "Activated sim cards", type: "Restricted", remark: "" },
  { item: "Advertising brochures, pamphlets", type: "Document", remark: "" },
  { item: "Air Guns", type: "Prohibited", remark: "" },
  { item: "Airline tickets - blank stock", type: "Prohibited", remark: "" },
  {
    item: "Airline tickets - issued/validated",
    type: "Restricted",
    remark: "",
  },
  {
    item: "Alcoholic beverages",
    type: "Package",
    remark:
      "Items to be inspected & certified by the Standard Authority of the destination  country. Items must be accompanied by Certificate of Analysis/Conformance.",
  },
  { item: "Animal products", type: "Package", remark: "" },
  { item: "Animal skins", type: "Restricted", remark: "" },
  { item: "Annual reports", type: "Document", remark: "" },
  { item: "Antiques", type: "Prohibited", remark: "" },
  { item: "Banderols, tax stickers", type: "Restricted", remark: "" },
  { item: "Bill of lading", type: "Document", remark: "" },
  {
    item: "Biological Substance Category B, UN3373",
    type: "Package",
    remark: "",
  },
  {
    item: "Blank forms",
    type: "Document",
    remark: "Max weight: 10kgs (22lbs)",
  },
  { item: "Blueprints", type: "Document", remark: "" },
  {
    item: "Booklets, brochures - non-advertising",
    type: "Document",
    remark: "",
  },
  {
    item: "Books - hardback, paperback (non-commercial use)",
    type: "Document",
    remark: "Max weight: 10kgs (22lbs)",
  },
  { item: "Bullion - of any precious metal", type: "Prohibited", remark: "" },
  { item: "Bunker oil sample for analysis", type: "Package", remark: "" },
  { item: "Business cards", type: "Document", remark: "" },
  { item: "Calendars", type: "Package", remark: "" },
  { item: "Cash letters", type: "Restricted", remark: "" },
  { item: "Cashlike negotiable instruments", type: "Prohibited", remark: "" },
  { item: "Catalogs", type: "Document", remark: "Max quantity: 1" },
  { item: "Ceramic products", type: "Package", remark: "" },
  { item: "Certificates", type: "Document", remark: "" },
  { item: "Charts, graphs", type: "Document", remark: "" },
  { item: "Checks - blank", type: "Restricted", remark: "" },
  { item: "Checks - canceled", type: "Restricted", remark: "" },
  { item: "Checks - cashier", type: "Restricted", remark: "" },
  {
    item: "Chemicals - non-hazardous",
    type: "Package",
    remark:
      "Items to be inspected & certified by the Standard Authority of the destination  country. Items must be accompanied by Certificate of Analysis/Conformance.",
  },
  { item: "Cigarettes, cigars and e-cigar", type: "Restricted", remark: "" },
  { item: "Circuits, circuit boards", type: "Package", remark: "" },
  { item: "Clocks", type: "Package", remark: "" },
  { item: "Coal, firewood", type: "Package", remark: "" },
  { item: "Coffee", type: "Package", remark: "" },
  { item: "Commemorative coins and medals", type: "Restricted", remark: "" },
  {
    item: "Communications equipment",
    type: "Package",
    remark:
      "Consignee must obtain permit from the National Communications Authority before clearance can be completed",
  },
  { item: "Completed Forms", type: "Document", remark: "" },
  {
    item: "Computer components and parts",
    type: "Package",
    remark:
      "Items to be inspected & certified by the Standard Authority of the destination  country. Items must be accompanied by Certificate of Analysis/Conformance.",
  },
  {
    item: "Computer software",
    type: "Package",
    remark:
      "Items to be inspected & certified by the Standard Authority of the destination  country. Items must be accompanied by Certificate of Analysis/Conformance.",
  },
  { item: "Contract", type: "Document", remark: "" },
  { item: "Cosmetics", type: "Package", remark: "" },
  { item: "Cotton", type: "Package", remark: "" },
  { item: "Credit note", type: "Document", remark: "" },
  { item: "Currency", type: "Prohibited", remark: "" },
  {
    item: "Dangerous goods, hazardous materials, combustable materials",
    type: "Package",
    remark: "",
  },
  { item: "Deeds", type: "Document", remark: "" },
  { item: "Diaries", type: "Package", remark: "" },
  { item: "Diplomatic mail", type: "Document", remark: "" },
  { item: "Diplomatic Material", type: "Document", remark: "" },
  { item: "Diskettes", type: "Package", remark: "" },
  { item: "Documents - general business", type: "Document", remark: "" },
  {
    item: "Drugs - non-prescription",
    type: "Package",
    remark: "Consignee must obtain approval from the Food & Drug Board",
  },
  {
    item: "Drugs - prescription",
    type: "Package",
    remark: "Consignee must obtain approval from the Food & Drug Board",
  },
  { item: "Educational material - printed", type: "Document", remark: "" },
  { item: "Electro-shockers (tasers)", type: "Restricted", remark: "" },
  {
    item: "Electronic equipment",
    type: "Package",
    remark:
      "Items to be inspected & certified by the Standard Authority of the destination  country. Items must be accompanied by Certificate of Analysis/Conformance.",
  },
  {
    item: "Electronic games",
    type: "Package",
    remark:
      "Items to be inspected & certified by the Standard Authority of the destination  country. Items must be accompanied by Certificate of Analysis/Conformance.",
  },
  { item: "Event tickets", type: "Restricted", remark: "" },
  { item: "Examination papers", type: "Document", remark: "" },
  {
    item: "Explosives, devices, ammuniton - imitation",
    type: "Prohibited",
    remark: "",
  },
  { item: "Explosives, weapons", type: "Prohibited", remark: "" },
  { item: "Eye glasses, contacts", type: "Package", remark: "" },
  { item: "Fabrics, fabric samples", type: "Package", remark: "" },
  { item: "Film - 8mm, 16mm, 35mm", type: "Package", remark: "" },
  { item: "Film - entertainment", type: "Package", remark: "" },
  { item: "Films - promotional, training", type: "Package", remark: "" },
  {
    item: "Financial and monetary commodities",
    type: "Restricted",
    remark: "",
  },
  { item: "Fire extinguishers", type: "Package", remark: "" },
  { item: "Firearms (complete), ammunition", type: "Prohibited", remark: "" },
  { item: "Firearms parts", type: "Prohibited", remark: "" },
  {
    item: "Firearms, weapons - imitation/replica",
    type: "Prohibited",
    remark: "",
  },
  {
    item: "Foodstuffs",
    type: "Package",
    remark: "Must obtain approval from the Food and Drug Board",
  },
  { item: "Fotolithos", type: "Package", remark: "" },
  { item: "Furs", type: "Prohibited", remark: "" },
  { item: "Gambling devices", type: "Prohibited", remark: "" },
  { item: "Gift cards", type: "Restricted", remark: "" },
  { item: "Glass products", type: "Package", remark: "" },
  {
    item: "Human remains or ashes in any form",
    type: "Prohibited",
    remark: "",
  },
  { item: "Human remains, including ashes", type: "Prohibited", remark: "" },
  { item: "Humanitarian Aid", type: "Package", remark: "" },
  {
    item: "Hunting trophies, animal part/remain",
    type: "Prohibited",
    remark: "",
  },
  { item: "Identity document", type: "Document", remark: "" },
  { item: "Illegal goods", type: "Prohibited", remark: "" },
  {
    item: "Industrial equipment",
    type: "Package",
    remark: "Must obtain approval from the Food and Drug Board",
  },
  { item: "Invoices - blank", type: "Package", remark: "" },
  { item: "Invoices - not blank", type: "Document", remark: "" },
  { item: "Isopropanol", type: "Package", remark: "" },
  { item: "Ivory", type: "Prohibited", remark: "" },
  { item: "Jewelery", type: "Prohibited", remark: "" },
  { item: "Labels", type: "Document", remark: "Max quantity: 1" },
  { item: "Leather goods", type: "Package", remark: "" },
  { item: "Letter, correspondence", type: "Document", remark: "" },
  { item: "Liquids - non-hazardous", type: "Package", remark: "" },
  { item: "Lithium batteries", type: "Package", remark: "" },
  { item: "Live animals, fish, birds", type: "Prohibited", remark: "" },
  { item: "Loose (semi) precious stones", type: "Prohibited", remark: "" },
  { item: "Lottery tickets", type: "Restricted", remark: "" },
  {
    item: "Machine, electronics parts",
    type: "Package",
    remark:
      "Items to be inspected & certified by the Standard Authority of the destination  country. Items must be accompanied by Certificate of Analysis/Conformance.",
  },
  {
    item: "Magazines, periodicals, journals",
    type: "Document",
    remark: "Max weight: 10kgs (22lbs)",
  },
  {
    item: "Manuals - technical",
    type: "Document",
    remark:
      "Consignee must obtain permit from the National Communications Authority before clearance can be completed",
  },
  { item: "Manuscripts", type: "Document", remark: "" },
  { item: "Maps", type: "Document", remark: "" },
  { item: "Marble products", type: "Package", remark: "" },
  {
    item: "Measuring apparatus",
    type: "Package",
    remark:
      "Items to be inspected & certified by the Standard Authority of the destination  country. Items must be accompanied by Certificate of Analysis/Conformance.",
  },
  {
    item: "Media storage device",
    type: "Package",
    remark:
      "Items to be inspected & certified by the Standard Authority of the destination  country. Items must be accompanied by Certificate of Analysis/Conformance.",
  },
  { item: "Medical Examination Result", type: "Document", remark: "" },
  {
    item: "Medical samples",
    type: "Package",
    remark:
      "Items to be inspected & certified by the Standard Authority of the destination  country. Items must be accompanied by Certificate of Analysis/Conformance.",
  },
  { item: "Medical, dental supplies/equipment", type: "Package", remark: "" },
  { item: "Medicinal cannabis", type: "Prohibited", remark: "" },
  {
    item: "Microfiche, microfilm",
    type: "Document",
    remark: "Max quantity: 1",
  },
  { item: "Military equipment", type: "Restricted", remark: "" },
  {
    item: "Mobile phones, accessories, components",
    type: "Package",
    remark: "",
  },
  { item: "Money or postal orders", type: "Restricted", remark: "" },
  { item: "Money orders", type: "Restricted", remark: "" },
  { item: "Music - printed, manuscript", type: "Document", remark: "" },
  {
    item: "Negatives - including x-rays, films",
    type: "Document",
    remark: "Max quantity: 1",
  },
  { item: "Oil products", type: "Package", remark: "" },
  { item: "Paper patterns - for apparel", type: "Package", remark: "" },
  { item: "Passports", type: "Document", remark: "" },
  {
    item: "Perishables",
    type: "Package",
    remark:
      "Items to be inspected & certified by the Standard Authority of the destination  country. Items must be accompanied by Certificate of Analysis/Conformance.",
  },
  { item: "Personal effects", type: "Package", remark: "" },
  { item: "Personal mail", type: "Document", remark: "" },
  { item: "Photographs", type: "Document", remark: "" },
  {
    item: "Photographs - as part of business reports",
    type: "Document",
    remark: "",
  },
  {
    item: "Plans, drawings - for architectural, industrial, engineering purposes",
    type: "Document",
    remark: "",
  },
  { item: "Plant products", type: "Package", remark: "" },
  { item: "Plants", type: "Package", remark: "" },
  { item: "Plastic and articles thereof", type: "Package", remark: "" },
  { item: "Pornography", type: "Prohibited", remark: "" },
  { item: "Postal envelopes", type: "Package", remark: "" },
  { item: "Pre-paid phone cards", type: "Restricted", remark: "" },
  { item: "Precious metals, stones", type: "Prohibited", remark: "" },
  { item: "Price lists", type: "Document", remark: "" },
  { item: "Price tickets for garments", type: "Document", remark: "" },
  { item: "Printed matter", type: "Document", remark: "" },
  {
    item: "Radar equipment, transmitters, receivers",
    type: "Package",
    remark:
      "Items to be inspected & certified by the Standard Authority of the destination  country. Items must be accompanied by Certificate of Analysis/Conformance.",
  },
  { item: "Radios, radio equipment or parts", type: "Package", remark: "" },
  { item: "Replica ammunition", type: "Prohibited", remark: "" },
  { item: "Rubber made products", type: "Package", remark: "" },
  { item: "Seeds", type: "Package", remark: "" },
  { item: "Ship manifest - computer generated", type: "Document", remark: "" },
  { item: "Ship spares", type: "Package", remark: "" },
  { item: "Shipping schedules", type: "Document", remark: "" },
  { item: "Shoes", type: "Package", remark: "" },
  { item: "Slides", type: "Package", remark: "" },
  { item: "Soil samples", type: "Package", remark: "" },
  { item: "Sports equipment", type: "Package", remark: "" },
  { item: "Stationery", type: "Package", remark: "" },
  { item: "Stone, mineral samples for analysis", type: "Package", remark: "" },
  { item: "Tea", type: "Package", remark: "" },
  {
    item: "Telecommunication equipment",
    type: "Package",
    remark:
      "Items to be inspected & certified by the Standard Authority of the destination  country. Items must be accompanied by Certificate of Analysis/Conformance.",
  },
  {
    item: "Televisions, television equipment",
    type: "Package",
    remark:
      "1. This includes all electrical appliances, products and cables. 2. SGS through it affiliates throughout the world to carry out inspection of all used and waste electrical, electronic and tire and an electronic declaration issued before shipments would be cleared",
  },
  { item: "Textile articles", type: "Package", remark: "" },
  { item: "Tickets (blank stock)", type: "Restricted", remark: "" },
  { item: "Tires - used", type: "Package", remark: "" },
  { item: "Tobacco", type: "Restricted", remark: "" },
  { item: "Toy guns", type: "Restricted", remark: "" },
  {
    item: "Toys",
    type: "Package",
    remark:
      "Items to be inspected & certified by the Standard Authority of the destination  country. Items must be accompanied by Certificate of Analysis/Conformance.",
  },
  { item: "Transparencies", type: "Document", remark: "" },
  { item: "Traveler's checks", type: "Prohibited", remark: "" },
  { item: "Unactivated Credit/Debit/ATM Card", type: "Document", remark: "" },
  { item: "Unused stamps", type: "Restricted", remark: "" },
  { item: "Visa applications", type: "Document", remark: "" },
  { item: "Vouchers/tokens", type: "Restricted", remark: "" },
  { item: "Wallpaper", type: "Package", remark: "" },
  { item: "Watches", type: "Restricted", remark: "" },
  { item: "Wigs, hair pieces", type: "Package", remark: "" },
  {
    item: "X-ray machines",
    type: "Package",
    remark:
      "Please contact destination prior to accepting shipment for any licenses or permit requirements",
  },
];

export const trackInfo = [
  {
    id: "WPC01234567891011-CARGO",
    address: {
      shipper: {
        name: "Rainbow Pvt.",
        number: "09876534561",
        address: "GA-236-7865, Lybia Quarters, Madina, Ghana",
        email: "benjerosani99@gmail.com",
      },
      receiver: {
        name: "Mohan J.",
        number: "09876534561",
        address: "GW-236-7065, Sky High, Ashongman Estate, Ghana",
        email: "sanialhassan853@gmail.com",
      },
    },
    shipmentInfo: {
      shipmentNo: "WPC01234567891011-CARGO",
      shipmentType: "Truckload",
      courier: "",
      mode: "Land Shipping",
      paymentMode: "Cash",
      totalFreight: 500,
      carrier: "DHL",
      carrierReferenceNo: "",
      departureTime: "21:00",
      origin: "Mumbai",
      destination: "Dehli",
      pickupDate: "2022-10-15",
      pickupTime: "18:00",
      expectedDeliveryDate: "2022-10-16",
      comment: "",
    },
    packages: [
      {
        id: 111,
        qty: 1,
        pieceType: "Pallet",
        desc: "Machine",
        lenCM: 25,
        widthCM: 15,
        heightCM: 8,
        weightKG: 120,
        totalVolumetricWeight: 0.6,
        totalVolume: 0.003,
        totalActualWeight: 120,
      },
    ],
    satelite: {
      long: 10000,
      lat: 10000,
    },
    history: [
      {
        id: "01",
        date: "2022-10-15",
        time: "14:52",
        location: "Mumbai, Maharashtra, India",
        status: "in Transit",
        updatedBy: "keezy123",
        remark: "item Received",
      },
    ],
  },
];

export const marqueBrands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
];

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "ship with us",
    url: "/shipwithus",
  },
  {
    id: 3,
    text: "franchise",
    url: "/franchise",
  },
  {
    id: 4,
    text: "track",
    url: "/track",
  },
  {
    id: 5,
    text: "my account",
    url: "/myaccount",
  },
  {
    id: 6,
    text: "cart",
    url: "/cart",
  },
];

export const services = [
  { id: 1, service: "shipping of goods" },
  { id: 2, service: "tracking goods" },
  { id: 3, service: "delivery services" },
  { id: 4, service: "many more" },
];

export const contactInfo = [
  { id: 1, head: "location", info: "304 North Cardinal St. Dorchester" },
  { id: 2, head: "opening hours", info: "8:00 AM - 6:00 PM" },
  { id: 3, head: "phone number", info: "(+233) 54 985 3041" },
  { id: 4, head: "email", info: "deliveryservices@gmail.com" },
];

export const serviceTypes = [
  "courier",
  "shipping",
  "transportation",
  "delivery",
];

export const shipmentPurpose = [
  "Gift",
  "Commercial",
  "Personal, Not for Resale",
  "Sample",
  "Return for Repair",
  "Return after Repair",
  "Return to Seller",
];

export const serviceCost = [
  {
    id: 1,
    icon: <FaLocationArrow />,
    service: "location",
    desc: "enter origin and destination",
    cost: 60,
  },
  {
    id: 2,
    icon: <TbListDetails />,
    service: "details",
    desc: "complete your shipment details",
    cost: 70,
  },
  {
    id: 3,
    icon: <FaMailBulk />,
    service: "send",
    desc: "proceed with online booking",
    cost: 60,
  },
];

export const heroItems = [
  {
    id: 1,
    title: "As industry pioneers,",
    text: "We connect over 220 nations and territories around the world. With the combined strength of more than 380,000 employees, we provide integrated services and customized solutions for managing and conveying letters, products, and information.",
    listItems: [
      "Worry-free services",
      "Trusted & experinced",
      "Quality work",
      "Service guarantee",
    ],
    img: image1,
  },
  {
    id: 2,
    title: "We provide eco-freindly Logistic services",
    text: "In order to foster collaboration, the organization brings together clients, research and academic institutions, industrial partners, and logistics professionals within the DHL business divisions. We do this by providing environmentally friendly logistic services. As a pioneer in the logistics sector, DHL strategically invests in the study of trends and the creation of solutions.",
    img: image2,
  },
  {
    id: 3,
    title: "It's Never Been Easier to Track Your Shipment.",
    text: "Business is built on the foundation of sustainable supply chains. We are the green logistics industry leader, providing an unrivalled range of green logistics solutions. With the help of our clients all over the world, we are reducing emissions while maintaining business operations.",
    img: image3,
  },
];

export const easyShipItems = [
  {
    id: 1,
    icon: <BsFillPersonLinesFill />,
    title: "Create your account",
    content: "Deliver faster to India's most rural areas",
  },
  {
    id: 2,
    icon: <MdBookOnline />,
    title: "Conduct all Operations Online",
    content:
      "Utilize our RTO prediction and address validation tools to decrease order returns",
  },
  {
    id: 3,
    icon: <FaMoneyCheckAlt />,
    title: "Send More Get More",
    content: "Easily integrate with diverse sales channels",
  },
];

export const customerReviews = [
  {
    id: 1,
    name: "Solomon Elliot",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, soluta. Ad veniam harum, adipisci rem necessitatibus placeat explicabo ea.",
    img: image4,
  },
  {
    id: 2,
    name: "Gideon Stewart",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, soluta. Ad veniam harum, adipisci rem necessitatibus placeat explicabo ea. Numquam, necessitatibus repudiandae? Fuga vitae nostrum praesentium culpa maiores aliquid saepe quas, enim magnam perferendis necessitatibus.",
    img: image5,
  },
  {
    id: 3,
    name: "Keezy Fuller",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, soluta. Ad veniam harum, adipisci rem necessitatibus placeat explicabo ea. Numquam, necessitatibus repudiandae? Fuga vitae nostrum praesentium culpa maiores aliquid saepe quas.",
    img: image6,
  },
];
