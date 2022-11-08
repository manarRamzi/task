var vedio =[
    {img:"Assets/Users/8.png",
    title:"مصمم جرافيكي",
    name:"سميه عمران عبدالله ",
    description:[
        "خبره خمسة سنوات ",
        "شهادة جامعيه بنفس التخصص",
        " امكانية العمل عن بعد",
        "معرض اعمال خاص"
    ]
    },
    {img:"Assets/Users/2.png",
    title:" تعديل الفديوهات",
    name:"  محمد احمد سمير ",
    description:[
        "خبره خمسة سنوات ",
        "شهادة جامعيه بنفس التخصص",
        " امكانية العمل عن بعد",
        "معرض اعمال خاص"
    ]
    },
    {img:"Assets/Users/4.png",
    title:" موشن جرافيك",
    name:"  عبدالله مصعب حسن ",
    description:[
        "خبره خمسة سنوات ",
        "شهادة جامعيه بنفس التخصص",
        " امكانية العمل عن بعد",
        "معرض اعمال خاص"
    ]
    },
    {img:"Assets/Users/6.png",
    title:"  تصميم واجهات المستخدم",
    name:"    جوليا محمد العكيلي ",
    description:[
        "خبره خمسة سنوات ",
        "شهادة جامعيه بنفس التخصص",
        " امكانية العمل عن بعد",
        "معرض اعمال خاص"
    ]
    }

]
var photo =[
    {img:"Assets/Users/3.png",
    title:" تصوير المنتجات",
    name:"  سعديه محسم معبلو ",
    description:[
        "خبره خمسة سنوات ",
        "شهادة جامعيه بنفس التخصص",
        " امكانية العمل عن بعد",
        "معرض اعمال خاص"
    ]
    },
    {img:"Assets/Users/1.png",
    title:"  التصوير الفوتوغرافي",
    name:"    جوليا سمير غانم ",
    description:[
        "خبره خمسة سنوات ",
        "شهادة جامعيه بنفس التخصص",
        " امكانية العمل عن بعد",
        "معرض اعمال خاص"
    ]
    },
    {img:"Assets/Users/5.png",
    title:"  تصحيح الالوان",
    name:"    ربورت كاظم الجبالي ",
    description:[
        "خبره خمسة سنوات ",
        "شهادة جامعيه بنفس التخصص",
        " امكانية العمل عن بعد",
        "معرض اعمال خاص"
    ]
    },
    {img:"Assets/Users/7.png",
    title:"  صناعه الافلام ",
    name:"    سحر محمد العبيدي ",
    description:[
        "خبره خمسة سنوات ",
        "شهادة جامعيه بنفس التخصص",
        " امكانية العمل عن بعد",
        "معرض اعمال خاص"
    ]
    }

]
vedio.forEach((x, index, arr)=>{
   
var description = x.description
description.forEach((y, index, arr)=>{
    return(`<il><p> <span class="right_icon mr-2"> &#x2713;</span> <span class="mx-2"> ${y}</span></p></il>`)
})
    return $('#vedio').append(`<div class="card my-5 " style="width: 16.5rem;"><img src=${x.img} class="card-img-top" alt="...">
     <div class="card-body">  <h5 class="card-title fs-4"> ${x.title} </h5> <p class="card-text"> ${x.name}  (4.5  <span class="star">&#9733;</span>)</p>  <ul class="exp text-nowrap">  <il >
    <p>
      <span class="right_icon mr-2"> &#x2713;</span> <span class="mx-2">  ${x.description[0]}   </span>
    </p>
  </il>
  <il>
  <p>
    <span class="right_icon mr-2"> &#x2713;</span> <span class="mx-2"> ${x.description[1]}  </span>
  </p>
</il>
<il>
<p>
  <span class="right_icon mr-2"> &#x2713;</span> <span class="mx-2"> ${x.description[2]}  </span>
</p>
</il>
<il>
<p>
  <span class="right_icon mr-2"> &#x2713;</span> <span class="mx-2"> ${x.description[3]}  </span>
</p>
</il>
</ul></div>  </div>`);    
})

photo.forEach((x, index, arr)=>{
var description = x.description
 description.forEach((y, index, arr)=>{
    return(`<il><p> <span class="right_icon mr-2"> &#x2713;</span> <span class="mx-2"> ${y}</span></p></il>`)
})
    return $('#photo').append(`<div class="card my-5 " style="width: 16.5rem;"><img src=${x.img} class="card-img-top" alt="...">
     <div class="card-body">  <h5 class="card-title fs-4"> ${x.title} </h5> <p class="card-text"> ${x.name}  (4.5  <span class="star">&#9733;</span>)</p>  <ul class="exp text-nowrap">  <il >
    <p>
      <span class="right_icon mr-2"> &#x2713;</span> <span class="mx-2">  ${x.description[0]}   </span>
    </p>
  </il>
  <il>
  <p>
    <span class="right_icon mr-2"> &#x2713;</span> <span class="mx-2"> ${x.description[1]}  </span>
  </p>
</il>
<il>
<p>
  <span class="right_icon mr-2"> &#x2713;</span> <span class="mx-2"> ${x.description[2]}  </span>
</p>
</il>
<il>
<p>
  <span class="right_icon mr-2"> &#x2713;</span> <span class="mx-2"> ${x.description[3]}  </span>
</p>
</il>
</ul></div>  </div>`);    
})