import { Product } from '@/types';
import image1 from '@/images/image1.png'
import image2 from '@/images/image9.png'
import image3 from '@/images/image8.png'
import image4 from '@/images/image11.png'
import image5 from '@/images/image12.png'
import image6 from '@/images/image10.png'
import image7 from '@/images/image13.png'
import image8 from '@/images/image22.png'
import image9 from '@/images/image23.png'
import image10 from '@/images/image24.png'
import image11 from '@/images/image25.png'
import image12 from '@/images/image26.png'
import image13 from '@/images/image27.png'
import image14 from '@/images/image29.png'
import image15 from '@/images/image30.png'
import image16 from '@/images/image31.png'
import image17 from '@/images/image32.png'
import image18 from '@/images/image33.png'
import image19 from '@/images/image34.png'
import image20 from '@/images/image35.png'
import image21 from '@/images/image36.png'
import image22 from '@/images/image37.png'
import image23 from '@/images/image38.png'
import image24 from '@/images/image39.png'
import image25 from '@/images/image40.png'
import image26 from '@/images/image41.png'
import image27 from '@/images/image42.png'
import image28 from '@/images/image43.png'
import image29 from '@/images/image28.png'
import image30 from '@/images/image45.png'
import image31 from '@/images/image46.png'
import image32 from '@/images/image47.png'
import image33 from '@/images/image48.png'
import image34 from '@/images/image49.png'
import image35 from '@/images/image50.png'
import image36 from '@/images/image51.png'
import image37 from '@/images/image52.png'
import image38 from '@/images/image53.png'
import image39 from '@/images/image54.png'
import image40 from '@/images/image55.png'
import image41 from '@/images/image56.png'
import image42 from '@/images/image57.png'
import image43 from '@/images/image58.png'
import image44 from '@/images/image59.png'
import image45 from '@/images/image60.png'
import image46 from '@/images/image61.png'
import image47 from '@/images/image62.png'
import image48 from '@/images/image63.png'


// preview images 
import preview1_3 from '@/images/image5.png'
import preview2_3 from '@/images/image6.png'
import preview1_1 from '@/images/image14.png'
import preview1_2 from '@/images/image15.png'
import preview2_1 from '@/images/image2.png'  
import preview2_2 from '@/images/image16.png' 
import preview1_4 from '@/images/image17.png'
import preview2_4 from '@/images/image18.png'
import preview1_6 from '@/images/image20.png'
import preview2_6 from '@/images/image21.png'     


export const PRODUCTS: Product[] = [
{
"id": "1",
"name": "Balea Professional Shampooing Cuir Chevelu Sensible",
"price": 45,
"category": "skincare",
"type": "Shampooings",
"image": image1,
"images": [
image1,
preview1_1,
preview1_2
],
"description": "Shampooing doux sans silicones qui apaise le cuir chevelu sensible et laisse les cheveux souples et brillants.",
"fullDescription": "Formulé pour l'équilibre du microbiome du cuir chevelu, ce shampooing associe panthénol et extrait de thé blanc pour calmer les irritations et hydrater en douceur. Idéal pour les cuirs chevelus sensibles ou secs. Mousse fine, rinçage facile, usage fréquent.",
"rating": 4.7,
"reviews": 265,
"ingredients": ["Panthénol", "Extrait de thé blanc", "Tensioactifs doux d'origine végétale", "Glycérine"],
"skinType": ["Cuir chevelu sensible", "Cheveux secs"],
"usage": "Masser sur cuir chevelu et cheveux mouillés pendant 2–3 minutes puis rincer. Répéter si nécessaire.",
"inStock": true,
"featured": false,
"new": true
},
{
"id": "2",
"name": "Balea Professional Keratin Repair Shampoo",
"price": 45,
"category": "skincare",
"type": "Shampooings",
"image": image2,
"images": [
image2,
preview2_1,
preview2_2
],
"description": "Shampooing réparateur sans silicones à la kératine et aux peptides. Renforce la fibre et aide à réduire la casse.",
"fullDescription": "Grâce à sa technologie pro-strength, ce shampooing nourrit la fibre capillaire avec de la kératine et des peptides pour combler les zones fragilisées. Les cheveux sont plus résistants, brillants et faciles à coiffer. Idéal pour cheveux cassants et abîmés.",
"rating": 4.6,
"reviews": 318,
"ingredients": ["Kératine", "Peptides", "Panthénol", "Agents conditionneurs légers"],
"skinType": ["Cheveux cassants", "Cheveux abîmés"],
"usage": "Appliquer sur cheveux mouillés, masser délicatement, rincer. Pour un résultat optimal, poursuivre avec un soin réparateur.",
"inStock": true,
"featured": true,
"new": true
},
{
"id": "3",
"name": "Balea Professional Aqua Hyaluron Shampoo",
"price": 45,
"category": "skincare",
"type": "Shampooings",
"image": image3,
"images": [
 image3,
preview1_3,
preview2_3
],
"description": "Shampooing hydratant sans silicones à l'acide hyaluronique et à l'aloe vera. Redonne souplesse et brillance.",
"fullDescription": "La formule infusée d'acide hyaluronique et d'aloe vera (jus jusqu'à 40%) attire et retient l'humidité au cœur de la fibre. Les cheveux secs et déshydratés retrouvent confort, douceur et vitalité. Mousse aérienne, parfum frais.",
"rating": 4.7,
"reviews": 241,
"ingredients": ["Acide hyaluronique", "Aloe vera", "Glycérine", "Tensioactifs doux"],
"skinType": ["Cheveux secs", "Cheveux déshydratés"],
"usage": "Répartir sur cuir chevelu et longueurs mouillés, masser puis rincer abondamment. Peut s'utiliser au quotidien.",
"inStock": true,
"featured": false,
"new": true
},
{
"id": "4",
"name": "dmBio Huile de Coco Vierge 300 ml",
"price": 70,
"category": "skincare",
"type": "Huiles végétales",
"image": image4,
"images": [
 image4,
preview1_4,
preview2_4,
],
"description": "Huile de coco 100% vierge, biologique, pressée à froid. Non raffinée et non désodorisée.",
"fullDescription": "Polyvalente, l'huile de coco dmBio est issue de l'agriculture biologique. Sa texture fondante et son arôme naturel conviennent à la cuisine (cuisson douce, pâtisserie) et aux rituels beauté (peau, cheveux). Vegan, bocal 300 ml.",
"rating": 70,
"reviews": 512,
"ingredients": ["100% huile de noix de coco biologique"],
"skinType": ["Tous types de peau et de cheveux"],
"usage": "Chauffer légèrement si nécessaire. En beauté: appliquer une petite quantité sur peau ou pointes des cheveux.",
"inStock": true,
"featured": false,
"new": false
},
{
"id": "5",
"name": "Balea Crème de Nuit Niacinamide 10%",
"price": 100,
"category": "skincare",
"type": "Crèmes de nuit",
"image": image5,
"images": [
image5,
"https://source.unsplash.com/800x800/?niacinamide,skincare",
"https://source.unsplash.com/800x800/?face,cream,jar"
],
"description": "Crème de nuit sans parfum avec 10% de niacinamide et 5% d'huile de pépins de raisin. Lisse le grain de peau et soutient la régénération nocturne.",
"fullDescription": "Cette formule légère et non parfumée associe 10% de niacinamide pour affiner l'apparence des pores et renforcer la barrière cutanée, à 5% d'huile de pépins de raisin émolliente. Au réveil, la peau paraît plus nette, souple et équilibrée.",
"rating": 4.7,
"reviews": 403,
"ingredients": ["Niacinamide (10%)", "Huile de pépins de raisin (5%)", "Glycérine", "Panthénol"],
"skinType": ["Tous types de peau, même sensibles", "Peaux mixtes à grasses"],
"usage": "Appliquer le soir sur peau propre après le sérum. Éviter le contour immédiat des yeux. Utiliser une protection solaire le matin.",
"inStock": true,
"featured": true,
"new": false
},
{
"id": "6",
"name": "Balea Professional Oil Repair Intensiv Shampoo",
"price": 45,
"category": "skincare",
"type": "Shampooings",
"image": image6,
"images": [
image6,
preview1_6,
preview2_6
],
"description": "Shampooing réparation intense sans silicones avec complexe de 3 huiles et kératine. Nourrit les cheveux très secs et abîmés.",
"fullDescription": "La formule riche combine un complexe de trois huiles végétales et de la kératine pour lisser la surface du cheveu, réduire la casse et redonner de la brillance. Idéal pour cheveux extrêmement desséchés, traités ou fragilisés.",
"rating": 4.6,
"reviews": 289,
"ingredients": ["Complexe de 3 huiles végétales", "Kératine", "Glycérine", "Agents conditionneurs"],
"skinType": ["Cheveux très abîmés", "Cheveux secs"],
"usage": "Appliquer sur cuir chevelu et longueurs mouillés, masser délicatement puis rincer. Compléter par un après‑shampooing nourrissant.",
"inStock": true,
"featured": false,
"new": false
},
{
"id": "7",
"name": "Balea Spray Thermoprotecteur 220°C",
"price": 50,
"category": "skincare",
"type": "Protection chaleur",
"image": image7,
"images": [
image7,
"https://source.unsplash.com/800x800/?hairstyle,styling",
"https://source.unsplash.com/800x800/?spray,bottle,beauty"
],
"description": "Spray bi‑phase thermoprotecteur jusqu'à 220°C. Protège pendant le coiffage et laisse les cheveux souples et brillants.",
"fullDescription": "Sa formule en deux phases associe des polymères protecteurs de chaleur à des agents soin (panthénol, huiles légères) pour limiter les dommages liés aux appareils chauffants. Effet anti‑frisottis et toucher doux sans alourdir, vegan.",
"rating": 4.5,
"reviews": 176,
"ingredients": ["Polymères thermoprotecteurs", "Panthénol", "Huiles légères", "Glycérine"],
"skinType": ["Tous types de cheveux"],
"usage": "Agiter pour mélanger les deux phases. Vaporiser uniformément sur cheveux humides ou secs avant brushing, lissage ou bouclage. Ne pas rincer.",
"inStock": true,
"featured": true,
"new": true
},
 {
    "id": "8",
    "name": "alverde Pflege‑Öl All‑in‑One",
    "price": 100,
    "category": "skincare",
    "type": "Huile de soin",
    "image": image8,
    "images": [
      image8,
      "https://source.unsplash.com/800x800/?body,oil,bottle",
      "https://source.unsplash.com/800x800/?natural,cosmetics,oil"
    ],
    "description": "Huile de soin tout‑en‑un pour visage, corps et cheveux. Nourrit, assouplit et laisse un fini satiné. Cosmétique naturelle certifiée, vegan.",
    "fullDescription": "Formule minimaliste riche en huiles végétales (tournesol, amande douce, coco) et vitamine E. Multi‑usage: massage, soin du corps, huile de bain ou des pointes. Sans silicones ni microplastiques, parfum d'origine naturelle.",
    "rating": 4.7,
    "reviews": 324,
    "ingredients": ["Huiles végétales (tournesol, amande douce, coco)", "Vitamine E", "Parfum d'origine naturelle"],
    "skinType": ["Peaux sèches", "Peaux normales", "Cheveux secs"],
    "usage": "Appliquer quelques gouttes sur peau légèrement humide. Sur cheveux: 1‑3 gouttes sur les pointes ou en bain d’huile avant shampooing.",
    "inStock": true,
    "featured": false,
    "new": false
  },
  {
    "id": "9",
    "name": "Balea Natural Beauty Huile de Soin",
    "price": 60,
    "category": "skincare",
    "type": "Huile de soin",
    "image": image9,
    "images": [
      image9,
      "https://source.unsplash.com/800x800/?hemp,beauty,oil",
      "https://source.unsplash.com/800x800/?green,botanical,cosmetics"
    ],
    "description": "Huile de soin légère pour le corps et les cheveux. Fini non gras, parfum doux. Vegan.",
    "fullDescription": "Mélange d'huiles légères pour nourrir et protéger la peau et les longueurs sans alourdir. Idéale pour un glow naturel et pour lisser les pointes. Testée dermatologiquement.",
    "rating": 4.6,
    "reviews": 198,
    "ingredients": ["Huile de graines (chanvre/raisins)", "Huile d’amande douce", "Vitamine E", "Parfum"],
    "skinType": ["Peaux normales à sèches", "Cheveux secs"],
    "usage": "Appliquer 2‑3 gouttes sur peau humide. Sur cheveux: répartir une petite quantité sur longueurs/pointes, ne pas rincer.",
    "inStock": true,
    "featured": true,
    "new": false
  },
  {
    "id": "10",
    "name": "alverde Tonique Capillaire Kraft & Stärke",
    "price": 70,
    "category": "skincare",
    "type": "Tonique capillaire",
    "image": image10,
    "images": [
      image10,
      "https://source.unsplash.com/800x800/?scalp,care,tonic",
      "https://source.unsplash.com/800x800/?herbal,haircare"
    ],
    "description": "Tonique sans rinçage pour cuir chevelu. Sensation de fraîcheur et de force, idéal pour cheveux fins et fatigués.",
    "fullDescription": "Formule avec caféine stimulante, extraits végétaux (romarin, ortie) et panthénol pour apaiser le cuir chevelu. Aide à tonifier la racine sans alourdir. Cosmétique naturelle certifiée, vegan.",
    "rating": 4.4,
    "reviews": 123,
    "ingredients": ["Caféine", "Extrait de romarin", "Extrait d’ortie", "Panthénol", "Glycérine"],
    "skinType": ["Cuir chevelu normal", "Cheveux fins", "Cheveux fragilisés"],
    "usage": "Appliquer en raies sur cuir chevelu propre, masser délicatement, ne pas rincer. Utilisation quotidienne ou après chaque shampooing.",
    "inStock": true,
    "featured": false,
    "new": true
  },
  {
    "id": "11",
    "name": "Balea Crème de Jour Hydratante SPF 15 (Aloe Vera 10%)",
    "price": 40,
    "category": "skincare",
    "type": "Crème de jour",
    "image": image11,
    "images": [
      image11,
      "https://source.unsplash.com/800x800/?moisturizer,aloe,cream",
      "https://source.unsplash.com/800x800/?skincare,day,cream"
    ],
    "description": "Crème de jour légère avec 10% d’aloe vera et Hydro‑Complex. Protection SPF 15. Pour peaux normales à mixtes.",
    "fullDescription": "Hydrate durablement, aide à renforcer la barrière cutanée et apporte de l’éclat au quotidien. Filtres UV pour une protection quotidienne (SPF 15). Vegan.",
    "rating": 4.5,
    "reviews": 410,
    "ingredients": ["Aloe vera (10%)", "Hydro‑Complex", "Glycérine", "Filtres UV SPF 15", "Vitamine E"],
    "skinType": ["Peaux normales", "Peaux mixtes"],
    "usage": "Appliquer chaque matin sur le visage et le cou nettoyés. Renouveler en cas d’exposition prolongée. Éviter le contour des yeux.",
    "inStock": true,
    "featured": true,
    "new": true
  },
  {
    "id": "12",
    "name": "alverde Shampoo Kraft & Stärke",
    "price": 45,
    "category": "skincare",
    "type": "Shampooings",
    "image": image12,
    "images": [
      image12,
      "https://source.unsplash.com/800x800/?shampoo,volume,natural",
      "https://source.unsplash.com/800x800/?haircare,green,botanical"
    ],
    "description": "Shampooing fortifiant sans silicones pour cheveux fins et plats. Cosmétique naturelle certifiée.",
    "fullDescription": "Avec caféine et extraits végétaux pour dynamiser la fibre et donner du volume sans alourdir. Nettoyants doux, mousse légère, vegan.",
    "rating": 4.4,
    "reviews": 267,
    "ingredients": ["Caféine", "Extraits végétaux fortifiants", "Protéines de blé", "Glycérine", "Tensioactifs doux"],
    "skinType": ["Cheveux fins", "Cheveux plats", "Tous types de cuir chevelu"],
    "usage": "Masser sur cuir chevelu et longueurs mouillés, laisser agir 1–2 minutes puis rincer.",
    "inStock": true,
    "featured": false,
    "new": false
  },
  {
    "id": "13",
    "name": "ISANA Gel Douche Lemon & Lime",
    "price": 25,
    "category": "skincare",
    "type": "Gel douche",
    "image": image13,
    "images": [
      image13,
      "https://source.unsplash.com/800x800/?lemon,lime,shower",
      "https://source.unsplash.com/800x800/?citrus,bodywash"
    ],
    "description": "Gel douche rafraîchissant au parfum citron & lime. Nettoie en douceur et laisse la peau fraîche.",
    "fullDescription": "Avec complexe de soin doux et glycérine pour préserver l’hydratation. Parfum agrumes tonique. Vegan.",
    "rating": 4.3,
    "reviews": 152,
    "ingredients": ["Agents lavants doux", "Glycérine", "Extrait d’agrumes", "Parfum"],
    "skinType": ["Tous types de peau"],
    "usage": "Faire mousser sur peau humide puis rincer. Éviter le contact avec les yeux.",
    "inStock": true,
    "featured": false,
    "new": true
  },
    {
    "id": "14",
    "name": "Balea Crème‑Douche Amande & Magnolie",
    "price": 25,
    "category": "skincare",
    "type": "Crème douche",
    "image": image29,
    "images": [
      image14,
      "https://source.unsplash.com/800x800/?almond,flower,shower",
      "https://source.unsplash.com/800x800/?magnolia,bodywash"
    ],
    "description": "Crème de douche onctueuse au parfum d’amande et de magnolia. Nettoie délicatement et laisse la peau douce.",
    "fullDescription": "Mousse crémeuse avec humectants pour aider à maintenir l’hydratation. pH cutané respecté, vegan.",
    "rating": 4.6,
    "reviews": 305,
    "ingredients": ["Agents lavants doux", "Glycérine", "Parfum amande & magnolia", "Panthénol"],
    "skinType": ["Peaux sèches", "Peaux normales"],
    "usage": "Appliquer sur peau mouillée, masser puis rincer. Convient à un usage quotidien.",
    "inStock": true,
    "featured": true,
    "new": false
  },
  
  {
    "id": "15",
    "name": "Balea Parfum Deodorant Pink Blossom 0% Aluminium",
    "price": 28,
    "category": "skincare",
    "type": "Déodorant spray",
    "image": image15,
    "images": [
      image15,
      "https://source.unsplash.com/800x800/?pink,blossom,deodorant",
      "https://source.unsplash.com/800x800/?floral,perfume"
    ],
    "description": "Déodorant parfumé Pink Blossom, 0% sels d’aluminium. Fraîcheur florale jusqu’à 24 h.",
    "fullDescription": "Notes florales et fraîches pour une sensation durable de propreté. Protection déodorante sans sels d’aluminium, vegan.",
    "rating": 4.4,
    "reviews": 189,
    "ingredients": ["Actifs déodorants sans sels d’aluminium", "Glycérine", "Parfum floral", "Propulseur"],
    "skinType": ["Tous types de peau"],
    "usage": "Agiter, vaporiser sous les aisselles et laisser sécher avant de s’habiller.",
    "inStock": true,
    "featured": false,
    "new": false
  },
  {
    "id": "16",
    "name": "alverde Gel Douche Bio‑Menthe & Bergamote",
    "price": 35,
    "category": "skincare",
    "type": "Gel douche",
    "image": image16,
    "images": [
      image16,
      "https://source.unsplash.com/800x800/?mint,bergamot,shower",
      "https://source.unsplash.com/800x800/?green,shower-gel"
    ],
    "description": "Gel douche certifié naturel à la menthe bio et bergamote bio. Sensation de fraîcheur tonique.",
    "fullDescription": "Tensioactifs doux d’origine végétale et glycérine pour nettoyer sans dessécher. Parfum herbacé tonique. Cosmétique naturelle certifiée, vegan.",
    "rating": 4.6,
    "reviews": 143,
    "ingredients": ["Agents lavants doux", "Glycérine", "Extrait de menthe bio", "Extrait de bergamote bio"],
    "skinType": ["Tous types de peau"],
    "usage": "Faire mousser sur peau humide puis rincer abondamment.",
    "inStock": true,
    "featured": false,
    "new": false
  },
  {
    "id": "17",
    "name": "Balea Beauty Collagen Retinol Serum",
    "price": 100,
    "category": "skincare",
    "type": "Sérum visage",
    "image": image17,
    "images": [
      image17,
      "https://source.unsplash.com/800x800/?retinol,serum,skincare",
      "https://source.unsplash.com/800x800/?collagen,antiaging,dropper"
    ],
    "description": "Sérum au rétinol et complexe pro‑collagène pour lisser et raffermir visiblement.",
    "fullDescription": "Rétinol encapsulé et peptides pro‑collagène pour stimuler le renouvellement cellulaire, lisser rides et améliorer la fermeté. À introduire progressivement. Vegan.",
    "rating": 4.4,
    "reviews": 321,
    "ingredients": ["Rétinol encapsulé", "Peptides pro‑collagène", "Acide hyaluronique", "Vitamine E", "Glycérine"],
    "skinType": ["Peaux matures", "Peaux ternes", "Peaux avec rides"],
    "usage": "Le soir, appliquer 2–3 gouttes sur peau sèche. Commencer 2–3 fois/semaine puis augmenter. Utiliser une protection SPF le matin. Éviter le contour des yeux.",
    "inStock": true,
    "featured": true,
    "new": true
  },
  {
    "id": "18",
    "name": "Balea Vitamin C Serum",
    "price": 100,
    "category": "skincare",
    "type": "Sérum visage",
    "image": image18,
    "images": [
      image18,
      "https://source.unsplash.com/800x800/?vitamin-c,serum",
      "https://source.unsplash.com/800x800/?orange,skincare"
    ],
    "description": "Sérum à la vitamine C pour un teint éclatant et une action antioxydante.",
    "fullDescription": "Vitamine C stabilisée pour illuminer, lisser le grain de peau et protéger du stress oxydatif. Enrichi en acide hyaluronique et panthénol pour l’hydratation. Vegan.",
    "rating": 4.5,
    "reviews": 275,
    "ingredients": ["Vitamine C stabilisée", "Acide hyaluronique", "Glycérine", "Panthénol", "Antioxydants"],
    "skinType": ["Tous types de peau", "Teint terne"],
    "usage": "Appliquer le matin sous la crème hydratante et un SPF. Peut s’utiliser le soir selon la tolérance.",
    "inStock": true,
    "featured": true,
    "new": true
  },
  {
    "id": "19",
    "name": "Balea Beauty Hyaluron Serum",
    "price": 100,
    "category": "skincare",
    "type": "Sérum visage",
    "image": image19,
    "images": [
      image19,
      "https://source.unsplash.com/800x800/?hyaluronic-acid,serum",
      "https://source.unsplash.com/800x800/?hydration,dropper"
    ],
    "description": "Sérum à l’acide hyaluronique multi‑poids pour une hydratation intense et repulpée.",
    "fullDescription": "Complexe d’acide hyaluronique à plusieurs poids moléculaires pour hydrater en surface et en profondeur, lisser immédiatement l’apparence des ridules. Vegan.",
    "rating": 4.6,
    "reviews": 398,
    "ingredients": ["Acide hyaluronique multi‑poids", "Aloe vera", "Glycérine", "Panthénol"],
    "skinType": ["Peaux déshydratées", "Tous types de peau"],
    "usage": "Appliquer matin et soir sur peau propre, puis suivre d’une crème.",
    "inStock": true,
    "featured": false,
    "new": false
  },
  {
    "id": "20",
    "name": "Balea Niacinamide Serum 10% + 1% Zinc",
    "price": 100,
    "category": "skincare",
    "type": "Sérum visage",
    "image": image20,
    "images": [
      image20,
      "https://source.unsplash.com/800x800/?niacinamide,serum",
      "https://source.unsplash.com/800x800/?zinc,skincare"
    ],
    "description": "Sérum 10% niacinamide + 1% zinc pour lisser le grain de peau et réguler la brillance.",
    "fullDescription": "Aide à réduire les imperfections et l’apparence des pores, unifie le teint et renforce la barrière cutanée. Sans parfum, vegan.",
    "rating": 4.6,
    "reviews": 512,
    "ingredients": ["Niacinamide 10%", "Zinc 1%", "Allantoïne", "Glycérine", "Humectants"],
    "skinType": ["Peaux mixtes à grasses", "Peaux à imperfections"],
    "usage": "Appliquer 2–3 gouttes sur peau propre, matin ou soir. Éviter d’associer la même routine à des acides forts.",
    "inStock": true,
    "featured": true,
    "new": false
  },
  {
    "id": "21",
    "name": "Mixa La Crème Peaux Extra‑Sèches",
    "price": 75,
    "category": "skincare",
    "type": "Crème corps",
    "image": image21,
    "images": [
      image21,
      "https://source.unsplash.com/800x800/?body,cream,jar",
      "https://source.unsplash.com/800x800/?dry,skin,care"
    ],
    "description": "Crème multi‑usage nourrissante pour peaux très sèches. Confort immédiat.",
    "fullDescription": "Enrichie en glycérine et beurres/huiles végétales pour réparer la sécheresse et protéger durablement. Idéale visage, corps et zones rugueuses. Testée sous contrôle dermatologique.",
    "rating": 4.7,
    "reviews": 642,
    "ingredients": ["Glycérine", "Beurre de karité", "Huiles végétales", "Panthénol"],
    "skinType": ["Peaux très sèches", "Peaux sensibles"],
    "usage": "Appliquer généreusement aussi souvent que nécessaire. Convient au visage et au corps.",
    "inStock": true,
    "featured": false,
    "new": false
  },
  {
    "id": "22",
    "name": "Balea Melkfett Calendula",
    "price": 40,
    "category": "skincare",
    "type": "Baume protecteur",
    "image": image22,
    "images": [
      image22,
      "https://source.unsplash.com/800x800/?calendula,balm",
      "https://source.unsplash.com/800x800/?protective,ointment"
    ],
    "description": "Baume protecteur au calendula pour peau sèche et zones exposées.",
    "fullDescription": "Forme un film protecteur contre le froid et la déshydratation. Apaise les zones rugueuses (coudes, mains, talons).",
    "rating": 4.3,
    "reviews": 115,
    "ingredients": ["Vaseline", "Extrait de calendula", "Cires/émollients"],
    "skinType": ["Peaux sèches", "Peaux exposées aux intempéries"],
    "usage": "Réchauffer une noisette entre les mains puis appliquer sur les zones sèches. Renouveler au besoin.",
    "inStock": true,
    "featured": false,
    "new": false
  },
  {
    "id": "23",
    "name": "Balea Belebende Augenpflege (Aloe 10%)",
    "price": 60,
    "category": "skincare",
    "type": "Soin yeux",
    "image": image23,
    "images": [
      image23,
      "https://source.unsplash.com/800x800/?eye,cream",
      "https://source.unsplash.com/800x800/?caffeine,skincare"
    ],
    "description": "Soin contour des yeux revitalisant sans parfum avec 10% d’aloe vera, caféine et vitamine C.",
    "fullDescription": "Hydrate, aide à décongestionner et illuminer le regard grâce à la caféine et au complexe Hydro. Texture légère, vegan.",
    "rating": 4.4,
    "reviews": 228,
    "ingredients": ["Aloe vera 10%", "Caféine", "Vitamine C", "Hydro‑Complex", "Glycérine"],
    "skinType": ["Tous types de peau", "Contour des yeux fatigué", "Peaux sensibles"],
    "usage": "Appliquer matin et/ou soir en tapotant délicatement du coin interne vers l’externe.",
    "inStock": true,
    "featured": true,
    "new": true
  },
  {
    "id": "24",
    "name": "Diadermine Essentiel BIO Crème Hydratante Jour",
    "price": 110,
    "category": "skincare",
    "type": "Crème de jour",
    "image": image24,
    "images": [
      image24,
      "https://source.unsplash.com/800x800/?organic,day-cream",
      "https://source.unsplash.com/800x800/?prebiotics,skincare"
    ],
    "description": "Crème de jour hydratante avec prébiotiques d’origine naturelle. 99% d’ingrédients d’origine naturelle.",
    "fullDescription": "Respecte et soutient l’équilibre du microbiome cutané. Texture confortable, idéale au quotidien pour une peau souple et protégée. Fabriqué en France.",
    "rating": 4.5,
    "reviews": 201,
    "ingredients": ["Prébiotiques d’origine naturelle", "Huiles végétales bio", "Aloe vera", "Glycérine", "Vitamine E"],
    "skinType": ["Peaux normales à sèches", "Peaux sensibles"],
    "usage": "Appliquer chaque matin sur visage et cou nettoyés.",
    "inStock": true,
    "featured": false,
    "new": false
  },
  {
    "id": "25",
    "name": "Balea Crème Yeux à l’Urée 10%",
    "price": 60,
    "category": "skincare",
    "type": "Soin yeux",
    "image": image25,
    "images": [
      image25,
      "https://source.unsplash.com/800x800/?urea,eye,cream",
      "https://source.unsplash.com/800x800/?sensitive,eye-care"
    ],
    "description": "Crème contour des yeux sans parfum à 10% d’urée. Idéale peaux très sèches et sensibles.",
    "fullDescription": "L’urée retient intensément l’eau pour lisser les ridules de déshydratation. Enrichie en panthénol et glycérine pour apaiser et protéger.",
    "rating": 4.4,
    "reviews": 160,
    "ingredients": ["Urée 10%", "Panthénol", "Glycérine", "Beurre de karité"],
    "skinType": ["Peaux très sèches", "Peaux sensibles"],
    "usage": "Appliquer une petite quantité matin et soir sur le contour de l’œil propre.",
    "inStock": true,
    "featured": false,
    "new": false
  },
  {
    "id": "26",
    "name": "Balea Crème Mains Glamorous Magnolia",
    "price": 30,
    "category": "skincare",
    "type": "Crème mains",
    "image": image26,
    "images": [
      image26,
      "https://source.unsplash.com/800x800/?magnolia,hand,cream",
      "https://source.unsplash.com/800x800/?hand,moisturizer"
    ],
    "description": "Crème mains nourrissante au parfum magnolia oriental. Pour mains sèches.",
    "fullDescription": "Formule riche en beurre de karité et glycérine pour hydrater et adoucir tout au long de la journée. Vegan.",
    "rating": 4.6,
    "reviews": 260,
    "ingredients": ["Beurre de karité", "Glycérine", "Huile de tournesol", "Parfum magnolia"],
    "skinType": ["Mains sèches"],
    "usage": "Appliquer aussi souvent que nécessaire, particulièrement après le lavage des mains.",
    "inStock": true,
    "featured": false,
    "new": true
  },
  {
    "id": "27",
    "name": "Balea Baume Mains & Ongles Camomille",
    "price": 25,
    "category": "skincare",
    "type": "Crème mains",
    "image": image27,
    "images": [
      image27,
      "https://source.unsplash.com/800x800/?chamomile,hand,cream",
      "https://source.unsplash.com/800x800/?hands,nails,care"
    ],
    "description": "Baume apaisant pour mains sollicitées, avec extrait naturel de camomille.",
    "fullDescription": "Soulage les tiraillements, nourrit et protège les ongles grâce à l’allantoïne et au panthénol. Vegan.",
    "rating": 4.5,
    "reviews": 310,
    "ingredients": ["Extrait de camomille", "Allantoïne", "Panthénol", "Glycérine"],
    "skinType": ["Mains sèches", "Mains sensibilisées"],
    "usage": "Masser une noisette sur mains et cuticules jusqu’à absorption.",
    "inStock": true,
    "featured": false,
    "new": false
  },
  {
    "id": "28",
    "name": "Neutrogena Deep Moisture Bodylotion Absorption Immédiate",
    "price": 6.9,
    "category": "skincare",
    "type": "Lotion corps",
    "image": image28,
    "images": [
      image28,
      "https://source.unsplash.com/800x800/?body,lotion",
      "https://source.unsplash.com/800x800/?moisturizing,body"
    ],
    "description": "Lotion corps à absorption immédiate, hydratation intense inspirée de la Formule Norvégienne.",
    "fullDescription": "Glycérine concentrée pour hydrater en profondeur sans fini gras. Confort immédiat et peau douce durablement.",
    "rating": 4.7,
    "reviews": 521,
    "ingredients": ["Glycérine", "Formule Norvégienne", "Panthénol", "Émollients"],
    "skinType": ["Peaux sèches"],
    "usage": "Appliquer quotidiennement sur tout le corps. Réappliquer sur les zones très sèches.",
    "inStock": true,
    "featured": true,
    "new": false
  },
  {
    "id": "29",
    "name": "Balea Coconut Cancun Deo‑Bodyspray 0% Aluminium",
    "price": 28,
    "category": "skincare",
    "type": "Déodorant spray",
    "image": image14,
    "images": [
      image14,
      "https://source.unsplash.com/800x800/?coconut,peach,body-spray",
      "https://source.unsplash.com/800x800/?deodorant,tropical"
    ],
    "description": "Déodorant bodyspray 0% sels d’aluminium au parfum coco‑pêche, protection 24 h.",
    "fullDescription": "Formule déodorante sans sels d’aluminium (ACH) qui aide à neutraliser les odeurs pendant 24 h sans bloquer la transpiration. Parfum estival coco‑pêche. Vegan.",
    "rating": 4.5,
    "reviews": 214,
    "ingredients": ["Actifs déodorants sans sels d’aluminium", "Glycérine", "Parfum coco & pêche", "Propulseur"],
    "skinType": ["Tous types de peau"],
    "usage": "Agiter puis vaporiser à 15 cm sur peau propre et sèche. Ne pas appliquer sur peau irritée.",
    "inStock": true,
    "featured": false,
    "new": true
  },{
"id": "30",
"name": "Neutrogena Deep Moisture Sensitive Bodylotion Sans Parfum",
"price": 65,
"category": "skincare",
"type": "Lotion corps",
"image": image30,
"images": [
image30,
"https://source.unsplash.com/800x800/?body,lotion",
"https://source.unsplash.com/800x800/?sensitive,skin"
],
"description": "Lotion corps sans parfum pour peaux sensibles. Hydratation 48 h inspirée de la Formule Norvégienne.",
"fullDescription": "Forte concentration en glycérine pour hydrater intensément et apaiser immédiatement sans film gras. Testée dermatologiquement sur peaux sensibles.",
"rating": 4.8,
"reviews": 312,
"ingredients": ["Glycérine", "Formule Norvégienne", "Panthénol", "Émollients"],
"skinType": ["Peaux sèches", "Peaux sensibles"],
"usage": "Appliquer quotidiennement sur tout le corps, idéalement après la douche. Réappliquer sur les zones très sèches.",
"inStock": true,
"featured": true,
"new": false
},
{
"id": "31",
"name": "Balea Baume After Shave Intim Sans Parfum",
"price": 40,
"category": "skincare",
"type": "Baume après-rasage intime",
"image": image31,
"images": [
image31,
"https://source.unsplash.com/800x800/?aftershave,balm",
"https://source.unsplash.com/800x800/?intimate,care"
],
"description": "Baume apaisant post‑rasage pour la zone intime, sans parfum. Aide à réduire rougeurs et irritations.",
"fullDescription": "À l’acide lactique pour soutenir le pH naturel, avec aloe vera et extrait de fleur de pêcher pour hydrater et calmer. Formule vegan, adaptée aux peaux sensibles.",
"rating": 4.6,
"reviews": 198,
"ingredients": ["Acide lactique", "Aloe vera", "Extrait de fleur de pêcher", "Glycérine"],
"skinType": ["Peaux sensibles"],
"usage": "Appliquer une fine couche sur la zone intime externe après le rasage, sur peau propre et sèche. Ne pas rincer.",
"inStock": true,
"featured": false,
"new": true
},
{
"id": "32",
"name": "Balea Vaseline Sans Parfum – Qualité Pharmacopée Européenne",
"price": 35,
"category": "skincare",
"type": "Vaseline",
"image": image32,
"images": [
image32,
"https://source.unsplash.com/800x800/?vaseline,petroleum-jelly",
"https://source.unsplash.com/800x800/?healing,skin"
],
"description": "Vaseline pure qui protège, adoucit et répare les zones très sèches.",
"fullDescription": "Qualité Pharmacopée Européenne. Crée une barrière occlusive pour retenir l’hydratation. Idéale pour lèvres, cuticules, coudes et talons. Sans parfum.",
"rating": 4.7,
"reviews": 452,
"ingredients": ["Petrolatum"],
"skinType": ["Peaux sèches", "Peaux sensibles"],
"usage": "Appliquer en petite quantité sur les zones sèches ou gercées selon le besoin. Ne pas utiliser sur plaies ouvertes.",
"inStock": true,
"featured": false,
"new": false
},
{
"id": "33",
"name": "Balea 5in1 Protection Anti‑Transpirant Spray 48h",
"price": 28,
"category": "skincare",
"type": "Déodorant anti‑transpirant",
"image": image33,
"images": [
image33,
"https://source.unsplash.com/800x800/?antiperspirant,deodorant",
"https://source.unsplash.com/800x800/?fresh,protection"
],
"description": "Anti‑transpirant 48 h, 5 bénéfices : fraîcheur, anti‑odeurs, anti‑traces blanches/jaunes, soin doux. Sans alcool (éthanol).",
"fullDescription": "Formule efficace pour réduire la transpiration et protéger des odeurs. Aide à limiter les traces blanches et jaunes sur les vêtements. Vegan.",
"rating": 4.4,
"reviews": 330,
"ingredients": ["Sels d’aluminium (ACH)", "Agents anti‑traces", "Glycérine", "Parfum"],
"skinType": ["Tous types de peau"],
"usage": "Agiter puis vaporiser à 15 cm sur peau propre et sèche. Laisser sécher avant de s’habiller. Ne pas utiliser sur peau irritée.",
"inStock": true,
"featured": false,
"new": false
},
{
"id": "34",
"name": "Balea Sweet Sunshine Déodorant Roll‑On 0% Aluminium",
"price": 20,
"category": "skincare",
"type": "Déodorant roll‑on",
"image": image34,
"images": [
image34,
"https://source.unsplash.com/800x800/?deodorant,roll-on",
"https://source.unsplash.com/800x800/?tropical,fruits"
],
"description": "Déodorant 0% sels d’aluminium au parfum de fruits tropicaux. 24 h de fraîcheur.",
"fullDescription": "Neutralise les odeurs sans bloquer la transpiration. Parfum ananas & pastèque. Vegan.",
"rating": 4.5,
"reviews": 276,
"ingredients": ["0% sels d’aluminium (ACH)", "Agents déodorants", "Glycérine", "Parfum fruits tropicaux"],
"skinType": ["Tous types de peau"],
"usage": "Appliquer sur aisselles propres et sèches. Laisser sécher. Ne pas utiliser sur peau irritée.",
"inStock": true,
"featured": true,
"new": true
},
{
    "id": "35",
    "name": "Balea Huile Démaquillante à l’Argan – Sans Parfum",
    "price": 50,
    "category": "skincare",
    "type": "Huile démaquillante",
    "image": image35,
    "images": [
      image35,
      "https://source.unsplash.com/800x800/?cleansing,oil",
      "https://source.unsplash.com/800x800/?argan,oil"
    ],
    "description": "Huile nettoyante visage qui dissout le maquillage (même waterproof) sans dessécher. Sans parfum.",
    "fullDescription": "Se transforme en lait au contact de l’eau pour rincer facilement. Enrichie en huile d’argan nourrissante pour laisser la peau souple et confortable. Idéale pour les peaux sèches. Vegan.",
    "rating": 4.7,
    "reviews": 412,
    "ingredients": ["Huile d’argan", "Émollients doux", "Tensioactifs solubles", "Vitamine E"],
    "skinType": ["Peaux sèches", "Peaux sensibles"],
    "usage": "Masser 2–3 pressions sur peau sèche (yeux inclus), émulsionner avec un peu d’eau puis rincer. Utiliser matin et/ou soir.",
    "inStock": true,
    "featured": false,
    "new": true
  },
  {
    "id": "36",
    "name": "Balea Lotion Tonique Hydratante à l’Aloé Vera",
    "price": 2.15,
    "category": "skincare",
    "type": "Lotion tonique",
    "image": image36,
    "images": [
      image36,
      "https://source.unsplash.com/800x800/?toner,aloe",
      "https://source.unsplash.com/800x800/?hydrating,toner"
    ],
    "description": "Tonique qui nettoie, clarifie et rafraîchit avec Hydro‑Complex et aloé vera.",
    "fullDescription": "Élimine les derniers résidus après le nettoyage, rééquilibre le pH et prépare la peau aux soins. Pour peaux normales et mixtes. Vegan.",
    "rating": 4.3,
    "reviews": 205,
    "ingredients": ["Aloé vera", "Glycérine", "Panthénol", "Hydro‑Complex"],
    "skinType": ["Peaux normales", "Peaux mixtes"],
    "usage": "Appliquer sur un coton et passer délicatement sur le visage nettoyé. Ne pas rincer. Éviter le contact direct avec les yeux.",
    "inStock": true,
    "featured": false,
    "new": false
  },
  {
    "id": "37",
    "name": "Balea Lotion Tonique Apaisante – Fleur d’Amandier (Sans alcool)",
    "price": 35,
    "category": "skincare",
    "type": "Lotion tonique",
    "image": image37,
    "images": [
      image37,
      "https://source.unsplash.com/800x800/?toner,soothing",
      "https://source.unsplash.com/800x800/?sensitive,skin"
    ],
    "description": "Lotion tonique douce sans alcool qui nettoie et apaise. Pour peaux sèches et sensibles.",
    "fullDescription": "À l’extrait de fleur d’amandier et à la glycérine pour apporter confort et douceur. Retire les résidus de calcaire et de nettoyant. Vegan.",
    "rating": 4.4,
    "reviews": 188,
    "ingredients": ["Extrait de fleur d’amandier", "Glycérine", "Panthénol", "Allantoïne"],
    "skinType": ["Peaux sèches", "Peaux sensibles"],
    "usage": "Après le nettoyage, appliquer sur un coton et passer sur le visage. Ne pas rincer. Utiliser matin et soir.",
    "inStock": true,
    "featured": false,
    "new": false
  },
  {
    "id": "38",
    "name": "Cien Eau Micellaire Hydratante 3‑en‑1",
    "price": 55,
    "category": "skincare",
    "type": "Eau micellaire",
    "image": image38,
    "images": [
      image38,
      "https://source.unsplash.com/800x800/?micellar,water",
      "https://source.unsplash.com/800x800/?makeup,remover"
    ],
    "description": "Nettoie, démaquille et tonifie en un seul geste. Pour visage, yeux et lèvres.",
    "fullDescription": "Formule 3‑en‑1 aux micelles nettoyantes et à la glycérine. Retire efficacement le maquillage tout en respectant l’équilibre de la peau. Convient aux peaux normales à sèches. Vegan.",
    "rating": 4.2,
    "reviews": 344,
    "ingredients": ["Micelles nettoyantes", "Glycérine", "Extrait de bleuet", "Panthénol"],
    "skinType": ["Peaux normales", "Peaux sèches"],
    "usage": "Imbiber un coton et passer sur le visage, les yeux et les lèvres. Sans rinçage.",
    "inStock": true,
    "featured": true,
    "new": false
  },
  {
    "id": "39",
    "name": "Balea Eau Micellaire Rose 3‑en‑1 – Sans Parfum",
    "price": 40,
    "category": "skincare",
    "type": "Eau micellaire",
    "image": image39,
    "images": [
      image39,
      "https://source.unsplash.com/800x800/?micellar,rose",
      "https://source.unsplash.com/800x800/?rose,water"
    ],
    "description": "Nettoie et démaquille en douceur. Sans parfum ni alcool. Pour peaux sèches et sensibles.",
    "fullDescription": "Micelles + eau de rose pour enlever le maquillage du visage, des yeux et des lèvres. Calme et hydrate légèrement la peau. Vegan.",
    "rating": 4.6,
    "reviews": 510,
    "ingredients": ["Micelles nettoyantes", "Eau de rose", "Glycérine", "Panthénol"],
    "skinType": ["Peaux sèches", "Peaux sensibles"],
    "usage": "Appliquer sur un coton et passer sur le visage, les yeux et les lèvres. Sans rinçage.",
    "inStock": true,
    "featured": true,
    "new": true
  },
  {
    "id": "40",
    "name": "Balea Eau Micellaire Figue de Barbarie 3‑en‑1",
    "price": 40,
    "category": "skincare",
    "type": "Eau micellaire",
    "image": image40,
    "images": [
      image40,
      "https://source.unsplash.com/800x800/?micellar,cactus",
      "https://source.unsplash.com/800x800/?prickly,pear"
    ],
    "description": "Nettoyage micellaire frais pour peaux mixtes et sensibles. Sans parfum et sans alcool.",
    "fullDescription": "Élimine maquillage et impuretés tout en respectant la barrière cutanée. L’extrait de figue de barbarie aide à hydrater et à apaiser. Vegan.",
    "rating": 4.5,
    "reviews": 298,
    "ingredients": ["Micelles nettoyantes", "Extrait de figue de barbarie", "Glycérine", "Panthénol"],
    "skinType": ["Peaux mixtes", "Peaux sensibles"],
    "usage": "Imbiber un coton et passer sur le visage, les yeux et les lèvres. Sans rinçage.",
    "inStock": true,
    "featured": false,
    "new": false
  },
  {
    "id": "41",
    "name": "Balea Disques Démaquillants Yeux Micellaires – Sans Huile",
    "price": 30,
    "category": "skincare",
    "type": "Disques démaquillants",
    "image": image41,
    "images": [
      image41,
      "https://source.unsplash.com/800x800/?makeup,remover,pads",
      "https://source.unsplash.com/800x800/?eye,makeup,remover"
    ],
    "description": "Pads micellaires pour les yeux, retirent le maquillage hydrosoluble. Sans parfum et sans huile.",
    "fullDescription": "Idéal pour les yeux sensibles et porteurs de lentilles. Laisse une sensation fraîche sans film gras. Vegan.",
    "rating": 4.1,
    "reviews": 220,
    "ingredients": ["Micelles nettoyantes", "Aloé vera", "Glycérine", "Agents adoucissants"],
    "skinType": ["Tous types de peau", "Yeux sensibles"],
    "usage": "Poser un disque sur la paupière fermée, laisser agir quelques secondes puis essuyer délicatement. Répéter si nécessaire. Sans rinçage.",
    "inStock": true,
    "featured": false,
    "new": false
  },
  {
    "id": "42",
    "name": "Clearasil Tampons Nettoyants Pores",
    "price": 80,
    "category": "skincare",
    "type": "Tampons nettoyants",
    "image": image42,
    "images": [
      image42,
      "https://source.unsplash.com/800x800/?cleansing,pads,acne",
      "https://source.unsplash.com/800x800/?acne,skincare"
    ],
    "description": "Tampons imprégnés à l’acide salicylique pour désobstruer les pores et réduire les imperfections.",
    "fullDescription": "Action rapide: peau visiblement plus nette en 4 h. Exfolient en douceur pour éliminer l’excès de sébum et les cellules mortes. Testé dermatologiquement.",
    "rating": 4.0,
    "reviews": 377,
    "ingredients": ["Acide salicylique (BHA)", "Agents exfoliants", "Glycérine", "Agents apaisants"],
    "skinType": ["Peaux grasses", "Peaux à imperfections"],
    "usage": "Passer délicatement un tampon sur le visage propre matin et/ou soir. Sans rinçage. Réduire la fréquence en cas de sécheresse ou d’irritation.",
    "inStock": true,
    "featured": true,
    "new": false
  },
  {
    "id": "43",
    "name": "Balea Maximum Protection Anti‑Transpirant 96 h",
    "price": 60,
    "category": "skincare",
    "type": "Déodorant anti‑transpirant stick",
    "image": image43,
    "images": [
      image43,
      "https://source.unsplash.com/800x800/?antiperspirant,stick",
      "https://source.unsplash.com/800x800/?deodorant,protection"
    ],
    "description": "Protection longue durée jusqu’à 96 h contre la transpiration et les odeurs. Sans alcool (éthanol).",
    "fullDescription": "Formule cliniquement prouvée à base de sels d’aluminium pour une protection maximale tout en douceur. Idéal en cas de transpiration intense. Vegan.",
    "rating": 4.6,
    "reviews": 450,
    "ingredients": ["Sels d’aluminium", "Agents hydratants", "Glycérine", "Parfum"],
    "skinType": ["Tous types de peau"],
    "usage": "Appliquer une fine couche sur peau propre et sèche, de préférence le soir. Laisser sécher avant de s’habiller. Ne pas utiliser sur peau irritée.",
    "inStock": true,
    "featured": false,
    "new": true
  },
  {
  "id": "44",
  "name": "Contour Palette Professional",
  "price": 40,
  "category": "makeup",
  "type": "Palette de contouring",
  "image": image44,
  "images": [
    image44,
    "https://source.unsplash.com/800x800/?contour,palette",
    "https://source.unsplash.com/800x800/?makeup,contouring"
  ],
  "description": "Palette de contouring professionnelle avec 16 teintes pour sculpter et illuminer le visage.",
  "fullDescription": "Une palette complète avec 8 teintes de contour et 8 teintes d'illuminateur. Formule crémeuse et modulable qui se fond parfaitement dans la peau. Des nuances allant du clair au foncé pour s'adapter à toutes les carnations. Facile à estomper pour un résultat naturel et professionnel.",
  "rating": 4.7,
  "reviews": 523,
  "ingredients": ["Talc", "Mica", "Vitamines E", "Huiles naturelles", "Pigments minéraux"],
  "skinType": ["Tous types de peau"],
  "usage": "Appliquer les teintes foncées sur les zones à creuser (creux des joues, côtés du nez, tempes) et les teintes claires sur les zones à illuminer (haut des pommettes, arête du nez, arcade sourcilière). Estomper soigneusement.",
  "inStock": true,
  "featured": true,
  "new": false
},
{
  "id": "45",
  "name": "Maybelline Fit Me Foundation SPF18",
  "price": 100,
  "category": "makeup",
  "type": "Fond de teint",
  "image": image45,
  "images": [
    image45,
    "https://source.unsplash.com/800x800/?foundation,maybelline",
    "https://source.unsplash.com/800x800/?liquid,foundation"
  ],
  "description": "Fond de teint lumineux et lissant avec SPF18 pour une peau éclatante et protégée toute la journée.",
  "fullDescription": "Formule légère à moyenne couvrance qui unifie le teint et masque les imperfections. Protection solaire SPF18 intégrée. Fini lumineux naturel qui ne dessèche pas la peau. Convient aux peaux normales à sèches. Teinte 115 adaptée aux carnations moyennes à dorées.",
  "rating": 4.5,
  "reviews": 892,
  "ingredients": ["SPF18", "Pigments minéraux", "Glycérine", "Vitamines", "Agents hydratants"],
  "skinType": ["Peaux normales", "Peaux sèches"],
  "usage": "Appliquer quelques gouttes sur le visage propre et hydraté. Estomper du centre vers l'extérieur avec un pinceau, une éponge ou les doigts. Peut être superposé pour plus de couvrance.",
  "inStock": true,
  "featured": true,
  "new": true
},
{
  "id": "46",
  "name": "Velvet Matte Lipstick - Romantic Matte",
  "price": 10,
  "category": "makeup",
  "type": "Rouge à lèvres mat",
  "image": image46,
  images: [
  image46,
    "https://source.unsplash.com/800x800/?lipstick,matte",
    "https://source.unsplash.com/800x800/?nude,lipstick"
  ],
  "description": "Rouge à lèvres mat velouté pour un effet classique et sophistiqué. Teinte nude rosée universelle.",
  "fullDescription": "Formule crémeuse ultra-pigmentée qui glisse sur les lèvres pour un fini mat velouté. Tenue longue durée sans dessécher. Teinte nude rosée parfaite pour un look naturel et élégant au quotidien. Ne migre pas et ne s'estompe pas.",
  "rating": 4.3,
  "reviews": 634,
  "ingredients": ["Pigments haute intensité", "Huiles nourrissantes", "Cires végétales", "Vitamine E"],
  "skinType": ["Tous types de lèvres"],
  "usage": "Appliquer directement sur les lèvres en partant du centre vers les commissures. Pour plus de précision, utiliser un crayon contour des lèvres de teinte similaire.",
  "inStock": true,
  "featured": false,
  "new": false
},
{
  "id": "47",
  "name": "Riveel Nail Polish",
  "price": 40,
  "category": "makeup",
  "type": "Vernis à ongles",
  "image": image47,
  "images": [
    image47,
    "https://source.unsplash.com/800x800/?nail,polish",
    "https://source.unsplash.com/800x800/?manicure,bronze"
  ],
  "description": "Vernis à ongles haute brillance, teinte bronze métallique. Séchage rapide et tenue longue durée.",
  "fullDescription": "Formule enrichie pour une application lisse et uniforme dès la première couche. Teinte bronze cuivrée sophistiquée avec reflets métalliques. Pinceau ergonomique pour une application précise. Tenue jusqu'à 7 jours sans écaillage. Volume : 10ml (0.35fl.oz).",
  "rating": 4.4,
  "reviews": 312,
  "ingredients": ["Résines polymères", "Pigments métalliques", "Plastifiants", "Solvants"],
  "skinType": ["Tous types d'ongles"],
  "usage": "Appliquer une base protectrice, puis 1 à 2 couches de vernis en laissant sécher entre chaque couche. Terminer avec un top coat pour prolonger la tenue et intensifier la brillance.",
  "inStock": true,
  "featured": false,
  "new": false
},
{
  "id": "48",
  "name": "BBrose Brow Breakdown Gel",
  "price": 30,
  "category": "makeup",
  "type": "Gel pour sourcils",
  "image": image48,
  images: [
    "image48",
    "https://source.unsplash.com/800x800/?brow,gel",
    "https://source.unsplash.com/800x800/?eyebrow,makeup"
  ],
  "description": "Gel transparent pour sourcils qui fixe, discipline et structure pour un effet naturel toute la journée.",
  "fullDescription": "Formule gel transparente légère qui maintient les sourcils en place sans effet cartonné. Texture non collante qui sèche rapidement. Enrichie en agents conditionneurs pour nourrir les poils. Brosse précise pour une application facile et un résultat impeccable. Convient à toutes les couleurs de sourcils.",
  "rating": 4.6,
  "reviews": 445,
  "ingredients": ["Polymères fixateurs", "Glycérine", "Agents conditionneurs", "Panthénol"],
  "skinType": ["Tous types de sourcils"],
  "usage": "Brosser les sourcils vers le haut et légèrement vers l'extérieur avec la brosse applicatrice. Laisser sécher quelques secondes. Peut être utilisé seul ou après un crayon/poudre à sourcils.",
  "inStock": true,
  "featured": true,
  "new": true
}

]