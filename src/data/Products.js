'use client';


const Products = [
    // {
    //     id:1,
    //     title: 'Superman',
    //     price:856,
    //     description:'' ,
    //     imageUrl: "https://i.postimg.cc/bNH8QgRb/img30.png",
    //     category:'Poster'
    // },
    // {
    //     id:2,
    //     title: 'SuperClark',
    //     price:756,
    //     description:'' ,
    //     imageUrl: "https://i.postimg.cc/X704Gm94/img44.png",
    //     category:'Poster'
    // },
    // {
    //     id:3,
    //     title: 'SuperKalel',
    //     price:656,
    //     description:'' ,
    //     imageUrl: "https://i.postimg.cc/76fY9zL4/img42.png",
    //     category:'Poster'
    // },
    // {
    //     id:4,
    //     title: 'KENT',
    //     price:256,
    //     description:'' ,
    //     imageUrl: "https://i.postimg.cc/4xfGwc80/img32.png",
    //     category:'Image'
    // },
    // {
    //     id:5,
    //     title: 'CLARK',
    //     price:156,
    //     description:'' ,
    //     imageUrl: "https://i.postimg.cc/PrNNyBPZ/img35.png",
    //     category:'Image'
    // },
    // {
    //     id:6,
    //     title: 'KALEL',
    //     price:456,
    //     description:'' ,
    //     imageUrl: "https://i.postimg.cc/0jkK9jkH/img34.png",
    //     category:'Image'
    // },
    // {
    //     id:7,
    //     title: 'Super',
    //     price:356,
    //     description:'' ,
    //     imageUrl: "https://i.postimg.cc/0jkK9jkH/img34.png",
    //     category:'Logo'
    // },
    // {
    //     id:8,
    //     title: 'Marque',
    //     price:500,
    //     description:'' ,
    //     imageUrl: "https://i.postimg.cc/brrY6tN8/img33.png",
    //     category:'Logo'
    // },
    // {
    //     id:9,
    //     title: 'Insigne',
    //     price:500,
    //     description:'' ,
    //     imageUrl: "https://i.postimg.cc/28p8dVNp/img45.png",
    //     category:'Logo'
    // },
    {  id: "1",
       title: "SAC A DOS",
      imageUrl: "https://i.postimg.cc/k5nfDnkT/article-1.png",
      Category: "SAC",
      "Univers": "The Batman",
       Price: "25",
      "Nombre": "10",
      "Taille": null,
      "Description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", "Matériaux": null, "Couleur": null, "Poids": null, "Capacité": null },
    {  id: "2",
      title: "POSTER BATMAN (2022)",
      imageUrl: "https://i.postimg.cc/mg40NWvH/article-2.png", 
      Category: "POSTER", 
      "Univers": "The Batman", 
      Price:"32", 
      "Nombre": "5", 
      "Taille": null,
      "Description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", "Matériaux": null, "Couleur": null, "Poids": null, "Capacité": null },
    { id: "3", 
      title: "SWEAT \"WHY SO SERIOUS\"", 
      imageUrl: "https://i.postimg.cc/qRFLm2gF/article-3.png", 
      Category: "SWEAT", 
      "Univers": "The Batman", 
      Price: "32", 
      "Nombre": "3",
      "Taille": "M", 
      "Description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", "Matériaux": null, "Couleur": "NOIR", "Poids": null, "Capacité": null },
    { id: "4", 
      title: "HORLOGE", 
      imageUrl: "https://i.postimg.cc/0jJChrwy/article-4.png", 
      Category: "Équipement", 
      "Univers": "Batman V Superman", 
      Price: "8", 
      "Nombre": "5", 
      "Taille": null, 
      "Description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", "Matériaux": null, "Couleur": null, "Poids": null, "Capacité": null },
    { id: "5", 
      title: "MUG", 
      imageUrl: "https://i.postimg.cc/LhKVSRtB/article-5.png", 
      Category: "Équipement ", 
      "Univers": "Batman V Superman", 
      Price: "15", 
      "Nombre": "3", 
      "Taille": null, 
      "Description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", "Matériaux": null, "Couleur": null, "Poids": null, "Capacité": null },
    { id: "6", 
      title: "MUG DE VOYAGE", 
      imageUrl: "https://i.postimg.cc/rmsjCfyW/article-6.png", 
      Category: "Équipement ", 
      "Univers": "Batman et Robin", 
      Price: "25", 
      "Nombre": "5", 
      "Taille": null, 
      "Description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", "Matériaux": null, "Couleur": "BLEU ", "Poids": null, "Capacité": null },
    { id: "7", 
      title: "SWEAT \"WHY SO SERIOUS\"", 
      imageUrl: "https://i.postimg.cc/BZrWbKNN/article-7.png", 
      Category: "Vêtements ", 
      "Univers": "Batman et Robin", 
      Price: "32", 
      "Nombre": "4", 
      "Taille": "XL", 
      "Description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.", "Matériaux": null, "Couleur": "NOIR", "Poids": null, "Capacité": null },
    { id: "8", 
      title: "T-SHIRT BATMOBILE", 
      imageUrl: "https://i.postimg.cc/BQHrKnV3/article-8.png", 
      Category: "Vêtements ", 
      "Univers": "Autres (comics, dessins animés)", 
      Price: "25", 
      "Nombre": "3", 
      "Taille": "M", 
      "Description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", "Matériaux": null, "Couleur": null, "Poids": null, "Capacité": null },
    { id: "9", 
      title: "HORLOGE TOURNANTE", 
      imageUrl: "https://i.postimg.cc/LsCwpYnt/article-9.png", 
      Category: "Équipement ", 
      "Univers": "The Dark Night Rises", 
      Price: "8", 
      "Nombre": "5", 
      "Taille": null, 
      "Description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.", "Matériaux": null, "Couleur": null, "Poids": null, "Capacité": null },
    { id: "10", 
      title: "SWEAT \"WHY SO SERIOUS\"", 
      imageUrl: "https://i.postimg.cc/XJtPrRKX/article-10.png", 
      Category: "Vêtements ", 
      "Univers": "The Dark Night Rises", 
      Price: "32", 
      "Nombre": "4", 
      "Taille": "M", 
      "Description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", "Matériaux": null, "Couleur": "BLANC", "Poids": null, "Capacité": null },
    { id: "11", 
      title: "SWEAT \"WHY SO SERIOUS\"", 
      imageUrl: "https://i.postimg.cc/gjRT8g4s/article-11.png", 
      Category: "Vêtements ", 
      "Univers": "", 
      Price: "32", 
      "Nombre": "5", 
      "Taille": "XL", 
      "Description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.", "Matériaux": null, "Couleur": "ROUGE", "Poids": null, "Capacité": null },
    { id: "12", 
      title: "MUG DE VOYAGE", 
      imageUrl: "https://i.postimg.cc/wBTZZcTx/article-12.png", 
      Category: "Équipement ", 
      "Univers": "", 
      Price: "8", 
      "Nombre": "3", 
      "Taille": null, 
      "Description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.", "Matériaux": null, "Couleur": "NOIR", "Poids": null, "Capacité": null },
    { id:"13",
      title:"MUG DE VOYAGE",
      imageUrl:"https://i.postimg.cc/mDPq2LH0/article-13.png",
      Category:"Équipement ",
     "Univers":"",
     Price:"8",
     "Nombre":"2",
     "Taille":null,
     "Description":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.","Matériaux":null,"Couleur":"BLANC","Poids":null,"Capacité":null}
    

]

export default Products;